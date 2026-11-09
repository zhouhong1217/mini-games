# 《植物大战僵尸》恢复记录

来源：<https://www.4399.com/flash/18012.htm>，页面实际使用 `https://s4.4399.com/4399swf/upload_swf/ftp/20090929/1/game1.htm`，其主程序为 `pvz_9_15.swf`。本地分析目录：`/Users/a/Documents/REA/output/4399_18012_2026-11-09/`。

本项目运行原站 PopCap Flash 0.9 演示版，通过本地 Ruffle 0.7.1 适配现代浏览器。未重写塔防规则。原始 ActionScript/Flex 工程的恢复状态为 `Unknown`；反编译导出与清理补丁不等于完整原工程。

## 分析证据

- REA 原站场景 `ev_82984b67da0cdb3e5d5d3331ac55e54efa554fe0748f304a1e7bc5406ed4210b`：空白 Chrome 加载原站，发现 `game1.htm`，随后页面显示 Flash 不可用提示。该观察没有实际运行原版战斗。
- REA 入口脚本静态父记录 `ev_f47cde781a2eb297349a4ec01f8a0839b5542b80eb772652845b0b71e5f52599`：分析从原文档提取的 `entry.js`，范围限于加载外壳。AS3 逻辑不是由此记录恢复。
- REA 本地场景 `ev_70b5001fcdfcf148de3633f6f4555b63baf30f238c2f95cf78e9bcb8a380368e`：点击本地外壳开始按钮并等待加载，三个步骤完成、无页面异常。此记录不单独证明首关通关。
- 完整 REA 记录在本机 `evidence/rea-bundle.json`。原包来源、字节数与 SHA-256 在 `original/*manifest.json`；发布输入与清理版哈希记录在 [文件清单](plants-vs-zombies.json)。
- JPEXS 26.4.0 从主程序导出 203 个 AS3 脚本，从素材包导出 898 个脚本。静态审计详见本机 `evidence/swf-audit.md`；全部导出、搜索边界与日志保留在分析目录。

## 适配与清理

主 SWF：原版 460502 bytes，SHA-256 `160385a3297c277b8a2076f9af46474435c9f122050062647a8e7c420dcdf1be`；清理版 455775 bytes，SHA-256 `70f285932b3acd48068d6de0eed2160c0e92988c57ff6f2dde260940347157ea`。

内嵌 MSN SDK 实现替换为独立 `LocalPlatformAPI`，保留原游戏调用签名与默认同步、零参数、单次继续回调；删除原 SDK 桥接、广播、计时与远程提交逻辑。四个 UI 类删除购买 URL、跳转和未使用的 URLRequest，隐藏并禁用购买按钮。站点广告加载器、统计和域名检查脚本未进入发布目录。`data.xml` 不再含 `MSN`、`upsell` 或作弊键绑定。

重编译后执行 ABC 清理，再复导出对比：203 个脚本中 197 个字节一致；差异仅独立适配类、PVZApp 的类型名/存档 ID，以及四个推广 UI。复导出源码和解压主 SWF 检查未发现 `MSNAdAPI`、`ExternalInterface`、`navigateToURL`、原广播与代理标识。原始素材包保持字节不变，其导出的 898 个脚本未发现这些 SDK 实现。保留 Adobe 命名空间 URI；静态检查不证明任意未执行路径的全程序行为等价。

`resources.swf`、文案和十首音乐从主程序的实际相对引用取得，保持原字节。封面使用介绍页的原始图片。Ruffle 的 JS/WASM 与许可证一并本地托管，无 CDN 依赖。原游戏、美术、音乐的版权归原权利人；Ruffle 随附 Apache/MIT 许可证。

外壳提供中英文、开始按钮、失败重试、全屏和返回首页。游戏内保留原版英文；外壳切换语言不会重启游戏。首次加载约 29 MB；发布目录包含两种 Ruffle WASM 构建，共约 43 MB，浏览器按能力选择其一。

存档使用独立 APP_ID `plants-vs-zombies-4399-v1`，按站点来源及 SWF 路径保存。原版保存关卡、模式解锁与声音偏好，未实现跨设备同步或半局战场恢复。不要把本地服务器和 Pages 当作同一存档来源。

## 验证与边界

已通过真实鼠标首关种植、阳光收集、战斗、向日葵奖励、第二关加载和刷新恢复。验收只读取屏幕与 SOL，不写入游戏内存或存档。另以 Chrome 触屏模拟完成首株种植，截图显示阳光从 150 扣至 50；不是实体手机验收。

中英文外壳切换保持当前游戏，严格 `/mini-games/` 子路径、首页 8 张卡片/封面、全屏、390px 窄屏、SWF 下载失败及恢复重试通过验证。外壳通过 `loadeddata` 确认 SWF 就绪，启动前检查主文件 HTTP 状态。测试期间阻断全部外部 HTTP(S) 请求，页面异常、非预期失败响应、外部请求均为零。完整运行报告在本机 `.verification/pvz-local/`；线上验收记录在 `.verification/pvz-live/`。

重建脚本已核验所有原始/运行库文件，生成 SWF 与清理版哈希一致；静态清理记录为本机 `evidence/swf-cleanup-verification.json`。

该 Flash 演示版在第 14 关相关逻辑中存在演示结束与模式解锁流程。未逐一完成所有关卡，完整可通关数量、所有模式、实体手机、Safari/Firefox 兼容性与实际扬声器声音效果均为 `Unknown`。不采用 4399 介绍中的 49 种植物来描述本构建的实际内容。

重建及验收命令见 [恢复工具](../tools/plants-vs-zombies/README.md)。

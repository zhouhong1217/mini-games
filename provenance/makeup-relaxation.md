# 化妆解压模拟恢复记录

已恢复为独立静态网页并通过本地验收：一位人物完成护理、化妆、结算与照片保存；15 位人物分别进入护理并触发工具。中文外壳已接入小游戏乐园，Pages 发布状态见末表。没有恢复 Cocos 编辑器源工程。

## 来源与原始文件

- 游戏介绍页：[化妆解压模拟](https://www.4399.com/flash/255576.htm)；试玩页：[255576_2.htm](https://www.4399.com/flash/255576_2.htm)。获取日期为 2026-11-08。
- 实际发布包基址：<https://szhong.4399.com/4399swf/upload_swf/ftp52/huangcijin/20251021/03/>，下载请求的 Referer 为上述试玩页。该路径中的日期和个人目录名仅是原站 URL 的组成部分，不用于推断作者或授权。
- 发布设置 `src/settings.f7d4d.json` 声明 `CocosEngine: 3.8.6`、`web-mobile`、720×1280 竖屏；四个 bundle 为 `internal@be265`、`resources@d7038`、`main@e576d`、`Face@b21d5`。
- 完整本地原包保留在 `/Users/a/Documents/REA/output/4399_255576_2026-11-08/artifacts/`。仓库只提交一次可运行的 `site/` 分发内容，不重复加入这份原包。
- [精简证据清单](makeup-relaxation.json) 固定全部 **2,061 文件、67,562,155 bytes** 的原始路径、大小和 SHA-256，以及获取方式、资源闭包、失败候选和 REA 摘要。`acquisition-validation.json` 的初次复核时间为 `2026-11-08T10:23:47.550418+00:00`，错误数组为空。

四份 bundle 清单声明的 1,273 个 import 文件和 752 个 native 逻辑资源均已获取。图集 `159c62c67` 的 `.astc`、`.pkm`、`.pvr` 返回 404，但 `.png` 可用；不存在完全缺少可用变体的 native 逻辑资源。HTML 注释中的 `.png` 示例及已打包的 SystemJS 模块不属于文件系统依赖，相应七项失败探测单独记录，不混入必需资源缺口。

原始目录完整保留；重建前逐文件核验，补丁只写生成目录。获取完整性证明的是字节和清单闭包，不能替代动态加载和玩法验收。

## REA 分析证据

使用 `reverse-engineer-anything` 技能和 REA 分析发布包；原始 `rea-session.json` 保留在本机恢复目录的 `evidence/`，约 73 MB，不进入仓库。精简证据同时记录该原文件的 SHA-256，以便和本地保留记录核对。

| REA 记录 | 已建立的事实与边界 |
| --- | --- |
| `ev_6bc54abe67359c3a122210adb6dd049e1ac5482aa6b794df7a52b81c5304684f` | 原站试玩页的受控浏览器捕获；不是完整游玩证明 |
| `ev_84b0657e564ac755b93adbb133182a026ca6dd35bebd40d08472d8ed9ccb1e7c` | 第二次原站捕获及页面 DOM；原站试玩受到登录弹窗阻挡 |
| `ev_91db397fd634a18e477e7a128af1c96fd0268adf39dc288f4165ba1d9c981111` | 选择入口 HTML、启动脚本、main 和 Face 脚本作静态分析；未执行 bootstrap |
| `ev_ea0004469ffbaa20e5127e1ba94fcbb52217e4b3d9ff913ed95f69ffe54a3967` | 上述静态分析的保留视图，明确保留 `partial` 覆盖与 Unknown |

REA 静态快照早于最终资源获取：当时相关目录文件数为 634，选定五个路径，解析四个 JavaScript 文件，629 个文件未作语义分析，HTML 的一段内联脚本未分析。应用图和语义图均为 `partial`；语义图存在数量上限和截断。其目录快照哈希不代表最终 2,061 文件集合。最终集合由独立获取清单逐项固定，不能把静态推导或清单存在当成运行成功。

后续直接读取原包确认：代码声明 15 位人物、随机组合的护理流程、14 类自动化妆、11 类 DIY、结算与相册。人物定义存在不等于全部人物核心流程已完成，实际覆盖见下表。

## 静态托管与资源兼容

- 直接启动原 `gameIndex.html` 内的 Cocos 游戏，外壳位于 `games/makeup-relaxation/`，内层位于 `game/`；资源使用相对路径，保留原画面、音频、资源和玩法组件。
- 原入口加载的 `h.api.4399.com` 平台脚本替换为本地 `local-runtime.js`；首场景跳过宿主登录/平台初始化，进入原 Face 场景。
- 保留发布包 `cconb.ts` 的 `._cconb.dbbin` 路径转换及对应二进制文件。保留三份 WASM 和引擎胶水，字体按原 native 文件名及目录规则收集；这些文件不转换为文本或伪造占位资源。
- 图集 `assets/resources/import/15/159c62c67.961a2.json` 中的 `7@96_6@72_0_5@85` 改为 `0`，避免运行设备优先请求原站已缺失的 GPU 格式，使用同图集已获取的 PNG。
- `application.123ac.js` 接入引擎就绪通知；外壳接收真实的 `progress/ready/error`，提供开始、加载失败重试、全屏及返回主页。游戏、外壳和英文首页卡片回退目前均使用中文。

## 广告、推广和统计清理

构建器按已知根组件及依赖重建 SystemJS 注册表。原 main 的 108 个注册模块中保留 29 个依赖模块并重建 main 聚合入口，剔除 78 个模块，包含广告管理器、4399 及其他平台适配器、推广按钮、GxEngine/GxSDK、TDSDK/tdanalytics 和 `pfbad`。完整移除名单由构建生成的 `local-patches.json` 记录。

玩法模块中的 `window.AD`/`window.ovad`、插屏及广告统计调用被删除；原 `showVideo(callback, ...)` 改为调用成功回调，使解锁、领取和继续按钮执行原有后续流程。选人确认采用直接解锁所选人物再进入原聊天流程，初始 `unlock:["01"]` 数据保持原版，没有预解锁全部人物。视频标记赋值改为关闭；运行时也隐藏场景残留的 `video`、`shipin`、`视频`、`gxNode`。

原菜单 prefab pack 的 `35306SR25xO9pOH6ivIPrxM` 广告组件类声明替换为无行为的 `cc.Component`，保留序列化属性和索引布局，避免移除脚本后出现缺失类。图集和该 prefab 的补丁均记录原始及生成后的 SHA-256。未加入广告替代服务、后端接口或新的统计端点。

共享层另外移除仅定义、没有玩法调用的 `GmUtils.addFlag`，连同它唯一依赖的 `GmMedalMgr` 整体剔除，删除视频/免广券计数逻辑；移除没有剩余调用者的 `GmSoundMgr.muteByVideAD`。`autoDrag` 不再保存或执行视频回调，拖动开始、移动和结束直接执行原拖动行为，兼容方法 `setVideo` 只关闭标记。`GameConfig.mainData.freeAdCount`、`GameConfig.NotAdFlag` 和 `Flag_Key.免广告券` 作为原共享数据/枚举字段保留，不构成可执行广告逻辑。

## 存档

运行时为本游戏提供 Storage 兼容接口，并在引擎初始化时将 `cc.sys.localStorage` 指向同一接口。所有游戏存档统一加 `makeup-relaxation-4399-v1:` 前缀；枚举和 `clear()` 仅覆盖本游戏前缀，不影响站点语言及其他游戏的键。

存档保留原版数据结构：人物解锁、音效/音乐设置和相册 `Photo_N`。原版相册保存节点位置、缩放和 SpriteFrame UUID 等外观数据，照片由资源重新绘制，不是浏览器图片下载。原版退出提示明确护理中途不会保存；刷新不应被理解为恢复未完成的护理。存储受限时使用内存回退，刷新后持久化为 `Unknown`；本地来源和 Pages 来源之间不会自动迁移存档。

修复一个原版持久化缺陷：`GmUtils.setFlag` 改动 `_mainData_` 中的声音字段后只标记 `_Utils_Flag_`，导致界面及音量已静音但刷新可能恢复开启。构建器先确认模块 setter 的 `p` 确为 `GmSaveMgr` 导入，再在原方法末尾追加 `p.getInstance().saveMainData()`；保留原声音开关逻辑并让原存档队列保存主数据。提取最终生成方法的执行检查及浏览器实际点击、刷新均通过，音乐和音效保持关闭。

## 可复现构建验证

重建命令和依赖锁定见 [工具说明](../tools/makeup-relaxation/README.md)。默认缓存为被 `.gitignore` 排除的 `.verification/makeup-relaxation/`，可用 `--artifacts`、`--output`、`--evidence` 指定隔离目录，避免修改正在验收的游戏。

已通过：Node.js 脚本语法检查，Python CLI 参数检查，固定原包 2,061 项大小与 SHA-256 复核；从同一原包分别构建到两个独立目录，全部 **2,062 个生成文件** 的路径、大小和哈希一致。生成清单的 SHA-256 为 `27f9bb3860c708731584d21fb8d7eb1e0eaf2e3113d4a502aada0091fb6b510b`。这份清单包含直接入口和本地 runtime，不包含外层平台文件。

冷缓存重新获取也已通过：全新缓存获得 2,061 文件、67,562,155 bytes，逐项匹配固定 SHA-256，只有上述三种压缩纹理变体返回 404。HTTP 本地预览的 HTML、runtime、WASM 与 Face 清单均返回 200，WASM 的 MIME 为 `application/wasm`。重建比对没有通过调用 `nextStep`、预设进度或模拟成功消息来代替玩法验收。

## 运行验收与发布状态

| 验收项 | 当前记录 |
| --- | --- |
| 真实鼠标完成一位人物的护理、化妆、结算、保存照片 | 最终构建通过：01 完整护理、14 类化妆、5 次评分、100 分结算、保存 Photo_0、相册打开预览 |
| DIY 选装、保存及相册打开照片 | 真实选择眉妆并涂抹、拍照结算保存 Photo_1；刷新后两张照片均显示 |
| 暂停、声音、刷新后照片与人物解锁持久化 | 暂停继续、声音关闭及刷新保持、照片数据一致均通过；独立真实解锁 02 后刷新，解锁和照片原始存档字符串完全一致 |
| 逐一进入 15 位人物并检查素材、关键操作 | 01–15 全部通过真实选人、聊天、护理；对应 tou_1…15/st_1…15 纹理有效，每人至少一次工具操作触发；02–15 未完整通关 |
| 阻断外网后完整流程、无跨站请求和运行阻断错误 | 完整流程 1,288 请求；15 人独立上下文共 7,716 请求；均无跨站尝试、失败请求、HTTP 失败、页面及控制台错误 |
| 桌面/手机尺寸、根路径和 `/mini-games/` 子路径 | 桌面与 320/390 像素窄屏无横向溢出，根路径与子路径、真实加载完成、全屏及返回通过；非实体手机验收 |
| 原有游戏、语言切换、存档隔离回归 | 水/割绳子实际首关与跨语言存档、停车独立回归通过；英文卡片中文回退及返回 en 通过；本游戏 clear 仅删前缀键，其他游戏哨兵保留 |
| Pages 发布 | 本地验收通过后推送 main，复用 `.github/workflows/pages.yml`；部署以对应 Actions 结果为准，发布后的检查保存在 `.verification/*-live/` |

最终本地结果、原始报告哈希及逐人物记录保存在 [验收摘要](makeup-relaxation/verification.json)。[结算截图](makeup-relaxation/complete-person.png)、[刷新后相册](makeup-relaxation/album-after-refresh.png)、[15 人护理总览](makeup-relaxation/characters-overview.png)随仓库保留。完整操作日志与逐人物四阶段截图位于忽略的 `.verification/makeup-final/` 和 `.verification/makeup-characters-final/`；平台回归位于 `.verification/local/`、`.verification/i18n-local/`、`.verification/parking-local/`。

可复跑 `scripts/verify-makeup.mjs`、`scripts/verify-makeup-characters.mjs`（设置 `GAME_URL` 和 `PLAYWRIGHT_MODULE`），以及 `verify-pages.mjs`、`verify-i18n.mjs`、`verify-parking.mjs`。鼠标脚本只读取 Cocos 节点、触发区与存档来定位和断言，不调用跳关、结算函数或预写进度；末尾的 Storage clear 是单独的清理边界测试。

REA 对初次本地页的 `ev_009139f272ae66dd58862a17044792e9a85ea1e7177ddf9e53114578d439a199` 只观察附着后的 1 秒，受 `attach_limited` 和 `policy_filtered` 限制，不能回溯证明此前网络。截图 `ev_d43120dcf645abb798bf878087361d76af6d5b313b0ba0dc5b9d15037001159b` 的 SHA-256 为 `333e4a9271bc3a3519c855ee192be888c12fcb48de311ef48c6692ef3ba2521e`。上表的全程请求结果来自从加载起监听的 Playwright 测试，和 REA 的被动窗口分开记录。

新解锁存档补验位于 `.verification/makeup-unlock/`：空上下文初始只有 01，真实选择 02 并进入护理后为 `["02","01"]`，真实刷新后存档字符串一致；729 次同源请求且无异常、失败或外网请求。

实体手机、Safari、Firefox、全部人物逐项通关、所有随机护理组合和妆容物品的穷举、完整 Cocos 源工程恢复为 `Unknown`。原站登录后的完整原版游玩结果仍为 `Unknown`。本报告不声明游戏素材或封面已取得再分发许可；版权及许可状态不能由公开 URL 推定。

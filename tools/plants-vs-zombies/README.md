# 植物大战僵尸恢复工具

原版入口：<https://www.4399.com/flash/18012.htm>。恢复对象为 PopCap Flash 0.9 演示版，使用本地 Ruffle 0.7.1 运行，保留原版美术、音效和玩法。

原包、资源、反编译证据与工具保存在本机 `/Users/a/Documents/REA/output/4399_18012_2026-11-09/`，不进入 `site/`。运行只需静态 HTTP 服务；重建需要 Node.js、Python 3、Java 17 和来源目录中的 JPEXS 26.4.0。

在仓库目录执行：

```sh
node scripts/build-pvz.mjs ../4399_18012_2026-11-09
node scripts/serve-local.mjs --port 8793 --mount /mini-games/
```

访问 <http://127.0.0.1:8793/mini-games/games/plants-vs-zombies/>。重建先核验原包及运行库 SHA-256，再用 `patches/scripts/` 替换五个 AS3 类、清理旧 ABC 常量，并用 `rename-swf-adapter.py` 改名。生成的 SWF 必须匹配 `provenance/plants-vs-zombies.json` 的清理版哈希，之后才写入发布目录。`JPEXS_JAR` 可指定相同哈希的 JPEXS 文件。

`patches/scripts/com/popcap/flash/games/pvz/MSNAdAPI.as` 完全由独立本地实现替代，临时沿用原类型名用于 JPEXS 的原位替换；构建末尾统一改成 `LocalPlatformAPI`，发布 SWF 不含原广告 SDK 实现或原类型名。原游戏的四个广告/会话继续入口保留参数签名：`SessionReady`、`GameReady`、`GameBreak`、`CustomEvent`；默认均同步执行 `callback()` 一次且不传参数。接入新供应商时集中修改此适配文件，再重建并重新验证回调契约。

四个推广 UI 源替换移除 URL 请求与购买跳转；发布配置 `data.xml` 只保留版本、本地存档开关和关闭的作弊功能，不复制原版 `MSN`、`upsell`、作弊键绑定。不会发布原站 loader、域名检查或站点统计脚本。

存档 APP_ID 为 `plants-vs-zombies-4399-v1`，由 Ruffle 将原 `SharedObject` 保存在本地浏览器。它按站点来源与 SWF 路径隔离；本地与 Pages 的存档分别保存。原版保存已解锁关卡、模式与声音偏好；页面重新加载会重开当前关卡，不保存半局植物与僵尸位置。

运行验收：

```sh
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-pvz.mjs
```

`PLAYWRIGHT_MODULE` 应指向本机实际存在的 Playwright Core 入口；设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 可验证线上构建。脚本阻断外部 HTTP(S) 请求，用真实鼠标种植、收集阳光和通关，只读取截图与 SOL 存档，不写入游戏状态。报告保存在 `.verification/pvz-local/` 或 `.verification/pvz-live/`。

追加 `--shell-only` 只验收加载、语言、全屏、窄屏和下载失败重试，不执行战斗，也不声称通关。此模式单独写入 `report-shell.json`，适合部署后的页面与加载链检查。

# 大家来拼豆恢复工具

原包目录：`/Users/a/Documents/REA/output/4399_264779_2026-11-10/original/`；来源与边界见 [恢复记录](../../provenance/bead-craft.md)。

在 `mini-games-pages` 目录重建，脚本先核验所有原文件哈希，再将完整发布副本写入临时目录并替换旧版：

```sh
node scripts/build-bead.mjs ../4399_264779_2026-11-10
node scripts/verify-bead-platform.mjs
node scripts/serve-local.mjs --port 8805 --mount /mini-games/
```

访问 <http://127.0.0.1:8805/mini-games/games/bead-craft/>。本地需 HTTP 服务，不能通过 `file://` 运行。

真实鼠标、触屏、存档和异常重试验收：

```sh
node scripts/verify-bead.mjs
PAGES_URL=https://zhouhong1217.github.io/mini-games/ node scripts/verify-bead.mjs
```

运行环境使用现有 Chrome 与 Playwright，默认位置与其他项目验收脚本一致。结果位于 `.verification/bead-local/` 或 `.verification/bead-live/`。

`ad-manager.js` 替换原平台实现，保留游戏接口；`platform-adapter.js` 为广告供应商扩展层，默认直接成功并抑制重复回调；`local-runtime.js` 负责外壳加载消息、错误提示和页面生命周期保存。外壳语言不改变原游戏内部中文。

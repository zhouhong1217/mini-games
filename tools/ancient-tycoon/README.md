# 穿回古代当首富：恢复工具

原版来自 4399 游戏 `245857`，资源以 LayaAir HTML5 构建发布。本目录保存独立平台适配层、运行外壳及经原包 SHA-256 固定的补丁范围；原包与 REA 证据保留在站点工程外。

在站点工程目录执行：

```sh
node scripts/build-tycoon.mjs ../4399_245857_2026-11-09
node scripts/serve-local.mjs --port 8801 --mount /mini-games/
```

本地访问 <http://127.0.0.1:8801/mini-games/games/ancient-tycoon/>。构建先校验清单中全部发布资源与游戏脚本的 SHA-256，再写临时目录，完整生成后替换 `site/games/ancient-tycoon/game/`。输入异常不会删除上一份可玩副本。补丁列表由对固定原包的 Babel AST 分析生成，重建无需 Babel 或 npm install。

保持预览服务运行，在另一终端执行：

```sh
node scripts/verify-tycoon-platform.mjs
node scripts/verify-tycoon-staff.mjs
node scripts/verify-tycoon-prefabs.mjs
node scripts/verify-tycoon.mjs
```

浏览器验收使用 Playwright 与本机 Chrome，依赖位置可通过 `PLAYWRIGHT_MODULE` 指定。设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 可复用同一流程验收线上版本；经营报告及截图保存在 `.verification/tycoon-local/` 或 `.verification/tycoon-live/`，界面工厂报告在 `.verification/tycoon-prefabs-local/` 或 `.verification/tycoon-prefabs-live/`。

`platform-adapter.js` 使用独立命名空间 `ancient-tycoon-4399-v1:`。`setAdProvider({rewarded,interstitial})` 可接入新供应商：`rewarded(loc)` 返回 `true` 时调用原成功回调，其他结果或异常调用原失败回调；回调均为零参数，每个请求调用一次。未接供应商时直接成功。奖励请求按顺序处理，回调异常不会阻断后续请求。

云存档替换为本地存档，排行榜只显示当前浏览器成绩，竞技人物资料明确标为本地对手，社交列表为空。原广告 SDK、平台 HTML、远程云存档和排行榜请求实现均不进入发布副本。原包、来源清单和所有未知范围见 [恢复记录](../../provenance/ancient-tycoon.md)。

`required-prefabs.json` 保留原版 49 处 UI 工厂调用归纳出的 27 个必需模板及调用来源，构建缺失任一模板时拒绝替换旧版。`verify-tycoon-prefabs.mjs` 使用真实 Laya 加载器和原 UI 工厂逐一创建它们；`verify-tycoon-staff.mjs` 验证模型延迟时员工接货及模型到达后的物品保留。完整经营验收增加奶牛养殖区建造、生产需求面板和刷新存档。

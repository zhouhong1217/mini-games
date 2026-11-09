# 拆个毛线恢复工具

来源为 [4399 原始页面](https://www.4399.com/flash/266510.htm)，Cocos Creator 2.4.11。原包单独保存在本机 `/Users/a/Documents/REA/output/4399_266510_2026-11-09/original/`，不进入 `site/`。

从已采集原包重建（在站点仓库执行）：

```sh
node scripts/build-yarn.mjs ../4399_266510_2026-11-09
node tools/yarn-unravel/verify-platform-patch.mjs ../4399_266510_2026-11-09
```

`build-yarn.mjs` 逐文件核验采集清单 SHA-256，移除原 SDK 及远程实现，再生成本地适配层引用。完全相同的原生文件通过 `asset-aliases.js` 复用；按 SHA-256 和扩展名匹配，保存的单份文件字节不变。原始资源在本机保留完整副本。

资源采集及纯静态清单可以重建。先准备一个有 `tools/`、`evidence/`、`original/` 的独立恢复目录，再依次执行以下步骤；`metadata` 只读取入口明确引用的 bundle 名称，并记录原站 404。

```sh
python3 tools/yarn-unravel/acquire.py metadata ../4399_266510_2026-11-09
python3 tools/yarn-unravel/extract-native-static.py ../4399_266510_2026-11-09
cp ../4399_266510_2026-11-09/tools/static-native-specs.json ../4399_266510_2026-11-09/tools/native-specs.json
python3 tools/yarn-unravel/acquire.py natives ../4399_266510_2026-11-09
python3 tools/yarn-unravel/acquire.py manifest ../4399_266510_2026-11-09
```

原站中文字体文件只接受 GBK 编码路径，采集器在明确的 Unicode 路径 404 后兼容该编码，实际 URL 保存于 `tools/url-exceptions.json` 与采集清单。发布目录采用正常 UTF-8 文件名。

本地启动与验收：

```sh
node scripts/serve-local.mjs --port 8797 --mount /mini-games/
node scripts/verify-yarn.mjs
```

验收脚本需要本机 Chrome 和 Playwright，默认读取本机已存在的安装路径；可用 `PLAYWRIGHT_MODULE` 指向另一个 `playwright-core/package.json`。设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 可验证线上相同流程。报告和截图保存于 `.verification/yarn-local/` 或 `.verification/yarn-live/`。

广告接口保留于 `site/games/yarn-unravel/game/platform-adapter.js`。`setProvider()` 可接入 `rewarded` 与 `interstitial`；默认奖励为暂停、异步恢复、零参数调用成功回调一次。原始模块与入口均被删除，不加载原 SDK。奖励请求排队执行，失败时恢复游戏。存档通过 `YarnPlatform.storage` 统一增加 `yarn-unravel-4399-v1:` 前缀；排行仅显示当前浏览器保存的成绩。

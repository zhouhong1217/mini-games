# 大家来拼豆恢复记录

来源：[4399 264779](https://www.4399.com/flash/264779.htm)，采集日期 2026-11-10（Asia/Shanghai）。原始构建为 Cocos Creator 3.8.6，保留原版画面、音效、拼豆归位逻辑和教程。完整 Cocos 编辑器源工程恢复状态为 `Unknown`。

## 来源与 REA 证据

原包与完整证据仅保留在本机 `/Users/a/Documents/REA/output/4399_264779_2026-11-10/`，不进入 `site/`。`tools/acquisition-manifest.json` 记录来源 URL、长度和 SHA-256；发布副本和适配文件哈希见 [bead-craft.json](bead-craft.json)。

- 原站运行采集：`ev_36324de2469632b2d92e312cf4867807a510b70b3b473b37beea2fde9e26680e`。REA 声明导航并等待，观察实际加载的 `gameIndex.html`、引擎、脚本和内部资源；未把平台壳当作游戏。
- 静态分析父记录：`ev_872590af3bfb7c75dc0f7699804f3ac52218e471608cad372c45e030512cb1e1`；摘要 `ev_c4882cdcc03b395f45b2af833072079a57f3df7fb507104d2a1efda8ee0cda9e`。选择 `assets/main/index.js`、`application.js`、`index.js`、`src/settings.json`、`src/chunks/bundle.js`。静态图存在语义节点上限和未分析文件，覆盖为 partial，不能代表所有代码均已理解或执行。
- 本地 REA 运行采集：`ev_f2e1a45450ca1d7421e96213a8f87af4eefb05f98fa9370d786b0888812863b1`。严格子路径直接加载原玩法，138 个请求均指向本地，没有 page-error，截图显示首关。实际通关操作由下面的 Playwright 验收记录证明。

原版未适配副本先通过真实鼠标六次操作完成首关：选中同色拼豆、放入暂存区、取出其他颜色、归位，再完成另一组颜色；原版结算正常，HTTP 错误和 page-error 均为 0。记录在本地 `evidence/original-play.json` 和 `evidence/original-level-1.png`。

## 恢复与适配

发布目录包含 8,381 个文件，约 29.9 MB。按原始 bundle 配置的 UUID、packs、extensionMap、redirect 恢复 import 文件及原生资源，并保留所有布局、图案、字体和音频。字体在 `UI` 与 `MainGame` 两个 pack 中均有独立 native 引用，因此保留两份原路径，避免依赖加载顺序或缓存。`newLevel` 是原站配置中残留的失效项目，原 URL 返回 404；发布清单改为实际调用的 `levelBase64`。

删除平台 HTML 壳与远程 `h5api-interface.php` 加载，删除原 `H4399Platform.ts`、`AndroidPlatform.ts`、`WxPlatform.ts`、`IASDK.ts` 实现及导入。`AdMgr` 的游戏调用接口保留，具体广告行为转入独立 `platform-adapter.js`。默认奖励直接调用成功回调，不改变参数，供应商重复回调只处理一次；音频顺序为暂停、业务回调、恢复。可通过 `BeadCraftPlatform.setProvider()` 接入新供应商。

原玩法主 bundle 中未检出 `fetch`、`XMLHttpRequest`、远程 URL 或云存档实现；实际存档通过原 `GameStorage` 读写浏览器。存档前缀由 `MYGAME_` 隔离为 `bead-craft-4399-v1:`，离开、刷新、切入后台时同步保存。保存已完成关卡、金币和偏好；当前关卡中途操作不序列化，刷新会重开该关。本地与 Pages 是不同来源，存档分别保存。

引擎与 Spine WASM 保留原始字节。WASM 全部内部实现及未触发路径的依赖为 `Unknown`，没有进行完整反编译；不将已测路径的零外部请求扩大为所有二进制行为的证明。

## 验证与范围

运行方法见 [恢复工具](../tools/bead-craft/README.md)。`scripts/verify-bead.mjs` 在严格 `/mini-games/` 子路径下阻断其他来源的 HTTP 请求，仅读取运行状态定位可见元素，通过真实鼠标或触屏操作推进玩法。

通过范围：

- 鼠标完成首关 100% 并进入第二关。
- 刷新恢复第二关、金币及独立命名空间存档。
- 第二关教程真实点击增加暂存槽，12 槽增加至 48 槽。
- 点击加时、打开道具弹窗、点击奖励入口，剩余时间从 300 秒增加至约 599 秒；默认广告回调完成原业务流程。
- 390px 触屏模拟完成首关，无横向溢出。
- 开始按钮延迟加载、首页卡片、外壳中英文切换不重启玩法、全屏。
- 主游戏脚本下载失败后提示错误，点击重试恢复。
- 受测过程外部请求、HTTP 错误、page-error 均为 0。

本地截图和报告位于 `.verification/bead-local/`；线上复验位于 `.verification/bead-live/`。静态资源与默认回调审计由 `scripts/verify-bead-platform.mjs` 执行。

其余关卡、主题、商店、长期每日奖励、实体手机及其他浏览器未逐一验收，可玩性为 `Unknown`。原游戏及素材版权归原权利人所有。

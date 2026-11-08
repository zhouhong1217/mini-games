# 缠绕的绳子恢复记录

目标是将 [4399《缠绕的绳子》](https://www.4399.com/flash/242335.htm) 的原版网页构建保存为独立静态游戏，并接入现有 GitHub Pages 平台。恢复的是可运行构建；原始 Unity/C# 源工程为 `Unknown`。

## 来源与证据

- 页面标题与游戏入口：原站详情页及 `242335_3.htm`，保存于本机 `/Users/a/Documents/REA/output/4399_242335_2026-11-08/original/`。入口 `index.htm` 标明 `Rope Tangle Puzzle`、`Gamesmunch.com` 和版本 `0.1`，运行日志标明 Unity `2022.3.17f1`。
- 原版资源基址：`https://sda.4399.com/4399swf/upload_swf/ftp47/gamehwq/20240709/09/`。逐个文件的原始和本地 SHA-256 见 `rope-tangle.json`，重建脚本校验原包后才写入发布目录。
- REA 静态分析：`ev_02fc24c3e09a464705f20fa23e912463a4f9358d3cada7e97570e5307e582407`；摘要 `ev_eedac61053fc8447b8b301f02e3752d7cb534b60a8b738c211309c364bb5feea`。范围为两个原版 JavaScript 文件；无解析失败。语义图存在截断及动态关系未知，不能据此宣称完整恢复源代码。
- REA 原站直接入口捕获：`ev_90185c166cf628d0fbfc9d7b4007a7773e0e8c40325ac772bf2677ef00307796`。无来源页的直接浏览会返回原站「访问错误」页面，此记录不能证明原站游戏玩法。
- REA 本地运行捕获：`ev_ab36f68b537ff26062bde3f589e3f41ae1df217e4e96859b067d28bfb42aa971`。页面、框架、数据和 WASM 全部从本地返回 200，捕获窗口无页面异常及外部请求。
- REA 最终本地构建捕获：`ev_0fb69b4ea40d374f52349a7dbcc2dd0ec0fa6b81d76c0911d88f56bd6191215c`，含独立平台适配层，所有响应为本地 200，无页面异常。
- 原包 `.data` 中四个原生回调名的字节偏移：`ResumeGameCallback` 14,093,066，`RewardAdReadyCallback` 14,093,103，`RewardAdSuccessCallback` 14,093,125，`RewardAdFailCallback` 14,093,149。独立平台适配层另通过 15 个 VM 用例，检查默认回调、供应商成功/失败、并发去重、配置前队列、存储隔离和默认无联网。
- 完整捕获与静态摘要保存在本机 `/Users/a/Documents/REA/output/4399_242335_2026-11-08/evidence/`。实际玩法由独立浏览器验收补充，静态分析不代表已执行全部关卡。

## 适配范围

1. `.wasm`（32,080,908 字节）与 `.data`（18,907,907 字节）保留原始字节，未修改关卡、物理逻辑或通关状态。
2. 启动脚本将原平台的 `parent.showUnitywebNoSupport()` 替换为本地错误通知，并接住框架初始化失败，便于外壳显示重试。
3. 框架给触屏 `preventDefault()` 增加 `event.cancelable` 检查。删除整个原 SDK 实现及初始化注入，仅保留 WASM 导入函数名，委托独立 `platform-adapter.js`。默认广告直接完成，原生回调对象名 `LaggedAPIUnity` 作为 ABI 字符串保留。`checkRewardAd` 回调 `RewardAdReadyCallback`，`showRewardAd` 成功/失败分别回调 `RewardAdSuccessCallback` / `RewardAdFailCallback`，插屏结束回调 `ResumeGameCallback`；均不添加参数或额外暂停消息。
4. Unity 原版存档的数据库改名为 `rope-tangle-4399-v1:/idbfs`；原有 PlayerPrefs 键和值保持不变。测试仅读取进度，未预置或修改关卡存档。
5. 新外壳支持中英文、延迟加载、进度、失败重试、全屏和返回首页；内页保持竖屏比例。就绪消息等待 Unity 实例及原生 SDK 初始化；之后仍有 Unity 自带启动动画。
6. 原版分数和成就接口改为独立的本地存储，键为 `rope-tangle-4399-v1:scores` 和 `rope-tangle-4399-v1:achievements`，无远程排行榜服务。可通过 `RopeTanglePlatform.setAdProvider` 在单一适配层接入供应商；同类进行中请求去重，结束后可再次调用。
7. 游戏页 CSP 限制网络为同源；资源路径适配 `/mini-games/` 子路径，运行时无需 4399。离线断网时仍需由 HTTP 服务提供本地文件，未添加离线缓存安装功能。

## 可重复验证

在项目根目录执行：

```sh
node scripts/build-rope.mjs ../4399_242335_2026-11-08/original
node scripts/verify-rope-platform.mjs
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-rope.mjs
```

脚本模拟 GitHub Pages `/mini-games/` 子路径并阻止外部 HTTP 请求。真实鼠标拖动完成前两关并点击 `NEXT`，原版只读存档应记录 `level=3`、`levelnumber=3`、`lastLevelPlayed=2`；刷新和游戏内重开后仍处于第 3 关。另检查语言切换不重启、全屏、390px 窄屏、触屏模拟拖动完成首关，以及 WASM 下载失败后的重试恢复。

本地报告和截图：`.verification/rope-local/`。设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 运行同一命令后，线上报告保存在 `.verification/rope-live/`。

## 限制与维护

原版 Unity 偶尔通过错误输出接口记录 `warning: 2 FS.syncfs operations in flight at once, probably just doing extra work`。验收对该精确消息单独记录为已知引擎警告，其他页面异常和控制台错误仍判失败；存档写入和刷新恢复另行实际验证。

发布目录中的 JavaScript 原广告 SDK 实现、加载及初始化引用已移除。WASM 原始字节保持不变，二进制内部的 SDK/服务器引用是否全部清除为 `Unknown`，不能宣称彻底清除所有二进制依赖。

其余关卡未逐一通关，关卡总数为 `Unknown`；实体手机、Safari、Firefox 未验收。浏览器存档不提供跨来源或跨设备同步。原游戏与素材版权归原权利人，恢复和托管不改变原有授权状态。

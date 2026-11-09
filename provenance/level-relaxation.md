# 这关很解压恢复记录

原始入口为 https://www.4399.com/flash/251997.htm 。游戏名为《这关很解压》，站点 ID 为 `251997`，平台 game ID 为 `100071164`。本次恢复日期为 2026-11-09（Asia/Shanghai）。

实际游戏入口为 `https://szhong.4399.com/4399swf/upload_swf/ftp51/huangcijin/20250822/09/gameIndex.html`。游戏使用自定义 `dThread` / `dInterface` WebGL 引擎，设计分辨率为 1080×1920，原配置包含 90 个进度关卡。四个 DGFP 资源包共 891 个成员；游戏逻辑、关卡数据、图片、Spine 动画及音频来自原包。

## 证据与边界

原包、采集清单和完整 REA 记录保存在仓库外的 `../4399_251997_2026-11-09/`，不进入 `site/`。

- REA 原站启动：`ev_70e668c982a431e258d74bffc1f53ac6681b360590090e4492859cf36b837fca`。原站平台加载器、`gameIndex.html`、`MainGame.js` 及登录/统计/广告请求被记录；结束时仍有原站请求未完成，覆盖为 incomplete。
- REA 静态分析主记录：`ev_38199fd5dca56d3250bffccd67bbc213e040d643855633f42bf8ba9e81dacab5`；summary：`ev_e7426ad37db0bc4ab94a3336673772472754e266e373df356bd3c63a01746a17`。对采集当时的 `MainGame.js` 进行静态分析，源码解析成功；语义图受 8000 节点预算限制，覆盖 partial，不据此声称完整语义恢复。该记录发生在补齐资源之前，后续最终文件身份以 acquisition manifest 和本仓库 JSON 为准。
- REA 本地启动：`ev_c63558d93d3b02e35e74417a413f783f96b2a250f50bf7ff54389418fa1d0ad8`。本地代码及四包完成加载，捕获完整；请求均为本机静态文件或本机 blob。
- 原版 `MainGame.js` SHA-256：`a3e7b4d54add8964055ded38ee2542bd045028ef554219c98ea67eafa6e7fa3a`。

静态结论与运行结果分开记录：REA 静态图只表示源码关系，实际可玩性由真实浏览器输入测试验证。运行测试使用 Chrome 桌面及移动触屏模拟，未使用实体手机。

## 发布副本的改动

构建时删除原平台 HTML、`base.xml`、h5api 加载器、原 `MyAd`/`MoreGamePanel` 实现；按浏览器环境剪除 27 个跨平台分支，并替换 37 个广告、服务器和原生桥接边界。发布脚本中不包含原平台广告 SDK 文件、加载和初始化，也不保留原服务调用作为后备路径。

广告入口与玩法回调保留，集中接入 `game/platform-adapter.js`：默认暂停音频，100ms 后恢复音频并清理鼠标钩子，再单次完成回调。`MyAd.ShowAdRewardedVideoTrace(name, callback)` 的 callback 保持零参数；`dInterface.ShowAdRewardedVideo(callback)` 传入当前 interface。连续请求排队且各自保有 callback。未来供应商可通过 `LevelRelaxationPlatform.setProvider(...)` 接入；拒绝、异常或返回 false 不发放奖励。

本地存档保持原 schema，key 使用 `level-relaxation-4399-v1:` 前缀，避免覆盖其他游戏。页面隐藏时补充保存当前进度。游戏只加载同源静态资源；CSP 限制远程脚本和服务请求。外壳支持延迟加载、中英文说明、真实 ready、加载失败重试、全屏和返回；游戏内保留原版中文。

原站本身缺失 `data/title.png`、`level/202.png`、`level/38.png`（确切 URL 均返回 404）。恢复版仅清空这些确证失效的图片引用：保留不可见 Check 控件的几何、弹窗文字和提示文字；不制作替代原图。原图外观为 `Unknown`。该提示弹窗的三个文字节点改用原引擎 `dLabel` 系统字体，以显示原 bitmap font 缺失的“足/定”等字，保留原文字与点击交互。确切替换上下文、次数、采集结果和文件哈希在构建脚本与 JSON 中记录。

画布初始化及 resize 分支的 CSS 宽高补充 `px` 单位；原值为无单位的非零字符串，在 DPR > 1 时被浏览器忽略，使 CSS 显示尺寸回退到物理像素缓冲区，导致画面放大、裁切。窗口尺寸不变但 `devicePixelRatio` 改变时也更新缓冲区及引擎密度，保持显示尺寸与输入坐标一致。这些修改纳入构建脚本，并校验原始替换上下文与次数。

四包保持原字节；构建检查 DGFP 结构和完整成员类型，仅包含 png/jpg/mp3/JSON/atlas。103 个 JSON/atlas 文本成员未发现远程 URL 或广告 SDK 引用。图片及音频内是否包含未使用的品牌或其他不可见元数据为 `Unknown`。

## 重建与验收

先在仓库根目录安装已锁定的构建解析器，然后用仓库外原包重建：

```sh
npm ci --prefix tools/1in8b
node scripts/build-relaxation.mjs ../4399_251997_2026-11-09
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs node scripts/verify-relaxation.mjs
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs node scripts/verify-relaxation-display.mjs
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs node scripts/verify-pages.mjs
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs node scripts/verify-i18n.mjs
```

将 Playwright 路径替换为本机实际安装位置。预览命令为 `node scripts/serve-local.mjs --port 8787 --mount /mini-games/`，入口为 `http://127.0.0.1:8787/mini-games/games/level-relaxation/`。GitHub Pages 地址为 https://zhouhong1217.github.io/mini-games/games/level-relaxation/ 。部署 workflow 直接发布 `site/`，部署时无需执行恢复脚本。

`verify-relaxation.mjs` 阻断外站请求，以真实点击完成风扇关、以真实拖动和旋转完成挂画关、以真实拖动完成套娃关，并验证进度重载、存档隔离、提示奖励、广告 callback 参数及单次执行、provider 拒绝和失败、中英文切换不中断、移动触屏通关。详细输出位于 `.verification/relaxation-local/` 或 `.verification/relaxation-live/`；精选证据见 [local-verification.json](level-relaxation/local-verification.json)、[shell-verification.json](level-relaxation/shell-verification.json) 及同目录截图。

[最终本地验收](level-relaxation/local-verification.json) 通过，零外站请求、零脚本错误、零资源 404。[全部关卡加载记录](level-relaxation/all-levels-smoke.json) 以程序化选关加载并渲染 90/90 关，零异常、零外站请求及零资源 404；这仅证明加载覆盖，不代表逐关完成。完整游戏等价性、后期全部交互路线及实体设备表现为 `Unknown`。


## 高 DPI 适配修复验收

修复前在 DPR 2 下复现：iframe 视口为 484×860 CSS px，canvas 显示为 968×1720，右侧和底部被裁切；零脚本错误或资源失败，因此原有仅 DPR 1 的玩法验收未发现问题。复现数据与截图见 [display-before.json](level-relaxation/display-before.json)、[display-before.png](level-relaxation/display-before.png)。

`verify-relaxation-display.mjs` 覆盖桌面初始 DPR 1/2、移动触屏模拟 DPR 3、窗口 resize、进入/退出全屏，以及保持窗口大小不变时 DPR 1→2 与 2→1.5。14 次测量中 canvas 显示尺寸均与 iframe 视口一致，缓冲区尺寸随 DPR 更新；每个场景使用真实鼠标或模拟触屏通关第一关，游戏实例未被重建，零外站请求、零脚本错误、零资源失败。见 [display-local.json](level-relaxation/display-local.json)、[桌面 DPR 2 截图](level-relaxation/display-desktop-2x.png)、[移动 DPR 3 截图](level-relaxation/display-mobile-3x.png)。这些是 Chrome 模拟结果，实体设备与其他浏览器表现仍为 `Unknown`。

原有 `verify-relaxation.mjs` 的桌面及移动场景分别固定为 DPR 2、DPR 3，避免之后再次只验证默认 DPR 1。修复后重跑通过：前三关点击、拖动、旋转，本地存档重载，提示奖励及广告回调，中英文切换，移动触屏通关均正常；零脚本/console 错误、零外站请求、零资源失败，见 [high-dpi-gameplay.json](level-relaxation/high-dpi-gameplay.json)。

# 窄道停车恢复记录

本地恢复与试玩验收已完成；发布复用现有 GitHub Pages 工作流。部署结果以 Actions 和线上验证记录为准。

## 来源与证据

- 目标：<https://www.4399.com/flash/265813.htm>，《窄道停车》。实际启动页为 `265813_2.htm`。
- 原始构建、下载响应和资源清单：`/Users/a/Documents/REA/output/4399_265813_2026-11-08/`，原始文件保存在 `original/`。
- 原站运行观察：`ev_a76eaa029cdd8bf3cc42846b0b507b2a27c3aae200003bf762db002e1c3bc2ba`，观察到 Unity `6000.0.59f2` 初始化。
- REA 原始 loader 静态分析：`ev_df32474094180682ad6630b811315c3a89cd81f4a8e83f48a2dc99ad87cb23fd`。仅选取 loader，其他文件的语义关系不在该分析范围内；不将静态分析当作执行证据。
- REA 本地启动复核：`ev_c126a51fc91f01305e8f08c02a199bbd0bc0097deeeb9461cbffb6429aa41dea`。实际点击开始并等待教程，所有步骤完成，无捕获到的页面或控制台错误；HTTP 请求均位于本地来源。
- 完整 REA 证据包：`/Users/a/Documents/REA/output/4399_265813_2026-11-08/rea-evidence-bundle.json`。

## 分发改动

- 原包 `.br` 文件分别以 `UnityWebData1.0` 和 WASM 魔数开头，实际未压缩；仅改为 `.data` 与 `.wasm` 文件名，二进制内容及 SHA-256 完全不变。
- 新建本地 HTML、加载进度与错误桥接，移除原模板的 `document.domain = '4399.com'` 依赖；采用相对资源路径。
- loader 原来的 `parent.showUnitywebNoSupport()` 依赖宿主网站，网络错误会使重试界面失效。改为本地错误回调并捕获框架初始化 Promise 的拒绝。
- SDK 的数据清除、读写和删除限制在 `narrow-parking:` 前缀内；不修改浏览器全局 Storage。Unity 原版 PlayerPrefs 继续使用路径独立的 IDBFS，保持原版自动持久化。
- 修复原引擎 HTML 音频回退通道的怠速播放速度异常，将 `HTMLMediaElement.playbackRate` 限制到 Chromium 支持的 `0.0625–16`；不改变车辆物理或其他玩法逻辑。
- 游戏内部保留原版语言。平台新增第三张卡片、实机封面及中英说明；语言切换保持当前 Unity 实例。

## 验收结果

三套本地测试均通过：`scripts/verify-parking.mjs`、`scripts/verify-pages.mjs`、`scripts/verify-i18n.mjs`。报告与截图位于 `.verification/`，不进入 Pages 分发。

- 真正点击四页教程并使用 `W`、`Space` 完成首关；仅通过只读 IDBFS 读取验证 `Stars00=3`、`IsTutorialComplete=1`、`Theme0FLevel=1`。
- 点击 NEXT 后进入第二关，原版保存 `CurLevel=1`；刷新后首关成绩和解锁状态一致。未预置、修改 Unity 内存或写入关卡进度。
- `Q` 切换到倒挡，`C` 切换视角，`P` 打开暂停菜单；界面截图保留实际结果。
- 手动观察碰撞计数 `1/3`、计时归零后的 `LEVEL FAILED`，点击 RESTART 后回到第二关，计时恢复、碰撞计数归零。对应 `time-failure.png`、`time-failure-restarted.png`。
- 实际拦截 WASM 下载后出现重试界面，恢复请求并点击重试可启动；未用伪造 ready/error 消息替代加载测试。
- 加载、首关操作、第二关、存档和外壳验证期间，外部 HTTP 请求、意外失败响应、页面异常和意外控制台错误均为零。
- `/mini-games/` 子路径、全屏、返回首页、语言切换不中断游戏、中英文 `320/390/1280px` 布局通过。
- 原有《小鳄鱼爱洗澡》首关三鸭、《割绳子》首关三星及跨语言存档回归通过。

## 覆盖边界

- 桌面 Chrome 已验证。手机实体设备、Safari 和 Firefox 的实机结果为 `Unknown`；本版要求键盘，不提供新增触屏驾驶界面。
- 已看到 GROUND 目录包含 20 个入口；全部主题的总关卡数量为 `Unknown`，未逐一通关全部关卡。
- 原版网页构建可运行；完整 Unity 工程、原始 C# 源码及全部资源编辑关系的恢复状态为 `Unknown`。
- 本地与 GitHub Pages 的浏览器存档不自动迁移。线上复测使用独立浏览器配置，报告保存在 `.verification/parking-live/`。

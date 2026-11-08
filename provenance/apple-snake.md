# 吃苹果的蛇恢复记录

来源：[4399 页面](https://www.4399.com/flash/257457.htm)，页面声明的名称为「吃苹果的蛇」，构建产品名称为 `Snake to Eat`、公司为 `Argon`、版本为 `1.0`。上述产品信息来自发布 HTML，不代表已验证作者身份。

## 证据与恢复范围

- REA 原站场景：`ev_f6f018f382897fff8233ebc527d924d79c212cbd06de6617c02991eff5a322b3`。观察到原站 iframe、Playgama 配置、Unity loader、framework、WASM、data 和 `4399.js` 请求；页面显示登录提示。因此该场景只证明资源加载，不能当作原站完整通关证据。
- REA 原包静态分析：`ev_a934ae39e60d3d3db7a0b408550e65b9b46f95c43cb25963d23324574fc304c6`。解析 loader、SDK 与 `4399.js`，无 JavaScript 解析失败；语义图受节点上限约束，HTML 内联代码未被该分析器解析，动态调用仍有未知项。不能据此宣称完整源码恢复。
- REA 本地运行：`ev_dde5417caafc19d58440c1c8dc430267f4a5d432f4cad57d4cbb630eb3784d0e`。独立 Chrome 实例加载本地游戏，捕获窗口内未观察到页面错误或外部网络请求；此场景仅验证启动。
- 完整原包、请求来源及 SHA-256 保存在本机 `/Users/a/Documents/REA/output/4399_257457_2026-11-08/`，REA 证据包位于其 `evidence/`。发布文件的对应哈希见 `apple-snake.json`。

## 实现

使用原版 Unity WebGL 构建运行玩法、画面与声音。`SnaketoEat.wasm.unityweb` 和 `SnaketoEat.data.unityweb` 保留原始压缩字节；框架由 Brotli 解压为 JavaScript。原 loader 已包含 Unity Brotli 解码器，GitHub Pages 无需自定义压缩响应头。

触屏实测发现原框架在不可取消的 `touchstart` 事件中仍调用 `preventDefault`，Chrome 因此报出警告。仅给这一处默认事件取消操作增加 `event.cancelable` 判断，原版原生输入回调照常执行；没有修改移动规则或 WASM。

loader 原先先下载框架再强制执行同目录 `4399.js`；本地改回执行已下载框架的 blob。另把父页面专用错误处理改为本地错误回调，并接住异步框架启动失败，使失败时可重试。

生成的 JavaScript 统一使用 LF 行尾并清理行尾空白；原始文件另行完整保留。

原 HTML 中的 Unity/Playgama `window` 接口被提取到 `bridge-bindings.js`；去掉原 `document.domain` 与原初始化，交由 `runtime.js` 启动。保留 Playgama SDK，但配置强制本地 `mock` 模式，关闭统计和广告预加载。插屏、奖励广告请求通过原游戏的完成回调在本地继续；不获取外部平台账号、支付、排行榜或云存档。

只给原 SDK 的三处 `localStorage` 读写删除操作加 `apple-snake-4399-v1:` 前缀，不替换全局 Storage。原游戏通关后把最后完成的零基关卡编号保存到 `level`，第一关为 `0`、第二关为 `1`；刷新回到主菜单后继续下一关。关卡中途状态仍按原版处理。Unity IDBFS 由原引擎初始化，本地配置开启自动同步。

外壳复用站点视觉风格，增加双语说明、延迟加载、原游戏 `game_ready` 就绪信号、下载进度、失败重试、全屏和返回首页。`WASD` 已验证；画面中的方向按钮支持鼠标和触屏事件。键盘方向键未作为已验证操作写入说明。

## 验证

`scripts/verify-snake.mjs` 在 `/mini-games/` 子路径的本地静态服务器或指定 `PAGES_URL` 上运行，所有外部 HTTP 请求均被测试路由阻断。

验收包括真实 `WASD` 完成第一、第二关，第二关吃苹果及原版重开、刷新恢复第三关、提示、本地存档隔离、中英文外壳、390 px 窄屏、全屏，以及浏览器触屏模拟完成第一关。另主动中断 WASM 下载，检查错误提示与重试恢复。通关证据来自真实输入、原游戏结算截图和只读存档检查，没有写入关卡存档或修改 WASM 内存。

验证报告和截图在 `.verification/snake-local/` 与 `.verification/snake-live/`，不随站点发布。共享首页和语言模块的回归检查使用 `verify-pages.mjs`、`verify-i18n.mjs`。上述三项本地验证均通过，未观察到页面错误或外部请求。

## 限制与风险

已验证前两关完整流程及第三关加载；总关卡数、其余关卡逐一通关、实体手机与其他浏览器兼容性为 `Unknown`。完整 Unity 源工程、原始 C# 文件、编辑器工程和完整反编译结果为 `Unknown`。游戏内保留原版英文；网络平台功能不提供。存档保存在当前浏览器和当前来源，本地与 Pages 不同步。

原游戏、封面及素材版权归各自权利人所有。原站公开资源可下载不等于另行取得公开再分发授权；授权状态为 `Unknown`。

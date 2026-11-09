# 双人厨房恢复记录

日期：2026-11-09（Asia/Shanghai）。来源：[4399 双人厨房](https://www.4399.com/flash/226526.htm)。原始程序为 Cocos Creator 2.4.2 的 HTML5 构建，交付可独立运行的静态网页版本。

入口：`site/games/double-kitchen/index.html`；线上地址：<https://zhouhong1217.github.io/mini-games/games/double-kitchen/>。游戏内保留原版中文，外壳提供中英文、真实加载进度、失败重试、重新加载、全屏和返回首页。

## 分析与资源

原包和 REA 证据留在本机 `/Users/a/Documents/REA/output/4399_226526_2026-11-09/`，不进入 `site/`。

- `original/game/`：148 个原文件，共 8,155,022 bytes，包括原平台配置与外部 SDK 证据；发布副本排除这些平台文件。
- `tools/acquisition-manifest.json`：来源 URL、原始 SHA-256、大小和推导依据；`tools/acquire_game.py` 按实际 Cocos 配置及引擎 URL 规则采集资源，不执行游戏。
- 三个 bundle 共 494 个非重定向资产元数据、101 个 native URL，涵盖 REA 已观察到的 62 个游戏资源 URL。原站 favicon 返回 404，发布版本改用站点图标。
- 发布 144 个校验过的原始文件和 3 个本地支持文件；`provenance/double-kitchen.json` 记录原始及发布 SHA-256、逐项改动。

REA 原站页面观察 `ev_8d4d5d9cd933efe1fbae305e0479113f3f89089808bea94b76c0d0e0add5c940` 取得实际加载资源路径。直接无来源访问返回错误页；通过原入口来源运行原版后，真实键盘控制两人并完成一份汉堡与可乐订单，金币 100→148。运行截图和日志位于上述本机目录的 `evidence/`。

REA 静态父证据 `ev_e46abee6621ba9daebe34f6bfbae34b98f23a15901d665a6c8e68623fccba5b7` 分析实际玩法 bundle、启动脚本和 settings。分析发生于采集过程，完整图与未选择文件覆盖均为 partial；它不证明所有玩法执行。完整证据包保存在 `evidence/rea-bundle.json`，不发布到网站。

REA 本地运行证据 `ev_9dffdb72d92d76a661ca4257c34688329fbc6b957b22c2f24fb2d4133fc18a48` 在严格 `/mini-games/` 子路径直接启动恢复后的游戏并等待菜单：没有页面错误，没有外部请求。后续玩法由下面的真实输入脚本另行验证。

## 本地适配

删除原版 h5api 加载、`base.xml`、外部 SDK 文件，以及 `AD_4399`、`AD_Apk`、`AD_OPPO`、`AD_QQ`、`AD_TT`、`AD_VIVO` 六个模块及其启动入口和调用引用。广告原生组件保留场景所需 class ID 和序列化属性，其实现更换为本地展示组件；菜单、隐私和在线奖励代码中的供应商调用已清理。

游戏原有奖励按钮和回调保留，通过独立 `game/platform-adapter.js` 接入。默认停止音乐，100ms 后执行一次原奖励回调，保持原 `this`、零参数及奖励音效顺序，再恢复原音乐。并发请求各自捕获回调并排队，避免原版全局回调被覆盖。未来供应商仅通过 `DoubleKitchenPlatform.setAdProvider` 接入；拒绝或失败时不发奖励并恢复音乐。

存档使用 `double-kitchen-4399-v1:` 命名空间，保留原数据格式。皮肤、钻石、金币和经营数据按原版规则保存在浏览器；不额外承诺保存当前战局或角色位置。原版游戏内“重新开始”会重置相应经营状态；外壳“重新加载”重新进入菜单并读取存档。

资源均使用相对路径，CSP 限制运行资源到同源；默认没有远程账号、服务器或广告请求。原版引擎与原始场景、图片、音频保持原始字节，玩法 bundle 仅修改已列出的平台和存档部分。

## 验证与重建

在仓库根目录执行：

```sh
node scripts/build-kitchen.mjs ../4399_226526_2026-11-09
node scripts/serve-local.mjs --port 8786 --mount /mini-games/
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-kitchen.mjs
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-pages.mjs
```

本地入口：<http://127.0.0.1:8786/mini-games/games/double-kitchen/>。必须通过 HTTP 服务运行；首次需要下载本地静态资源，未增加 Service Worker 缓存。

验收脚本阻断所有外部来源请求，使用真实按钮与键盘完成加载、语言切换、领取 200 钻石、皮肤奖励解锁、存档重载、双人移动、制作汉堡与可乐、完成订单、暂停继续、游戏内重开、切换对决及双人移动。另验证默认和供应商广告回调的次数、参数、上下文及拒绝/失败后的音乐恢复；等待原版对决计时结束并检查结算界面。读取运行状态用于断言，不注入或伪造通关进度。

外壳独立验收覆盖消息 origin/source/游戏标识、加载超时和重试、进度、中英切换不重启、全屏、390px 页面布局。全站脚本检查首页卡片、封面、相对路径和既有游戏关键流程。结果与截图在忽略的 `.verification/kitchen-local/`、`.verification/kitchen-live/` 中。

## 限制与风险

完整 Cocos 编辑器源工程、所有后期经营进度、全部皮肤与升级组合、实体触屏操作的等价性为 `Unknown`。运行验证仅覆盖列出的操作；一轮对决结算不代表所有小游戏和全部得分路径均已验证。

共享图集中仍可能含原站品牌或未使用的广告图案；任意二进制内部依赖完全消除为 `Unknown`。已验证路径不产生外部请求，不将静态搜索未发现结果等同于全路径证明。原游戏和素材版权归各自权利人所有。

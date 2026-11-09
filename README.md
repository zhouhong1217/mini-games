# 小游戏乐园

中英双语小游戏主页，包含「小鳄鱼爱洗澡」「割绳子」「窄道停车」「化妆解压」「吃苹果的蛇」「缠绕的绳子」「植物大战僵尸」「双人厨房」，「穿回古代当首富」，以及本地版「80亿分之1」。使用公开仓库和 GitHub Pages 免费发布，无需 GitHub Pro、付款方式或后端服务。

在线游玩：<https://zhouhong1217.github.io/mini-games/>

## 语言切换

主页及「小鳄鱼爱洗澡」「割绳子」「窄道停车」页面右上角可选择「简体中文 / English」。首次访问按浏览器语言选择，无法匹配时使用简体中文；手动选择后记住偏好。链接中的有效 `lang` 参数优先，例如 `?lang=en` 或 `?lang=zh-CN`，便于分享指定语言的入口。

主页与上述三个游戏外壳的操作说明支持中英文。「小鳄鱼爱洗澡」和「割绳子」的菜单、教程及结算文案也支持中英文；「窄道停车」内部保留原版语言，切换站点语言不会重启游戏。《割绳子》复用原有中文文案，并补充中文字体；《小鳄鱼爱洗澡》通过独立文案表翻译。

「化妆解压」的首页卡片、外壳及游戏使用中文，英文首页显示中文卡片；从英文首页进入后，返回按钮仍保留 `lang=en`。该页面不提供语言切换。

在「小鳄鱼爱洗澡」和「割绳子」中更改语言会返回游戏主菜单，已完成关卡的成绩保留。当前尚未完成的关卡会重新开始。语言偏好使用 `mini-games-language`，与原游戏存档键 `CTR`、`xeyaxz-4399-v1.0` 分开。

## 本地预览

本地预览使用 Node.js 18 或更新版本的内置模块，无需执行 `npm install`。在终端执行：

```sh
cd /Users/a/Documents/REA/output/mini-games-pages
node scripts/serve-local.mjs
```

浏览器打开 <http://127.0.0.1:8766/>。按 `Ctrl+C` 停止服务。不要通过 `file://` 打开网页。

模拟 GitHub Pages 的严格子路径时，先停止上面的服务，再运行：

```sh
node scripts/serve-local.mjs --mount /mini-games/
```

浏览器打开 <http://127.0.0.1:8766/mini-games/>。此模式只服务 `/mini-games/` 内的路径，`/`、`/games/` 等根路径会返回 404，便于发现写错的资源地址；不存在的资源不会回退到首页。两个模式均只公开 `site/`，目录地址自动补 `/`。端口被占用时使用 `--port 8767`；更换端口会成为不同的浏览器存档来源。

## 80亿分之1：本地版

本地预览与 GitHub Pages 共用已通过本地验收的静态文件，沿用现有 Pages 工作流。线上入口：<https://zhouhong1217.github.io/mini-games/games/1in8b/>。首页第七张卡片指向 `games/1in8b/`；启动默认预览后入口为 <http://127.0.0.1:8766/games/1in8b/>，严格子路径入口为 <http://127.0.0.1:8766/mini-games/games/1in8b/>。

本地版以原站 `0.9.66` 为基础，保留 19 种游戏语言：English、한국어、日本語、繁體中文、简体中文、Tiếng Việt、Français、ไทย、Español、Deutsch、Português、Русский、Türkçe、Bahasa Indonesia、Italiano、العربية、فارسی、Українська、Polski。游戏语言选择独立于首页的中英文选择；阿拉伯语和波斯语保留从右向左的排版。

本地版已移除支付逻辑、购买入口及原站远程服务依赖，保留玩法、影片、相簿、追思馆、房间和村落布置等本地功能。人生记录、布置及追思内容保存在当前浏览器；影片、照片、相簿和记录集由浏览器本地生成，需要自行下载或打印导出。这里不提供原站云端账号或公开社区同步。游戏使用独立命名空间 `mini-games:1in8b:v1:`，与其他小游戏及首页语言偏好分开保存。旧版采集快照不改写，新版原始快照单独留存。

通过「导出本地备份 / 导入本地备份」保存和恢复本游戏进度、历史人生、追思馆、布置与偏好；保存重要人生后及时导出，换浏览器、切换本地端口或迁移到 Pages 前也应先备份。清除网站数据、使用隐私窗口或浏览器回收存储可能导致本地内容丢失。

验证覆盖 19 语言、RTL、真实出生与续玩、教育实验室、媒体生成及导出、追思馆/房间/村落编辑与刷新、备份恢复和导入失败回滚。完整方法、来源与未验证范围见 [恢复记录](provenance/1in8b.md)。

封面 `site/assets/covers/1in8b.svg` 为本项目绘制的世界与人生轨迹抽象插画，不依赖远程图片。原游戏和素材的版权归属不变。

## 窄道停车

在线入口：<https://zhouhong1217.github.io/mini-games/games/narrow-parking/>。本地预览：<http://127.0.0.1:8766/games/narrow-parking/>。发布复用现有 `main` 分支的 GitHub Pages 工作流。

游戏采用原版 Unity WebGL 构建本地化，保留原有玩法与游戏内语言，首次加载资源约 50 MB。外壳提供中英文说明、加载进度、重试、全屏和返回首页；语言切换只更新外壳说明。第一版以桌面实体键盘操作为基准，小屏仅适配页面布局。

已通过真实键盘操作完成首关三星停车、第二关加载、换挡、视角切换和刷新后保留成绩；另验证超时失败后的重新挑战。浏览器阻断外部请求时可运行，本地仍需 HTTP 服务。总关卡数量和未逐一通关关卡的可玩性为 `Unknown`；本项目交付网页构建，完整 Unity 源工程恢复状态为 `Unknown`。

原版文件来源、原始及本地 SHA-256、最小适配改动见 `provenance/narrow-parking.json`，分析与验收范围见 [恢复记录](provenance/narrow-parking.md)。原包保留在本机 `/Users/a/Documents/REA/output/4399_265813_2026-11-08/original/`。需要重建分发文件时，在项目目录执行：

```sh
node scripts/build-parking.mjs ../4399_265813_2026-11-08/original
```

重建前逐个核对原文件哈希；不会修改游戏的 `.wasm` 或 `.data` 内容。

## 化妆解压

页面入口为 `site/games/makeup-relaxation/index.html`，本地预览：<http://127.0.0.1:8766/games/makeup-relaxation/>。发布后的地址为 <https://zhouhong1217.github.io/mini-games/games/makeup-relaxation/>。

点击「开始游戏」后才加载 `game/` 内的游戏，实际资源准备完成后移除加载封面；外壳提供中文操作说明、加载进度、失败重试、全屏与返回首页。按画面提示使用鼠标或手指点击、拖动，完成护理和化妆步骤。

首页封面采用[原站图片](https://imga999.5054399.com/upload_pic/2025/10/21/4399_16581350264.jpg)，保存为 `site/assets/covers/makeup-relaxation.jpg`。封面及游戏素材的原有版权归属不变。

原版画面、声音和玩法保留，广告、推广与统计入口已清理；原视频按钮直接执行解锁或继续。存档统一加 `makeup-relaxation-4399-v1:` 前缀，照片保存到游戏相册；原版不保存护理中途进度。资源构建和本地启动命令见[恢复工具](tools/makeup-relaxation/README.md)，已验证范围与限制见[恢复报告](provenance/makeup-relaxation.md)。

## 吃苹果的蛇

在线入口：<https://zhouhong1217.github.io/mini-games/games/apple-snake/>。本地预览：<http://127.0.0.1:8781/games/apple-snake/>。

点击「开始游戏」加载约 16 MB 原版 Unity WebGL 资源；使用 `WASD` 或游戏中的方向按钮移动，吃苹果后身体增长，抵达漩涡出口通关。游戏内 `↻` 重开当前关卡，外壳「重新加载」返回原版主菜单。外壳支持中英文、加载进度、失败重试、全屏及返回首页，游戏内保留原版英文。

WASM 和关卡数据保留原始压缩字节；框架解压后给触屏事件补充可取消检查，平台初始化使用本地模式，广告回调在本地继续。存档仅给原 SDK 的读写键增加 `apple-snake-4399-v1:` 前缀，通关后刷新可继续下一关。完整 Unity 源工程为 `Unknown`。

来源、校验及最小适配记录见 [恢复记录](provenance/apple-snake.md) 和 `provenance/apple-snake.json`。保留的原包在本机 `/Users/a/Documents/REA/output/4399_257457_2026-11-08/original/`。重建发布资源：

```sh
node scripts/build-snake.mjs ../4399_257457_2026-11-08/original
```

验收脚本使用真实键盘完成前两关，再检查重开、刷新恢复第三关、提示、触屏模拟首关、语言切换、全屏、窄屏和 WASM 下载失败后的重试：

```sh
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-snake.mjs
```

设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 可复用相同流程验证线上版本。截图和报告保留在 `.verification/snake-local/` 或 `.verification/snake-live/`。实体手机和其余关卡未逐一验收。

## 缠绕的绳子

在线入口：<https://zhouhong1217.github.io/mini-games/games/rope-tangle/>。本地预览：<http://127.0.0.1:8766/games/rope-tangle/>。

点击「开始游戏」加载约 52 MB 的原版 Unity WebGL 资源。拖动绳索的圆形端点到空位，调整顺序和路线，解开交错的绳索；通过后点击 `NEXT` 进入下一关。游戏左上角 `↻` 重开当前关卡，外壳「重新加载」恢复最近进入的关卡。页面支持中英文说明、加载进度、失败重试、全屏及返回首页，游戏内保留原版英文。

WASM 和关卡数据保持原始字节，脚本适配错误回报、触屏事件和存档隔离，原广告 SDK 实现已移除；广告入口通过独立 `platform-adapter.js` 保留原回调，默认直接完成，可在该层接入新供应商。原版 Unity PlayerPrefs 保存在独立 IndexedDB `rope-tangle-4399-v1:/idbfs`。原游戏可能输出一条文件同步并发警告；验证脚本单独记录该已知警告，并实际检查保存和刷新恢复。关卡总数、其余关卡的完整通关和完整 Unity 源工程为 `Unknown`。

来源、哈希及验证范围见 [恢复记录](provenance/rope-tangle.md) 和 `provenance/rope-tangle.json`。原包保存在本机 `/Users/a/Documents/REA/output/4399_242335_2026-11-08/original/`。重建发布资源：

```sh
node scripts/build-rope.mjs ../4399_242335_2026-11-08/original
node scripts/verify-rope-platform.mjs
```

验收使用真实鼠标完成前两关，检查第 3 关刷新恢复、原版重开、触屏模拟首关、语言切换、全屏、390px 窄屏和 WASM 下载失败重试：

```sh
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-rope.mjs
```

设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 验证线上版本。截图和报告保存在 `.verification/rope-local/` 或 `.verification/rope-live/`。实体手机与其他浏览器未验收。

## 植物大战僵尸

在线入口：<https://zhouhong1217.github.io/mini-games/games/plants-vs-zombies/>。恢复自 4399 的 PopCap Flash 0.9 演示版，原版美术和塔防逻辑通过本地 Ruffle 运行。点击「开始游戏」，再选择游戏内 `CLICK TO START` 与 `START ADVENTURE`；点击植物卡片后在草地种植，点击阳光收集资源。

外壳支持中英文、全屏、失败重试及返回首页，游戏内保留原版英文。首次加载约 29 MB。原 MSN SDK 实现与购买跳转已清理，保留独立平台适配接口供以后接入新供应商。关卡进度及声音偏好存于当前浏览器，刷新会重新开始当前关卡；本地与线上存档分别保存。

启动严格子路径预览：

```sh
node scripts/serve-local.mjs --port 8793 --mount /mini-games/
```

访问 <http://127.0.0.1:8793/mini-games/games/plants-vs-zombies/>。重建、验收与已知边界见 [恢复工具](tools/plants-vs-zombies/README.md) 和 [恢复记录](provenance/plants-vs-zombies.md)。本构建是 Flash 演示版；未逐一验收其全部关卡和模式。

## 拆个毛线

在线入口：<https://zhouhong1217.github.io/mini-games/games/yarn-unravel/>。本地严格子路径预览：<http://127.0.0.1:8797/mini-games/games/yarn-unravel/>。

点击「开始游戏」，再点击原版菜单中的「开始游戏」。点击毛线团，按收集器颜色拆开图案并织出新的画面；奖励按钮在本地直接继续。原版中文画面与玩法保留，外壳支持中英文、全屏和失败重试。进度保存在当前浏览器，本地与线上分别保存。

原广告 SDK 和远程服务边界已移除，保留独立广告适配接口；排行榜显示当前浏览器的本地成绩。相同素材通过本地路径复用，游戏静态资源约 273 MB，按玩法和关卡逐步加载。已验证前两关、刷新恢复第 3 关、触屏操作与外网阻断；其余关卡和附加玩法未逐一验收。

恢复、重建与验证命令见[恢复工具](tools/yarn-unravel/README.md)，来源及边界见[恢复记录](provenance/yarn-unravel.md)。

## 第一次发布

### 1. 创建公开仓库

打开 <https://github.com/new?name=mini-games&visibility=public>。

- Owner：选择个人账户 `zhouhong1217`。
- Repository name：`mini-games`。
- Visibility：**Public**。
- README、.gitignore、License 均暂不添加，保留空仓库。
- 点击 **Create repository**。

创建完成后，仓库名称旁应显示 **Public**。仓库代码和资源将公开可下载。

### 2. 安装并登录 GitHub CLI

本机已安装 Homebrew。打开 macOS「终端」，执行：

```sh
brew install gh
gh auth login --hostname github.com --git-protocol https --web
gh auth setup-git
```

按照终端提示复制一次性验证码，在浏览器打开的 GitHub 页面输入，并授权 GitHub CLI。选择你创建仓库时使用的账号。终端要求按回车时再按回车；请逐条执行上述命令。

登录完成后，可执行 `gh auth status` 检查账号。密码和访问令牌不用发送给他人。

### 3. 上传项目

以下步骤用于本项目首次上传；项目目录已准备好，不需要手动移动游戏文件。

```sh
cd /Users/a/Documents/REA/output/mini-games-pages
git init -b main
git add .
git commit -m "feat: add mini game portal"
git remote add origin https://github.com/zhouhong1217/mini-games.git
git push -u origin main
```

如果账号或仓库名有变化，先替换远端地址。这里必须进入 `mini-games-pages` 目录，避免将其他分析材料上传。

首次推送可能因 Pages 尚未启用而导致部署任务失败，这是配置顺序造成的，继续下一步即可。若 `git push` 本身报错，则先解决登录、仓库地址或权限问题。

### 4. 启用 GitHub Pages

打开仓库 <https://github.com/zhouhong1217/mini-games>：

1. 点击仓库的 **Settings**，在左侧点击 **Pages**。
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 项目已提供工作流，无需另选网站模板。
4. 打开仓库 **Actions**，选择左侧 **Deploy GitHub Pages**。
5. 点击 **Run workflow**，分支选择 `main`，再点击 **Run workflow**。
6. 等待本次任务出现绿色勾号，然后返回 **Settings → Pages**，点击 **Visit site**。

仓库 URL 和 Pages 网站 URL 不同。按上述账号与仓库名称，默认网站地址预计为：

<https://zhouhong1217.github.io/mini-games/>

最终以 **Settings → Pages** 显示的地址为准。如果找不到 `Pages` 菜单，先确认打开的是仓库 Settings；如果提示升级，确认仓库是否设为 Public。若部署失败，查看 Actions 中失败步骤的日志，不需要开通 Pro。

### 5. 检查上线结果

- 首页显示六张游戏卡片，封面和文字正常。
- 六个入口均能进入游戏，游戏中的「返回小游戏乐园」可回到首页。
- 直接打开游戏链接并刷新，仍可以游玩。
- 分别游玩并刷新，当前浏览器的存档仍保留。

## 日后维护

网站文件在 `site/`；只有该目录会发布到 Pages，工作流位于 `.github/workflows/pages.yml`。

增加游戏：

1. 将能独立运行的静态游戏放进 `site/games/<game-id>/`，入口为 `index.html`，资源使用相对路径。
2. 封面放进 `site/assets/covers/`。
3. 在 `site/games.json` 数组中新增一项，填写 `id`、`title`、`subtitle`、`description`、`href`、`cover`、`coverAlt`、`tags`。需要英文卡片时在 `translations.en` 中填写英文标题、简介、封面说明和标签；省略时使用中文卡片回退。可复制现有一项后修改，`id` 保持唯一。
4. 游戏外层页面引入共享 `i18n.js`，使用 `PlaygroundI18n.withLanguage('../../')` 为返回链接保留语言；不同游戏的存档键应避免重名。新游戏内部语言需要单独适配，卡片翻译不会自动翻译新游戏的画面。
5. 本地预览确认后，在项目目录执行：

```sh
git add .
git commit -m "feat: update game collection"
git push
```

推送至 `main` 后自动部署。发布地址保持不变；公开仓库的历史提交也可以被访问。

## 验证

发布兼容性测试会临时启动本地静态服务器，模拟 `/mini-games/` 子路径，并使用 Chrome 验证真实游戏交互和存档。它不需要安装项目依赖；运行环境需要 Playwright 和 Chrome：

```sh
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-pages.mjs
```

双语验证包括浏览器语言、选择记忆、链接优先级、窄屏布局、实际首关操作、语言切换后的成绩保留，以及「化妆解压」的中文卡片回退和返回首页语言：

```sh
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-i18n.mjs
```

设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 可对已部署版本运行同一套验证。

《窄道停车》的独立验证会用真实键盘完成四页教程和首关三星，读取 Unity 原版 PlayerPrefs 验证成绩与第二关解锁，再检查刷新、存储隔离、全屏、语言切换和中英文窄屏布局。另在新浏览器上下文实际中断 WASM 下载，验证错误提示和重试恢复：

```sh
PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-parking.mjs
```

`verify-pages.mjs` 还会检查「化妆解压」的入口、延迟加载、真实就绪消息、相对路径、全屏、返回首页及窄屏外壳；这些检查不代表已完成游戏内流程。窄道停车的超时失败及重新挑战另有手动交互截图记录。发布完成后可设置上述 `PAGES_URL` 对线上版本复核，报告按本地与线上分别保留。

截图及验证报告生成在 `.verification/`，不会被提交或发布。该命令中的 Playwright 路径为当前制作电脑的已验证位置，其他电脑需设置自己的安装路径。

化妆游戏的完整鼠标流程及 15 位人物检查使用独立脚本（先启动本地静态服务）：

```sh
GAME_URL=http://127.0.0.1:8767/games/makeup-relaxation/game/ PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-makeup.mjs
GAME_URL=http://127.0.0.1:8767/games/makeup-relaxation/game/ PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs node scripts/verify-makeup-characters.mjs
```

已通过完整人物 01 的护理、化妆、结算和照片保存，以及 DIY、相册、暂停、声音、刷新存档和 15 人物各自的素材/工具检查。其余人物未逐一完整通关，实体手机与其他浏览器未验收。

《小鳄鱼爱洗澡》的英文游戏文案在 `scripts/patch-water-locale.mjs` 中维护，修改后执行 `node scripts/patch-water-locale.mjs` 重建。首次补丁核对原始脚本 SHA-256，重复执行会核对已接入的全部 57 条文案，不会重复包装或修改玩法。

《割绳子》的中文文案位于 `site/games/cut-the-rope/game/res/strings.json` 的 `zh` 字段。新增中文字形使用 [Noto Sans SC](https://github.com/google/fonts/tree/main/ofl/notosanssc) 栅格化，许可证随站点保存在 `res/lang/OFL-NotoSansSC.txt`。站点已包含生成后的 `font-zh.png` 和 `font-zh.dat`，部署时无需安装字体或运行构建。修改中文文案后，使用该字体重新生成字形：

```sh
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CJK_FONT_FILE=/path/to/NotoSansSC.ttf node scripts/build-ctr-locale.mjs
```

将示例路径替换为本机实际路径。此脚本需要 Chrome，会更新中文字形图集、字体数据和游戏资源清单中的文件大小；不会上传原始字体文件。更换字体时应同步保留对应字体许可。

## 存档和版权

存档保存在当前浏览器的当前网站来源中，不提供跨设备同步。本地地址与 GitHub Pages 地址之间不会自动迁移旧存档。

原游戏和素材版权归各自权利人所有。这个主页及部署配置不会改变原游戏素材的授权状态。

## 双人厨房

在线入口：<https://zhouhong1217.github.io/mini-games/games/double-kitchen/>。本地严格子路径：<http://127.0.0.1:8786/mini-games/games/double-kitchen/>。

保留原版 Cocos HTML5 的双人合作和双人对决。玩家 1 使用 `WASD`，玩家 2 使用方向键；移动到食物或餐盘前停下，按画面指引制作和上菜。游戏内为原版中文，外壳支持中英文、加载进度、重试、重新加载和全屏。钻石、皮肤与经营存档保存在当前浏览器，使用独立命名空间。

原广告 SDK 和平台服务已从发布副本移除；原奖励入口由独立本地适配层默认完成。重建、REA 证据、实际玩法验收及 `Unknown` 范围见[恢复记录](provenance/double-kitchen.md)。

## 这关很解压

页面入口：`site/games/level-relaxation/index.html`；Pages 地址：<https://zhouhong1217.github.io/mini-games/games/level-relaxation/>。启动默认本地预览后访问 <http://127.0.0.1:8766/games/level-relaxation/>。

单人纵屏解谜，跟随原版中文提示点击或拖动物品。外壳提供中英文说明、加载进度、失败重试、重新加载、全屏和返回首页；切换页面语言会保留正在运行的游戏。

已恢复原版 90 关配置及资源；进度保存在当前浏览器。原广告和远程平台实现已从发布副本删除，提示等奖励入口由独立适配层默认完成。重建、实际玩法验收、来源和 `Unknown` 范围见[恢复记录](provenance/level-relaxation.md)。

## 穿回古代当首富

在线入口：<https://zhouhong1217.github.io/mini-games/games/ancient-tycoon/>。严格子路径本地预览：<http://127.0.0.1:8801/mini-games/games/ancient-tycoon/>。

点击「开始游戏」后，拖动摇杆移动人物，靠近物品自动拾取；站到标记处建造、补货或收钱，从第一笔铜钱和韭菜小摊开始经营。原版中文界面、3D 场景、动画和音效保留；页面说明支持中英文，支持鼠标及触屏、全屏与加载失败重试。静态资源约 66 MB，按玩法逐步加载。

游戏进度保存在当前浏览器，离开页面时保存；本地预览与线上版本分别存档。清除网站数据会删除相应进度。原广告 SDK、云存档及远程排行榜实现已移除，原奖励入口通过独立适配层默认直接完成。本地排行榜仅显示当前浏览器成绩，竞技人物标明为本地 NPC。

启动和验证命令：

```sh
node scripts/serve-local.mjs --port 8801 --mount /mini-games/
node scripts/verify-tycoon-platform.mjs
node scripts/verify-tycoon.mjs
```

Playwright 位置可通过 `PLAYWRIGHT_MODULE` 指定；设置 `PAGES_URL=https://zhouhong1217.github.io/mini-games/` 可验收线上版本。恢复来源、重建命令、REA 证据、实际验收及后期玩法的 `Unknown` 范围见[恢复记录](provenance/ancient-tycoon.md)与[恢复工具](tools/ancient-tycoon/README.md)。

# 小游戏乐园

中文小游戏主页，包含「小鳄鱼爱洗澡」和「割绳子」。使用公开仓库和 GitHub Pages 免费发布，无需 GitHub Pro、付款方式或后端服务。

## 本地预览

在终端执行：

```sh
cd /Users/a/Documents/REA/output/mini-games-pages
python3 -m http.server 8766 --bind 127.0.0.1 --directory site
```

浏览器打开 <http://127.0.0.1:8766/>。按 `Ctrl+C` 停止服务。不要通过 `file://` 打开网页。

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

- 首页显示两张游戏卡片，封面和文字正常。
- 两个入口均能进入游戏，游戏中的「返回小游戏乐园」可回到首页。
- 直接打开游戏链接并刷新，仍可以游玩。
- 分别游玩并刷新，当前浏览器的存档仍保留。

## 日后维护

网站文件在 `site/`；只有该目录会发布到 Pages，工作流位于 `.github/workflows/pages.yml`。

增加游戏：

1. 将能独立运行的静态游戏放进 `site/games/<game-id>/`，入口为 `index.html`，资源使用相对路径。
2. 封面放进 `site/assets/covers/`。
3. 在 `site/games.json` 数组中新增一项，填写 `id`、`title`、`subtitle`、`description`、`href`、`cover`、`coverAlt`、`tags`。可复制现有一项后修改，`id` 保持唯一。
4. 游戏外层页面添加返回 `../../` 的链接；不同游戏的存档键应避免重名。
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

截图及验证报告生成在 `.verification/`，不会被提交或发布。该命令中的 Playwright 路径为当前制作电脑的已验证位置，其他电脑需设置自己的安装路径。

## 存档和版权

存档保存在当前浏览器的当前网站来源中，不提供跨设备同步。本地地址与 GitHub Pages 地址之间不会自动迁移旧存档。

原游戏和素材版权归各自权利人所有。这个主页及部署配置不会改变原游戏素材的授权状态。

# 80亿分之1：本地静态版

基于公开发布的 0.9.66 前端，保留原作者界面、模拟和素材；这不是作者原始工程。原站为 <https://1in8b.life/>。静态分发文件支持本地 HTTP 及 GitHub Pages，记录始终保存在浏览器本地。Pages 入口为 <https://zhouhong1217.github.io/mini-games/games/1in8b/>；从本地预览迁移时须导出并导入备份。

## 来源与构建

原始文件单独保存在 `/Users/a/Documents/REA/output/1in8b_2026-11-09/original`，同级 `acquisition.json` 记录逐文件 URL、大小、SHA-256。共 808 个静态文件（219,223,850 字节），包括 19 个语言版本、延迟模块、时代数据、字体及更新记录。另保留 18 种语言的国家统计总表，简中沿用原版 `zh/c/` 回退；辅助总表版本为 `Unknown`，不冒称游戏版本。原始资料不放入 `site/`。

重新采集：

```sh
python3 tools/1in8b/acquire.py --help
```

构建工具使用固定版本 Acorn 解析语法树，按函数/变量边界替换适配代码，逐文件校验原始哈希，并重新解析生成结果。页面运行无需 npm 包或外部服务器。

```sh
npm ci --prefix tools/1in8b --ignore-scripts
node scripts/build-1in8b.mjs /Users/a/Documents/REA/output/1in8b_2026-11-09
```

`provenance/1in8b.json` 记录原始与分发哈希、大小及被替换的符号。重建同时应用相同清理，避免重新引入原支付或服务器代码。

## 本地能力

影片、相簿、照片和记录集沿用客户端生成实现；原付款、退款、邮箱激活和通行证校验被替换为独立本地能力判断，不产生购买凭证。已有装扮内容可直接使用。游戏内的虚拟消费、剧情及统计数据保持原实现。

追思馆、房间及前世之家通过独立 IndexedDB 档案读写；村落和书架保留本地记录。原社区、自动云端保管、公共分享和统计服务不提供。分享追思馆使用本地备份文件，而非可供他人公开访问的服务器网址。

语言包括 `en/ko/ja/zh/zh-hans/vi/fr/th/es/de/pt/ru/tr/id/it/ar/fa/uk/pl`。保留原繁简中文字体差异、`ar/fa` 的根节点 RTL 方向和原语言间存档规则。小游戏乐园语言与游戏语言分开保存。

所有 localStorage 和 IndexedDB 使用 `mini-games:1in8b:v1:` 前缀；localStorage 的枚举与清理仅限本游戏。原版存储不足时淘汰旧历史的逻辑已移除，写入失败会保留已有历史。备份包括进度、各语言历史、追思馆、布置和偏好；损坏文件先拒绝，合并保留已有冲突，失败时回滚本次新增。导入时暂停游戏并冻结旧页面写回，完成后刷新。

## 本地启动

```sh
node scripts/serve-local.mjs
```

小游戏乐园：<http://127.0.0.1:8766/>；游戏：<http://127.0.0.1:8766/games/1in8b/>。

严格模拟未来 Pages 子路径：

```sh
node scripts/serve-local.mjs --mount /mini-games/
```

游戏：<http://127.0.0.1:8766/mini-games/games/1in8b/>。不要用 `file://` 打开。

## 验证方法与边界

测试使用 Chrome 和 Playwright；`PLAYWRIGHT_MODULE` 指向已安装的 `playwright-core/index.mjs`，`CHROME_PATH` 可覆盖 Chrome 路径。服务启动后执行：

```sh
export PLAYWRIGHT_MODULE=/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs
node scripts/verify-1in8b.mjs
node scripts/verify-1in8b-media.mjs
node scripts/verify-1in8b-archive.mjs
node tools/1in8b/verify-local-store.mjs
```

媒体测试的真实人生样本由 `tools/1in8b/verify-original.mjs` 在原始快照上生成，保存到忽略目录 `.verification/1in8b-original/`；原始预览服务地址由 `ORIGINAL_URL` 指定。测试使用原生出生、时间推进和自动决定生成完整人生，不直接伪造年龄或结局。媒体及档案测试仅回放该已生成记录。

本次所有浏览器验收都阻断外部 HTTP 请求，报告和截图位于 `.verification/1in8b-*`。基础验收 28 项、媒体验收 8 项、档案验收 9 项均已通过；核心浏览器场景没有页面异常、404、外部请求或原站 API 请求。已实际生成并播放 720×1280、约 102 秒的 MP4，导出 14 页相簿 PDF、照片、HTML 记录集和 CSV，并完成备份恢复。独立存储测试还覆盖损坏文件拒绝、配额/事务失败回滚、队列等待和并发互斥。愿望问答本轮验证入口及三段成年人生的原版门槛，未伪造额外人生绕过门槛。详细结果以对应 `report.json` 为准。未逐一覆盖所有随机事件、所有人生分支、每种语言的所有导出组合、实体手机或其他浏览器；这些行为的完整等价性为 `Unknown`。媒体格式取决于浏览器自身的 MediaRecorder 支持，打印/PDF 使用浏览器打印能力。

最后复查覆盖全部 38 个静态 HTML 页面的本地链接与 811 个分发文件哈希，并在严格 `/mini-games/` 挂载下打开 18 个国家统计总表和 5 个主要语言游戏页面；缺失链接、页面异常、404、外部及原站接口请求均为零。统计总表保留全部数值，未收录的国家详情不提供链接。追思馆列表和详情标注仅存于本浏览器，不再显示公共网址复制或举报入口。复查记录为 `.verification/1in8b-final/report.json`；档案验收在此轮界面清理后再次通过。

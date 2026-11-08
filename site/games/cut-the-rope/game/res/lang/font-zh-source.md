# 中文位图字形来源

新增中文字形来自 Google Fonts 官方分发的 Noto Sans SC，遵循 SIL Open Font License 1.1；原始许可证见同目录 `OFL-NotoSansSC.txt`。原游戏已有拉丁及其他文字字形保持原素材。网页仅分发新生成的 `font-zh.png` 与 `font-zh.dat`，不分发源 TTF。

- 官方来源：https://github.com/google/fonts/tree/main/ofl/notosanssc
- 源文件：https://raw.githubusercontent.com/google/fonts/main/ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf
- 本次源 TTF 的 SHA-256：`a3041811a78c361b1de50f953c805e0244951c21c5bd412f7232ef0d899af0da`
- 重建工具：仓库 `scripts/build-ctr-locale.mjs`，需要 Node.js、Playwright Core、Chrome 和源字体；用 `PLAYWRIGHT_MODULE`、`CHROME_PATH`、`CJK_FONT_FILE` 指定路径。

在仓库根目录运行：

    PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROME_PATH=/path/to/chrome CJK_FONT_FILE=/path/to/NotoSansSC.ttf node scripts/build-ctr-locale.mjs

脚本从 `strings.json` 的全部 `zh` 文案收集字符，添加 ASCII，保留 11 份字体索引及原有字形，生成带透明度的 PNG，并更新引擎的字体资源字节数。语言切换沿用 `CTR` 存档键。

# 化妆解压模拟恢复工具

本目录从保留的 Cocos Creator 3.8.6 网页发布包生成中文、无广告、可静态托管的副本。完整原包不重复提交；每个原始文件的路径、大小和 SHA-256 固定在 [来源清单](../../provenance/makeup-relaxation.json)，恢复范围见 [恢复记录](../../provenance/makeup-relaxation.md)。这不是原始 Cocos 编辑器工程。

## 环境与目录

需要 Python 3.10+，以及 Node.js `^22.18.0 || >=24.11.0`。制作环境实际使用 Python 3.14.6、Node.js 24.22.0、`@babel/parser` 8.0.4。下载器仅使用 Python 标准库；构建器使用 Node.js 标准库和固定版本的 Babel parser。

以下命令均在仓库根目录执行。默认原包缓存为 `.verification/makeup-relaxation/artifacts/`，下载及构建证据为 `.verification/makeup-relaxation/evidence/`；`.verification/` 已在仓库 `.gitignore` 内。缓存和证据不进入 Pages，工作流只发布 `site/`。

## 下载与重建

```sh
npm ci --prefix tools/makeup-relaxation --ignore-scripts
python3 tools/makeup-relaxation/download_original.py
node tools/makeup-relaxation/build_local.mjs
```

下载器按四个 bundle 的 `config`、导入 pack、native 元数据和引擎字面量依赖收集文件，校验 JSON/图片/WASM 类型及已固定的 SHA-256。已有文件只读核验，源站发生变化时拒绝将新内容当作本次原包。默认不重试历史 403/404；需要再次检查压缩纹理候选时使用 `--retry-failed`。`--phase scripts` 或 `--phase imports` 仅用于分阶段诊断，不能视为完整获取通过。

构建输出默认是 `site/games/makeup-relaxation/game/`。构建前逐一校验 2,061 项原文件，再复制资源、裁剪 SDK、改写已核实的入口及广告分支，生成 `local-patches.json` 和包含全部输出哈希的 `build-manifest.json`。任何固定资源缺失或不匹配都会终止构建。

已有外部原包时，用 `--artifacts` 指定真实目录即可。可将下载、生成目录及证据全部放在独立缓存中；以下命令不会改动 `site/`：

```sh
python3 tools/makeup-relaxation/download_original.py --cache-root .verification/makeup-test
python3 tools/makeup-relaxation/download_original.py --verify-only --cache-root .verification/makeup-test
node tools/makeup-relaxation/build_local.mjs --artifacts .verification/makeup-test/artifacts --output .verification/makeup-test/game --evidence .verification/makeup-test/build-evidence
```

`--verify-only` 不访问网络。构建器另支持 `--manifest`；只有审阅并固定新版本原文件清单后才应替换该参数。已有 parser 安装可通过环境变量 `BABEL_PARSER_MODULE` 指向它的 `lib/index.js`，正常重建优先使用本目录锁定的依赖。

## 本地启动

```sh
python3 tools/makeup-relaxation/serve.py --port 8767
```

打开 <http://127.0.0.1:8767/games/makeup-relaxation/> 使用平台外壳，或 <http://127.0.0.1:8767/games/makeup-relaxation/game/> 直接启动游戏。服务仅绑定 `127.0.0.1`，`Ctrl+C` 停止。通过 `--directory .verification/makeup-test/game` 可以单独预览临时重建，入口相应为 <http://127.0.0.1:8767/>。不要通过 `file://` 启动。

## 工具职责

| 文件 | 职责 |
| --- | --- |
| `download_original.py` | 收集四个 bundle、动态资源、字体、音频、WASM、`._cconb.dbbin`；保存获取失败和资源闭包记录 |
| `build_local.mjs` | 核对原始 SHA-256，生成相对路径静态入口，裁剪广告/推广/统计模块，生成补丁和输出清单 |
| `local-runtime.js` | 为游戏存储加前缀；桥接加载状态；隐藏残留广告标记；提供只读场景观察入口 |
| `serve.py` | 从指定目录提供本地 HTTP 静态服务 |

运行时统一使用 `makeup-relaxation-4399-v1:` 存档前缀，清理接口只删除这个前缀下的键。浏览器存储不可用时退回内存，这种情况下刷新不会保留存档。原版保存人物解锁、声音设置和相册照片；原版没有护理中途进度保存。相册照片是外观节点及资源 UUID 的存档，不是下载 PNG。

## 验证与发布边界

脚本语法和资源哈希、两次独立重建的一致性可自动验证；这些检查不代替鼠标完成护理、化妆、结算和相册的验收。主任务须补齐恢复记录中的运行验证表，确认 15 位人物可进入、外网被阻断时玩法可继续、路径和既有游戏回归通过后，才能提交并复用现有 Pages 工作流发布。

源站当日有三种声明的 GPU 压缩纹理变体返回 404，同一图集 PNG 已获得；构建只把该图集格式声明改为 PNG。源站未来可用性为 `Unknown`，已保留的本地原包和固定哈希仍可用于离线重建。游戏素材及封面的再分发许可为 `Unknown`，公开可获取不等于已取得许可。

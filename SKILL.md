---
name: readme-polish
description: "审计、重构和优化 GitHub / npm 等开源项目的 README，使之符合高星项目的现代信息架构并提升搜索与 AI 可发现性：居中标题区、badge 栏、导航、Features 清单、首屏快速安装、折叠式参考内容、FAQ、License，支持中英双语拆分与关键词 SEO，并用脚本校验锚点、图片和语言互链。当用户要求改写/优化/润色/重构 README、让 README 更易懂、参考高星热门项目 README、做 README 或 npm 包 SEO、新增英文版或中英双语、诊断 README 问题时使用。"
---

# Readme Polish

## Overview

把现有 README 重塑为「10 秒可扫读、深度可折叠、搜索可命中」的现代开源项目门面。只重组和呈现项目已有事实，不发明功能、链接、版本号或数据；原有信息默认只搬不删。

## Workflow

### 1. 审计输入

先读全量上下文，不要急于动笔：

- 现有 README：标记缺失的 H1、导航、Features、FAQ、License，以及文字墙、埋得太深的安装命令、混排的语言。
- 包元数据：`package.json` / `pyproject.toml` / `Cargo.toml` / `go.mod` 等，记录名称、版本、description、keywords、files 清单、仓库地址。
- 素材盘点：banner、截图、logo、CI workflow、LICENSE 是否存在；截图 alt 与 caption 现状。
- 项目事实库：安装命令、配置项、端口/默认值、限制、安全模型——这些是改写时唯一允许使用的事实来源。

### 2. 就关键分叉向用户确认

存在实质分叉时用 `interaction.ask` 一次问清，每题给推荐项：

- **语言策略**：英文默认双语（`README.md` 英文 + `README.zh-CN.md` 中文，国际 SEO 最佳）／中文默认双语（`README.md` 中文 + `README.en.md` 英文）／仅重构单语。若宿主项目已有文档语言约定（如 `.zh.md` 配对），跟随该约定。
- **是否同步改包元数据**（description / keywords / files）：推荐一并优化，但须声明其余字段不动。

### 3. 按现代结构重构

以 `references/structure-template.md` 的骨架落地，要点：

- 首屏（约 40 行内）依次出现：居中 H1 项目名 → 一句含主关键词的副标题 → badge 栏（4–5 枚）→ 语言切换 → 点式导航 → banner/hero 图 → 2–3 句价值主张首段。
- 安装命令必须裸眼可见、可直接复制，禁止折叠或要求跳转外部文档。
- Features 用 5–8 条「emoji + 加粗特性名 + 一句价值」的可扫描清单；能力点从原文散落处提炼，不新增能力。
- 参考型内容（替代安装方式、实现细节、端口/内部机制、文件结构、维护者说明）收进 `<details>`；每节最多一个 GitHub alert（`> [!NOTE/TIP/WARNING/CAUTION]`），不滥用。
- 排坑信息集中为 FAQ，H3 用用户会搜索的问句；答案 answer-first，第一句给结论。
- 底部放独立 License 节与回到顶部链接。

### 4. 做 SEO 与分发优化

按 `references/seo-checklist.md` 执行。核心位置：H1 副标题、首段前 160 字符、问句式 H2/H3、Features 条目、图片 alt、代码注释。自然出现、禁止关键词堆砌。

包管理器侧：重写 description（理想约 128 字符、硬限 350）、扩充 keywords、确认 README 与 README 引用图片都在发布 files 清单内（npm 用 `npm pack --dry-run` 验证）。仓库侧的 About、Topics 无法用文件修改，在交付说明中提醒用户手动设置并给出建议标签。

### 5. 处理双语（若选择双语）

- 两份文件结构、badge、导航、章节顺序严格平行，事实与版本边界一致，同批修改防止漂移。
- 每份文件顶部放语言切换行：当前语言纯文本，另一语言为相对链接。
- 锚点各自遵循目标语言的 GitHub slug 规则；同一小节在两种语言里可以使用各自自然的标题，不必逐字直译标题。
- 把新增的语言文件和 README 引用到的图片加入包发布清单，否则 npm 页面互链 404、图片裂图。

### 6. 遵守写作护栏

- 事实闭环：所有命令、默认值、路径、限制、端口号只能来自现有 README 或仓库代码；不确定就去读代码核实，绝不编造 URL（尤其不要给项目名硬套官网链接）。
- 版本号示例用 `<version>` 占位，不写死当前小版本，避免文档随发版过时。
- H2/H3 标题保持同一大小写风格；标题内不放 emoji 和全角标点，保证锚点干净（emoji 只用于 Features 条目前缀）。
- 营销词需要证据支撑：「快」「轻量」要配具体数字或对比，否则改写为可验证的事实陈述。
- badge 控制在 5–6 枚内，优先版本、下载量、license、运行时、stars；只在 tag/发版触发的 CI 不宜挂常驻状态 badge。
- 截图 caption 精简为 1–2 句，细节移到正文表格或 FAQ；每张图写描述性 alt（含关键词，但不堆砌）。
- 不删除故障排查、安全说明、已知限制等内容，只做迁移与折叠。

### 7. 校验与交付

1. 运行 `node scripts/check_readme.mjs <项目目录>`（默认当前目录）：校验全部 README 变体的内部锚点、本地图片路径、语言互链；报错必须修到退出码为 0。
2. 有包发布时跑对应的 dry-run（如 `npm pack --dry-run`）确认 README、语言文件、图片都在 tarball 内。
3. 提醒用户推送到分支后在 GitHub 实际渲染确认：alert、`<details>`、中文锚点、移动端表格溢出，本地预览器不可信；逐条点击导航链接。
4. 未经用户明确确认不执行 `git commit`/`push`；即使被要求提交，也先展示 `git status` 与拟定的 commit message，精确 `git add` 相关文件；除非用户明确要求，否则不创建、不推送 tag（tag 可能触发发版 CI）。

## Common Pitfalls

- **无 H1 或首段空泛**：以「This is a…/这是一个简单的…」开场浪费 SEO 价值最高的位置；直接讲能力与受益对象。
- **导航锚点断裂**：emoji、全角括号、标点会改变 GitHub slug；用校验脚本兜底，不要肉眼假设。
- **安装路径被折叠或外链替代**：这是转化率最高的区块，任何折叠都不行。
- **中英混排**：开头一段英文、正文全中文会让国际受众跳出；要么单语做透，要么双语拆分互链。
- **badge 失效或噪音**：shields.io 包名/仓库名大小写敏感；超过 6 枚即为噪音。
- **相对路径图片漏发**：README 引用的图片若不在 files 清单，npm 页面裂图。
- **折叠真实风险信息**：安全提示、关键警告可以用 alert 强调，但不能藏进折叠区。
- **把 Roadmap 写成已交付**：未接线的能力必须标注版本边界，不夸大当前行为。

## Resources

- `references/structure-template.md`：完整中英 README 骨架、逐区块写法、折叠策略表、shields.io badge 速查、截图与 alt 规范。重构时读取。
- `references/seo-checklist.md`：关键词研究与布局位置、npm/GitHub 元数据清单、AI 引用优化、双语文件命名、发布前核对表。做 SEO 或双语时读取。
- `scripts/check_readme.mjs`：Node 原生脚本（无第三方依赖），发现目录下 `README*.md`，校验锚点 slug、本地图片存在性、语言文件互链，发现问题以退出码 1 失败。交付前必须运行。

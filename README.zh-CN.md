<div align="center">

# Readme Polish

**一个 agent 技能：审计、重构并打磨开源项目 README，使其成为现代、可扫读、SEO 友好的项目门面 —— 支持中英双语拆分、npm/GitHub 可发现性优化，并附带校验脚本。**

中文 · [English](./README.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/kuwork/readme-polish?style=flat)](https://github.com/kuwork/readme-polish)
[![Node >= 18](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org)
[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-8A2BE2)](https://agentskills.io)

[✨ 特性](#特性) · [🚀 快速开始](#快速开始) · [⚙️ 工作方式](#工作方式) · [🧪 校验脚本](#校验脚本) · [❓ FAQ](#faq) · [📄 License](#license)

</div>

README 是项目的门面：访客用大约 10 秒决定要不要继续看，搜索引擎和 AI 编程助手则根据首屏信息决定如何给你的项目排名。这个技能把一堵文字墙式的 README 重塑为现代结构：首屏 10 秒可扫读、深度内容可折叠、关键词落在真正影响发现的位置——全程不虚构任何项目事实。

## 特性

- 🔍 **先审计后动笔** — 改写前通读现有 README、包元数据（`package.json` / `pyproject.toml` / `Cargo.toml` / `go.mod`）与仓库事实库
- 🏗️ **现代信息架构** — 居中标题区、badge 栏、点式导航、emoji + 加粗特性名的 Features 清单、裸眼可见可直接复制的安装命令、参考内容收入 `<details>`
- 🌐 **双语拆分** — `README.md`（英文）+ `README.zh-CN.md`（中文）严格平行，各自遵循 GitHub 锚点规则，互链在 npm 页面不 404
- 🎯 **npm 与 GitHub SEO** — 关键词布局位置图、description/keywords 改写指引、AI 引用优化、发布前核对表
- 🛡️ **事实护栏** — 绝不编造 URL、版本号、端口和功能；不确定的事实回读代码核实，营销措辞必须有数字支撑
- ✅ **交付前校验** — 零依赖 Node 脚本校验锚点、本地图片与语言互链，退出码必须为 0

## 快速开始

把这个文件夹复制到你的 agent 技能目录：

```bash
# Kimi Code / Claude Code 用户级技能目录
cp -r readme-polish ~/.agents/skills/
```

然后在任意支持的 agent 里直接说：

> 按照 readme-polish 技能，重构并优化这个项目的 README。

<details>
<summary><b>项目级安装与其他 agent</b></summary>

- **项目级（随 git 共享）**：复制到 `.kimi/skills/readme-polish/`（或你所用 agent 对应的项目技能目录）并提交，团队成员 clone 后即可使用。
- **不使用 agent，纯手动**：把 `SKILL.md` 当清单读，手工套用 `references/structure-template.md` 与 `references/seo-checklist.md`。

</details>

## 工作方式

技能本体（`SKILL.md`）驱动 7 步工作流：

1. **审计** — 盘点现有 README、包元数据与仓库事实（唯一允许的事实来源）
2. **确认分叉** — 询问语言策略（英文默认双语 / 中文默认双语 / 单语）以及是否同步优化包元数据
3. **重构** — 按 `references/structure-template.md` 的骨架落地：标题区 → badge → 导航 → 价值主张 → 安装 → Features → 可折叠深度内容 → FAQ → License
4. **SEO** — 执行 `references/seo-checklist.md`：标题/H1/首段前 160 字符的关键词布局、npm description 与 keywords、AI 可发现性
5. **双语处理** — 文件严格平行、顶部语言切换行、各语言按各自的 GitHub slug 规则生成锚点
6. **写作护栏** — 事实闭环、`<version>` 占位、badge 数量上限、营销词需证据
7. **校验交付** — 运行校验脚本与 `npm pack --dry-run`；必须在 GitHub 实际渲染确认后才算完成

## 校验脚本

`scripts/check_readme.mjs` 是一个零依赖 Node 脚本，发现目录下所有 `README*.md` 变体，以下问题会以退出码 1 失败：

- 内部锚点断裂（按 GitHub slug 规则计算，含中文处理）
- README 引用的本地图片不存在
- 语言变体之间的互链失效

```bash
node scripts/check_readme.mjs ./your-project
```

## ❓ FAQ

### 支持哪些 agent？

任何支持 SKILL.md 约定的 agent（Kimi Code、Claude Code、Codex 及兼容运行时）。不依赖任何厂商私有 API；工作流中的 `interaction.ask` 在非 Kimi 环境下按普通「向用户确认」指令执行。

### 会不会给我的项目编造功能或链接？

不会。核心护栏是事实闭环：命令、默认值、端口、限制只能来自现有 README 或代码。不确定的事实会回读代码核实，绝不发明——尤其是 URL。

### 会改我的包元数据吗？

只在获得你明确确认后修改，且只动 `description` / `keywords` / `files`，其余字段一律不碰。

### 可以只用清单或只用脚本吗？

可以。两份参考文件本身就是可独立阅读的 README 风格指南与 SEO 清单；校验脚本不依赖技能运行时，对任何项目单独可用。

## License

[MIT](./LICENSE) — 提示词、参考文件与脚本均可自由复用，agent 内或手动使用皆可。

<div align="right"><a href="#readme-polish">↑ 回到顶部</a></div>

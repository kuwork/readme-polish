# README Structure Template

## 目录

- [区块顺序总览](#区块顺序总览)
- [中文骨架（可复制）](#中文骨架可复制)
- [英文骨架（可复制）](#英文骨架可复制)
- [逐区块写法要点](#逐区块写法要点)
- [折叠策略表](#折叠策略表)
- [Badge 速查](#badge-速查)
- [截图与 alt 规范](#截图与-alt-规范)

## 区块顺序总览

| # | 区块 | 是否可折叠 | 关键约束 |
|---|---|---|---|
| 1 | 顶部锚点 + 居中 Header（H1、副标题、badge、语言切换、导航） | 否 | 首屏 40 行内出现安装入口 |
| 2 | Hero/banner 图 + 价值主张首段（2–3 句） | 否 | 前 160 字符含主关键词 |
| 3 | 链接集合 NOTE | 否 | npm/仓库/文档/官网一行业内链接 |
| 4 | Features 功能亮点 | 否 | 5–8 条，emoji+粗体名+一句价值 |
| 5 | 这是什么 / 背景与定位 | 否 | 讲清问题、受众、与上游项目关系 |
| 6 | 快速安装/Quick Start | 否 | 唯一推荐路径，命令裸眼可见 |
| 7 | 截图预览 | 否 | caption 1–2 句，alt 描述性 |
| 8 | 核心概念/入口/能力表 | 否 | 表格优先于长段落 |
| 9 | 其他安装方式、发版机制 | 是 | 仅推荐路径留在外面 |
| 10 | 前置条件/依赖自动安装 | 视情况 | 关键警告用 WARNING alert，不折叠 |
| 11 | 配置参考 | 否（表）/长示例可折叠 | 键、默认值、说明三列起步 |
| 12 | 工作原理/内部机制 | 是 | 排错需要时能找到即可 |
| 13 | FAQ | 否 | H3 问句，答案第一句给结论 |
| 14 | 已知限制 | 否或折叠 | 安全相关不藏；普通限制可折叠 |
| 15 | 安全说明 | 否 | 用 CAUTION alert |
| 16 | 文件结构 | 是 | 代码块包进 details |
| 17 | License | 否 | 独立成节并链接 LICENSE 文件 |
| 18 | 回到顶部 | 否 | 右下角链接 `#readme-top` |

## 中文骨架（可复制）

```markdown
<a id="readme-top"></a>

<div align="center">

# 项目名

### 一句话副标题（含主关键词，讲清是什么、为谁解决什么）

一句更短的卖点补充。

[![npm version](https://img.shields.io/npm/v/包名?logo=npm&label=npm)](https://www.npmjs.com/package/包名)
[![npm downloads](https://img.shields.io/npm/dm/包名?logo=npm)](https://www.npmjs.com/package/包名)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![node](https://img.shields.io/badge/node-%E2%89%A5%2020-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![GitHub stars](https://img.shields.io/github/stars/owner/repo?logo=github)](https://github.com/owner/repo/stargazers)

简体中文 ｜ [English](README.en.md)

[功能亮点](#功能亮点) ·
[快速安装](#快速安装) ·
[截图预览](#截图预览) ·
[可选配置](#可选配置) ·
[常见问题](#常见问题-faq) ·
[已知限制](#已知限制)

</div>

![含关键词的描述性 alt](docs/banner.png)

**项目名** 是……（2–3 句：做什么、给谁用、解决什么问题、差异化机制，主/次关键词自然出现在前 160 字符）。

> [!NOTE]
> npm 包：[…]() ｜ 仓库：[…]() ｜ 文档：[…]() ｜ CLI：`安装命令`

## 功能亮点

- 🧩 **特性名**：一句话说明具体能力与收益，不写空泛形容词。
- 🚀 **特性名**：……（5–8 条，每条一个可验证事实）

## 这是什么

背景段落 + 上游/依赖项目定位，说明本项目与它的边界（例如「不修改 X，只是宿主 UI」）。

## 快速安装

一行命令装好，刷新/重启即可：

​```sh
推荐安装命令
​```

界面安装等替代路径一句话带过，详见[安装方式](#安装方式)。需要固定版本写 `包名@<版本号>`。

> [!TIP]
> 验证安装：可复制的验证命令与成功判据。

## 截图预览

![描述性 alt](docs/screenshot-1.jpg)

*一到两句 caption：画面是什么、关键元素在哪。*

## 核心入口（或能力对照表）

| 位置/对象 | 能做什么 |
|---|---|
| **加粗对象** | 简明说明 |

## 安装方式

<details>
<summary><b>从 GitHub 安装</b></summary>

​```sh
命令
​```

</details>

<details>
<summary><b>本地路径安装（开发调试用）</b></summary>

​```sh
命令
​```

</details>

## 可选配置

​```yaml
# 完整可复制的配置示例
​```

| 键 | 默认值 | 说明 |
|---|---|---|
| `key` | `default` | 一行说明 |

## 工作原理

<details>
<summary><b>机制标题</b></summary>

编号步骤或要点，供排错时阅读。

</details>

## 常见问题 FAQ

### 用户会原样搜索的问句标题？

第一句直接给结论，再补命令或解释。

## 已知限制

- **限制点（加粗）**：影响与规避方式。

## 安全说明

> [!CAUTION]
> 以什么权限运行、访问什么资源、不做什么（不联网/无凭据）、审计入口是哪几个文件。

## 文件结构

<details>
<summary>查看仓库布局</summary>

​```
文件树与逐行注释
​```

</details>

## 许可证

基于 [MIT License](LICENSE) 开源。

<p align="right"><a href="#readme-top">↑ 回到顶部</a></p>
```

## 英文骨架（可复制）

```markdown
<a id="readme-top"></a>

<div align="center">

# project-name

### One-line subtitle with the primary keyword: what it is and who it is for

One shorter supporting tagline.

[![npm version](https://img.shields.io/npm/v/pkg?logo=npm&label=npm)](https://www.npmjs.com/package/pkg)
[![npm downloads](https://img.shields.io/npm/dm/pkg?logo=npm)](https://www.npmjs.com/package/pkg)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![node](https://img.shields.io/badge/node-%E2%89%A5%2020-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![GitHub stars](https://img.shields.io/github/stars/owner/repo?logo=github)](https://github.com/owner/repo/stargazers)

[简体中文](README.md) ｜ English

[Features](#features) ·
[Quick Start](#quick-start) ·
[Screenshots](#screenshots) ·
[Configuration](#configuration) ·
[FAQ](#faq) ·
[Known Limitations](#known-limitations)

</div>

![Descriptive alt containing keywords](docs/banner.png)

**project-name** is a … (2–3 sentences: capability, audience, problem solved, differentiating mechanism; primary and secondary keywords within the first 160 characters).

> [!NOTE]
> npm: […]() ｜ Repo: […]() ｜ Docs: […]() ｜ CLI: `install command`

## Features

- 🧩 **Feature name** — one sentence on the concrete capability and payoff, no vague adjectives.
- 🚀 **Feature name** — … (5–8 items, each a verifiable fact)

## What It Is

Background paragraph and upstream/dependency positioning, including the boundary with that project (e.g. "does not modify X; it is only a host UI").

## Quick Start

Install with one command, then refresh/restart:

​```sh
recommended install command
​```

Pin a version with `pkg@<version>`. Alternatives: [Installation Options](#installation-options).

> [!TIP]
> Verify with a copy-pasteable command and its success criterion.

## Screenshots

![Descriptive alt](docs/screenshot-1.jpg)

*One or two sentences: what the screen shows and where the key elements are.*

## Entry Points

| Location | What you can do there |
|---|---|
| **Bold object** | Concise description |

## Installation Options

<details>
<summary><b>Install from GitHub</b></summary>

​```sh
command
​```

</details>

## Configuration

​```yaml
complete copy-pasteable example
​```

| Key | Default | Description |
|---|---|---|
| `key` | `default` | One-line description |

## How It Works

<details>
<summary><b>Mechanism title</b></summary>

Numbered steps for troubleshooting readers.

</details>

## FAQ

### Question a developer would actually type into search?

Lead with the answer in the first sentence, then the command or explanation.

## Known Limitations

- **Bold limitation** — impact and workaround.

## Security

> [!CAUTION]
> Permissions it runs with, resources it touches, what it never does (no network / no credentials), and which files to audit.

## Project Structure

<details>
<summary>Show repository layout</summary>

​```
file tree with inline comments
​```

</details>

## License

Released under the [MIT License](LICENSE).

<p align="right"><a href="#readme-top">↑ Back to top</a></p>
```

## 逐区块写法要点

- **H1 与副标题**：H1 只用项目名；副标题一句话包含主关键词，避免「A simple…/这是一个简单的…」式浪费开场。
- **首段**：回答「做什么、给谁、解决什么问题、怎么做到」四件事；主关键词在前 160 字符自然出现一次，次级关键词散布后文。
- **Features**：每条是可验证的具体能力（「按工作区哈希分配独立端口」优于「智能端口管理」）；有数字就给数字（进程数、超时默认值、支持格式数）。
- **快速安装**：只放推荐的那一条路径和验证方法；替代源、发版机制全部折叠。版本固定示例统一用 `@<version>` 占位。
- **配置表**：至少三列（键 / 默认值 / 说明），配一份「整行替换」级别的完整 YAML/JSON 示例，注明部分键是否必须一起给。
- **FAQ**：标题写成用户搜索时的原句（「X 启动后立刻退出怎么办？/ X exits immediately with no output. What do I do?」）；从原文的告警、block quote、限制条款中收编，保证排错信息单点收敛。
- **安全/警告**：WARNING 放已知坑与数据/权限风险，CAUTION 放安全模型，TIP 放验证与技巧，NOTE 放链接集合；同一节最多一个 alert。
- **License**：必须独立成节并相对链接到实际存在的 LICENSE 文件。

## 折叠策略表

| 放进 `<details>` | 永远不要折叠 |
|---|---|
| 非推荐安装方式（GitHub/本地/对话内） | 推荐安装命令与验证方法 |
| 内部机制、端口/进程/路由实现 | 关键 WARNING（数据损坏、二进制不匹配等） |
| 初始化判定等排错规则 | 安全说明 CAUTION |
| 文件结构树 | Features、Quick Start、FAQ、License |
| 维护者向发版/CI 说明 | 首段价值主张与 badge 栏 |
| 长配置的原理说明（配置表本身保留在外） | 语言切换与主导航 |

## Badge 速查

保持 4–5 枚、最多 6 枚；URL 中包名与仓库名大小写与实际一致。

| 用途 | shields.io 模式 |
|---|---|
| npm 版本 | `https://img.shields.io/npm/v/<pkg>?logo=npm&label=npm` |
| npm 月下载 | `https://img.shields.io/npm/dm/<pkg>?logo=npm` |
| license | `https://img.shields.io/badge/license-MIT-blue.svg` |
| Node 版本 | `https://img.shields.io/badge/node-%E2%89%A5%2020-339933?logo=node.js&logoColor=white` |
| GitHub stars | `https://img.shields.io/github/stars/<owner>/<repo>?logo=github` |
| GitHub issues | `https://img.shields.io/github/issues/<owner>/<repo>?logo=github` |
| 通用 CI | `https://github.com/<owner>/<repo>/actions/workflows/<file>.yml/badge.svg` |

CI badge 仅在 workflow 对每次推送/PR 运行时有意义；只由 tag 触发的发版流水线平时显示无运行记录，不要挂。

## 截图与 alt 规范

- 图片放 `docs/` 或 `.github/`，README 用相对路径引用；确认图片被包发布清单包含（npm 见 `package.json` 的 `files`）。
- alt 写「画面内容 + 关键词」，例如「对话区标签页中的任务图谱」而非「截图 1」；装饰性 banner 也要有信息性 alt。
- caption 控制在 1–2 句，端口号、菜单位置等细节留给正文/FAQ；长段落斜体说明是反模式。
- 宽表格与多图在窄屏会溢出，交付前提醒在移动端宽度复查；图片宽度需要自适应时用 HTML `<img width="100%">`。
- 不新增项目里不存在的截图；没有素材时不要用占位图编造产品画面。

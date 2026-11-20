<div align="center">

# Readme Polish

**An agent skill that audits, restructures, and polishes open-source READMEs into modern, scannable, SEO-friendly project front doors — with bilingual split, npm/GitHub discoverability, and a validation script.**

[中文](./README.zh-CN.md) · English

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/kuwork/readme-polish?style=flat)](https://github.com/kuwork/readme-polish)
[![Node >= 18](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org)
[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-8A2BE2)](https://agentskills.io)

[✨ Features](#features) · [🚀 Quick Start](#quick-start) · [⚙️ How It Works](#how-it-works) · [🧪 Validation Script](#validation-script) · [❓ FAQ](#faq) · [📄 License](#license)

</div>

Your README is your project's storefront. Visitors decide in ~10 seconds whether to stay, and both search engines and AI coding assistants rank your project by how clearly the first screen communicates what it does. This skill turns an existing wall-of-text README into a modern one: scannable above the fold, deep content collapsible, and keywords placed where discovery actually happens — without inventing a single fact.

## Features

- 🔍 **Full audit first** — reads the existing README, package metadata (`package.json` / `pyproject.toml` / `Cargo.toml` / `go.mod`), and repo facts before touching a word
- 🏗️ **Modern information architecture** — centered hero, badge bar, dot navigation, emoji-led Features list, copy-paste-ready install commands kept visible, reference content in `<details>`
- 🌐 **Bilingual split done right** — `README.md` (EN) + `README.zh-CN.md` (ZH) with strict parallel structure, per-language anchor rules, and cross-links that don't 404 on npm
- 🎯 **SEO for npm & GitHub** — keyword placement map, description/keywords rewrite guidance, AI-citation optimization, and a pre-publish checklist
- 🛡️ **Fact guardrails** — never invents URLs, versions, ports, or features; uncertain facts are verified against code, marketing claims require numbers
- ✅ **Ship with confidence** — a zero-dependency Node script validates anchors, local images, and language cross-links; must exit 0 before delivery

## Quick Start

Copy this folder into your agent's skills directory:

```bash
# Kimi Code / Claude Code user-level skills
cp -r readme-polish ~/.agents/skills/
```

Then just ask, in any supported agent:

> Rewrite and optimize this project's README, following the readme-polish skill.

<details>
<summary><b>Project-level install & other agents</b></summary>

- **Project-level (shared via git):** copy the folder to `.kimi/skills/readme-polish/` (or your agent's equivalent project skills directory) and commit it — teammates get it on clone.
- **Manual use, no agent required:** read `SKILL.md` as a checklist and apply `references/structure-template.md` + `references/seo-checklist.md` by hand.

</details>

## How It Works

The skill (`SKILL.md`) drives a 7-step workflow:

1. **Audit** — inventory the existing README, package metadata, and repo facts (the only allowed source of truth)
2. **Confirm forks** — asks about language strategy (EN-first bilingual / ZH-first bilingual / single language) and whether to also optimize package metadata
3. **Restructure** — rebuilds the README on the skeleton in `references/structure-template.md`: hero → badges → nav → value proposition → install → Features → collapsible deep content → FAQ → License
4. **SEO pass** — applies `references/seo-checklist.md`: title/H1/first-160-characters keyword placement, npm description & keywords, AI discoverability
5. **Bilingual handling** — parallel files, language switcher lines, per-language GitHub slug rules
6. **Writing guardrails** — fact closure, `<version>` placeholders, badge limits, honest marketing
7. **Validate & deliver** — runs the check script and `npm pack --dry-run`; requires GitHub-rendered visual confirmation before calling it done

## Validation Script

`scripts/check_readme.mjs` is a zero-dependency Node script that discovers all `README*.md` variants in a directory and fails (exit 1) on:

- broken internal anchors (computed with GitHub's slug rules, including CJK handling)
- missing local images referenced from READMEs
- broken cross-links between language variants

```bash
node scripts/check_readme.mjs ./your-project
```

## ❓ FAQ

### Which agents does this work with?

Any agent that supports the SKILL.md convention (Kimi Code, Claude Code, Codex, and compatible runtimes). No vendor-specific APIs are required; `interaction.ask` in the workflow degrades gracefully to plain "ask the user" instructions.

### Will it make up features or links for my project?

No. The core guardrail is fact closure: commands, defaults, ports, and limits must come from your existing README or your code. Unknown facts trigger a code read, never an invention — especially URLs.

### Does it modify my package metadata?

Only with your explicit confirmation, and only `description` / `keywords` / `files` — everything else is left untouched.

### Can I use just the checklist or just the script?

Yes. The two reference files stand alone as a human-readable README style guide and SEO checklist, and the validation script works on any project with no skill runtime needed.

## License

[MIT](./LICENSE) — reuse the prompts, references, and script freely, in agents or by hand.

<div align="right"><a href="#readme-polish">↑ Back to top</a></div>

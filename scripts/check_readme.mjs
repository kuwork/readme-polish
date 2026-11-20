#!/usr/bin/env node
// Validate README files in a project: GitHub-compatible heading slugs, explicit
// anchors, local relative links, image paths, and cross-language README links.
// No third-party dependencies. Exit code 1 when any error is found.
//
// Usage:
//   node check_readme.mjs [project-dir] [--glob "README*.md"]
//   node check_readme.mjs .
//   node check_readme.mjs /path/to/repo --glob "README*.md"

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node check_readme.mjs [project-dir] [--glob "<pattern>"]');
  process.exit(0);
}

const globIdx = args.indexOf('--glob');
const glob = globIdx !== -1 ? args[globIdx + 1] : 'README*.md';
const targetDir = resolve(args.find((a) => !a.startsWith('--') && a !== glob) || '.');

if (!existsSync(targetDir) || !statSync(targetDir).isDirectory()) {
  console.error(`Error: not a directory: ${targetDir}`);
  process.exit(2);
}

// Match README.md, README.en.md, README.zh-CN.md ... in the directory root.
function globToRegExp(pattern) {
  return new RegExp('^' + pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');
}
const fileRe = globToRegExp(glob);
const readmeFiles = readdirSync(targetDir)
  .filter((name) => fileRe.test(name) && statSync(join(targetDir, name)).isFile())
  .sort();

if (readmeFiles.length === 0) {
  console.error(`Error: no files matching ${glob} in ${targetDir}`);
  process.exit(2);
}

// Approximate GitHub's anchor generation: lowercase, strip punctuation except
// word chars/hyphen/underscore/Unicode letters, trim, collapse spaces to '-'.
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\-\s\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Blank out fenced code blocks (``` or ~~~) while preserving line count so
// sample links and '#' comments inside templates are never treated as real ones.
function maskFencedBlocks(text) {
  const lines = text.split(/\r?\n/);
  let fence = null;
  return lines
    .map((line) => {
      const opener = line.trimStart().match(/^(```|~~~)/);
      if (fence) {
        if (line.trimStart().startsWith(fence)) fence = null;
        return '';
      }
      if (opener) {
        fence = opener[1];
        return '';
      }
      // Inline code spans: sample link syntax inside backticks is not rendered.
      return line.replace(/`[^`\n]*`/g, '``');
    })
    .join('\n');
}

const errors = [];
let totalLinks = 0;

for (const fileName of readmeFiles) {
  const filePath = join(targetDir, fileName);
  const rawText = readFileSync(filePath, 'utf8');
  const text = maskFencedBlocks(rawText);
  const localErrors = [];

  // Collect heading slugs plus explicit <a id="..."> / <a name="..."> anchors.
  const anchors = new Set();
  for (const m of text.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)) {
    anchors.add(slugify(m[1]));
  }
  for (const m of text.matchAll(/<a\s+[^>]*(?:id|name)\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
    anchors.add(m[1]);
  }

  // All markdown links [text](target) and images ![text](target).
  const linkRe = /(!?)\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;
  let fileLinkCount = 0;
  let match;
  while ((match = linkRe.exec(text)) !== null) {
    const [, isImage, , rawTarget] = match;
    const lineNo = text.slice(0, match.index).split(/\r?\n/).length;
    const isExternal = /^[a-z][a-z0-9+.-]*:/i.test(rawTarget) || rawTarget.startsWith('//');
    if (isExternal) continue;

    const [pathPart, hashPart] = rawTarget.split('#');
    fileLinkCount += 1;

    // Pure in-page anchor.
    if (!pathPart) {
      if (!anchors.has(hashPart)) {
        localErrors.push(`line ${lineNo}: broken anchor (#${hashPart})`);
      }
      continue;
    }

    const cleanedPath = pathPart.split('?')[0];
    const resolvedFile = resolve(targetDir, cleanedPath);
    if (!existsSync(resolvedFile)) {
      localErrors.push(`line ${lineNo}: missing ${isImage ? 'image' : 'relative link'} target (${rawTarget})`);
      continue;
    }

    // Cross-file anchor: regenerate slugs from the target markdown file.
    if (hashPart && /\.md$/i.test(cleanedPath)) {
      const targetText = maskFencedBlocks(readFileSync(resolvedFile, 'utf8'));
      const targetAnchors = new Set(
        [...targetText.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)].map((m) => slugify(m[1])),
      );
      for (const m of targetText.matchAll(/<a\s+[^>]*(?:id|name)\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
        targetAnchors.add(m[1]);
      }
      if (!targetAnchors.has(hashPart)) {
        localErrors.push(`line ${lineNo}: broken cross-file anchor (${rawTarget})`);
      }
    }
  }

  totalLinks += fileLinkCount;
  console.log(`== ${fileName} ==`);
  console.log(`headings: ${anchors.size} | local links & images: ${fileLinkCount}`);
  if (localErrors.length === 0) {
    console.log('OK\n');
  } else {
    for (const e of localErrors) {
      console.log(`  ERROR ${e}`);
      errors.push(`${fileName}: ${e}`);
    }
    console.log('');
  }
}

console.log(`Summary: ${readmeFiles.length} file(s), ${totalLinks} local references, ${errors.length} error(s).`);
process.exit(errors.length ? 1 : 0);

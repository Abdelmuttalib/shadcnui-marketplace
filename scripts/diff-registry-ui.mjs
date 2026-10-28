#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

import { createTwoFilesPatch, diffLines } from "diff";

// ============================================================
// CONFIGURATION
// ============================================================

const ROOT = process.cwd();

const BASE_DIR = path.join(ROOT, "registry/bases/base");
const BASELINE_STYLE = "default";
const BASELINE_UI = path.join(BASE_DIR, BASELINE_STYLE, "ui");

const REPORT_DIR = path.join(ROOT, "reports/registry-ui-diffs");
const INDEX_PATH = path.join(REPORT_DIR, "index.html");

const IGNORED_STYLES = new Set(["default-v4", "carbon"]);
const IGNORE = new Set([".DS_Store"]);

const CHANGE_CONTEXT_LINES = 2;

const USE_COLOR =
  process.env.FORCE_COLOR === "1" ||
  (process.stdout.isTTY &&
    process.env.NO_COLOR === undefined &&
    process.env.TERM !== "dumb");

const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

function paint(value, ...styles) {
  const text = String(value);

  if (!USE_COLOR) return text;

  return styles.map((style) => ANSI[style]).join("") + text + ANSI.reset;
}

const color = {
  bold: (v) => paint(v, "bold"),
  dim: (v) => paint(v, "dim"),
  red: (v) => paint(v, "red"),
  green: (v) => paint(v, "green"),
  yellow: (v) => paint(v, "yellow"),
  blue: (v) => paint(v, "blue"),
  cyan: (v) => paint(v, "cyan"),
  gray: (v) => paint(v, "gray"),
  error: (v) => paint(v, "red", "bold"),
};

// ============================================================
// FILE SYSTEM HELPERS
// ============================================================

function assertDirectory(dir) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    throw new Error(`Directory not found: ${dir}`);
  }
}

function listFiles(dir, base = dir) {
  const files = new Map();

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(base, fullPath);

    if (entry.isDirectory()) {
      for (const [name, filePath] of listFiles(fullPath, base)) {
        files.set(name, filePath);
      }
    } else if (entry.isFile()) {
      files.set(relativePath, fullPath);
    }
  }

  return files;
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function toRelativePath(file) {
  return path.relative(ROOT, file);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function splitLines(content) {
  if (content === "") return [];

  const lines = content.split(/\r\n|\n|\r/);

  if (lines[lines.length - 1] === "") {
    lines.pop();
  }

  return lines;
}

function numberLines(content) {
  return splitLines(content).map((content, index) => ({
    lineNumber: index + 1,
    content,
  }));
}

function getLineRange(lines) {
  if (!lines.length) return null;

  return {
    start: lines[0].lineNumber,
    end: lines[lines.length - 1].lineNumber,
  };
}

function formatLineRange(range) {
  if (!range) return "N/A";

  return range.start === range.end
    ? String(range.start)
    : `${range.start}-${range.end}`;
}

function statusClass(status) {
  return (
    {
      MODIFIED: "modified",
      ADDED: "added",
      MISSING: "missing",
      REMOVED: "missing",
      IDENTICAL: "identical",
    }[status] || "identical"
  );
}

// ============================================================
// TOKEN EXTRACTION
// ============================================================

const TOKEN_REGEX =
  /(?:[A-Za-z0-9_$-]*\[[^\]\r\n]+\][A-Za-z0-9_$:/!%#.,-]*|[A-Za-z0-9_$-]+(?:\/[A-Za-z0-9_$.-]+)?(?::[A-Za-z0-9_$./!%#,[\]-]+)*(?:\([^()\r\n]*\))?)/g;

function extractTokens(value) {
  return (String(value).match(TOKEN_REGEX) || []).filter(Boolean);
}

function uniqueTokens(lines) {
  const tokens = new Set();

  for (const line of lines) {
    for (const token of extractTokens(line.content)) {
      tokens.add(token);
    }
  }

  return tokens;
}

function extractTokenChanges(removedLines, addedLines) {
  const removedTokens = uniqueTokens(removedLines);
  const addedTokens = uniqueTokens(addedLines);

  const changes = [];

  for (const [type, tokens, sourceLines, otherTokens] of [
    ["REMOVED", removedTokens, removedLines, addedTokens],
    ["ADDED", addedTokens, addedLines, removedTokens],
  ]) {
    for (const token of tokens) {
      if (otherTokens.has(token)) continue;

      const occurrences = sourceLines
        .filter((line) => extractTokens(line.content).includes(token))
        .map((line) => ({
          lineNumber: line.lineNumber,
          content: line.content,
        }));

      changes.push({
        type,
        token,
        occurrences,
      });
    }
  }

  return changes.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "REMOVED" ? -1 : 1;
    }

    return a.token.localeCompare(b.token);
  });
}

// ============================================================
// EXACT LINE CHANGE EXTRACTION
// ============================================================

function extractLineChanges(baseline, styled) {
  const changes = [];
  const parts = diffLines(baseline, styled);

  let oldLineNumber = 1;
  let newLineNumber = 1;
  let current = null;

  function flushChange() {
    if (!current) return;

    const removedLines = current.removedLines;
    const addedLines = current.addedLines;

    if (removedLines.length || addedLines.length) {
      const tokenChanges = extractTokenChanges(removedLines, addedLines);

      changes.push({
        changeNumber: changes.length + 1,

        type:
          removedLines.length && addedLines.length
            ? "MODIFIED"
            : addedLines.length
              ? "ADDED"
              : "REMOVED",

        baselineLineRange: getLineRange(removedLines),
        styledLineRange: getLineRange(addedLines),

        removedLines,
        addedLines,
        tokenChanges,

        tokenSummary: {
          added: tokenChanges
            .filter((item) => item.type === "ADDED")
            .map((item) => item.token),

          removed: tokenChanges
            .filter((item) => item.type === "REMOVED")
            .map((item) => item.token),
        },
      });
    }

    current = null;
  }

  for (const part of parts) {
    const lines = splitLines(part.value);

    if (part.removed) {
      current ||= {
        removedLines: [],
        addedLines: [],
      };

      for (const content of lines) {
        current.removedLines.push({
          lineNumber: oldLineNumber++,
          content,
        });
      }

      continue;
    }

    if (part.added) {
      current ||= {
        removedLines: [],
        addedLines: [],
      };

      for (const content of lines) {
        current.addedLines.push({
          lineNumber: newLineNumber++,
          content,
        });
      }

      continue;
    }

    flushChange();

    oldLineNumber += lines.length;
    newLineNumber += lines.length;
  }

  flushChange();

  return changes;
}

// ============================================================
// HIGHLIGHTED CONTEXT DIFF
// ============================================================

function getContextLines(sourceLines, start, end) {
  if (!sourceLines.length) return [];

  const first = Math.max(1, start - CHANGE_CONTEXT_LINES);
  const last = Math.min(sourceLines.length, end + CHANGE_CONTEXT_LINES);

  return sourceLines.slice(first - 1, last).map((line) => ({
    ...line,
    changed: line.lineNumber >= start && line.lineNumber <= end,
  }));
}

function highlightLineTokens(content, tokens) {
  const relevantTokens = [...new Set(tokens)]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  if (!relevantTokens.length) {
    return [{ type: "UNCHANGED", text: content }];
  }

  const segments = [];
  let cursor = 0;

  while (cursor < content.length) {
    let match = null;

    for (const token of relevantTokens) {
      if (!content.startsWith(token, cursor)) continue;

      const before = cursor > 0 ? content[cursor - 1] : "";
      const afterIndex = cursor + token.length;
      const after = afterIndex < content.length ? content[afterIndex] : "";

      const isWord = (character) =>
        Boolean(character) && /[A-Za-z0-9_$-]/.test(character);

      if (isWord(before) || isWord(after)) continue;

      match = token;
      break;
    }

    if (match) {
      segments.push({
        type: "CHANGED",
        text: match,
      });

      cursor += match.length;
      continue;
    }

    const nextPositions = relevantTokens
      .map((token) => content.indexOf(token, cursor))
      .filter((position) => position >= 0);

    const nextPosition = nextPositions.length ? Math.min(...nextPositions) : -1;

    if (nextPosition > cursor) {
      segments.push({
        type: "UNCHANGED",
        text: content.slice(cursor, nextPosition),
      });

      cursor = nextPosition;
    } else {
      segments.push({
        type: "UNCHANGED",
        text: content[cursor],
      });

      cursor++;
    }
  }

  return segments;
}

function buildHighlightedContext(baseline, styled, changes) {
  const baselineLines = numberLines(baseline);
  const styledLines = numberLines(styled);

  return changes.map((change) => {
    const baselineStart =
      change.baselineLineRange?.start ??
      Math.max(
        1,
        (change.styledLineRange?.start ?? 1) - change.addedLines.length
      );

    const baselineEnd = change.baselineLineRange?.end ?? baselineStart;

    const styledStart =
      change.styledLineRange?.start ??
      Math.max(
        1,
        (change.baselineLineRange?.start ?? 1) - change.removedLines.length
      );

    const styledEnd = change.styledLineRange?.end ?? styledStart;

    const baselineContext = getContextLines(
      baselineLines,
      baselineStart,
      baselineEnd
    );

    const styledContext = getContextLines(styledLines, styledStart, styledEnd);

    return {
      changeNumber: change.changeNumber,
      type: change.type,

      baselineLineRange: change.baselineLineRange,
      styledLineRange: change.styledLineRange,

      baselineContext: baselineContext.map((line) => ({
        ...line,
        segments: highlightLineTokens(
          line.content,
          line.changed ? change.tokenSummary.removed : []
        ),
      })),

      styledContext: styledContext.map((line) => ({
        ...line,
        segments: highlightLineTokens(
          line.content,
          line.changed ? change.tokenSummary.added : []
        ),
      })),

      tokenSummary: change.tokenSummary,
      tokenChanges: change.tokenChanges,
    };
  });
}

// ============================================================
// FILE COMPARISON
// ============================================================

function diffFile(relativePath, baselineFile, styleFile, styleName) {
  const baseline = baselineFile ? read(baselineFile) : "";
  const styled = styleFile ? read(styleFile) : "";

  let status = "IDENTICAL";
  let patch = "";

  if (!baselineFile) {
    status = "ADDED";

    patch = createTwoFilesPatch(
      "/dev/null",
      `${styleName}/ui/${relativePath}`,
      "",
      styled,
      "default",
      styleName
    );
  } else if (!styleFile) {
    status = "MISSING";

    patch = createTwoFilesPatch(
      `default/ui/${relativePath}`,
      "/dev/null",
      baseline,
      "",
      "default",
      styleName
    );
  } else if (baseline !== styled) {
    status = "MODIFIED";

    patch = createTwoFilesPatch(
      `default/ui/${relativePath}`,
      `${styleName}/ui/${relativePath}`,
      baseline,
      styled,
      "default",
      styleName,
      { context: 3 }
    );
  }

  const lineChanges =
    status === "IDENTICAL" ? [] : extractLineChanges(baseline, styled);

  const highlightedChanges = buildHighlightedContext(
    baseline,
    styled,
    lineChanges
  );

  return {
    path: relativePath,
    status,

    baselineFile: baselineFile ? toRelativePath(baselineFile) : null,

    styledFile: styleFile ? toRelativePath(styleFile) : null,

    baselineLineCount: splitLines(baseline).length,
    styledLineCount: splitLines(styled).length,

    patch,
    lineChanges,
    highlightedChanges,
  };
}

// ============================================================
// STYLE DISCOVERY AND SUMMARY
// ============================================================

function discoverStyles() {
  const directories = fs.readdirSync(BASE_DIR, {
    withFileTypes: true,
  });

  const availableStyles = directories
    .filter((entry) => entry.isDirectory())
    .filter((entry) => {
      const uiDir = path.join(BASE_DIR, entry.name, "ui");

      return fs.existsSync(uiDir) && fs.statSync(uiDir).isDirectory();
    })
    .map((entry) => entry.name)
    .sort();

  return {
    availableStyles,

    styles: availableStyles.filter(
      (style) => style !== BASELINE_STYLE && !IGNORED_STYLES.has(style)
    ),

    ignoredStyles: availableStyles.filter((style) => IGNORED_STYLES.has(style)),
  };
}

function countStatuses(results) {
  return {
    modified: results.filter((result) => result.status === "MODIFIED").length,

    added: results.filter((result) => result.status === "ADDED").length,

    missing: results.filter((result) => result.status === "MISSING").length,

    identical: results.filter((result) => result.status === "IDENTICAL").length,
  };
}

function printHeader() {
  console.log("");
  console.log(
    color.bold("============================================================")
  );
  console.log(color.bold("              REGISTRY UI COMPONENT DIFF"));
  console.log(
    color.bold("============================================================")
  );
  console.log("");
}

function printLegend() {
  console.log(color.bold("LEGEND"));

  console.log(
    `  ${color.green("+ Added")}       ` +
      `${color.red("- Missing")}       ` +
      `${color.yellow("~ Modified")}       ` +
      `${color.gray("= Identical")}`
  );

  console.log("");
}

function printStyleSummary(style, counts, changeCount) {
  console.log(
    `${color.bold(style.padEnd(18))} ` +
      `${color.yellow(`Modified: ${String(counts.modified).padStart(3)}`)}  ` +
      `${color.green(`Added: ${String(counts.added).padStart(3)}`)}  ` +
      `${color.red(`Missing: ${String(counts.missing).padStart(3)}`)}  ` +
      `${color.gray(`Identical: ${String(counts.identical).padStart(3)}`)}  ` +
      `${color.cyan(`Change groups: ${changeCount}`)}`
  );
}

// ============================================================
// CHANGE METADATA
// ============================================================

function createChangeMetadata(style, result, change) {
  return {
    style,
    component: result.path,
    status: result.status,

    baselineFile: result.baselineFile,
    styledFile: result.styledFile,

    baselineLineRange: change.baselineLineRange,
    styledLineRange: change.styledLineRange,

    changeNumber: change.changeNumber,
    changeType: change.type,

    removedLines: change.removedLines,
    addedLines: change.addedLines,

    tokens: change.tokenChanges,
    tokenSummary: change.tokenSummary,
  };
}

function getExtractedChanges(style, results) {
  return results.flatMap((result) =>
    result.lineChanges.map((change) =>
      createChangeMetadata(style, result, change)
    )
  );
}

function getHighlightedChanges(style, results) {
  return results.flatMap((result) =>
    result.highlightedChanges.map((change) => ({
      style,
      component: result.path,
      status: result.status,

      baselineFile: result.baselineFile,
      styledFile: result.styledFile,

      ...change,
    }))
  );
}

// ============================================================
// HTML RENDERING HELPERS
// ============================================================

function renderCodeLine(line, kind) {
  return `
    <div class="source-line ${kind}">
      <span class="line-number">${line.lineNumber}</span>
      <code>${escapeHtml(line.content) || " "}</code>
    </div>
  `;
}

function renderTokenChanges(tokenChanges) {
  if (!tokenChanges.length) {
    return `<p class="muted">No token-level changes detected.</p>`;
  }

  return `
    <div class="token-list">
      ${tokenChanges
        .map((item) => {
          const added = item.type === "ADDED";

          return `
          <div class="token-item ${added ? "token-added" : "token-removed"}">
            <span class="status ${added ? "added" : "missing"}">${
              item.type
            }</span>

            <code>${escapeHtml(item.token)}</code>

            <div class="token-locations">
              ${item.occurrences
                .map(
                  (occurrence) => `
                <div>
                  Line ${occurrence.lineNumber}:
                  <code>${escapeHtml(occurrence.content)}</code>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
  `;
}

function renderHighlightedSegments(segments) {
  return segments
    .map((segment) => {
      const escaped = escapeHtml(segment.text);

      return segment.type === "CHANGED"
        ? `<mark class="inline-highlight">${escaped}</mark>`
        : escaped;
    })
    .join("");
}

function renderContextSide(lines, title, kind) {
  return `
    <div class="context-side">
      <h5>${title}</h5>

      <div class="context-code">
        ${
          lines.length
            ? lines
                .map(
                  (line) => `
                <div class="context-line ${
                  line.changed ? `context-changed ${kind}` : ""
                }">
                  <span class="line-number">${line.lineNumber}</span>
                  <code>${
                    renderHighlightedSegments(line.segments) || " "
                  }</code>
                </div>
              `
                )
                .join("")
            : `<p class="muted">No source lines available.</p>`
        }
      </div>
    </div>
  `;
}

function renderChangeSummary(tokenSummary) {
  const removed = tokenSummary.removed || [];
  const added = tokenSummary.added || [];

  if (!removed.length && !added.length) {
    return `
      <div class="change-summary">
        <span class="muted">
          No unique token additions or removals detected.
          See Exact Changes for the full source-line comparison.
        </span>
      </div>
    `;
  }

  const items = [
    ...removed.map((token) => ({ type: "REMOVED", token })),
    ...added.map((token) => ({ type: "ADDED", token })),
  ];

  return `
    <div class="change-summary">
      <h5>Change summary</h5>

      <div class="change-summary-list">
        ${items
          .map(
            (item) => `
          <span class="change-token ${
            item.type === "ADDED"
              ? "change-token-added"
              : "change-token-removed"
          }">
            <span class="change-token-type">${item.type}</span>
            <code>${escapeHtml(item.token)}</code>
          </span>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderHighlightedContext(changes) {
  if (!changes.length) {
    return `<p class="muted">No highlighted context available.</p>`;
  }

  return `
    <div class="highlighted-context-list">
      ${changes
        .map(
          (change) => `
        <article class="highlighted-change">
          <div class="highlighted-change-heading">
            <h4>Change #${change.changeNumber}</h4>

            <span class="status ${statusClass(change.type)}">
              ${change.type}
            </span>
          </div>

          <div class="change-meta">
            <p>
              <strong>Baseline line(s):</strong>
              ${formatLineRange(change.baselineLineRange)}
            </p>

            <p>
              <strong>Styled line(s):</strong>
              ${formatLineRange(change.styledLineRange)}
            </p>
          </div>

          <div class="context-columns">
            ${renderContextSide(
              change.baselineContext,
              "Baseline — original",
              "context-deletion"
            )}

            ${renderContextSide(
              change.styledContext,
              "Styled — updated",
              "context-addition"
            )}
          </div>

          ${renderChangeSummary(change.tokenSummary)}
        </article>
      `
        )
        .join("")}
    </div>
  `;
}

function renderExtractedChanges(changes) {
  if (!changes.length) {
    return `<p class="muted">No extracted changes.</p>`;
  }

  return changes
    .map(
      (change) => `
    <section class="change-card">
      <h4>
        Change #${change.changeNumber}

        <span class="status ${statusClass(change.changeType)}">
          ${change.changeType}
        </span>
      </h4>

      <div class="change-meta">
        <p>
          <strong>Baseline lines:</strong>
          ${formatLineRange(change.baselineLineRange)}
        </p>

        <p>
          <strong>Styled lines:</strong>
          ${formatLineRange(change.styledLineRange)}
        </p>
      </div>

      <div class="source-columns">
        <div>
          <h5>Baseline — removed/original</h5>

          <div class="source-block">
            ${
              change.removedLines.length
                ? change.removedLines
                    .map((line) => renderCodeLine(line, "deletion"))
                    .join("")
                : `<p class="muted">No original lines.</p>`
            }
          </div>
        </div>

        <div>
          <h5>Styled — added/updated</h5>

          <div class="source-block">
            ${
              change.addedLines.length
                ? change.addedLines
                    .map((line) => renderCodeLine(line, "addition"))
                    .join("")
                : `<p class="muted">No updated lines.</p>`
            }
          </div>
        </div>
      </div>

      <h5>Extracted token changes</h5>
      ${renderTokenChanges(change.tokens)}
    </section>
  `
    )
    .join("");
}

// ============================================================
// SHARED HTML STYLES
// ============================================================

function getReportStyles() {
  return `
    :root {
      color-scheme: light dark;

      --background: #ffffff;
      --foreground: #24292f;
      --muted: #656d76;
      --border: #d0d7de;
      --surface: #f6f8fa;

      --green-bg: #dafbe1;
      --green-text: #116329;
      --red-bg: #ffebe9;
      --red-text: #cf222e;
      --yellow-bg: #fff8c5;
      --yellow-text: #9a6700;
      --blue-bg: #ddf4ff;
      --blue-text: #0550ae;

      --inline-added-bg: #abf2bc;
      --inline-added-text: #064e24;
      --inline-removed-bg: #ffcecb;
      --inline-removed-text: #82071e;

      --sticky-offset: 0px;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --background: #0d1117;
        --foreground: #e6edf3;
        --muted: #9198a1;
        --border: #30363d;
        --surface: #161b22;

        --green-bg: #12261e;
        --green-text: #3fb950;
        --red-bg: #2d1619;
        --red-text: #ff7b72;
        --yellow-bg: #2b2511;
        --yellow-text: #d29922;
        --blue-bg: #111f2c;
        --blue-text: #79c0ff;

        --inline-added-bg: #174c2b;
        --inline-added-text: #aff5b4;
        --inline-removed-bg: #5b1c24;
        --inline-removed-text: #ffdcd7;
      }
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 72px;
    }

    body {
      margin: 0;
      padding: 28px 20px;
      background: var(--background);
      color: var(--foreground);
      font-family: system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
      line-height: 1.6;
    }

    main {
      max-width: 1450px;
      margin: 0 auto;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    h1 {
      margin: 0 0 8px;
      font-size: 28px;
    }

    h2 {
      margin-top: 32px;
      font-size: 20px;
    }

    h3 {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin: 0;
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
      font-size: 15px;
      overflow-wrap: anywhere;
    }

    h4 {
      margin: 20px 0 12px;
      font-size: 15px;
    }

    h5 {
      margin: 12px 0 8px;
      font-size: 13px;
    }

    p {
      overflow-wrap: anywhere;
    }

    .meta,
    .file-meta,
    .change-meta {
      color: var(--muted);
      font-size: 13px;
      overflow-wrap: anywhere;
    }

    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin: 24px 0;
    }

    .card {
      padding: 14px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
    }

    .number {
      display: block;
      font-size: 25px;
      font-weight: 700;
    }

    .label {
      color: var(--muted);
      font-size: 12px;
    }

    .status {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 5px;
      font-size: 10px;
      font-weight: 800;
      white-space: nowrap;
    }

    .added,
    .addition,
    .token-added {
      background: var(--green-bg);
      color: var(--green-text);
    }

    .missing,
    .deletion,
    .token-removed {
      background: var(--red-bg);
      color: var(--red-text);
    }

    .modified {
      background: var(--yellow-bg);
      color: var(--yellow-text);
    }

    .identical {
      background: var(--surface);
      color: var(--muted);
    }

    .file-list {
      padding: 16px 16px 16px 36px;
      border: 1px solid var(--border);
      border-radius: 8px;
    }

    .file-list li {
      margin: 8px 0;
      overflow-wrap: anywhere;
    }

    .file-section {
      margin: 24px 0;
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: visible;
      scroll-margin-top: 12px;
    }

    /*
     * Sticky file header.
     *
     * The filename and status remain visible while scrolling
     * through a long component's diff and exact changes.
     */
    .file-section > h3 {
      position: sticky;
      top: 0;
      z-index: 20;

      background: var(--surface);
      color: var(--foreground);

      border: 1px solid var(--border);
      border-radius: 7px 7px 0 0;

      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
      overflow-wrap: anywhere;
    }

    .file-meta {
      padding: 0 16px;
    }

    details {
      margin: 12px 16px;
    }

    details > summary {
      cursor: pointer;
      font-weight: 700;
      padding: 10px 0;
    }

    details > summary:hover {
      color: var(--blue-text);
    }

    .diff {
      overflow-x: auto;
      background: var(--surface);
      padding: 12px 0;
      font-family: "SFMono-Regular", Consolas,
        "Liberation Mono", monospace;
      font-size: 12px;
      line-height: 1.65;
    }

    .diff-line {
      padding: 0 16px;
      min-height: 1.65em;
      white-space: pre;
    }

    .hunk {
      background: var(--blue-bg);
      color: var(--blue-text);
    }

    .file-header {
      color: var(--muted);
      font-weight: 600;
    }

    .section-subheading {
      margin: 24px 16px 8px;
    }

    .section-description {
      margin: 0 16px 16px;
      color: var(--muted);
      font-size: 12px;
    }

    .highlighted-context-list {
      display: grid;
      gap: 16px;
      padding: 0 16px 16px;
    }

    .highlighted-change {
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      background: var(--background);
    }

    .highlighted-change-heading {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      padding: 12px 14px;
      border-bottom: 1px solid var(--border);
      background: var(--surface);
    }

    .highlighted-change-heading h4 {
      margin: 0;
    }

    .change-meta {
      padding: 0 14px;
    }

    .context-columns {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      padding: 0 12px 12px;
    }

    .context-side {
      min-width: 0;
    }

    .context-code {
      overflow-x: auto;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--surface);
    }

    .context-line {
      display: flex;
      align-items: stretch;
      min-height: 26px;
      font-family: "SFMono-Regular", Consolas,
        "Liberation Mono", monospace;
      font-size: 12px;
      line-height: 1.7;
    }

    .context-line code {
      display: block;
      padding: 3px 8px;
      white-space: pre;
    }

    .context-line.context-changed.context-deletion {
      background: var(--red-bg);
    }

    .context-line.context-changed.context-addition {
      background: var(--green-bg);
    }

    .inline-highlight {
      padding: 1px 2px;
      border-radius: 3px;
      font-weight: 700;
      font-style: normal;
    }

    .context-deletion .inline-highlight {
      background: var(--inline-removed-bg);
      color: var(--inline-removed-text);
      text-decoration: line-through;
    }

    .context-addition .inline-highlight {
      background: var(--inline-added-bg);
      color: var(--inline-added-text);
    }

    .change-summary {
      padding: 12px 14px;
      border-top: 1px solid var(--border);
    }

    .change-summary h5 {
      margin-top: 0;
    }

    .change-summary-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .change-token {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 8px;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow-wrap: anywhere;
    }

    .change-token-type {
      font-size: 10px;
      font-weight: 800;
    }

    .change-card {
      margin: 16px;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--background);
    }

    .change-card h4 {
      margin-top: 0;
    }

    .source-columns {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .source-block {
      overflow-x: auto;
      border: 1px solid var(--border);
      border-radius: 6px;
    }

    .source-line {
      display: flex;
      align-items: flex-start;
      min-height: 26px;
      font-family: "SFMono-Regular", Consolas,
        "Liberation Mono", monospace;
      font-size: 12px;
      line-height: 1.65;
    }

    .source-line code {
      padding: 3px 8px;
      white-space: pre;
    }

    .line-number {
      display: inline-block;
      flex: 0 0 48px;
      padding: 3px 8px;
      border-right: 1px solid var(--border);
      color: var(--muted);
      text-align: right;
      user-select: none;
    }

    .token-list {
      display: grid;
      gap: 10px;
    }

    .token-item {
      padding: 12px;
      border-radius: 6px;
      border: 1px solid var(--border);
      overflow-wrap: anywhere;
    }

    .token-item > code {
      display: inline-block;
      margin-left: 8px;
      font-weight: 700;
    }

    .token-locations {
      margin-top: 8px;
      font-size: 12px;
    }

    .token-locations code {
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .muted {
      color: var(--muted);
      font-size: 12px;
    }

    .back-link {
      display: inline-block;
      margin: 12px 16px;
      color: var(--muted);
      font-size: 12px;
    }

    .top-navigation {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin: 16px 0;
    }

    .top-navigation a {
      display: inline-block;
      padding: 7px 10px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--surface);
      font-size: 12px;
    }

    .index-style {
      margin: 20px 0;
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
    }

    .index-style > h3 {
      background: var(--surface);
    }

    .index-style-content {
      padding: 12px 16px;
    }

    .index-file-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .index-file-list li {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      padding: 7px 0;
      border-bottom: 1px solid var(--border);
      overflow-wrap: anywhere;
    }

    .index-file-list li:last-child {
      border-bottom: 0;
    }

    .index-file-list .file-name {
      flex: 1 1 260px;
      min-width: 0;
      overflow-wrap: anywhere;
    }

    .index-file-list .file-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 12px;
    }

    .index-file-list .file-links a {
      color: var(--blue-text);
    }

    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 16px 0;
    }

    .filter-bar input,
    .filter-bar select {
      min-width: 180px;
      max-width: 100%;
      padding: 10px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--background);
      color: var(--foreground);
      font: inherit;
    }

    .no-results {
      padding: 16px;
      color: var(--muted);
    }

    @media (max-width: 800px) {
      body {
        padding: 20px 12px;
      }

      h1 {
        font-size: 22px;
      }

      .context-columns,
      .source-columns {
        grid-template-columns: 1fr;
      }

      .change-card {
        margin: 10px;
        padding: 12px;
      }
    }
  `;
}

// ============================================================
// UNIFIED DIFF RENDERING
// ============================================================

function renderUnifiedDiff(patch) {
  if (!patch) {
    return `<p class="muted">No differences. The files are identical.</p>`;
  }

  const lines = patch.split("\n");

  return `
    <div class="diff">${lines
      .map((line) => {
        let className = "context";

        if (line.startsWith("+++") || line.startsWith("---")) {
          className = "file-header";
        } else if (line.startsWith("@@")) {
          className = "hunk";
        } else if (line.startsWith("+")) {
          className = "addition";
        } else if (line.startsWith("-")) {
          className = "deletion";
        }

        return `
          <div class="diff-line ${className}">${escapeHtml(line) || " "}</div>
        `;
      })
      .join("")}</div>
  `;
}

// ============================================================
// INDIVIDUAL STYLE HTML REPORT
// ============================================================

function generateHtmlReport(style, styleUI, results, counts) {
  const changed = results.filter((result) => result.status !== "IDENTICAL");

  const extractedChanges = getExtractedChanges(style, results);
  const highlightedChanges = getHighlightedChanges(style, results);

  const totalAddedTokens = extractedChanges.reduce(
    (total, change) =>
      total + change.tokens.filter((token) => token.type === "ADDED").length,
    0
  );

  const totalRemovedTokens = extractedChanges.reduce(
    (total, change) =>
      total + change.tokens.filter((token) => token.type === "REMOVED").length,
    0
  );

  /*
   * Changed Files now includes unchanged files as well.
   * All files are navigable, not just modified ones.
   */
  const fileLinks = results.length
    ? results
        .map(
          (result, index) => `
        <li>
          <a href="#file-${index}">
            <span class="status ${statusClass(result.status)}">
              ${result.status}
            </span>

            ${escapeHtml(result.path)}
          </a>
        </li>
      `
        )
        .join("")
    : "<li>No files found.</li>";

  const fileDetails = results
    .map((result, index) => {
      const metadata = {
        baselineFile: result.baselineFile,
        styledFile: result.styledFile,
        baselineLineCount: result.baselineLineCount,
        styledLineCount: result.styledLineCount,
      };

      const exactChanges = result.lineChanges.map((change) =>
        createChangeMetadata(style, result, change)
      );

      return `
      <section
        class="file-section"
        id="file-${index}"
        data-status="${result.status}"
      >
        <h3>
          <span class="status ${statusClass(result.status)}">
            ${result.status}
          </span>

          <span>${escapeHtml(result.path)}</span>
        </h3>

        <div class="file-meta">
          <p>
            <strong>Baseline:</strong>
            ${escapeHtml(metadata.baselineFile || "File does not exist")}
          </p>

          <p>
            <strong>Styled:</strong>
            ${escapeHtml(metadata.styledFile || "File does not exist")}
          </p>

          <p>
            <strong>Baseline lines:</strong>
            ${metadata.baselineLineCount}
          </p>

          <p>
            <strong>Styled lines:</strong>
            ${metadata.styledLineCount}
          </p>

          <p>
            <strong>Extracted change groups:</strong>
            ${result.lineChanges.length}
          </p>
        </div>

        ${
          result.status === "IDENTICAL"
            ? `
              <p class="section-description">
                This file is identical to the baseline.
                No differences were detected.
              </p>
            `
            : ""
        }

        <!-- Unified diff: OPEN BY DEFAULT -->

        <details open>
          <summary>View unified diff</summary>

          ${renderUnifiedDiff(result.patch)}
        </details>

        <!-- Highlighted context diff: OPEN BY DEFAULT -->

        <details open>
          <summary>Highlighted Context Diff</summary>

          <p class="section-description">
            Source context surrounding each change.
            Red highlights indicate removed tokens; green highlights
            indicate added tokens. Line numbers refer to their respective
            baseline or styled files.
          </p>

          ${renderHighlightedContext(result.highlightedChanges)}
        </details>

        <!-- Exact changes: CLOSED BY DEFAULT -->

        <details>
          <summary>Exact Changes</summary>

          <p class="section-description">
            Full original and updated lines, extracted tokens,
            and their exact source locations.
          </p>

          ${renderExtractedChanges(exactChanges)}
        </details>

        <a class="back-link" href="#top">Back to top ↑</a>
        <a class="back-link" href="index.html">Global index ↗</a>
      </section>
    `;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>${escapeHtml(style)} UI Diff Report</title>

  <style>
    ${getReportStyles()}
  </style>
</head>

<body>
  <main id="top">
    <h1>${escapeHtml(style)} — UI Diff Report</h1>

    <div class="top-navigation">
      <a href="index.html">← Global Index</a>
      <a href="#file-list">All Files</a>
      <a href="#details">Detailed Differences</a>
    </div>

    <div class="meta">
      <p>Baseline: ${escapeHtml(BASELINE_UI)}</p>
      <p>Compared: ${escapeHtml(styleUI)}</p>
    </div>

    <h2>Summary</h2>

    <div class="summary">
      <div class="card">
        <span class="number">${counts.modified}</span>
        <span class="label">Modified files</span>
      </div>

      <div class="card">
        <span class="number">${counts.added}</span>
        <span class="label">Added files</span>
      </div>

      <div class="card">
        <span class="number">${counts.missing}</span>
        <span class="label">Missing files</span>
      </div>

      <div class="card">
        <span class="number">${counts.identical}</span>
        <span class="label">Identical files</span>
      </div>

      <div class="card">
        <span class="number">${changed.length}</span>
        <span class="label">Changed files</span>
      </div>

      <div class="card">
        <span class="number">${extractedChanges.length}</span>
        <span class="label">Extracted change groups</span>
      </div>

      <div class="card">
        <span class="number">${totalAddedTokens}</span>
        <span class="label">Added tokens</span>
      </div>

      <div class="card">
        <span class="number">${totalRemovedTokens}</span>
        <span class="label">Removed tokens</span>
      </div>
    </div>

    <h2 id="file-list">Changed Files and Unchanged Files</h2>

    <p class="muted">
      All files from the baseline and this style are listed below.
      Select a file to jump to its details.
    </p>

    <ul class="file-list">
      ${fileLinks}
    </ul>

    <h2 id="details">Detailed Differences and Exact Locations</h2>

    ${fileDetails || "<p>No files found for comparison.</p>"}
  </main>
</body>
</html>
`;

  const reportPath = path.join(REPORT_DIR, `${style}.diff.html`);

  fs.writeFileSync(reportPath, html, "utf8");

  return reportPath;
}

// ============================================================
// TEXT REPORT GENERATION
// ============================================================

function formatTokenChanges(tokenChanges) {
  if (!tokenChanges.length) {
    return "  No token-level changes detected.";
  }

  return tokenChanges
    .map((item) => {
      const symbol = item.type === "ADDED" ? "+" : "-";

      const locations = item.occurrences
        .map((occurrence) => `line ${occurrence.lineNumber}`)
        .join(", ");

      return `  ${symbol} ${item.token}` + (locations ? ` (${locations})` : "");
    })
    .join("\n");
}

function formatHighlightedContext(changes) {
  if (!changes.length) {
    return "No highlighted context available.";
  }

  const output = [];

  for (const change of changes) {
    output.push("");
    output.push(`Change #${change.changeNumber}: ${change.type}`);

    output.push(
      `  Baseline lines: ${formatLineRange(change.baselineLineRange)}`
    );

    output.push(`  Styled lines:   ${formatLineRange(change.styledLineRange)}`);

    output.push("");
    output.push("  Baseline context:");

    for (const line of change.baselineContext) {
      const marker = line.changed ? "-" : " ";

      output.push(
        `  ${marker} ${String(line.lineNumber).padStart(4)} | ${line.content}`
      );
    }

    output.push("");
    output.push("  Styled context:");

    for (const line of change.styledContext) {
      const marker = line.changed ? "+" : " ";

      output.push(
        `  ${marker} ${String(line.lineNumber).padStart(4)} | ${line.content}`
      );
    }

    output.push("");
    output.push("  Token summary:");

    for (const token of change.tokenSummary.removed) {
      output.push(`    REMOVED ${token}`);
    }

    for (const token of change.tokenSummary.added) {
      output.push(`    ADDED   ${token}`);
    }
  }

  return output.join("\n");
}

function generateTextReport(style, styleUI, results, counts) {
  const changed = results.filter((result) => result.status !== "IDENTICAL");

  const output = [
    `UI DIFF REPORT — ${style}`,
    "=".repeat(72),
    "",

    `Baseline: ${BASELINE_UI}`,
    `Compared: ${styleUI}`,
    "",

    "SUMMARY",
    "-------",
    `Modified:  ${counts.modified}`,
    `Added:     ${counts.added}`,
    `Missing:   ${counts.missing}`,
    `Identical: ${counts.identical}`,
    `Changed:   ${changed.length}`,
    "",

    "ALL FILES",
    "---------",

    ...(results.length
      ? results.map((result) => `[${result.status}] ${result.path}`)
      : ["No files found."]),

    "",
    "DETAILED DIFFS",
    "--------------",

    ...changed.flatMap((result) => [
      "",
      `### ${result.path} [${result.status}]`,
      "",
      result.patch,
    ]),

    "",
    "HIGHLIGHTED CONTEXT DIFFS",
    "-------------------------",
  ];

  for (const result of changed) {
    output.push("");
    output.push(`### ${result.path}`);

    output.push(formatHighlightedContext(result.highlightedChanges));
  }

  output.push("");
  output.push("EXACT CHANGES");
  output.push("-------------");

  for (const result of changed) {
    output.push("");
    output.push(`### ${result.path}`);

    if (!result.lineChanges.length) {
      output.push("No extracted changes.");
      continue;
    }

    for (const change of result.lineChanges) {
      output.push("");
      output.push(`Change #${change.changeNumber}: ${change.type}`);

      output.push(
        `  Baseline lines: ${formatLineRange(change.baselineLineRange)}`
      );

      output.push(
        `  Styled lines:   ${formatLineRange(change.styledLineRange)}`
      );

      output.push("");
      output.push("  Original lines:");

      if (change.removedLines.length) {
        for (const line of change.removedLines) {
          output.push(`  - [${line.lineNumber}] ${line.content}`);
        }
      } else {
        output.push("  (none)");
      }

      output.push("");
      output.push("  Updated lines:");

      if (change.addedLines.length) {
        for (const line of change.addedLines) {
          output.push(`  + [${line.lineNumber}] ${line.content}`);
        }
      } else {
        output.push("  (none)");
      }

      output.push("");
      output.push("  Token changes:");
      output.push(formatTokenChanges(change.tokenChanges));
    }
  }

  output.push("");

  const reportPath = path.join(REPORT_DIR, `${style}.diff.txt`);

  fs.writeFileSync(reportPath, output.join("\n") + "\n", "utf8");

  return reportPath;
}

// ============================================================
// PER-STYLE JSON AND REPORT GENERATION
// ============================================================

function generateReport(style, styleUI, results, counts) {
  const changed = results.filter((result) => result.status !== "IDENTICAL");

  const textReportPath = generateTextReport(style, styleUI, results, counts);

  const htmlReportPath = generateHtmlReport(style, styleUI, results, counts);

  const extractedChanges = getExtractedChanges(style, results);
  const highlightedChanges = getHighlightedChanges(style, results);

  const changesJsonPath = path.join(REPORT_DIR, `${style}.changes.json`);

  const changesDocument = {
    metadata: {
      style,
      baselineStyle: BASELINE_STYLE,
      baselineDirectory: toRelativePath(BASELINE_UI),
      comparedDirectory: toRelativePath(styleUI),
      generatedAt: new Date().toISOString(),
    },

    summary: {
      totalFiles: results.length,
      changedFiles: changed.length,

      modifiedFiles: counts.modified,
      addedFiles: counts.added,
      missingFiles: counts.missing,
      identicalFiles: counts.identical,

      changeGroups: extractedChanges.length,
      highlightedChangeGroups: highlightedChanges.length,

      addedTokens: extractedChanges.reduce(
        (total, change) =>
          total +
          change.tokens.filter((token) => token.type === "ADDED").length,
        0
      ),

      removedTokens: extractedChanges.reduce(
        (total, change) =>
          total +
          change.tokens.filter((token) => token.type === "REMOVED").length,
        0
      ),
    },

    files: results.map((result) => ({
      path: result.path,
      status: result.status,

      baselineFile: result.baselineFile,
      styledFile: result.styledFile,

      baselineLineCount: result.baselineLineCount,
      styledLineCount: result.styledLineCount,

      changeGroups: result.lineChanges.length,
    })),

    changes: extractedChanges,
    highlightedChanges,
  };

  writeJson(changesJsonPath, changesDocument);

  return {
    changed,
    textReportPath,
    htmlReportPath,
    changesJsonPath,
    extractedChanges,
    highlightedChanges,
  };
}

// ============================================================
// GLOBAL INDEX.HTML GENERATION
// ============================================================

/**
 * Creates a global navigation page for every compared style.
 *
 * The index includes:
 * - A summary of all styles.
 * - Links to every style's HTML, text, and JSON reports.
 * - Every component's status, including IDENTICAL files.
 * - Direct links to changed components in individual HTML reports.
 * - Search and status filters.
 */
function generateGlobalIndex(summary, generatedStyles) {
  const totals = summary.reduce(
    (acc, entry) => {
      acc.modified += entry.modified;
      acc.added += entry.added;
      acc.missing += entry.missing;
      acc.identical += entry.identical;
      acc.changed += entry.changed;
      acc.totalFiles += entry.total;
      acc.changeGroups += entry.extractedChangeGroups;

      return acc;
    },
    {
      modified: 0,
      added: 0,
      missing: 0,
      identical: 0,
      changed: 0,
      totalFiles: 0,
      changeGroups: 0,
    }
  );

  const styleSections = generatedStyles
    .map(({ style, results }) => {
      const entry = summary.find((item) => item.style === style);

      const fileItems = results
        .map((result, index) => {
          const reportUrl = `${encodeURIComponent(style)}.diff.html`;
          const fileAnchor = `file-${index}`;

          return `
        <li
          data-status="${result.status}"
          data-search="${escapeHtml(
            `${style} ${result.path} ${result.status}`.toLowerCase()
          )}"
        >
          <span class="status ${statusClass(result.status)}">
            ${result.status}
          </span>

          <span class="file-name">
            ${escapeHtml(result.path)}
          </span>

          <span class="file-links">
            <a href="${reportUrl}#${fileAnchor}">
              Open details ↗
            </a>

            ${
              result.lineChanges.length
                ? `<span>${result.lineChanges.length} change group(s)</span>`
                : `<span class="muted">No changes</span>`
            }
          </span>
        </li>
      `;
        })
        .join("");

      return `
      <section
        class="index-style"
        id="style-${encodeURIComponent(style)}"
        data-style="${escapeHtml(style.toLowerCase())}"
      >
        <h3>
          <span>${escapeHtml(style)}</span>

          <span class="status modified">
            ${entry.changed} changed
          </span>
        </h3>

        <div class="index-style-content">
          <div class="summary">
            <div class="card">
              <span class="number">${entry.modified}</span>
              <span class="label">Modified</span>
            </div>

            <div class="card">
              <span class="number">${entry.added}</span>
              <span class="label">Added</span>
            </div>

            <div class="card">
              <span class="number">${entry.missing}</span>
              <span class="label">Missing</span>
            </div>

            <div class="card">
              <span class="number">${entry.identical}</span>
              <span class="label">Identical</span>
            </div>

            <div class="card">
              <span class="number">${entry.extractedChangeGroups}</span>
              <span class="label">Change groups</span>
            </div>
          </div>

          <div class="top-navigation">
            <a href="${encodeURIComponent(style)}.diff.html">
              Open HTML report ↗
            </a>

            <a href="${encodeURIComponent(style)}.diff.txt">
              Open text report ↗
            </a>

            <a href="${encodeURIComponent(style)}.changes.json">
              Open changes JSON ↗
            </a>
          </div>

          <h4>Components and Files</h4>

          <ul class="index-file-list">
            ${fileItems || "<li>No files found.</li>"}
          </ul>
        </div>
      </section>
    `;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>Registry UI — Global Diff Index</title>

  <style>
    ${getReportStyles()}

    .global-header {
      position: sticky;
      top: 0;
      z-index: 100;
      margin: -28px -20px 24px;
      padding: 16px 20px;
      background: var(--background);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
    }

    .global-header-inner {
      max-width: 1450px;
      margin: 0 auto;
    }

    .global-header h1 {
      font-size: 23px;
    }

    .global-header p {
      margin: 4px 0;
      color: var(--muted);
      font-size: 12px;
    }

    .global-navigation {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }

    .global-navigation a {
      display: inline-block;
      padding: 6px 10px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--surface);
      font-size: 12px;
    }

    .index-file-list li[data-hidden="true"],
    .index-style[data-hidden="true"] {
      display: none;
    }

    .index-style h3 {
      position: sticky;
      top: 135px;
      z-index: 10;
      background: var(--surface);
    }

    .index-style-content > h4 {
      margin-top: 20px;
    }

    .index-file-list {
      margin-top: 8px;
    }

    .filter-bar {
      position: sticky;
      top: 112px;
      z-index: 50;
      padding: 12px 0;
      background: var(--background);
    }

    .index-file-list .file-name {
      overflow-wrap: anywhere;
    }

    @media (max-width: 800px) {
      .global-header {
        margin: -20px -12px 20px;
        padding: 12px;
      }

      .global-header h1 {
        font-size: 19px;
      }

      .index-style h3 {
        top: 150px;
      }

      .filter-bar {
        top: 125px;
      }
    }
  </style>
</head>

<body>
  <header class="global-header">
    <div class="global-header-inner">
      <h1>Registry UI — Global Diff Index</h1>

      <p>
        Browse all compared styles, components, and their differences
        from one page.
      </p>

      <p>
        Baseline:
        ${escapeHtml(toRelativePath(BASELINE_UI))}
      </p>

      <p>
        Generated:
        ${escapeHtml(new Date().toLocaleString())}
      </p>

      <nav class="global-navigation">
        <a href="#overview">Overview</a>
        <a href="#styles">All Styles and Components</a>
        <a href="#top">Back to Top ↑</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <h2 id="overview">Overall Summary</h2>

    <div class="summary">
      <div class="card">
        <span class="number">${summary.length}</span>
        <span class="label">Styles compared</span>
      </div>

      <div class="card">
        <span class="number">${totals.totalFiles}</span>
        <span class="label">Total file comparisons</span>
      </div>

      <div class="card">
        <span class="number">${totals.changed}</span>
        <span class="label">Changed file comparisons</span>
      </div>

      <div class="card">
        <span class="number">${totals.modified}</span>
        <span class="label">Modified</span>
      </div>

      <div class="card">
        <span class="number">${totals.added}</span>
        <span class="label">Added</span>
      </div>

      <div class="card">
        <span class="number">${totals.missing}</span>
        <span class="label">Missing</span>
      </div>

      <div class="card">
        <span class="number">${totals.identical}</span>
        <span class="label">Identical</span>
      </div>

      <div class="card">
        <span class="number">${totals.changeGroups}</span>
        <span class="label">Extracted change groups</span>
      </div>
    </div>

    <h2 id="styles">All Styles and Components</h2>

    <p class="muted">
      Search by style, filename, or status. Filter the list to show
      modified, added, missing, or identical files. Click a component
      to open its details in the corresponding style report.
    </p>

    <div class="filter-bar">
      <input
        id="search-input"
        type="search"
        placeholder="Search styles or components..."
        aria-label="Search styles or components"
      />

      <select id="status-filter" aria-label="Filter by file status">
        <option value="ALL">All statuses</option>
        <option value="MODIFIED">Modified</option>
        <option value="ADDED">Added</option>
        <option value="MISSING">Missing</option>
        <option value="IDENTICAL">Identical</option>
      </select>

      <select id="style-filter" aria-label="Filter by style">
        <option value="ALL">All styles</option>

        ${summary
          .map(
            (entry) => `
          <option value="${escapeHtml(entry.style.toLowerCase())}">
            ${escapeHtml(entry.style)}
          </option>
        `
          )
          .join("")}
      </select>
    </div>

    <p id="results-count" class="muted"></p>

    ${styleSections || "<p>No styles available.</p>"}

    <a class="back-link" href="#top">Back to top ↑</a>
  </main>

  <script>
    const searchInput = document.getElementById("search-input");
    const statusFilter = document.getElementById("status-filter");
    const styleFilter = document.getElementById("style-filter");
    const resultsCount = document.getElementById("results-count");

    function applyFilters() {
      const search = searchInput.value.trim().toLowerCase();
      const status = statusFilter.value;
      const selectedStyle = styleFilter.value;

      let visibleFiles = 0;
      let visibleStyles = 0;

      document.querySelectorAll(".index-style").forEach((section) => {
        const styleName = section.dataset.style;

        const styleMatches =
          selectedStyle === "ALL" ||
          styleName === selectedStyle;

        let filesInSection = 0;

        section.querySelectorAll(".index-file-list li").forEach((item) => {
          const itemStatus = item.dataset.status;
          const itemSearch = item.dataset.search || "";

          const searchMatches =
            !search || itemSearch.includes(search);

          const statusMatches =
            status === "ALL" || itemStatus === status;

          const visible =
            styleMatches && searchMatches && statusMatches;

          item.dataset.hidden = String(!visible);

          if (visible) {
            filesInSection++;
            visibleFiles++;
          }
        });

        const sectionSearchMatches =
          !search || styleName.includes(search);

        const showSection =
          styleMatches &&
          (filesInSection > 0 || sectionSearchMatches);

        section.dataset.hidden = String(!showSection);

        if (showSection) {
          visibleStyles++;
        }
      });

      resultsCount.textContent =
        "Showing " + visibleFiles + " file(s) across " +
        visibleStyles + " style section(s).";
    }

    searchInput.addEventListener("input", applyFilters);
    statusFilter.addEventListener("change", applyFilters);
    styleFilter.addEventListener("change", applyFilters);

    applyFilters();
  </script>
</body>
</html>
`;

  fs.writeFileSync(INDEX_PATH, html, "utf8");

  return INDEX_PATH;
}

// ============================================================
// MAIN
// ============================================================

function main() {
  assertDirectory(BASE_DIR);
  assertDirectory(BASELINE_UI);

  const baselineFiles = listFiles(BASELINE_UI);

  const { styles, ignoredStyles, availableStyles } = discoverStyles();

  if (!styles.length) {
    throw new Error(`No styles available for comparison under ${BASE_DIR}`);
  }

  fs.mkdirSync(REPORT_DIR, { recursive: true });

  printHeader();

  console.log(`${color.gray("Baseline:")} ${BASELINE_UI}`);
  console.log(`${color.gray("Styles found:")} ${availableStyles.length}`);
  console.log(`${color.gray("Styles to compare:")} ${styles.length}`);
  console.log(`${color.gray("Styles ignored:")} ${ignoredStyles.length}`);
  console.log(`${color.gray("Baseline files:")} ${baselineFiles.size}`);
  console.log("");

  if (ignoredStyles.length) {
    console.log(
      `${color.gray("Ignored:")} ` +
        ignoredStyles.map((style) => color.dim(style)).join(", ")
    );

    console.log("");
  }

  printLegend();

  console.log(color.bold("STYLE COMPARISON"));
  console.log("-".repeat(110));
  console.log("");

  const summary = [];
  const allChanges = [];
  const allHighlightedChanges = [];

  /*
   * Retain each style's results so the global index can list every
   * component and create direct links to its corresponding HTML page.
   */
  const generatedStyles = [];

  for (const style of styles) {
    const styleUI = path.join(BASE_DIR, style, "ui");
    const styleFiles = listFiles(styleUI);

    const allPaths = [
      ...new Set([...baselineFiles.keys(), ...styleFiles.keys()]),
    ].sort();

    const results = allPaths.map((relativePath) =>
      diffFile(
        relativePath,
        baselineFiles.get(relativePath),
        styleFiles.get(relativePath),
        style
      )
    );

    const counts = countStatuses(results);

    const {
      changed,
      textReportPath,
      htmlReportPath,
      changesJsonPath,
      extractedChanges,
      highlightedChanges,
    } = generateReport(style, styleUI, results, counts);

    allChanges.push(...extractedChanges);
    allHighlightedChanges.push(...highlightedChanges);

    const entry = {
      style,

      ...counts,

      changed: changed.length,
      total: results.length,

      extractedChangeGroups: extractedChanges.length,
      highlightedChangeGroups: highlightedChanges.length,

      addedTokens: extractedChanges.reduce(
        (total, change) =>
          total +
          change.tokens.filter((token) => token.type === "ADDED").length,
        0
      ),

      removedTokens: extractedChanges.reduce(
        (total, change) =>
          total +
          change.tokens.filter((token) => token.type === "REMOVED").length,
        0
      ),

      report: toRelativePath(textReportPath),
      htmlReport: toRelativePath(htmlReportPath),
      changesReport: toRelativePath(changesJsonPath),
    };

    summary.push(entry);

    generatedStyles.push({
      style,
      results,
    });

    printStyleSummary(style, counts, extractedChanges.length);
  }

  // ==========================================================
  // AGGREGATED JSON REPORT
  // ==========================================================

  const aggregateChangesPath = path.join(REPORT_DIR, "changes.json");

  writeJson(aggregateChangesPath, {
    metadata: {
      baselineStyle: BASELINE_STYLE,
      baselineDirectory: toRelativePath(BASELINE_UI),

      ignoredStyles: [...IGNORED_STYLES],

      generatedAt: new Date().toISOString(),
    },

    summary: {
      stylesCompared: styles.length,
      totalChangeGroups: allChanges.length,
      highlightedChangeGroups: allHighlightedChanges.length,

      addedTokens: allChanges.reduce(
        (total, change) =>
          total +
          change.tokens.filter((token) => token.type === "ADDED").length,
        0
      ),

      removedTokens: allChanges.reduce(
        (total, change) =>
          total +
          change.tokens.filter((token) => token.type === "REMOVED").length,
        0
      ),
    },

    changes: allChanges,
    highlightedChanges: allHighlightedChanges,
  });

  // ==========================================================
  // JSON SUMMARY
  // ==========================================================

  const summaryPath = path.join(REPORT_DIR, "summary.json");

  writeJson(summaryPath, summary);

  // ==========================================================
  // GLOBAL INDEX
  // ==========================================================

  const globalIndexPath = generateGlobalIndex(summary, generatedStyles);

  // ==========================================================
  // FINAL SUMMARY
  // ==========================================================

  const totals = summary.reduce(
    (acc, entry) => {
      acc.modified += entry.modified;
      acc.added += entry.added;
      acc.missing += entry.missing;
      acc.identical += entry.identical;
      acc.changed += entry.changed;

      acc.changeGroups += entry.extractedChangeGroups;
      acc.highlightedChangeGroups += entry.highlightedChangeGroups;

      acc.addedTokens += entry.addedTokens;
      acc.removedTokens += entry.removedTokens;

      return acc;
    },
    {
      modified: 0,
      added: 0,
      missing: 0,
      identical: 0,
      changed: 0,

      changeGroups: 0,
      highlightedChangeGroups: 0,

      addedTokens: 0,
      removedTokens: 0,
    }
  );

  console.log("");

  console.log(
    color.bold("============================================================")
  );

  console.log(color.bold("FINAL SUMMARY"));
  console.log("");

  console.log(`Styles compared:           ${color.cyan(styles.length)}`);
  console.log(`Styles ignored:            ${color.gray(ignoredStyles.length)}`);
  console.log(`Modified files:            ${color.yellow(totals.modified)}`);
  console.log(`Added files:               ${color.green(totals.added)}`);
  console.log(`Missing files:             ${color.red(totals.missing)}`);
  console.log(`Identical files:           ${color.gray(totals.identical)}`);
  console.log(`Total changed files:       ${color.bold(totals.changed)}`);
  console.log(`Change groups:             ${color.cyan(totals.changeGroups)}`);

  console.log(
    `Highlighted change groups: ${color.cyan(totals.highlightedChangeGroups)}`
  );

  console.log(`Added tokens:              ${color.green(totals.addedTokens)}`);
  console.log(`Removed tokens:            ${color.red(totals.removedTokens)}`);

  console.log("");

  console.log(`${color.green("Reports directory:")} ${REPORT_DIR}`);
  console.log(`${color.green("Global HTML index:")} ${globalIndexPath}`);
  console.log(`${color.green("Summary:")} ${summaryPath}`);

  console.log(
    `${color.green("All extracted changes:")} ${aggregateChangesPath}`
  );

  console.log("");

  console.log(
    color.bold("============================================================")
  );

  console.log("");
}

// ============================================================
// ENTRY POINT
// ============================================================

try {
  main();
} catch (error) {
  console.error(color.error(`Error: ${error.stack || error.message}`));

  process.exitCode = 1;
}

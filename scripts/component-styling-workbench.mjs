#!/usr/bin/env node

/**
 * COMPONENT STYLING WORKBENCH
 * ===========================
 *
 * Turns the existing UI diff JSON into an actionable,
 * component-first styling audit.
 *
 * Features:
 * - Groups changes by file, component, and JSX element.
 * - Identifies React component definitions.
 * - Inspects nested JSX relationships.
 * - Extracts added and removed utility classes.
 * - Tracks className attributes and variant definitions.
 * - Shows original/updated source and line numbers.
 * - Generates HTML, Markdown, JSON, and per-component tasks.
 * - Supports search, status filters, and task prioritization.
 *
 * No third-party dependencies required.
 *
 * Expected input:
 *   A JSON report produced by the existing diff script:
 *     <style>.changes.json
 *
 * Example:
 *   node scripts/component-styling-workbench.mjs \
 *     --changes ./reports/modern.changes.json \
 *     --baseline ./registry/default/ui \
 *     --styled ./registry/modern/ui \
 *     --out ./reports/styling-workbench
 *
 * The --baseline and --styled arguments should point to the
 * respective ui directories, not their parent style directories.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

// ============================================================
// CONFIGURATION
// ============================================================

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

const DEFAULTS = {
  changes: "",
  baseline: "",
  styled: "",
  out: "./reports/styling-workbench",
  style: "",
  includeIdentical: false,
  contextLines: 5,
};

const CONFIG = {
  ...DEFAULTS,
  ...parseArguments(process.argv.slice(2)),
};

const CLASS_ATTRIBUTES = new Set(["className", "class"]);

const STYLE_PROP_NAMES = new Set([
  "className",
  "class",
  "style",
  "variants",
  "defaultVariants",
  "compoundVariants",
]);

const IGNORED_DIRECTORIES = new Set([
  "node_modules",
  ".git",
  ".next",
  "dist",
  "build",
  "coverage",
]);

// ============================================================
// CLI
// ============================================================

function parseArguments(args) {
  const result = {};

  const aliases = {
    "--changes": "changes",
    "--baseline": "baseline",
    "--styled": "styled",
    "--out": "out",
    "--style": "style",
    "--context-lines": "contextLines",
    "--include-identical": "includeIdentical",
  };

  for (let i = 0; i < args.length; i++) {
    const argument = args[i];

    if (argument === "--help" || argument === "-h") {
      printHelp();
      process.exit(0);
    }

    if (argument === "--include-identical") {
      result.includeIdentical = true;
      continue;
    }

    const key = aliases[argument];

    if (!key) {
      throw new Error(`Unknown argument: ${argument}`);
    }

    const value = args[i + 1];

    if (value == null || value.startsWith("--")) {
      throw new Error(`Missing value for ${argument}`);
    }

    result[key] = key === "contextLines" ? Number(value) : value;

    i++;
  }

  return result;
}

function printHelp() {
  console.log(`
Component Styling Workbench

Usage:
  node scripts/component-styling-workbench.mjs [options]

Options:
  --changes <file>       Existing per-style .changes.json report
  --baseline <directory> Baseline UI source directory
  --styled <directory>   Styled UI source directory
  --out <directory>      Output directory
  --style <name>         Display name for this style
  --context-lines <n>    Context lines around source changes
  --include-identical    Include files without changes
  --help                 Show this help

Example:
  node scripts/component-styling-workbench.mjs \\
    --changes ./reports/modern.changes.json \\
    --baseline ./registry/default/ui \\
    --styled ./registry/modern/ui \\
    --out ./reports/styling-workbench
`);
}

// ============================================================
// FILE SYSTEM
// ============================================================

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function readJson(filePath) {
  return JSON.parse(readText(filePath));
}

function writeText(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function writeJson(filePath, value) {
  writeText(filePath, JSON.stringify(value, null, 2) + "\n");
}

function exists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function resolvePath(value) {
  return path.resolve(process.cwd(), value);
}

function normalizePath(value) {
  return String(value || "").replaceAll("\\", "/");
}

function toRelativePath(value) {
  if (!value) return null;

  return normalizePath(path.relative(process.cwd(), path.resolve(value)));
}

function assertFile(filePath, description) {
  if (!exists(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error(`${description} does not exist: ${filePath}`);
  }
}

function assertDirectory(directory, description) {
  if (!exists(directory) || !fs.statSync(directory).isDirectory()) {
    throw new Error(`${description} does not exist: ${directory}`);
  }
}

function listSourceFiles(directory) {
  if (!exists(directory)) return [];

  const output = [];

  function visit(current) {
    const entries = fs.readdirSync(current, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      if (entry.isDirectory() && IGNORED_DIRECTORIES.has(entry.name)) {
        continue;
      }

      const absolute = path.join(current, entry.name);

      if (entry.isDirectory()) {
        visit(absolute);
        continue;
      }

      if (!entry.isFile()) continue;

      if (!/\.(tsx?|jsx?)$/i.test(entry.name)) continue;

      output.push(absolute);
    }
  }

  visit(directory);

  return output.sort();
}

// ============================================================
// HTML / MARKDOWN ESCAPING
// ============================================================

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

// function escapeMarkdown(value) {
//   return String(value ?? "")
//     .replaceAll("\\", "\\\\")
//     .replaceAll("|", "\\|")
//     .replaceAll("`", "\\`");
// }

function escapeMarkdown(value) {
  return String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\*/g, "\\*")
    .replace(/_/g, "\\_")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|");
}

// ============================================================
// SOURCE LINE UTILITIES
// ============================================================

function lineStarts(source) {
  const starts = [0];

  for (let i = 0; i < source.length; i++) {
    if (source[i] === "\n") {
      starts.push(i + 1);
    }
  }

  return starts;
}

function offsetToLine(starts, offset) {
  let low = 0;
  let high = starts.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (starts[middle] <= offset) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return Math.max(1, high + 1);
}

function getSourceLines(source) {
  return source.split(/\r?\n/);
}

function getSourceContext(
  source,
  lineNumber,
  contextLines = CONFIG.contextLines
) {
  const lines = getSourceLines(source);

  const start = Math.max(1, lineNumber - contextLines);
  const end = Math.min(lines.length, lineNumber + contextLines);

  return lines.slice(start - 1, end).map((content, index) => ({
    lineNumber: start + index,
    content,
    changed: start + index === lineNumber,
  }));
}

function getLineRange(lines) {
  if (!lines?.length) return null;

  const numbers = lines.map((line) => line.lineNumber).filter(Number.isFinite);

  if (!numbers.length) return null;

  return {
    start: Math.min(...numbers),
    end: Math.max(...numbers),
  };
}

// ============================================================
// TOKEN / CLASS EXTRACTION
// ============================================================

/**
 * The existing report's token regex also captures non-class
 * identifiers. This function filters common Tailwind utility
 * candidates and retains the original token for traceability.
 *
 * It intentionally does not claim every token is a Tailwind
 * class. Custom utilities and arbitrary values are retained.
 */

const CLASS_TOKEN_REGEX =
  /(?:[A-Za-z0-9_$-]*\[[^\]\r\n]+\][A-Za-z0-9_$:/!%#.,-]*|[A-Za-z0-9_$-]+(?:\/[A-Za-z0-9_$.-]+)?(?::[A-Za-z0-9_$./!%#,[\]-]+)*(?:\([^()\r\n]*\))?)/g;

function extractTokens(value) {
  return [
    ...new Set(
      (String(value ?? "").match(CLASS_TOKEN_REGEX) || []).filter(Boolean)
    ),
  ];
}

function isLikelyUtilityClass(token) {
  if (!token) return false;

  if (
    token.startsWith("http:") ||
    token.startsWith("https:") ||
    token.startsWith("import") ||
    token.startsWith("export")
  ) {
    return false;
  }

  if (/^[A-Z][A-Za-z0-9_$]*$/.test(token)) {
    return false;
  }

  if (
    /^(const|let|var|return|function|async|await|type|interface|extends|implements|import|export|from|default|new|throw|if|else|switch|case|break|for|while|true|false|null|undefined)$/.test(
      token
    )
  ) {
    return false;
  }

  return true;
}

function unique(items) {
  return [...new Set(items)];
}

function extractClassTokens(value) {
  return extractTokens(value).filter(isLikelyUtilityClass);
}

function collectLineText(lines) {
  return (lines || []).map((line) => line.content || "").join("\n");
}

// ============================================================
// LIGHTWEIGHT TYPESCRIPT / JSX SCANNER
// ============================================================

/**
 * This scanner deliberately avoids evaluating source code.
 *
 * It identifies:
 * - Function and const-based React component definitions.
 * - JSX opening elements.
 * - className/class attributes.
 * - Parent/child JSX relationships.
 * - Style-related identifiers such as variants and cva calls.
 *
 * It handles common TSX conventions without requiring a parser.
 * For unusual syntax, component ownership may be reported as
 * uncertain instead of guessed.
 */

function isIdentifierStart(character) {
  return Boolean(character) && /[A-Za-z_$]/.test(character);
}

function isIdentifierPart(character) {
  return Boolean(character) && /[A-Za-z0-9_$]/.test(character);
}

function skipWhitespace(source, index) {
  while (index < source.length && /\s/.test(source[index])) {
    index++;
  }

  return index;
}

function readIdentifier(source, index) {
  if (!isIdentifierStart(source[index])) return null;

  let end = index + 1;

  while (isIdentifierPart(source[end])) {
    end++;
  }

  return {
    name: source.slice(index, end),
    start: index,
    end,
  };
}

function skipQuotedString(source, index) {
  const quote = source[index];

  let i = index + 1;

  while (i < source.length) {
    if (source[i] === "\\") {
      i += 2;
      continue;
    }

    if (source[i] === quote) {
      return i + 1;
    }

    i++;
  }

  return source.length;
}

function skipTemplateString(source, index) {
  let i = index + 1;

  while (i < source.length) {
    if (source[i] === "\\") {
      i += 2;
      continue;
    }

    if (source[i] === "`") {
      return i + 1;
    }

    i++;
  }

  return source.length;
}

function skipLineComment(source, index) {
  const end = source.indexOf("\n", index + 2);

  return end === -1 ? source.length : end + 1;
}

function skipBlockComment(source, index) {
  const end = source.indexOf("*/", index + 2);

  return end === -1 ? source.length : end + 2;
}

function findMatchingDelimiter(source, start, opening, closing) {
  if (source[start] !== opening) return -1;

  let depth = 0;
  let i = start;

  while (i < source.length) {
    const character = source[i];

    if (character === "'" || character === '"') {
      i = skipQuotedString(source, i);
      continue;
    }

    if (character === "`") {
      i = skipTemplateString(source, i);
      continue;
    }

    if (character === "/" && source[i + 1] === "/") {
      i = skipLineComment(source, i);
      continue;
    }

    if (character === "/" && source[i + 1] === "*") {
      i = skipBlockComment(source, i);
      continue;
    }

    if (character === opening) depth++;

    if (character === closing) {
      depth--;

      if (depth === 0) return i;
    }

    i++;
  }

  return -1;
}

function findMatchingBrace(source, start) {
  return findMatchingDelimiter(source, start, "{", "}");
}

function readExpression(source, openingBrace) {
  const end = findMatchingBrace(source, openingBrace);

  if (end === -1) {
    return {
      start: openingBrace,
      end: source.length,
      value: source.slice(openingBrace + 1),
      complete: false,
    };
  }

  return {
    start: openingBrace,
    end: end + 1,
    value: source.slice(openingBrace + 1, end),
    complete: true,
  };
}

/**
 * Reads JSX attributes without interpreting their expressions.
 */
function parseJsxOpeningTag(source, start) {
  if (source[start] !== "<") return null;

  const first = source[start + 1];

  if (!isIdentifierStart(first)) return null;

  const nameStart = start + 1;
  let i = nameStart;

  while (i < source.length && /[A-Za-z0-9_$.:-]/.test(source[i])) {
    i++;
  }

  const tagName = source.slice(nameStart, i);
  const attributes = [];

  while (i < source.length) {
    i = skipWhitespace(source, i);

    if (source[i] === ">") {
      return {
        tagName,
        start,
        openEnd: i + 1,
        end: i + 1,
        selfClosing: false,
        attributes,
        complete: true,
      };
    }

    if (source[i] === "/" && source[i + 1] === ">") {
      return {
        tagName,
        start,
        openEnd: i + 2,
        end: i + 2,
        selfClosing: true,
        attributes,
        complete: true,
      };
    }

    if (i >= source.length) break;

    if (source[i] === "{") {
      const expression = readExpression(source, i);

      attributes.push({
        name: "{...expression}",
        start: i,
        end: expression.end,
        expression: expression.value,
      });

      i = expression.end;
      continue;
    }

    const identifier = readIdentifier(source, i);

    if (!identifier) {
      i++;
      continue;
    }

    const attribute = {
      name: identifier.name,
      start: i,
      end: identifier.end,
      value: null,
      valueStart: null,
      valueEnd: null,
      expression: null,
    };

    i = skipWhitespace(source, identifier.end);

    if (source[i] === "=") {
      i = skipWhitespace(source, i + 1);

      if (source[i] === '"' || source[i] === "'") {
        const valueStart = i;

        i = skipQuotedString(source, i);

        attribute.valueStart = valueStart;
        attribute.valueEnd = i;
        attribute.value = source.slice(valueStart + 1, i - 1);
        attribute.end = i;
      } else if (source[i] === "{") {
        const expression = readExpression(source, i);

        attribute.valueStart = i;
        attribute.valueEnd = expression.end;
        attribute.value = expression.value;
        attribute.expression = expression.value;
        attribute.end = expression.end;

        i = expression.end;
      } else if (source[i] === "`") {
        const valueStart = i;

        i = skipTemplateString(source, i);

        attribute.valueStart = valueStart;
        attribute.valueEnd = i;
        attribute.value = source.slice(valueStart + 1, i - 1);
        attribute.end = i;
      }
    }

    attributes.push(attribute);
  }

  return {
    tagName,
    start,
    openEnd: source.length,
    end: source.length,
    selfClosing: false,
    attributes,
    complete: false,
  };
}

/**
 * Locates JSX tags while skipping strings and comments.
 */
function parseJsxElements(source) {
  const elements = [];

  let i = 0;

  while (i < source.length) {
    const character = source[i];

    if (character === "'" || character === '"') {
      i = skipQuotedString(source, i);
      continue;
    }

    if (character === "`") {
      i = skipTemplateString(source, i);
      continue;
    }

    if (character === "/" && source[i + 1] === "/") {
      i = skipLineComment(source, i);
      continue;
    }

    if (character === "/" && source[i + 1] === "*") {
      i = skipBlockComment(source, i);
      continue;
    }

    if (
      character === "<" &&
      source[i + 1] !== "/" &&
      source[i + 1] !== "!" &&
      source[i + 1] !== "="
    ) {
      const element = parseJsxOpeningTag(source, i);

      if (element?.complete) {
        elements.push(element);
        i = element.openEnd;
        continue;
      }
    }

    i++;
  }

  return buildElementRelationships(source, elements);
}

/**
 * Associates opening tags with closing tags and parent elements.
 */
function buildElementRelationships(source, elements) {
  const stack = [];

  for (const element of elements) {
    while (stack.length && stack[stack.length - 1].selfClosing) {
      stack.pop();
    }

    const parent = stack.length ? stack[stack.length - 1] : null;

    element.parent = parent;
    element.parentTag = parent?.tagName || null;

    if (parent) {
      parent.children ||= [];
      parent.children.push(element);
    }

    if (!element.selfClosing) {
      const closingTag = `</${element.tagName}`;

      const closeStart = source.indexOf(closingTag, element.openEnd);

      if (closeStart !== -1) {
        const closeEnd = source.indexOf(">", closeStart);

        element.end = closeEnd === -1 ? source.length : closeEnd + 1;
      } else {
        element.end = source.length;
      }

      stack.push(element);
    } else {
      element.end = element.openEnd;
    }
  }

  return elements;
}

// ============================================================
// COMPONENT DEFINITION DISCOVERY
// ============================================================

function findBraceBody(source, start) {
  const brace = source.indexOf("{", start);

  if (brace === -1) return null;

  const end = findMatchingBrace(source, brace);

  if (end === -1) return null;

  return {
    start: brace,
    end: end + 1,
  };
}

function discoverComponents(source) {
  const definitions = [];

  const patterns = [
    {
      type: "function",
      regex:
        /\b(?:export\s+)?(?:default\s+)?(?:async\s+)?function\s+([A-Z][A-Za-z0-9_$]*)\s*(?:<[^>{}]*>)?\s*\(/g,
    },
    {
      type: "const",
      regex:
        /\b(?:export\s+)?(?:const|let|var)\s+([A-Z][A-Za-z0-9_$]*)\s*(?::[^=]+)?=\s*(?:React\.memo\s*\(\s*)?(?:React\.forwardRef\s*\(\s*)?(?:\([^)]*\)|[A-Za-z_$][A-Za-z0-9_$]*)\s*=>/g,
    },
    {
      type: "arrow",
      regex:
        /\b(?:export\s+)?(?:const|let|var)\s+([A-Z][A-Za-z0-9_$]*)\s*=\s*(?:React\.memo\s*\(\s*)?(?:React\.forwardRef\s*\(\s*)?\(/g,
    },
  ];

  for (const pattern of patterns) {
    pattern.regex.lastIndex = 0;

    let match;

    while ((match = pattern.regex.exec(source))) {
      const name = match[1];
      const declarationStart = match.index;

      let bodySearchStart = pattern.regex.lastIndex;

      if (pattern.type === "function") {
        const paramsStart = source.indexOf("(", match.index);

        const paramsEnd = findMatchingDelimiter(source, paramsStart, "(", ")");

        if (paramsEnd === -1) continue;

        bodySearchStart = paramsEnd + 1;

        // Skip common TypeScript return annotations.
        const arrowOrBody = source.indexOf("{", bodySearchStart);

        if (arrowOrBody === -1) continue;

        bodySearchStart = arrowOrBody;
      } else {
        const arrowIndex = source.indexOf("=>", match.index);

        if (arrowIndex === -1) continue;

        bodySearchStart = arrowIndex + 2;
      }

      const body = findBraceBody(source, bodySearchStart);

      if (!body) continue;

      definitions.push({
        name,
        type: pattern.type,
        start: declarationStart,
        bodyStart: body.start,
        end: body.end,
      });
    }
  }

  // Include common exported anonymous default declarations when
  // no named declaration can be found. These are not assigned
  // an invented component name.
  return uniqueBy(
    definitions.sort((a, b) => a.start - b.start),
    (item) => `${item.name}:${item.start}`
  );
}

function uniqueBy(items, keyFunction) {
  const seen = new Set();

  return items.filter((item) => {
    const key = keyFunction(item);

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function getOwningComponent(element, components) {
  const candidates = components
    .filter(
      (component) =>
        element.start >= component.bodyStart && element.start < component.end
    )
    .sort((a, b) => a.end - a.bodyStart - (b.end - b.bodyStart));

  return candidates[0] || null;
}

function getElementLabel(element) {
  if (!element) return "Unknown JSX element";

  const name = element.tagName;

  if (/^[A-Z]/.test(name)) {
    return name;
  }

  return `DOM <${name}>`;
}

function getComponentChain(element) {
  const chain = [];

  let current = element;

  while (current) {
    chain.unshift(current.tagName);
    current = current.parent;
  }

  return chain;
}

// ============================================================
// SOURCE FILE ANALYSIS
// ============================================================

function analyzeSourceFile(filePath, rootDirectory) {
  if (!filePath || !exists(filePath)) return null;

  const source = readText(filePath);
  const starts = lineStarts(source);

  const components = discoverComponents(source);
  const elements = parseJsxElements(source);

  const componentByName = new Map();

  for (const component of components) {
    if (!componentByName.has(component.name)) {
      componentByName.set(component.name, []);
    }

    componentByName.get(component.name).push(component);
  }

  const classAttributes = [];
  const elementByOpeningOffset = new Map();

  for (const element of elements) {
    element.lineNumber = offsetToLine(starts, element.start);
    element.endLineNumber = offsetToLine(starts, element.end);

    element.owner = getOwningComponent(element, components);
    element.chain = getComponentChain(element);

    elementByOpeningOffset.set(element.start, element);

    for (const attribute of element.attributes) {
      if (!CLASS_ATTRIBUTES.has(attribute.name)) continue;

      const value = attribute.value || "";

      classAttributes.push({
        tagName: element.tagName,
        component: element.owner?.name || null,
        ownerConfidence: element.owner ? "DETECTED" : "UNKNOWN",

        elementStart: element.start,
        elementEnd: element.end,

        attributeStart: attribute.start,
        attributeEnd: attribute.end,

        lineNumber: offsetToLine(starts, attribute.start),

        expression: attribute.expression,
        value,

        tokens: extractClassTokens(value),

        jsxChain: element.chain,
      });
    }
  }

  const styleDefinitions = [];

  const stylePattern =
    /\b(cva|cx|cn|clsx|twMerge|tv|variants|defaultVariants|compoundVariants)\b/g;

  let styleMatch;

  while ((styleMatch = stylePattern.exec(source))) {
    styleDefinitions.push({
      name: styleMatch[1],
      lineNumber: offsetToLine(starts, styleMatch.index),
      offset: styleMatch.index,
      context: getSourceContext(
        source,
        offsetToLine(starts, styleMatch.index),
        2
      ),
    });
  }

  return {
    path: filePath,
    relativePath: rootDirectory
      ? normalizePath(path.relative(rootDirectory, filePath))
      : normalizePath(filePath),

    source,
    starts,

    lines: getSourceLines(source),

    components,
    elements,
    classAttributes,
    styleDefinitions,
    componentByName,
  };
}

// ============================================================
// COMPONENT OWNERSHIP AND CHANGE LOCATION
// ============================================================

function getChangeLines(change) {
  return [...(change.removedLines || []), ...(change.addedLines || [])];
}

function findChangedSourceOffset(source, lineNumber) {
  const starts = lineStarts(source);

  return starts[Math.max(0, Math.min(starts.length - 1, lineNumber - 1))];
}

function distanceToRange(offset, start, end) {
  if (offset < start) return start - offset;
  if (offset > end) return offset - end;

  return 0;
}

/**
 * Selects the most likely JSX element responsible for a change.
 *
 * Preference:
 * 1. An element whose className attribute contains the changed line.
 * 2. An element whose opening tag contains the changed line.
 * 3. The nearest JSX element in the same file.
 *
 * Inferred associations are marked explicitly.
 */
function findLikelyElement(sourceInfo, changeLines) {
  if (!sourceInfo?.elements?.length) {
    return {
      element: null,
      confidence: "UNKNOWN",
      reason: "No JSX element could be identified.",
    };
  }

  const lineNumbers = changeLines
    .map((line) => line.lineNumber)
    .filter(Number.isFinite);

  if (!lineNumbers.length) {
    return {
      element: null,
      confidence: "UNKNOWN",
      reason: "The change does not contain usable source line numbers.",
    };
  }

  const candidateOffsets = lineNumbers.map((lineNumber) =>
    findChangedSourceOffset(sourceInfo.source, lineNumber)
  );

  const candidates = sourceInfo.elements.map((element) => {
    const openingDistance = Math.min(
      ...candidateOffsets.map((offset) =>
        distanceToRange(offset, element.start, element.openEnd)
      )
    );

    const classAttributes = sourceInfo.classAttributes.filter(
      (attribute) => attribute.elementStart === element.start
    );

    const classDistance = classAttributes.length
      ? Math.min(
          ...classAttributes.map((attribute) =>
            Math.min(
              ...candidateOffsets.map((offset) =>
                distanceToRange(
                  offset,
                  attribute.attributeStart,
                  attribute.attributeEnd
                )
              )
            )
          )
        )
      : Number.MAX_SAFE_INTEGER;

    const insideElement = candidateOffsets.some(
      (offset) => offset >= element.start && offset <= element.end
    );

    return {
      element,

      score:
        classDistance !== Number.MAX_SAFE_INTEGER
          ? classDistance * 0.25
          : openingDistance + 100,

      classDistance,
      openingDistance,
      insideElement,
    };
  });

  candidates.sort((a, b) => {
    if (a.classDistance !== b.classDistance) {
      return a.classDistance - b.classDistance;
    }

    return a.score - b.score;
  });

  const best = candidates[0];

  if (!best) {
    return {
      element: null,
      confidence: "UNKNOWN",
      reason: "No suitable JSX element was found.",
    };
  }

  if (best.classDistance === 0) {
    return {
      element: best.element,
      confidence: "HIGH",
      reason: "The changed line intersects the JSX element's class attribute.",
    };
  }

  if (best.openingDistance === 0) {
    return {
      element: best.element,
      confidence: "HIGH",
      reason: "The changed line intersects the JSX opening tag.",
    };
  }

  if (best.insideElement) {
    return {
      element: best.element,
      confidence: "MEDIUM",
      reason: "The changed line falls inside this JSX element's source range.",
    };
  }

  return {
    element: best.element,
    confidence: "LOW",
    reason: "This is the nearest JSX element; ownership is inferred.",
  };
}

// ============================================================
// CHANGE CLASSIFICATION
// ============================================================

function classifyToken(token) {
  const value = String(token || "");

  const prefix = value.match(
    /^(?:(?:dark|light|hover|focus|active|disabled|enabled|visited|checked|first|last|odd|even|group-hover|group-focus|focus-visible|focus-within|aria-[^:]+|data-[^:]+|sm|md|lg|xl|2xl|motion-reduce|motion-safe|print|portrait|landscape):)+/
  );

  const variant = prefix?.[0] || "";

  const utility = value.slice(variant.length);

  let category = "UTILITY";

  if (
    /^(p|px|py|pt|pr|pb|pl|ps|pe|m|mx|my|mt|mr|mb|ml|ms|me|gap|space-[xy])(?:-|$)/.test(
      utility
    )
  ) {
    category = "SPACING";
  } else if (
    /^(w|h|min-w|min-h|max-w|max-h|size|basis|grow|shrink)(-|$)/.test(utility)
  ) {
    category = "SIZE";
  } else if (
    /^(flex|inline-flex|inline|block|grid|inline-grid|hidden|contents|table)(-|$)/.test(
      utility
    )
  ) {
    category = "LAYOUT";
  } else if (
    /^(items|justify|content|self|place|flex|grid-cols|grid-rows|col-span|row-span)(-|$)/.test(
      utility
    )
  ) {
    category = "ALIGNMENT";
  } else if (
    /^(bg|text|fill|stroke|from|via|to|decoration|accent|caret|placeholder)(-|$)/.test(
      utility
    )
  ) {
    category = "COLOR";
  } else if (
    /^(border|rounded|ring|outline|divide|shadow)(-|$)/.test(utility)
  ) {
    category = "BORDER_AND_DEPTH";
  } else if (
    /^(font|text-(xs|sm|base|lg|xl)|leading|tracking|italic|not-italic|uppercase|lowercase|capitalize|normal-case|underline|no-underline|truncate|whitespace|break-words)(-|$)/.test(
      utility
    )
  ) {
    category = "TYPOGRAPHY";
  } else if (
    /^(opacity|transition|duration|ease|animate|transform|translate|rotate|scale|origin)(-|$)/.test(
      utility
    )
  ) {
    category = "MOTION";
  } else if (/^(overflow|overscroll|scroll|snap)(-|$)/.test(utility)) {
    category = "OVERFLOW_AND_SCROLL";
  } else if (
    /^(cursor|pointer-events|select|resize|touch|appearance)(-|$)/.test(utility)
  ) {
    category = "INTERACTION";
  } else if (
    /^(z|relative|absolute|fixed|sticky|inset|top|right|bottom|left|start|end)(-|$)/.test(
      utility
    )
  ) {
    category = "POSITIONING";
  } else if (/^(sr-only|not-sr-only|visible|invisible)(-|$)/.test(utility)) {
    category = "ACCESSIBILITY_AND_VISIBILITY";
  }

  return {
    token: value,
    variant,
    utility,
    category,
  };
}

function classifyChange(change, tokens) {
  const combined = [
    ...(change.removedLines || []).map((line) => line.content),
    ...(change.addedLines || []).map((line) => line.content),
  ].join("\n");

  const allTokens = tokens.map(classifyToken);

  const categories = unique(allTokens.map((item) => item.category));

  if (/\b(cva|variants|defaultVariants|compoundVariants)\b/.test(combined)) {
    categories.push("VARIANTS");
  }

  if (
    /\b(asChild|disabled|aria-|data-state|role=|onClick|onKeyDown|onKeyUp)\b/.test(
      combined
    )
  ) {
    categories.push("INTERACTION_AND_ACCESSIBILITY");
  }

  if (
    /\b(animate-|data-\[state=|group-data-\[state=|transition-)\b/.test(
      combined
    )
  ) {
    categories.push("STATE_AND_ANIMATION");
  }

  return unique(categories.length ? categories : ["SOURCE_CHANGE"]);
}

function getPriority(categories, tokenChanges) {
  if (
    categories.includes("LAYOUT") ||
    categories.includes("COLOR") ||
    categories.includes("BORDER_AND_DEPTH")
  ) {
    return "HIGH";
  }

  if (
    categories.includes("VARIANTS") ||
    categories.includes("INTERACTION_AND_ACCESSIBILITY")
  ) {
    return "HIGH";
  }

  if (tokenChanges.added.length || tokenChanges.removed.length) {
    return "MEDIUM";
  }

  return "LOW";
}

// ============================================================
// COMPONENT CONTEXT AND GUIDANCE
// ============================================================

function describeCategory(category) {
  const descriptions = {
    SPACING:
      "Review internal padding, external margins, gaps, and spacing consistency.",
    SIZE: "Review width, height, minimum/maximum dimensions, and responsive sizing.",
    LAYOUT: "Review display mode and the overall layout of this component.",
    ALIGNMENT:
      "Review alignment, distribution, and positioning of child elements.",
    COLOR:
      "Review background, text, border-related colors, and theme consistency.",
    BORDER_AND_DEPTH:
      "Review border visibility, radius, outlines, rings, and elevation.",
    TYPOGRAPHY:
      "Review font size, weight, line height, tracking, and text decoration.",
    MOTION:
      "Review transition timing, animation, transform behavior, and motion preferences.",
    OVERFLOW_AND_SCROLL:
      "Review clipping, scroll behavior, and overflow of nested content.",
    INTERACTION:
      "Review pointer behavior, cursor feedback, and interactive states.",
    POSITIONING:
      "Review stacking context, placement, and positioning relative to surrounding elements.",
    ACCESSIBILITY_AND_VISIBILITY:
      "Review visibility utilities and accessibility-related presentation.",
    VARIANTS:
      "Review component variants, defaults, and compound variant styling.",
    INTERACTION_AND_ACCESSIBILITY:
      "Check disabled states, keyboard interaction, ARIA attributes, and interactive behavior.",
    STATE_AND_ANIMATION:
      "Review state-dependent classes, transitions, and animation behavior.",
    SOURCE_CHANGE:
      "Inspect the source change manually to determine the appropriate styling action.",
    UTILITY: "Inspect this utility in the context of the component.",
  };

  return descriptions[category] || descriptions.SOURCE_CHANGE;
}

function describeRole(element) {
  if (!element) {
    return "The exact visual responsibility could not be determined automatically.";
  }

  const name = element.tagName.toLowerCase();

  const roles = {
    button: "Clickable button or trigger.",
    input: "Input control.",
    textarea: "Multiline text input.",
    select: "Selection control.",
    label: "Form label.",
    nav: "Navigation region.",
    main: "Primary page content.",
    header: "Header region.",
    footer: "Footer region.",
    form: "Form container.",
    img: "Image element.",
    svg: "Vector graphic or icon.",
    span: "Inline content or icon wrapper.",
    p: "Paragraph or descriptive text.",
    h1: "Primary heading.",
    h2: "Section heading.",
    h3: "Subsection heading.",
    ul: "Unordered list.",
    ol: "Ordered list.",
    li: "List item.",
    a: "Link.",
    table: "Table container.",
    tr: "Table row.",
    td: "Table cell.",
    th: "Table heading cell.",
  };

  return (
    roles[name] ||
    (/^[A-Z]/.test(element.tagName)
      ? `React component element: ${element.tagName}.`
      : `HTML element: <${element.tagName}>.`)
  );
}

function describeChange(change, componentName, elementName, categories) {
  const added =
    change.tokenChanges
      ?.filter((item) => item.type === "ADDED")
      .map((item) => item.token) || [];

  const removed =
    change.tokenChanges
      ?.filter((item) => item.type === "REMOVED")
      .map((item) => item.token) || [];

  const hasClassChanges = added.length || removed.length;

  if (categories.includes("VARIANTS")) {
    return `Review the variant definitions associated with ${componentName}. Confirm that the affected variant is applied to ${elementName} and that defaults remain correct.`;
  }

  if (hasClassChanges) {
    return `Update the styling associated with ${elementName} in ${componentName}. Apply the added utilities, remove obsolete utilities, and verify the resulting visual behavior.`;
  }

  return `Review the source change in ${componentName} and determine whether it requires a visual adjustment, a behavioral adjustment, or no styling change.`;
}

// ============================================================
// BUILD FILE LOOKUPS
// ============================================================

function buildSourceIndex(directory) {
  const index = new Map();

  for (const absolutePath of listSourceFiles(directory)) {
    const relativePath = normalizePath(path.relative(directory, absolutePath));

    index.set(relativePath, absolutePath);
  }

  return index;
}

function findSourceFile(relativePath, index, root) {
  if (!relativePath) return null;

  const normalized = normalizePath(relativePath).replace(/^\.\/+/, "");

  const direct = index.get(normalized);

  if (direct) return direct;

  const suffixMatches = [...index.entries()].filter(
    ([candidate]) =>
      candidate === normalized || candidate.endsWith(`/${normalized}`)
  );

  if (suffixMatches.length === 1) {
    return suffixMatches[0][1];
  }

  const absolute = path.resolve(root, normalized);

  if (
    absolute.startsWith(path.resolve(root) + path.sep) &&
    exists(absolute) &&
    fs.statSync(absolute).isFile()
  ) {
    return absolute;
  }

  return null;
}

// ============================================================
// CHANGE DATA NORMALIZATION
// ============================================================

function normalizeInputChanges(document, styleName) {
  const changes = Array.isArray(document.changes) ? document.changes : [];

  return changes.map((change, index) => {
    const removedLines = change.removedLines || [];
    const addedLines = change.addedLines || [];

    const suppliedTokens = change.tokens || change.tokenChanges || [];

    const addedTokens = unique([
      ...suppliedTokens
        .filter((item) => item.type === "ADDED")
        .map((item) => item.token),

      ...(change.tokenSummary?.added || []),
    ]);

    const removedTokens = unique([
      ...suppliedTokens
        .filter((item) => item.type === "REMOVED")
        .map((item) => item.token),

      ...(change.tokenSummary?.removed || []),
    ]);

    const fallbackAdded = extractClassTokens(collectLineText(addedLines));

    const fallbackRemoved = extractClassTokens(collectLineText(removedLines));

    const effectiveAdded = unique(
      addedTokens.length ? addedTokens : fallbackAdded
    );

    const effectiveRemoved = unique(
      removedTokens.length ? removedTokens : fallbackRemoved
    );

    return {
      id: `${styleName}:${change.component || "unknown"}:${index + 1}`,

      style: change.style || styleName,

      component: normalizePath(change.component || ""),

      status: change.status || "MODIFIED",

      baselineFile: change.baselineFile || change.component || null,

      styledFile: change.styledFile || change.component || null,

      changeNumber: change.changeNumber || index + 1,

      changeType: change.changeType || change.type || "MODIFIED",

      baselineLineRange: change.baselineLineRange || null,

      styledLineRange: change.styledLineRange || null,

      removedLines,
      addedLines,

      tokens: suppliedTokens,

      tokenChanges: {
        added: effectiveAdded,
        removed: effectiveRemoved,
      },

      raw: change,
    };
  });
}

// ============================================================
// FILE-LEVEL COMPONENT ANALYSIS
// ============================================================

function analyzeChanges(
  changes,
  baselineRoot,
  styledRoot,
  baselineIndex,
  styledIndex
) {
  const sourceCache = new Map();

  function getAnalysis(filePath, root) {
    if (!filePath) return null;

    const cacheKey = path.resolve(filePath);

    if (!sourceCache.has(cacheKey)) {
      sourceCache.set(cacheKey, analyzeSourceFile(filePath, root));
    }

    return sourceCache.get(cacheKey);
  }

  const tasks = [];

  for (const change of changes) {
    const baselinePath = findSourceFile(
      change.baselineFile || change.component,
      baselineIndex,
      baselineRoot
    );

    const styledPath = findSourceFile(
      change.styledFile || change.component,
      styledIndex,
      styledRoot
    );

    const baselineAnalysis = getAnalysis(baselinePath, baselineRoot);

    const styledAnalysis = getAnalysis(styledPath, styledRoot);

    const changedSource = styledAnalysis || baselineAnalysis;

    const target = findLikelyElement(changedSource, getChangeLines(change));

    const element = target.element;

    const owner = element?.owner || null;

    const componentName =
      owner?.name ||
      path
        .basename(change.component || "Unknown component")
        .replace(/\.(tsx?|jsx?)$/i, "")
        .replace(/[^A-Za-z0-9_$]/g, "") ||
      "UnknownComponent";

    const elementName = element
      ? getElementLabel(element)
      : "Unresolved JSX element";

    const categories = classifyChange(
      {
        removedLines: change.removedLines,
        addedLines: change.addedLines,
      },
      [...change.tokenChanges.added, ...change.tokenChanges.removed]
    );

    const priority = getPriority(categories, change.tokenChanges);

    const baselineContext =
      change.baselineLineRange && baselineAnalysis
        ? getSourceContext(
            baselineAnalysis.source,
            change.baselineLineRange.start
          )
        : [];

    const styledContext =
      change.styledLineRange && styledAnalysis
        ? getSourceContext(styledAnalysis.source, change.styledLineRange.start)
        : [];

    const componentDefinitions = changedSource?.components || [];

    const componentDefinition = owner
      ? {
          name: owner.name,
          type: owner.type,
          startLine: offsetToLine(changedSource.starts, owner.start),
          endLine: offsetToLine(changedSource.starts, owner.end),
        }
      : null;

    const matchingStyleDefinitions = (
      changedSource?.styleDefinitions || []
    ).filter(
      (definition) =>
        Math.abs(definition.lineNumber - (element?.lineNumber || 1)) <= 80
    );

    const nearbyClassAttributes = (changedSource?.classAttributes || []).filter(
      (attribute) =>
        attribute.component === componentName ||
        attribute.jsxChain.includes(element?.tagName)
    );

    const task = {
      id: change.id,

      style: change.style,

      file: change.component,

      status: change.status,

      changeNumber: change.changeNumber,

      changeType: change.changeType,

      priority,

      categories,

      component: {
        name: componentName,
        definition: componentDefinition,

        ownershipConfidence: owner ? "DETECTED" : "INFERRED",

        sourceFile: changedSource?.relativePath || change.component,

        baselineSourceFile: baselinePath ? toRelativePath(baselinePath) : null,

        styledSourceFile: styledPath ? toRelativePath(styledPath) : null,
      },

      target: {
        name: elementName,

        tagName: element?.tagName || null,

        lineNumber: element?.lineNumber || null,

        confidence: target.confidence,

        reason: target.reason,

        parentTag: element?.parentTag || null,

        jsxChain: element?.chain || [],

        role: describeRole(element),
      },

      tokenChanges: {
        added: change.tokenChanges.added.map(classifyToken),
        removed: change.tokenChanges.removed.map(classifyToken),
      },

      source: {
        baselineLineRange: change.baselineLineRange,
        styledLineRange: change.styledLineRange,

        removedLines: change.removedLines,
        addedLines: change.addedLines,

        baselineContext,
        styledContext,
      },

      styleDefinitions: matchingStyleDefinitions,

      relatedClassAttributes: nearbyClassAttributes.map((attribute) => ({
        tagName: attribute.tagName,
        component: attribute.component,
        lineNumber: attribute.lineNumber,
        value: attribute.value,
        tokens: attribute.tokens,
        jsxChain: attribute.jsxChain,
      })),

      guidance: {
        summary: describeChange(change, componentName, elementName, categories),

        categoryDescriptions: categories.map((category) => ({
          category,
          description: describeCategory(category),
        })),

        actions: buildActions(change, categories, componentName, elementName),
      },

      confidenceNotes: [
        owner
          ? `Component definition "${owner.name}" was found in the source.`
          : "No enclosing component definition was confidently identified.",

        target.reason,

        baselineAnalysis
          ? "Baseline source file was found."
          : "Baseline source file was not found.",

        styledAnalysis
          ? "Styled source file was found."
          : "Styled source file was not found.",
      ],
    };

    tasks.push(task);
  }

  return tasks;
}

// ============================================================
// STYLING ACTIONS
// ============================================================

function buildActions(change, categories, componentName, elementName) {
  const actions = [];

  const added = change.tokenChanges.added;
  const removed = change.tokenChanges.removed;

  if (added.length) {
    actions.push({
      type: "ADD",
      title: `Apply ${added.length} added utility class(es)`,
      target: elementName,
      classes: added,
      detail:
        `Add these utilities to the correct styling location for ${elementName}. ` +
        "Prefer the existing className, variant, or compound-variant definition when applicable.",
    });
  }

  if (removed.length) {
    actions.push({
      type: "REMOVE",
      title: `Remove ${removed.length} obsolete utility class(es)`,
      target: elementName,
      classes: removed,
      detail:
        "Remove these utilities only if the styled version is intended to replace the baseline behavior. Check for overlapping or conflicting utilities first.",
    });
  }

  if (
    categories.includes("VARIANTS") ||
    categories.includes("INTERACTION_AND_ACCESSIBILITY")
  ) {
    actions.push({
      type: "VERIFY",
      title: "Review variants and interaction states",
      target: componentName,
      classes: [],
      detail:
        "Check default variants, compound variants, disabled states, focus behavior, and accessibility attributes before considering the component complete.",
    });
  }

  if (!actions.length) {
    actions.push({
      type: "INSPECT",
      title: "Inspect the source change",
      target: elementName,
      classes: [],
      detail:
        "No reliable class addition or removal was extracted. Inspect the exact source diff and determine whether the change requires styling work.",
    });
  }

  actions.push({
    type: "VERIFY",
    title: "Validate the component in context",
    target: componentName,
    classes: [],
    detail:
      "Compare the baseline and styled implementation. Check responsive behavior, interaction states, nested components, and visual consistency.",
  });

  return actions;
}

// ============================================================
// TASK GROUPING
// ============================================================

function groupTasks(tasks, keyFunction) {
  const groups = new Map();

  for (const task of tasks) {
    const key = keyFunction(task);

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(task);
  }

  return groups;
}

function buildWorkbenchDocument(style, baselineRoot, styledRoot, tasks) {
  const byFile = groupTasks(tasks, (task) => task.file);

  const byComponent = groupTasks(
    tasks,
    (task) => `${task.file}::${task.component.name}`
  );

  const byCategory = groupTasks(tasks, (task) => task.categories.join(", "));

  const byPriority = groupTasks(tasks, (task) => task.priority);

  return {
    metadata: {
      title: `${style} Component Styling Workbench`,
      style,
      baselineRoot: toRelativePath(baselineRoot),
      styledRoot: toRelativePath(styledRoot),
      generatedAt: new Date().toISOString(),
      taskCount: tasks.length,
    },

    summary: {
      files: byFile.size,
      components: byComponent.size,
      tasks: tasks.length,

      highPriority: byPriority.get("HIGH")?.length || 0,
      mediumPriority: byPriority.get("MEDIUM")?.length || 0,
      lowPriority: byPriority.get("LOW")?.length || 0,

      addedClasses: tasks.reduce(
        (sum, task) => sum + task.tokenChanges.added.length,
        0
      ),

      removedClasses: tasks.reduce(
        (sum, task) => sum + task.tokenChanges.removed.length,
        0
      ),

      categories: [...byCategory.keys()],
    },

    tasks,

    groups: {
      files: [...byFile.entries()].map(([file, fileTasks]) => ({
        file,
        taskCount: fileTasks.length,
        components: unique(fileTasks.map((task) => task.component.name)),
        tasks: fileTasks.map((task) => task.id),
      })),

      components: [...byComponent.entries()].map(([key, componentTasks]) => ({
        key,
        file: componentTasks[0].file,
        name: componentTasks[0].component.name,
        taskCount: componentTasks.length,
        targets: unique(componentTasks.map((task) => task.target.name)),
        tasks: componentTasks.map((task) => task.id),
      })),

      categories: [...byCategory.entries()].map(
        ([category, categoryTasks]) => ({
          category,
          taskCount: categoryTasks.length,
          tasks: categoryTasks.map((task) => task.id),
        })
      ),
    },
  };
}

// ============================================================
// HTML RENDERING
// ============================================================

function renderCodeLines(lines, kind = "") {
  if (!lines?.length) {
    return `<p class="muted">No source lines available.</p>`;
  }

  return `
    <div class="code-block">
      ${lines
        .map(
          (line) => `
        <div class="code-line ${line.changed ? "changed" : ""} ${kind}">
          <span class="line-number">${line.lineNumber}</span>
          <code>${escapeHtml(line.content) || " "}</code>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function renderChangeLines(lines, kind) {
  if (!lines?.length) {
    return `<p class="muted">None.</p>`;
  }

  return `
    <div class="code-block">
      ${lines
        .map(
          (line) => `
        <div class="code-line ${kind}">
          <span class="line-number">${line.lineNumber ?? "—"}</span>
          <code>${escapeHtml(line.content) || " "}</code>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function renderClassList(classes, kind) {
  if (!classes?.length) {
    return `<p class="muted">No classes in this category.</p>`;
  }

  return `
    <div class="class-list">
      ${classes
        .map((item) => {
          const parsed = typeof item === "string" ? classifyToken(item) : item;

          return `
          <div class="class-item ${kind}">
            <code>${escapeHtml(parsed.token)}</code>
            <span>${escapeHtml(parsed.category)}</span>
            ${
              parsed.variant
                ? `<span class="variant">${escapeHtml(parsed.variant)}</span>`
                : ""
            }
          </div>
        `;
        })
        .join("")}
    </div>
  `;
}

function renderActions(task) {
  return `
    <div class="actions">
      ${task.guidance.actions
        .map(
          (action, index) => `
        <article class="action">
          <div class="action-heading">
            <span class="action-number">${index + 1}</span>
            <span class="action-type ${action.type.toLowerCase()}">
              ${escapeHtml(action.type)}
            </span>
            <strong>${escapeHtml(action.title)}</strong>
          </div>

          <p>${escapeHtml(action.detail)}</p>

          ${
            action.classes.length
              ? renderClassList(action.classes, action.type.toLowerCase())
              : ""
          }
        </article>
      `
        )
        .join("")}
    </div>
  `;
}

function renderRelatedAttributes(task) {
  if (!task.relatedClassAttributes.length) {
    return `<p class="muted">No related className attributes were detected.</p>`;
  }

  return `
    <div class="related-attributes">
      ${task.relatedClassAttributes
        .map(
          (attribute) => `
        <article class="related-attribute">
          <div>
            <strong>${escapeHtml(attribute.tagName)}</strong>
            <span class="muted">Line ${attribute.lineNumber}</span>
          </div>

          ${
            attribute.component
              ? `<p class="muted">Owner: ${escapeHtml(attribute.component)}</p>`
              : ""
          }

          <pre><code>${escapeHtml(attribute.value || "(dynamic expression)")}</code></pre>

          <p class="muted">
            JSX chain:
            ${escapeHtml(attribute.jsxChain.join(" → "))}
          </p>
        </article>
      `
        )
        .join("")}
    </div>
  `;
}

function renderTask(task, index) {
  const taskId = `task-${index}`;

  return `
    <article
      class="task"
      id="${taskId}"
      data-priority="${escapeAttribute(task.priority)}"
      data-file="${escapeAttribute(task.file.toLowerCase())}"
      data-component="${escapeAttribute(task.component.name.toLowerCase())}"
      data-target="${escapeAttribute(task.target.name.toLowerCase())}"
      data-categories="${escapeAttribute(task.categories.join(" ").toLowerCase())}"
      data-search="${escapeAttribute(
        `${task.file} ${task.component.name} ${task.target.name} ${task.categories.join(" ")} ${task.tokenChanges.added.map((x) => x.token).join(" ")} ${task.tokenChanges.removed.map((x) => x.token).join(" ")}`.toLowerCase()
      )}"
    >
      <div class="task-heading">
        <div>
          <div class="eyebrow">
            ${escapeHtml(task.file)}
            · Change #${task.changeNumber}
          </div>

          <h3>
            ${escapeHtml(task.component.name)}
            <span class="arrow">→</span>
            ${escapeHtml(task.target.name)}
          </h3>

          <p class="muted">
            ${
              task.target.lineNumber
                ? `Target source line: ${task.target.lineNumber}`
                : "Target source line: unresolved"
            }
            · Ownership confidence: ${escapeHtml(task.target.confidence)}
          </p>
        </div>

        <div class="task-badges">
          <span class="badge priority-${task.priority.toLowerCase()}">
            ${task.priority} PRIORITY
          </span>

          <span class="badge">
            ${escapeHtml(task.changeType)}
          </span>
        </div>
      </div>

      <p class="task-summary">
        ${escapeHtml(task.guidance.summary)}
      </p>

      <div class="categories">
        ${task.categories
          .map(
            (category) => `
          <span class="category">${escapeHtml(category)}</span>
        `
          )
          .join("")}
      </div>

      <div class="task-columns">
        <section>
          <h4>➕ Add</h4>
          ${renderClassList(task.tokenChanges.added, "add")}
        </section>

        <section>
          <h4>➖ Remove</h4>
          ${renderClassList(task.tokenChanges.removed, "remove")}
        </section>
      </div>

      <details open>
        <summary>Styling checklist and recommended actions</summary>
        ${renderActions(task)}
      </details>

      <details>
        <summary>Exact original source lines</summary>
        ${renderChangeLines(task.source.removedLines, "remove")}
      </details>

      <details>
        <summary>Exact updated source lines</summary>
        ${renderChangeLines(task.source.addedLines, "add")}
      </details>

      <details>
        <summary>Baseline source context</summary>
        ${renderCodeLines(task.source.baselineContext, "baseline")}
      </details>

      <details>
        <summary>Styled source context</summary>
        ${renderCodeLines(task.source.styledContext, "styled")}
      </details>

      <details>
        <summary>Related className attributes</summary>
        ${renderRelatedAttributes(task)}
      </details>

      ${
        task.styleDefinitions.length
          ? `
            <details>
              <summary>Nearby variant/style definitions</summary>
              ${task.styleDefinitions
                .map(
                  (definition) => `
                <article class="related-attribute">
                  <strong>${escapeHtml(definition.name)}</strong>
                  <span class="muted">Line ${definition.lineNumber}</span>
                  ${renderCodeLines(definition.context)}
                </article>
              `
                )
                .join("")}
            </details>
          `
          : ""
      }

      <details>
        <summary>Detection notes and confidence</summary>
        <ul>
          ${task.confidenceNotes
            .map(
              (note) => `
            <li>${escapeHtml(note)}</li>
          `
            )
            .join("")}
        </ul>

        <p class="muted">
          JSX hierarchy:
          ${escapeHtml(task.target.jsxChain.join(" → ") || "Unavailable")}
        </p>

        <p class="muted">
          Target role:
          ${escapeHtml(task.target.role)}
        </p>

        <p class="muted">
          ${escapeHtml(task.target.reason)}
        </p>
      </details>

      <label class="complete-control">
        <input type="checkbox" data-task-complete="${escapeAttribute(task.id)}">
        Mark this styling task complete
      </label>
    </article>
  `;
}

function getHtmlStyles() {
  return `
    :root {
      color-scheme: light dark;

      --bg: #ffffff;
      --surface: #f6f8fa;
      --surface-raised: #ffffff;
      --text: #24292f;
      --muted: #656d76;
      --border: #d0d7de;
      --accent: #0969da;

      --green-bg: #dafbe1;
      --green-text: #116329;

      --red-bg: #ffebe9;
      --red-text: #cf222e;

      --yellow-bg: #fff8c5;
      --yellow-text: #9a6700;

      --blue-bg: #ddf4ff;
      --blue-text: #0550ae;

      --radius: 10px;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0d1117;
        --surface: #161b22;
        --surface-raised: #0d1117;
        --text: #e6edf3;
        --muted: #9198a1;
        --border: #30363d;
        --accent: #58a6ff;

        --green-bg: #12261e;
        --green-text: #3fb950;

        --red-bg: #2d1619;
        --red-text: #ff7b72;

        --yellow-bg: #2b2511;
        --yellow-text: #d29922;

        --blue-bg: #111f2c;
        --blue-text: #79c0ff;
      }
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 100px;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
      line-height: 1.6;
    }

    a {
      color: var(--accent);
    }

    button, input, select {
      font: inherit;
    }

    .shell {
      max-width: 1600px;
      margin: auto;
      padding: 28px 24px 80px;
    }

    .header {
      padding: 24px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
    }

    h1 {
      margin: 0 0 8px;
      font-size: clamp(24px, 3vw, 38px);
      line-height: 1.2;
    }

    h2 {
      margin: 36px 0 14px;
      font-size: 22px;
    }

    h3 {
      margin: 8px 0;
      font-size: 17px;
      overflow-wrap: anywhere;
    }

    h4 {
      margin: 14px 0 10px;
      font-size: 14px;
    }

    p {
      overflow-wrap: anywhere;
    }

    .muted {
      color: var(--muted);
      font-size: 12px;
    }

    .eyebrow {
      color: var(--muted);
      font-size: 12px;
      overflow-wrap: anywhere;
    }

    .arrow {
      color: var(--muted);
      padding: 0 4px;
    }

    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
      gap: 12px;
      margin: 22px 0;
    }

    .metric {
      min-width: 0;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
    }

    .metric strong {
      display: block;
      font-size: 27px;
      line-height: 1.3;
    }

    .metric span {
      color: var(--muted);
      font-size: 12px;
    }

    .filters {
      position: sticky;
      top: 0;
      z-index: 50;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 14px 0;
      background: var(--bg);
    }

    .filters input,
    .filters select {
      min-width: 160px;
      max-width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--border);
      border-radius: 7px;
      background: var(--surface-raised);
      color: var(--text);
    }

    .filters input {
      flex: 1 1 300px;
    }

    .task {
      margin: 16px 0;
      padding: 18px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface-raised);
      scroll-margin-top: 90px;
    }

    .task-heading {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 14px;
    }

    .task-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      justify-content: flex-end;
    }

    .badge,
    .category {
      display: inline-flex;
      align-items: center;
      padding: 3px 8px;
      border: 1px solid var(--border);
      border-radius: 5px;
      font-size: 10px;
      font-weight: 750;
      white-space: nowrap;
    }

    .priority-high {
      background: var(--red-bg);
      color: var(--red-text);
    }

    .priority-medium {
      background: var(--yellow-bg);
      color: var(--yellow-text);
    }

    .priority-low {
      background: var(--surface);
      color: var(--muted);
    }

    .task-summary {
      margin: 14px 0;
    }

    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 10px 0 16px;
    }

    .task-columns {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin: 16px 0;
    }

    .task-columns > section {
      min-width: 0;
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: 8px;
    }

    .task-columns h4 {
      margin-top: 0;
    }

    .class-list {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      min-width: 0;
    }

    .class-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 7px;
      max-width: 100%;
      padding: 6px 8px;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow-wrap: anywhere;
    }

    .class-item code {
      overflow-wrap: anywhere;
    }

    .class-item > span {
      color: var(--muted);
      font-size: 10px;
    }

    .class-item.add {
      background: var(--green-bg);
      color: var(--green-text);
    }

    .class-item.remove {
      background: var(--red-bg);
      color: var(--red-text);
    }

    .class-item .variant {
      padding-left: 5px;
      border-left: 1px solid currentColor;
    }

    details {
      margin: 10px 0;
      border-top: 1px solid var(--border);
    }

    summary {
      cursor: pointer;
      padding: 12px 0;
      font-size: 13px;
      font-weight: 700;
    }

    summary:hover {
      color: var(--accent);
    }

    .actions {
      display: grid;
      gap: 10px;
      margin-bottom: 14px;
    }

    .action {
      padding: 13px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
    }

    .action-heading {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 9px;
    }

    .action-heading strong {
      overflow-wrap: anywhere;
    }

    .action-number {
      display: inline-grid;
      place-items: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: var(--bg);
      border: 1px solid var(--border);
      font-size: 11px;
    }

    .action-type {
      font-size: 10px;
      font-weight: 800;
    }

    .action-type.add {
      color: var(--green-text);
    }

    .action-type.remove {
      color: var(--red-text);
    }

    .action-type.verify,
    .action-type.inspect {
      color: var(--blue-text);
    }

    .code-block {
      overflow-x: auto;
      margin: 8px 0 14px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--surface);
    }

    .code-line {
      display: flex;
      min-height: 26px;
      font: 12px/1.7 "SFMono-Regular", Consolas,
        "Liberation Mono", monospace;
    }

    .code-line code {
      padding: 3px 10px;
      white-space: pre;
    }

    .code-line.changed {
      background: var(--blue-bg);
    }

    .code-line.add {
      background: var(--green-bg);
    }

    .code-line.remove {
      background: var(--red-bg);
    }

    .code-line .line-number {
      flex: 0 0 50px;
      padding: 3px 8px;
      border-right: 1px solid var(--border);
      color: var(--muted);
      text-align: right;
      user-select: none;
    }

    .related-attributes {
      display: grid;
      gap: 10px;
    }

    .related-attribute {
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: 7px;
      overflow-wrap: anywhere;
    }

    pre {
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .complete-control {
      display: flex;
      align-items: center;
      gap: 9px;
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid var(--border);
      font-size: 12px;
      cursor: pointer;
    }

    .complete-control input {
      width: 17px;
      height: 17px;
    }

    .task.completed {
      opacity: 0.6;
    }

    .task.completed > .task-heading h3 {
      text-decoration: line-through;
    }

    .task[hidden] {
      display: none;
    }

    .empty {
      padding: 24px;
      border: 1px dashed var(--border);
      border-radius: var(--radius);
      color: var(--muted);
      text-align: center;
    }

    .footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 12px;
    }

    @media (max-width: 800px) {
      .shell {
        padding: 14px 10px 50px;
      }

      .header,
      .task {
        padding: 13px;
      }

      .task-heading {
        flex-direction: column;
      }

      .task-badges {
        justify-content: flex-start;
      }

      .task-columns {
        grid-template-columns: 1fr;
      }

      .filters {
        position: relative;
      }
    }
  `;
}

// ```js
// // ============================================================
// // MARKDOWN REPORT GENERATION
// // ============================================================

// function formatMarkdownClasses(classes) {
//   if (!classes?.length) {
//     return "- None detected.";
//   }

//   return classes
//     .map((item) => {
//       const parsed =
//         typeof item === "string" ? classifyToken(item) : item;

//       return (
//         `- \`${escapeMarkdown(parsed.token)}\`` +
//         ` — ${escapeMarkdown(parsed.category)}` +
//         (parsed.variant
//           ? `; variant: \`${escapeMarkdown(parsed.variant)}\``
//           : "")
//       );
//     })
//     .join("\n");
// }

// ============================================================
// MARKDOWN REPORT GENERATION
// ============================================================

function formatMarkdownClasses(classes) {
  if (!Array.isArray(classes) || classes.length === 0) {
    return "- None detected.";
  }

  return classes
    .map((item) => {
      let parsed;

      if (typeof item === "string") {
        // Support plain strings by classifying them.
        parsed =
          typeof classifyToken === "function"
            ? classifyToken(item)
            : {
                token: item,
                category: "Uncategorized",
                variant: null,
              };
      } else if (item && typeof item === "object") {
        // Support pre-classified token objects.
        parsed = item;
      } else {
        // Ignore invalid entries.
        return null;
      }

      // Normalize the expected properties.
      const token = parsed.token ?? parsed.className ?? "";
      const category = parsed.category ?? "Uncategorized";
      const variant = parsed.variant ?? null;

      if (!token) {
        return null;
      }

      return (
        `- \`${escapeMarkdown(token)}\`` +
        ` — ${escapeMarkdown(category)}` +
        (variant ? `; variant: \`${escapeMarkdown(variant)}\`` : "")
      );
    })
    .filter(Boolean)
    .join("\n");
}

function formatMarkdownSource(lines) {
  if (!lines?.length) {
    return "_No source lines available._";
  }

  return [
    "```tsx",
    ...lines.map(
      (line) =>
        `${String(line.lineNumber ?? "—").padStart(5)} | ${line.content}`
    ),
    "```",
  ].join("\n");
}

function renderTaskMarkdown(task) {
  const output = [
    `# ${task.component.name} → ${task.target.name}`,
    "",
    `- **File:** \`${task.file}\``,
    `- **Status:** ${task.status}`,
    `- **Priority:** ${task.priority}`,
    `- **Change group:** ${task.changeNumber}`,
    `- **Target confidence:** ${task.target.confidence}`,
    `- **Target line:** ${task.target.lineNumber ?? "Unknown"}`,
    "",
    "## Why this component needs attention",
    "",
    task.guidance.summary,
    "",
    "## Component context",
    "",
    `- Component: \`${task.component.name}\``,
    `- Target: \`${task.target.name}\``,
    `- Role: ${task.target.role}`,
    `- JSX hierarchy: \`${task.target.jsxChain.join(" → ") || "Unknown"}\``,
    `- Target identification: ${task.target.reason}`,
    "",
    "## Add these classes",
    "",
    formatMarkdownClasses(task.tokenChanges.added),
    "",
    "## Remove these classes",
    "",
    formatMarkdownClasses(task.tokenChanges.removed),
    "",
    "## Change categories",
    "",
    ...task.categories.map(
      (category) => `- **${category}:** ${describeCategory(category)}`
    ),
    "",
    "## Recommended actions",
    "",
    ...task.guidance.actions.flatMap((action, index) => [
      `${index + 1}. **${action.type}: ${action.title}**`,
      `   ${action.detail}`,
      ...(action.classes.length
        ? [
            "",
            "   Classes:",
            ...action.classes.map((token) => `   - \`${token}\``),
          ]
        : []),
      "",
    ]),
    "## Original source lines",
    "",
    formatMarkdownSource(task.source.removedLines),
    "",
    "## Updated source lines",
    "",
    formatMarkdownSource(task.source.addedLines),
    "",
    "## Baseline context",
    "",
    formatMarkdownSource(task.source.baselineContext),
    "",
    "## Styled context",
    "",
    formatMarkdownSource(task.source.styledContext),
    "",
    "## Related className attributes",
    "",
  ];

  if (task.relatedClassAttributes.length) {
    for (const attribute of task.relatedClassAttributes) {
      output.push(
        `### ${attribute.tagName} — line ${attribute.lineNumber}`,
        "",
        `Owner: ${attribute.component || "Unknown"}`,
        "",
        "```tsx",
        attribute.value || "(dynamic expression)",
        "```",
        "",
        `JSX hierarchy: \`${attribute.jsxChain.join(" → ")}\``,
        ""
      );
    }
  } else {
    output.push("_No related className attributes were detected._", "");
  }

  output.push(
    "## Detection notes",
    "",
    ...task.confidenceNotes.map((note) => `- ${note}`),
    "",
    "## Completion checklist",
    "",
    "- [ ] Review the exact source diff.",
    "- [ ] Apply the required styling changes.",
    "- [ ] Remove obsolete utilities where appropriate.",
    "- [ ] Check component variants and nested elements.",
    "- [ ] Check responsive behavior.",
    "- [ ] Check hover, focus, disabled, and expanded states where applicable.",
    "- [ ] Compare the final component against the intended design.",
    ""
  );

  return output.join("\n");
}

function generateMarkdownReport(document, outputDirectory) {
  const output = [
    `# ${document.metadata.title}`,
    "",
    `Generated: ${document.metadata.generatedAt}`,
    "",
    "## Summary",
    "",
    `- Files with styling tasks: ${document.summary.files}`,
    `- Components: ${document.summary.components}`,
    `- Total tasks: ${document.summary.tasks}`,
    `- High priority: ${document.summary.highPriority}`,
    `- Medium priority: ${document.summary.mediumPriority}`,
    `- Low priority: ${document.summary.lowPriority}`,
    `- Added classes: ${document.summary.addedClasses}`,
    `- Removed classes: ${document.summary.removedClasses}`,
    "",
    "## Styling checklist",
    "",
  ];

  const fileGroups = groupTasks(document.tasks, (task) => task.file);

  for (const [file, tasks] of fileGroups) {
    output.push(`### ${file}`, "", `Tasks: ${tasks.length}`, "");

    const componentGroups = groupTasks(tasks, (task) => task.component.name);

    for (const [componentName, componentTasks] of componentGroups) {
      output.push(`#### ${componentName}`, "");

      for (const task of componentTasks) {
        output.push(
          `- [ ] **${task.target.name}** — ${task.priority} priority`,
          `  - Categories: ${task.categories.join(", ")}`,
          `  - Add: ${
            task.tokenChanges.added
              .map((item) => `\`${item.token}\``)
              .join(", ") || "None detected"
          }`,
          `  - Remove: ${
            task.tokenChanges.removed
              .map((item) => `\`${item.token}\``)
              .join(", ") || "None detected"
          }`,
          `  - Context: ${task.guidance.summary}`,
          `  - Detailed task: [${task.id}](component-tasks/${safeFilename(task.id)}.md)`,
          ""
        );
      }
    }
  }

  const reportPath = path.join(outputDirectory, "styling-workbench.md");

  writeText(reportPath, output.join("\n"));

  return reportPath;
}

// ============================================================
// INDIVIDUAL COMPONENT TASKS
// ============================================================

function safeFilename(value) {
  return (
    String(value)
      .replace(/[^A-Za-z0-9._-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 180) || "component-task"
  );
}

function generateIndividualTaskFiles(document, outputDirectory) {
  const tasksDirectory = path.join(outputDirectory, "component-tasks");

  fs.mkdirSync(tasksDirectory, { recursive: true });

  const manifest = [];

  for (const task of document.tasks) {
    const filename = `${safeFilename(task.id)}.md`;

    const filePath = path.join(tasksDirectory, filename);

    writeText(filePath, renderTaskMarkdown(task));

    manifest.push({
      id: task.id,
      file: task.file,
      component: task.component.name,
      target: task.target.name,
      priority: task.priority,
      path: toRelativePath(filePath),
    });
  }

  writeJson(path.join(tasksDirectory, "manifest.json"), manifest);

  return {
    tasksDirectory,
    count: manifest.length,
  };
}

// ============================================================
// HTML DOCUMENT GENERATION
// ============================================================

function generateHtmlReport(document, outputDirectory) {
  const tasksHtml = document.tasks
    .map((task, index) => renderTask(task, index))
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta
    name="description"
    content="Component-first styling tasks, class changes, and source context."
  >

  <title>${escapeHtml(document.metadata.title)}</title>

  <style>
    ${getHtmlStyles()}

    .file-heading {
      margin: 32px 0 12px;
      padding: 14px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
      overflow-wrap: anywhere;
    }

    .file-heading h2 {
      margin: 0 0 4px;
      font-size: 17px;
    }

    .file-heading p {
      margin: 0;
    }

    .task-group {
      margin-bottom: 32px;
    }

    .task-group[hidden] {
      display: none;
    }

    .task-heading h3 {
      overflow-wrap: anywhere;
    }

    .jump-links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .jump-links a {
      display: inline-block;
      padding: 7px 10px;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 12px;
    }

    .task-progress {
      margin-top: 12px;
      color: var(--muted);
      font-size: 12px;
    }

    .progress-track {
      height: 6px;
      margin-top: 6px;
      overflow: hidden;
      border-radius: 8px;
      background: var(--border);
    }

    .progress-bar {
      width: 0;
      height: 100%;
      background: var(--accent);
      transition: width 150ms ease;
    }

    .no-matches {
      display: none;
    }

    @media print {
      .filters,
      .jump-links,
      .complete-control {
        display: none !important;
      }

      .task,
      .header {
        break-inside: avoid;
      }

      details {
        display: block;
      }

      details > summary {
        display: none;
      }

      details > * {
        display: block !important;
      }
    }
  </style>
</head>

<body>
  <main class="shell">
    <header class="header">
      <h1>${escapeHtml(document.metadata.title)}</h1>

      <p>
        A component-first checklist of styling differences
        between the baseline and selected implementation.
      </p>

      <p class="muted">
        Generated ${escapeHtml(document.metadata.generatedAt)}
      </p>

      <div class="jump-links">
        <a href="#summary">Summary</a>
        <a href="#tasks">Styling tasks</a>
        <a href="./styling-workbench.md">Markdown checklist</a>
        <a href="./styling-workbench.json">JSON data</a>
      </div>

      <div class="task-progress">
        <span id="progress-text">0 of ${document.tasks.length} tasks completed</span>

        <div class="progress-track">
          <div class="progress-bar" id="progress-bar"></div>
        </div>
      </div>
    </header>

    <section id="summary">
      <h2>Overview</h2>

      <div class="summary">
        <div class="metric">
          <strong>${document.summary.files}</strong>
          <span>Files with tasks</span>
        </div>

        <div class="metric">
          <strong>${document.summary.components}</strong>
          <span>Component groups</span>
        </div>

        <div class="metric">
          <strong>${document.summary.tasks}</strong>
          <span>Styling tasks</span>
        </div>

        <div class="metric">
          <strong>${document.summary.highPriority}</strong>
          <span>High-priority tasks</span>
        </div>

        <div class="metric">
          <strong>${document.summary.addedClasses}</strong>
          <span>Added classes</span>
        </div>

        <div class="metric">
          <strong>${document.summary.removedClasses}</strong>
          <span>Removed classes</span>
        </div>
      </div>

      <p class="muted">
        A component name or JSX target may be inferred when
        the source does not establish its ownership confidently.
        Check each task's detection notes before editing.
      </p>
    </section>

    <section id="tasks">
      <h2>Styling tasks</h2>

      <div class="filters">
        <input
          id="search"
          type="search"
          placeholder="Search files, components, classes, or categories..."
          aria-label="Search styling tasks"
        >

        <select id="priority-filter" aria-label="Filter by priority">
          <option value="ALL">All priorities</option>
          <option value="HIGH">High priority</option>
          <option value="MEDIUM">Medium priority</option>
          <option value="LOW">Low priority</option>
        </select>

        <select id="category-filter" aria-label="Filter by category">
          <option value="ALL">All categories</option>

          ${unique(document.tasks.flatMap((task) => task.categories))
            .sort()
            .map(
              (category) => `
            <option value="${escapeAttribute(category.toLowerCase())}">
              ${escapeHtml(category)}
            </option>
          `
            )
            .join("")}
        </select>

        <select id="completion-filter" aria-label="Filter by completion">
          <option value="ALL">All tasks</option>
          <option value="OPEN">Incomplete tasks</option>
          <option value="DONE">Completed tasks</option>
        </select>
      </div>

      <p id="results-count" class="muted"></p>

      <p id="no-matches" class="empty" hidden>
        No styling tasks match your filters.
      </p>

      <div id="task-container">
        ${(() => {
          const grouped = groupTasks(document.tasks, (task) => task.file);

          return [...grouped.entries()]
            .map(
              ([file, tasks]) => `
            <section class="task-group" data-file-group="${escapeAttribute(file)}">
              <header class="file-heading">
                <h2>${escapeHtml(file)}</h2>
                <p class="muted">
                  ${tasks.length} task(s)
                  · ${unique(tasks.map((task) => task.component.name)).length}
                  component group(s)
                </p>
              </header>

              ${tasks
                .map((task) => renderTask(task, document.tasks.indexOf(task)))
                .join("")}
            </section>
          `
            )
            .join("");
        })()}
      </div>
    </section>

    <footer class="footer">
      <p>
        Generated by Component Styling Workbench.
        Class recommendations are derived from the supplied diff data;
        validate the final result against your design system.
      </p>
    </footer>
  </main>

  <script>
    (() => {
      const search = document.getElementById("search");
      const priorityFilter = document.getElementById("priority-filter");
      const categoryFilter = document.getElementById("category-filter");
      const completionFilter = document.getElementById("completion-filter");

      const resultCount = document.getElementById("results-count");
      const noMatches = document.getElementById("no-matches");

      const progressText = document.getElementById("progress-text");
      const progressBar = document.getElementById("progress-bar");

      const tasks = Array.from(document.querySelectorAll(".task"));

      const STORAGE_KEY =
        "component-styling-workbench:${escapeAttribute(document.metadata.style)}";

      let completed = new Set();

      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

        if (Array.isArray(saved)) {
          completed = new Set(saved);
        }
      } catch {
        completed = new Set();
      }

      function saveProgress() {
        try {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify([...completed])
          );
        } catch {
          // Reports still work when localStorage is unavailable.
        }
      }

      function updateProgress() {
        const total = tasks.length;
        const count = completed.size;

        progressText.textContent =
          count + " of " + total + " tasks completed";

        progressBar.style.width =
          (total ? count / total * 100 : 0) + "%";
      }

      function applyFilters() {
        const query = search.value.trim().toLowerCase();
        const priority = priorityFilter.value;
        const category = categoryFilter.value;
        const completion = completionFilter.value;

        let visibleTasks = 0;

        for (const task of tasks) {
          const text = task.dataset.search || "";
          const taskPriority = task.dataset.priority;
          const categories = task.dataset.categories || "";
          const isCompleted = completed.has(
            task.querySelector("[data-task-complete]")?.dataset.taskComplete
          );

          const matchesSearch = !query || text.includes(query);

          const matchesPriority =
            priority === "ALL" || taskPriority === priority;

          const matchesCategory =
            category === "ALL" || categories.split(" ").includes(category);

          const matchesCompletion =
            completion === "ALL" ||
            (completion === "DONE" && isCompleted) ||
            (completion === "OPEN" && !isCompleted);

          const visible =
            matchesSearch &&
            matchesPriority &&
            matchesCategory &&
            matchesCompletion;

          task.hidden = !visible;

          if (visible) visibleTasks++;
        }

        let visibleGroups = 0;

        for (const group of document.querySelectorAll(".task-group")) {
          const visible = Array.from(
            group.querySelectorAll(".task")
          ).some((task) => !task.hidden);

          group.hidden = !visible;

          if (visible) visibleGroups++;
        }

        resultCount.textContent =
          "Showing " + visibleTasks + " task(s) across " +
          visibleGroups + " file group(s).";

        noMatches.hidden = visibleTasks !== 0;
      }

      for (const task of tasks) {
        const checkbox = task.querySelector("[data-task-complete]");

        if (!checkbox) continue;

        const id = checkbox.dataset.taskComplete;

        checkbox.checked = completed.has(id);
        task.classList.toggle("completed", checkbox.checked);

        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            completed.add(id);
          } else {
            completed.delete(id);
          }

          task.classList.toggle("completed", checkbox.checked);

          saveProgress();
          updateProgress();
          applyFilters();
        });
      }

      search.addEventListener("input", applyFilters);
      priorityFilter.addEventListener("change", applyFilters);
      categoryFilter.addEventListener("change", applyFilters);
      completionFilter.addEventListener("change", applyFilters);

      updateProgress();
      applyFilters();
    })();
  </script>
</body>
</html>`;

  const reportPath = path.join(outputDirectory, "styling-workbench.html");

  writeText(reportPath, html);

  // A convenient default entry point for opening the workbench.
  writeText(path.join(outputDirectory, "index.html"), html);

  return reportPath;
}

// ============================================================
// FILE-LEVEL SUMMARY
// ============================================================

function buildFileSummary(document) {
  const groups = groupTasks(document.tasks, (task) => task.file);

  return [...groups.entries()].map(([file, tasks]) => ({
    file,

    taskCount: tasks.length,

    components: unique(tasks.map((task) => task.component.name)),

    targets: unique(tasks.map((task) => task.target.name)),

    priorities: {
      high: tasks.filter((task) => task.priority === "HIGH").length,
      medium: tasks.filter((task) => task.priority === "MEDIUM").length,
      low: tasks.filter((task) => task.priority === "LOW").length,
    },

    addedClasses: unique(
      tasks.flatMap((task) => task.tokenChanges.added.map((item) => item.token))
    ),

    removedClasses: unique(
      tasks.flatMap((task) =>
        task.tokenChanges.removed.map((item) => item.token)
      )
    ),
  }));
}

// ============================================================
// MAIN
// ============================================================

function main() {
  if (!CONFIG.changes) {
    throw new Error(
      "Missing --changes. Provide the JSON report generated by your existing diff script."
    );
  }

  if (!CONFIG.baseline) {
    throw new Error("Missing --baseline. Provide the baseline ui directory.");
  }

  if (!CONFIG.styled) {
    throw new Error("Missing --styled. Provide the styled ui directory.");
  }

  const changesPath = resolvePath(CONFIG.changes);
  const baselineRoot = resolvePath(CONFIG.baseline);
  const styledRoot = resolvePath(CONFIG.styled);
  const outputDirectory = resolvePath(CONFIG.out);

  assertFile(changesPath, "Changes JSON");
  assertDirectory(baselineRoot, "Baseline UI directory");
  assertDirectory(styledRoot, "Styled UI directory");

  const inputDocument = readJson(changesPath);

  const style =
    CONFIG.style ||
    inputDocument.metadata?.style ||
    path.basename(changesPath).replace(/\.changes\.json$/i, "") ||
    "style";

  const normalizedChanges = normalizeInputChanges(inputDocument, style);

  const baselineIndex = buildSourceIndex(baselineRoot);
  const styledIndex = buildSourceIndex(styledRoot);

  const tasks = analyzeChanges(
    normalizedChanges,
    baselineRoot,
    styledRoot,
    baselineIndex,
    styledIndex
  );

  const document = buildWorkbenchDocument(
    style,
    baselineRoot,
    styledRoot,
    tasks
  );

  document.files = buildFileSummary(document);

  fs.mkdirSync(outputDirectory, { recursive: true });

  // Structured output.
  const jsonPath = path.join(outputDirectory, "styling-workbench.json");

  writeJson(jsonPath, document);

  // Human-readable checklist.
  const markdownPath = generateMarkdownReport(document, outputDirectory);

  // Individual tasks.
  const individualTasks = generateIndividualTaskFiles(
    document,
    outputDirectory
  );

  // Main browser interface.
  const htmlPath = generateHtmlReport(document, outputDirectory);

  // Machine-readable task summary.
  writeJson(path.join(outputDirectory, "file-summary.json"), document.files);

  writeJson(path.join(outputDirectory, "summary.json"), {
    metadata: document.metadata,
    summary: document.summary,
    files: document.files,
  });

  console.log("");
  console.log("============================================================");
  console.log("COMPONENT STYLING WORKBENCH");
  console.log("============================================================");
  console.log("");

  console.log(`Style:                ${style}`);
  console.log(`Input changes:        ${changesPath}`);
  console.log(`Baseline source:      ${baselineRoot}`);
  console.log(`Styled source:        ${styledRoot}`);
  console.log(`Output directory:     ${outputDirectory}`);
  console.log("");

  console.log(`Files with tasks:     ${document.summary.files}`);
  console.log(`Component groups:     ${document.summary.components}`);
  console.log(`Total tasks:          ${document.summary.tasks}`);
  console.log(`High priority:        ${document.summary.highPriority}`);
  console.log(`Medium priority:      ${document.summary.mediumPriority}`);
  console.log(`Low priority:         ${document.summary.lowPriority}`);
  console.log(`Added classes:        ${document.summary.addedClasses}`);
  console.log(`Removed classes:      ${document.summary.removedClasses}`);
  console.log("");

  console.log("GENERATED REPORTS");
  console.log("-----------------");
  console.log(`HTML workbench:       ${htmlPath}`);
  console.log(`Markdown checklist:   ${markdownPath}`);
  console.log(`JSON workbench:       ${jsonPath}`);
  console.log(`Individual tasks:     ${individualTasks.tasksDirectory}`);
  console.log("");

  console.log("Open index.html in your browser to begin styling.");
  console.log("");
}

// ============================================================
// ENTRY POINT
// ============================================================

try {
  main();
} catch (error) {
  console.error("");
  console.error("Component Styling Workbench failed.");
  console.error(error.stack || error.message);
  console.error("");

  process.exitCode = 1;
}

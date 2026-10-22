#!/usr/bin/env node

/**
 * Validate namespaced Shadcn theme utilities and CSS variables.
 *
 * Location:
 *   scripts/validate-style-prefixes.mjs
 *
 * Usage:
 *   node scripts/validate-style-prefixes.mjs --style material
 *   node scripts/validate-style-prefixes.mjs --style linear
 *   node scripts/validate-style-prefixes.mjs --all
 *   node scripts/validate-style-prefixes.mjs --style material --json
 *
 * Optional:
 *   --compare
 *   --strict
 *   --help
 *
 * This script is READ-ONLY. It never modifies project files.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");

const STYLES_ROOT = path.join(
  PROJECT_ROOT,
  "registry",
  "bases",
  "base",
  "styles"
);

/**
 * Folder name -> theme prefix.
 *
 * Add your other styles here.
 *
 * Example:
 *   catalyst: "catalyst",
 *   snow: "snow",
 *
 * Keep these prefixes consistent with your actual CSS variables.
 */
const STYLES = {
  "carbon-v4": "cb",
  "default-v4": "dft",
  linear: "linear",
  material: "material",
  neon: "neon",
};

/**
 * These are the Shadcn theme tokens that require a prefix.
 *
 * Longer tokens are included before shorter tokens for clarity.
 */
const THEME_TOKENS = [
  "sidebar-primary-foreground",
  "sidebar-accent-foreground",
  "sidebar-background",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-accent",
  "sidebar-border",
  "sidebar-ring",

  "popover-foreground",
  "card-foreground",
  "primary-foreground",
  "secondary-foreground",
  "muted-foreground",
  "accent-foreground",
  "destructive-foreground",

  "popover",
  "background",
  "foreground",
  "primary",
  "secondary",
  "muted",
  "accent",
  "destructive",
  "card",
  "border",
  "input",
  "ring",

  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
];

/**
 * Tailwind utilities that can reference theme tokens.
 */
const THEME_UTILITIES = [
  "bg",
  "text",
  "border",
  "ring",
  "outline",
  "from",
  "via",
  "to",
  "fill",
  "stroke",
  "decoration",
  "divide",
  "placeholder",
  "caret",
  "accent",
  "shadow",
];

/**
 * Only these radius utilities are namespaced.
 *
 * rounded-xl, rounded-xs, rounded-full, etc. remain untouched.
 */
const RADIUS_SIZES = ["sm", "md", "lg"];

/**
 * Files to inspect.
 */
const SOURCE_EXTENSIONS = new Set([".tsx", ".ts", ".jsx", ".js", ".css"]);

/**
 * Directories that should not be traversed.
 */
const IGNORED_DIRECTORIES = new Set([
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  "coverage",
]);

// -----------------------------------------------------------------------------
// CLI
// -----------------------------------------------------------------------------

function parseArgs(argv) {
  const args = {
    style: null,
    all: false,
    json: false,
    compare: false,
    strict: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--style" || arg === "-s") {
      args.style = argv[++i];

      if (!args.style) {
        throw new Error("--style requires a style name.");
      }
    } else if (arg === "--all" || arg === "-a") {
      args.all = true;
    } else if (arg === "--json") {
      args.json = true;
    } else if (arg === "--compare") {
      args.compare = true;
    } else if (arg === "--strict") {
      args.strict = true;
    } else if (arg === "--help" || arg === "-h") {
      args.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (!args.help && !args.all && !args.style) {
    throw new Error("Specify --style <name> or --all.");
  }

  if (args.style && !STYLES[args.style]) {
    throw new Error(
      `Unknown style "${args.style}". Available styles: ${Object.keys(
        STYLES
      ).join(", ")}`
    );
  }

  return args;
}

function printHelp() {
  console.log(`
Theme Prefix Validator
======================

Usage:
  node scripts/validate-style-prefixes.mjs --style material
  node scripts/validate-style-prefixes.mjs --style linear
  node scripts/validate-style-prefixes.mjs --all

Options:
  --style, -s <name>  Validate one style.
  --all, -a           Validate all configured styles.
  --json              Output a JSON report.
  --compare            Compare matching UI files against default-v4/ui.
  --strict             Exit with code 1 if warnings or errors exist.
  --help, -h           Show this help.

Configured styles:
${Object.entries(STYLES)
  .map(([name, prefix]) => `  ${name.padEnd(14)} prefix: ${prefix}`)
  .join("\n")}

Checks:
  - Unprefixed theme utilities.
  - Missing or duplicated theme prefixes.
  - Incorrect utility names caused by replacement mistakes.
  - Unprefixed or malformed CSS variables.
  - Missing CSS variable definitions.
  - Radius utility and radius variable naming.
  - Optional comparison against default-v4/ui.

This script never modifies files.
`);
}

// -----------------------------------------------------------------------------
// Filesystem
// -----------------------------------------------------------------------------

function walkFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const results = [];

  function visit(currentDirectory) {
    let entries;

    try {
      entries = fs.readdirSync(currentDirectory, {
        withFileTypes: true,
      });
    } catch {
      return;
    }

    for (const entry of entries) {
      const absolutePath = path.join(currentDirectory, entry.name);

      if (entry.isDirectory()) {
        if (IGNORED_DIRECTORIES.has(entry.name)) {
          continue;
        }

        visit(absolutePath);
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      if (!SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
        continue;
      }

      results.push(absolutePath);
    }
  }

  visit(directory);

  return results;
}

function relativePath(filePath) {
  return path.relative(PROJECT_ROOT, filePath);
}

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

function getLineNumber(source, offset) {
  return source.slice(0, offset).split("\n").length;
}

// -----------------------------------------------------------------------------
// Reporting
// -----------------------------------------------------------------------------

const SEVERITY = {
  error: "ERROR",
  warning: "WARNING",
  info: "INFO",
};

function createIssue({
  severity = "error",
  code,
  file,
  line,
  value,
  message,
  suggestion,
}) {
  return {
    severity,
    code,
    file: file ? relativePath(file) : null,
    line: line ?? null,
    value: value ?? null,
    message,
    suggestion: suggestion ?? null,
  };
}

function addIssue(issues, issue) {
  issues.push(issue);
}

// -----------------------------------------------------------------------------
// Regex helpers
// -----------------------------------------------------------------------------

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const TOKEN_ALTERNATION = THEME_TOKENS.slice()
  .sort((a, b) => b.length - a.length)
  .map(escapeRegex)
  .join("|");

const UTILITY_ALTERNATION = THEME_UTILITIES.slice()
  .sort((a, b) => b.length - a.length)
  .map(escapeRegex)
  .join("|");

const RADIUS_ALTERNATION = RADIUS_SIZES.join("|");

function makeThemeUtilityRegex(prefix) {
  /**
   * Matches theme utilities anywhere in a Tailwind class string.
   *
   * Examples:
   *   bg-primary
   *   hover:text-foreground
   *   data-[active=true]:bg-sidebar-primary
   *
   * The prefix is optional so we can detect both correct and
   * incorrect utilities.
   *
   * A preceding hyphen is forbidden to avoid matching inside
   * an already-prefixed utility.
   */
  return new RegExp(
    String.raw`(?<![\w-])(${UTILITY_ALTERNATION})-(${escapeRegex(
      prefix
    )}-)?(${TOKEN_ALTERNATION})(?![\w-])`,
    "g"
  );
}

function makeRadiusUtilityRegex(prefix) {
  return new RegExp(
    String.raw`(?<![\w-])rounded-(${escapeRegex(
      prefix
    )}-)?(${RADIUS_ALTERNATION})(?![\w-])`,
    "g"
  );
}

function makeThemeVariableRegex(prefix) {
  /**
   * Recognizes the known theme variable names.
   *
   * Correct:
   *   --material-foreground
   *
   * Incorrect:
   *   --foreground
   *   --material-material-foreground
   *
   * Unrelated variables such as --card-spacing are excluded.
   */
  return new RegExp(
    String.raw`(?<![\w-])--(?:${escapeRegex(
      prefix
    )}-)?(${TOKEN_ALTERNATION})(?![\w-])`,
    "g"
  );
}

function makeRadiusVariableRegex(prefix) {
  /**
   * Matches:
   *   --radius-md
   *   --radius-material-md
   *   --material-radius-md
   *
   * The last form is detected as an alternate naming convention
   * so it can be reviewed.
   */
  return new RegExp(
    String.raw`(?<![\w-])--(?:radius-(${escapeRegex(
      prefix
    )}-)?(${RADIUS_ALTERNATION})|${escapeRegex(
      prefix
    )}-radius-(${RADIUS_ALTERNATION}))(?![\w-])`,
    "g"
  );
}

// -----------------------------------------------------------------------------
// CSS and TSX scanning
// -----------------------------------------------------------------------------

function collectThemeDefinitions(files, prefix) {
  const definitions = new Set();

  const definitionRegex = new RegExp(
    String.raw`(?<![\w-])--${escapeRegex(
      prefix
    )}-(${TOKEN_ALTERNATION})(?![\w-])\s*:`,
    "g"
  );

  for (const file of files) {
    if (path.extname(file) !== ".css") {
      continue;
    }

    const source = readFile(file);

    if (source === null) {
      continue;
    }

    for (const match of source.matchAll(definitionRegex)) {
      definitions.add(match[1]);
    }
  }

  return definitions;
}

function scanThemeUtilities({ file, source, prefix, issues }) {
  const regex = makeThemeUtilityRegex(prefix);

  for (const match of source.matchAll(regex)) {
    const [fullMatch, utility, matchedPrefix, token] = match;

    const line = getLineNumber(source, match.index);

    if (!matchedPrefix) {
      addIssue(
        issues,
        createIssue({
          severity: "warning",
          code: "UNPREFIXED_THEME_UTILITY",
          file,
          line,
          value: fullMatch,
          message: `Theme utility is missing the "${prefix}" prefix.`,
          suggestion: `${utility}-${prefix}-${token}`,
        })
      );

      continue;
    }

    // Correctly prefixed utility.
    // Nothing to report.
  }
}

function scanMalformedPrefixes({ file, source, prefix, issues }) {
  /**
   * Catch duplicate prefixes.
   *
   * Examples:
   *   bg-material-material-primary
   *   text-material-sidebar-accent-material-foreground
   *   var(--material-material-foreground)
   */
  const duplicatePrefixRegex = new RegExp(
    String.raw`(?<![\w-])(?:${UTILITY_ALTERNATION})-${escapeRegex(
      prefix
    )}-(?:${escapeRegex(prefix)}-)+(${TOKEN_ALTERNATION})(?![\w-])`,
    "g"
  );

  for (const match of source.matchAll(duplicatePrefixRegex)) {
    addIssue(
      issues,
      createIssue({
        severity: "error",
        code: "DUPLICATED_THEME_PREFIX",
        file,
        line: getLineNumber(source, match.index),
        value: match[0],
        message: "Theme utility contains a duplicated prefix.",
      })
    );
  }

  /**
   * Catch a prefix inserted into the middle of a compound token.
   *
   * Example:
   *   text-material-sidebar-accent-material-foreground
   *
   * Expected:
   *   text-material-sidebar-accent-foreground
   */
  const malformedSidebarRegex = new RegExp(
    String.raw`(?<![\w-])(${UTILITY_ALTERNATION})-${escapeRegex(
      prefix
    )}-(sidebar-(?:accent|primary)-)${escapeRegex(
      prefix
    )}-(foreground)(?![\w-])`,
    "g"
  );

  for (const match of source.matchAll(malformedSidebarRegex)) {
    const corrected = `${match[1]}-${prefix}-${match[2]}${match[4]}`;

    addIssue(
      issues,
      createIssue({
        severity: "error",
        code: "MALFORMED_COMPOUND_TOKEN",
        file,
        line: getLineNumber(source, match.index),
        value: match[0],
        message: "The theme prefix was inserted inside a compound token.",
        suggestion: corrected,
      })
    );
  }
}

function scanRadiusUtilities({ file, source, prefix, issues }) {
  const regex = makeRadiusUtilityRegex(prefix);

  for (const match of source.matchAll(regex)) {
    const [fullMatch, matchedPrefix, size] = match;

    if (!matchedPrefix) {
      addIssue(
        issues,
        createIssue({
          severity: "warning",
          code: "UNPREFIXED_RADIUS_UTILITY",
          file,
          line: getLineNumber(source, match.index),
          value: fullMatch,
          message: `Radius utility is missing the "${prefix}" prefix.`,
          suggestion: `rounded-${prefix}-${size}`,
        })
      );
    }
  }
}

function scanThemeVariables({ file, source, prefix, definitions, issues }) {
  const regex = makeThemeVariableRegex(prefix);

  for (const match of source.matchAll(regex)) {
    const [fullMatch, token] = match;

    const isNamespaced = fullMatch.startsWith(`--${prefix}-`);

    const line = getLineNumber(source, match.index);

    if (!isNamespaced) {
      addIssue(
        issues,
        createIssue({
          severity: "warning",
          code: "UNPREFIXED_THEME_VARIABLE",
          file,
          line,
          value: fullMatch,
          message: `Theme variable is missing the "${prefix}" prefix.`,
          suggestion: `--${prefix}-${token}`,
        })
      );

      continue;
    }

    /**
     * Check definitions and references.
     *
     * A variable reference may appear in a component file, while
     * its definition lives in a separate CSS file.
     */
    const afterVariable = source.slice(match.index + fullMatch.length);

    const isDefinition = /^\s*:/.test(afterVariable);

    if (isDefinition) {
      continue;
    }

    if (definitions.size > 0 && !definitions.has(token)) {
      addIssue(
        issues,
        createIssue({
          severity: "warning",
          code: "MISSING_THEME_VARIABLE_DEFINITION",
          file,
          line,
          value: fullMatch,
          message: `No matching --${prefix}-${token} definition was found in the scanned CSS files.`,
        })
      );
    }
  }
}

function scanRadiusVariables({ file, source, prefix, issues }) {
  const regex = makeRadiusVariableRegex(prefix);

  for (const match of source.matchAll(regex)) {
    const fullMatch = match[0];

    // Correct convention:
    // --radius-material-md
    const isCorrect = fullMatch.startsWith(`--radius-${prefix}-`);

    if (isCorrect) {
      continue;
    }

    const size = match[2] ?? match[3];

    const suggestion = size ? `--radius-${prefix}-${size}` : null;

    addIssue(
      issues,
      createIssue({
        severity: "warning",
        code: "RADIUS_VARIABLE_CONVENTION",
        file,
        line: getLineNumber(source, match.index),
        value: fullMatch,
        message:
          "Radius variable does not follow the configured --radius-{prefix}-{size} convention.",
        suggestion,
      })
    );
  }
}

// -----------------------------------------------------------------------------
// Optional comparison against the original UI
// -----------------------------------------------------------------------------

function extractThemeUtilities(source, prefix) {
  const regex = makeThemeUtilityRegex(prefix);
  const results = [];

  for (const match of source.matchAll(regex)) {
    results.push({
      utility: match[1],
      token: match[3],
      prefixed: Boolean(match[2]),
      value: match[0],
    });
  }

  return results;
}

function compareWithDefault({ styleName, prefix, styleFiles, issues }) {
  const defaultUi = path.join(STYLES_ROOT, "default-v4", "ui");

  if (!fs.existsSync(defaultUi) || styleName === "default-v4") {
    return;
  }

  let comparisonCount = 0;

  for (const styleFile of styleFiles) {
    const fileName = path.basename(styleFile);

    const originalFile = path.join(defaultUi, fileName);

    if (!fs.existsSync(originalFile)) {
      continue;
    }

    const originalSource = readFile(originalFile);
    const convertedSource = readFile(styleFile);

    if (originalSource === null || convertedSource === null) {
      continue;
    }

    comparisonCount++;

    const originalUtilities = extractThemeUtilities(originalSource, "dft");

    const convertedUtilities = extractThemeUtilities(convertedSource, prefix);

    /**
     * This comparison is intentionally conservative.
     *
     * We compare counts by utility/token pair rather than exact
     * string positions, since styles may intentionally change.
     */
    const countPairs = (utilities) => {
      const counts = new Map();

      for (const item of utilities) {
        const key = `${item.utility}:${item.token}`;

        counts.set(key, (counts.get(key) ?? 0) + 1);
      }

      return counts;
    };

    const originalCounts = countPairs(originalUtilities);
    const convertedCounts = countPairs(convertedUtilities);

    for (const [key, originalCount] of originalCounts) {
      const convertedCount = convertedCounts.get(key) ?? 0;

      if (convertedCount < originalCount) {
        addIssue(
          issues,
          createIssue({
            severity: "info",
            code: "COMPONENT_COMPARISON_DIFFERENCE",
            file: styleFile,
            value: key,
            message:
              `Original component contains ${originalCount} occurrence(s), ` +
              `while the converted component contains ${convertedCount}. ` +
              "This may be intentional; review if unexpected.",
          })
        );
      }
    }
  }

  if (comparisonCount === 0) {
    issues.push(
      createIssue({
        severity: "info",
        code: "NO_COMPARISON_FILES",
        message: `No matching UI files were found under ${relativePath(defaultUi)}.`,
      })
    );
  }
}

// -----------------------------------------------------------------------------
// Main validation
// -----------------------------------------------------------------------------

function validateStyle(styleName, prefix, options) {
  const styleRoot = path.join(STYLES_ROOT, styleName);

  const uiDirectory = path.join(styleRoot, "ui");

  const issues = [];

  if (!fs.existsSync(styleRoot)) {
    addIssue(
      issues,
      createIssue({
        severity: "error",
        code: "STYLE_DIRECTORY_NOT_FOUND",
        message: `Style directory does not exist: ${relativePath(styleRoot)}`,
      })
    );

    return {
      style: styleName,
      prefix,
      filesScanned: 0,
      issues,
    };
  }

  if (!fs.existsSync(uiDirectory)) {
    addIssue(
      issues,
      createIssue({
        severity: "error",
        code: "UI_DIRECTORY_NOT_FOUND",
        message: `UI directory does not exist: ${relativePath(uiDirectory)}`,
      })
    );

    return {
      style: styleName,
      prefix,
      filesScanned: 0,
      issues,
    };
  }

  const uiFiles = walkFiles(uiDirectory);
  const styleFiles = walkFiles(styleRoot);

  /**
   * Scan CSS under the style directory for variable definitions.
   *
   * This does not assume that a variable must be defined in the
   * same file where it is referenced.
   */
  const definitions = collectThemeDefinitions(styleFiles, prefix);

  for (const file of uiFiles) {
    const source = readFile(file);

    if (source === null) {
      continue;
    }

    scanThemeUtilities({
      file,
      source,
      prefix,
      issues,
    });

    scanMalformedPrefixes({
      file,
      source,
      prefix,
      issues,
    });

    scanRadiusUtilities({
      file,
      source,
      prefix,
      issues,
    });

    scanThemeVariables({
      file,
      source,
      prefix,
      definitions,
      issues,
    });

    scanRadiusVariables({
      file,
      source,
      prefix,
      issues,
    });
  }

  if (options.compare) {
    compareWithDefault({
      styleName,
      prefix,
      styleFiles: uiFiles,
      issues,
    });
  }

  return {
    style: styleName,
    prefix,
    filesScanned: uiFiles.length,
    variablesDefined: definitions.size,
    issues,
  };
}

// -----------------------------------------------------------------------------
// Output
// -----------------------------------------------------------------------------

function printTextReport(results) {
  let totalFiles = 0;
  let totalErrors = 0;
  let totalWarnings = 0;
  let totalInfo = 0;

  console.log("\nTheme Prefix Validation");
  console.log("=======================");

  for (const result of results) {
    totalFiles += result.filesScanned;

    console.log(`\n${result.style.toUpperCase()} (prefix: ${result.prefix})`);

    console.log(`Files scanned: ${result.filesScanned}`);

    if (result.variablesDefined !== undefined) {
      console.log(`Theme variables defined: ${result.variablesDefined}`);
    }

    if (result.issues.length === 0) {
      console.log("✓ No issues found.");
      continue;
    }

    for (const issue of result.issues) {
      if (issue.severity === "error") {
        totalErrors++;
      } else if (issue.severity === "warning") {
        totalWarnings++;
      } else {
        totalInfo++;
      }

      const location = issue.file
        ? `${issue.file}${issue.line ? `:${issue.line}` : ""}`
        : "";

      console.log(
        `\n  [${SEVERITY[issue.severity] ?? issue.severity}] ${issue.code}`
      );

      if (location) {
        console.log(`  File: ${location}`);
      }

      if (issue.value) {
        console.log(`  Found: ${issue.value}`);
      }

      console.log(`  ${issue.message}`);

      if (issue.suggestion) {
        console.log(`  Suggested: ${issue.suggestion}`);
      }
    }
  }

  console.log("\nSummary");
  console.log("=======");

  console.log(`Styles checked: ${results.length}`);
  console.log(`Files scanned:  ${totalFiles}`);
  console.log(`Errors:         ${totalErrors}`);
  console.log(`Warnings:       ${totalWarnings}`);
  console.log(`Info:           ${totalInfo}`);

  console.log(
    totalErrors === 0 && totalWarnings === 0
      ? "\n✓ Validation completed without errors or warnings."
      : "\nReview the reported issues before considering the style validated."
  );
}

function printJsonReport(results) {
  console.log(
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        root: relativePath(STYLES_ROOT),
        results,
        summary: {
          stylesChecked: results.length,
          filesScanned: results.reduce(
            (total, result) => total + result.filesScanned,
            0
          ),
          errors: results.reduce(
            (total, result) =>
              total +
              result.issues.filter((issue) => issue.severity === "error")
                .length,
            0
          ),
          warnings: results.reduce(
            (total, result) =>
              total +
              result.issues.filter((issue) => issue.severity === "warning")
                .length,
            0
          ),
        },
      },
      null,
      2
    )
  );
}

// -----------------------------------------------------------------------------
// Entry point
// -----------------------------------------------------------------------------

function main() {
  let options;

  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`\nError: ${error.message}\n`);
    console.error("Run with --help to see available options.");

    process.exitCode = 2;
    return;
  }

  if (options.help) {
    printHelp();
    return;
  }

  const selectedStyles = options.all
    ? Object.entries(STYLES)
    : [[options.style, STYLES[options.style]]];

  const results = selectedStyles.map(([styleName, prefix]) =>
    validateStyle(styleName, prefix, options)
  );

  if (options.json) {
    printJsonReport(results);
  } else {
    printTextReport(results);
  }

  const hasErrors = results.some((result) =>
    result.issues.some((issue) => issue.severity === "error")
  );

  const hasWarnings = results.some((result) =>
    result.issues.some((issue) => issue.severity === "warning")
  );

  if (hasErrors || (options.strict && hasWarnings)) {
    process.exitCode = 1;
  }
}

main();

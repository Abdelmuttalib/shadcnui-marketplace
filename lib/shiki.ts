import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | undefined;

const SHIKI_LANGUAGES = [
  "bash",
  "shellscript",
  "typescript",
  "tsx",
  "javascript",
  "jsx",
  "json",
  "css",
  "html",
  "markdown",
  "text",
] as const;

const SHIKI_THEMES = ["vesper", "github-light"] as const;

export function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [...SHIKI_THEMES],
      langs: [...SHIKI_LANGUAGES],
    }).catch((error) => {
      // Allow retry if initialization fails.
      highlighterPromise = undefined;
      throw error;
    });
  }

  return highlighterPromise;
}

export async function highlightCode({
  code,
  language = "text",
  theme = "vesper",
}: {
  code: string;
  language?: string;
  theme?: string;
}) {
  const highlighter = await getHighlighter();

  const loadedLanguages = highlighter.getLoadedLanguages();

  const resolvedLanguage = loadedLanguages.includes(language)
    ? language
    : "text";

  const resolvedTheme = highlighter.getLoadedThemes().includes(theme)
    ? theme
    : "github-dark";

  return highlighter.codeToHtml(code, {
    lang: resolvedLanguage,
    theme: resolvedTheme,
  });
}

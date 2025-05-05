"use client";

import copy from "copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import React from "react";

import { useStyleStore } from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";

import { Button } from "../ui/button";
import { StringCode } from "./string-code";
import { getStyleDefaultRadius, themePalettes } from "./theme-palettes";

export function ThemeCSSGenerator() {
  const { style } = useStyleStore();
  const { activePalette, activeRadius } = useThemePaletteStore();
  const palette = themePalettes[activePalette as keyof typeof themePalettes];

  const [copied, setCopied] = React.useState(false);

  function onCopy(content: string) {
    copy(content);
    // copy(typeof code === "string" ? code.trim() : "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  }

  function generateCSS() {
    if (!palette) return "";

    const lightVars = Object.entries(palette.light)
      .map(([key, value]) => {
        // Skip radius as it's handled separately
        if (key === "radius") return "";
        return `    --${key}: ${value}; /* oklch(${value}) */`;
      })
      .filter(Boolean)
      .join("\n");

    const darkVars = Object.entries(palette.dark)
      .map(([key, value]) => {
        // Skip radius as it's handled separately
        if (key === "radius") return "";
        return `    --${key}: ${value}; /* oklch(${value}) */`;
      })
      .filter(Boolean)
      .join("\n");

    return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
${lightVars}
    --radius: ${activeRadius || getStyleDefaultRadius(style)};
  }
  .dark {
${darkVars}
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`;
  }

  const cssCode = generateCSS();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">CSS Output</h3>
        <Button
          onClick={() => onCopy(cssCode)}
          variant="outline"
          size="sm"
          disabled={!cssCode}
        >
          {copied ? <CheckIcon className="ml-2 h-4 w-4" /> : <CopyIcon />}
          {copied ? "Copied!" : "Copy CSS"}
        </Button>
      </div>
      <div className="relative">
        {/* <StringCode c={cssCode} /> */}
        <pre className="max-h-[500px] overflow-auto rounded-lg border bg-muted p-4 text-sm">
          <code>{cssCode}</code>
        </pre>
      </div>
    </div>
  );
}

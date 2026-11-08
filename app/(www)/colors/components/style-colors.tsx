"use client";

import { useState } from "react";

import { Typography } from "@/components/ui/typography";
import { Style, STYLES } from "@/hooks/use-style-store";
import { getStyleVariablesPrefix } from "@/registry/styles-components";
import { StyleFontWrapper } from "@/components/style-font-wrapper";

import { converter, formatCss, parse } from "culori";

export function StylesColors({ hideVariables }: { hideVariables?: boolean }) {
  return (
    <>
      {STYLES.map((style) => (
        <StyleColors key={style} style={style} hideVariables={hideVariables} />
      ))}
    </>
  );
}

function StyleColors({
  style,
  hideVariables,
}: {
  style: Style;
  hideVariables?: boolean;
}) {
  const cssVariablesKeys = [
    "background",
    "foreground",
    "card",
    "card-foreground",
    "popover",
    "popover-foreground",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "muted",
    "muted-foreground",
    "accent",
    "accent-foreground",
    "destructive",
    "destructive-foreground",
    "border",
    "input",
    "ring",
    "chart-1",
    "chart-2",
    "chart-3",
    "chart-4",
    "chart-5",
    "sidebar-background",
    "sidebar-foreground",
    "sidebar-primary",
    "sidebar-primary-foreground",
    "sidebar-accent",
    "sidebar-accent-foreground",
    "sidebar-border",
  ];

  const stylePrefix = getStyleVariablesPrefix(style);

  const styleSpecificVariables = cssVariablesKeys.map(
    (key) => `--${stylePrefix}-${key}`
  );

  const styleSpecificVariablesColors = styleSpecificVariables.map(
    (key) => `var(${key})`
  );

  const [copiedVariable, setCopiedVariable] = useState<string | null>(null);

  const toOklch = converter("oklch");

  const copyColor = async (variable: string) => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue(variable)
      .trim();

    if (!color) return;

    try {
      const parsedColor = parse(color);

      if (!parsedColor) return;

      const oklchColor = toOklch(parsedColor);

      if (!oklchColor) return;

      const formattedColor = `oklch(${Number(oklchColor.l.toFixed(4))} ${Number(oklchColor.c.toFixed(4))} ${Number(oklchColor.h.toFixed(2))})`;

      // const formattedColor = `oklch(${oklchColor.l.toFixed(4)} ${oklchColor.c.toFixed(4)} ${oklchColor.h.toFixed(2)})`;

      // const formattedColor = formatCss(oklchColor);

      await navigator.clipboard.writeText(formattedColor);

      setCopiedVariable(variable);

      setTimeout(() => {
        setCopiedVariable(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy color:", error);
    }
  };

  //  const copyColor = async (variable: string) => {
  //   const color = getComputedStyle(document.documentElement)
  //     .getPropertyValue(variable.replace("var(", "").replace(")", ""))
  //     .trim();

  //   if (!color) return;

  //   await navigator.clipboard.writeText(color);
  // };

  return (
    <div className="grid scroll-mt-16 gap-6" id={`${style}-colors`}>
      <div>
        <StyleFontWrapper sStyle={style}>
          <Typography as={"h2"} variant="2xl/medium" className="tracking-tight">
            <span className="capitalize">{style}</span> colors
          </Typography>
        </StyleFontWrapper>
      </div>
      <div className="grid grid-cols-1 gap-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {styleSpecificVariables.map((variable) => {
          const isCopied = copiedVariable === variable;

          const v = hideVariables
            ? variable.replace(`-${stylePrefix}`, "")
            : variable;

          return (
            <button
              key={variable}
              type="button"
              onClick={() => copyColor(variable)}
              className="group grid gap-2 text-left"
              title="Click to copy color"
            >
              <div
                className="group-hover:border-foreground h-20 w-full border transition-opacity group-hover:opacity-80"
                style={{
                  backgroundColor: `var(${variable})`,
                }}
              />

              <div className="flex flex-col gap-1">
                <p className="font-mono text-sm font-medium">{v}</p>

                <p className="text-muted-foreground text-xs">
                  {isCopied ? "Copied!" : `var(${v})`}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

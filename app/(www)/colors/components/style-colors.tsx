"use client";

import { useState } from "react";

import { getStyleVariablesPrefix } from "@/registry/styles-components";
import { StyleFontWrapper } from "@/components/style-font-wrapper";

import { converter, parse } from "culori";
import { StyleName, STYLES } from "@/registry/styles";

export function StylesColors({ hideVariables }: { hideVariables?: boolean }) {
  return (
    <>
      {STYLES.map((style) => (
        <StyleColors
          key={style.name}
          style={style.name}
          hideVariables={hideVariables}
        />
      ))}
    </>
  );
}

function Subsection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-base font-medium capitalize">{title}</h3>
        {description ? (
          <p className="text-foreground/50 max-w-prose text-[13px] leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

// function ColorSwatch({ name, label }: { name: string; label: string }) {
//   const hex = useResolvedHex({ cssVar: name });
//   const [copied, setCopied] = useState(false);
//   const copy = () => {
//     if (!hex) return;
//     navigator.clipboard?.writeText(hex);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1200);
//   };
//   return (
//     <button
//       type="button"
//       onClick={copy}
//       className="bg-background hover:bg-foreground/[0.02] space-y-2 p-3 text-left transition-colors"
//     >
//       <div
//         className="border-foreground/10 h-14 w-full border"
//         style={{ backgroundColor: `var(--${name})` }}
//       />
//       <div className="space-y-0.5">
//         <div className="flex items-baseline justify-between gap-2">
//           <p className="text-[11px] font-medium">{label}</p>
//           <p className="text-foreground/60 font-mono text-[10px]">
//             {copied ? "Copied" : hex || "—"}
//           </p>
//         </div>
//         <p className="text-foreground/45 font-mono text-[10px]">--{name}</p>
//       </div>
//     </button>
//   );
// }

function StyleColors({
  style,
  hideVariables,
}: {
  style: StyleName;
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

      const formattedColor = `oklch(${Number(oklchColor.l.toFixed(4))} ${Number(oklchColor.c.toFixed(4))} ${Number(oklchColor?.h?.toFixed(2))})`;

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
      <StyleFontWrapper sStyle={style}>
        <Subsection title={`${style} Colors`} description="">
          {/* <div className="bg-foreground/10 border-foreground/10 grid grid-cols-2 gap-px border sm:grid-cols-3 lg:grid-cols-4">
          {colorTokens.map((t) => (
            <ColorSwatch key={t.name} name={t.name} label={t.label} />
          ))}
        </div> */}

          <div className="bg-foreground/10 border-foreground/10 grid grid-cols-1 gap-px border md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
                  className="bg-background hover:bg-foreground/[0.02] group grid gap-2 space-y-2 p-3 text-left transition-colors"
                  title="Click to copy color"
                >
                  <div
                    className="border-foreground/10 h-14 w-full border"
                    style={{ backgroundColor: `var(${variable})` }}
                  />
                  <div className="space-y-0.5">
                    <div className="flex items-baseline justify-between gap-2 capitalize">
                      <p className="text-[11px] font-medium">
                        {v.replace("--", "").replace("-", " ")}
                      </p>
                      {/* <p className="text-foreground/60 font-mono text-[10px]">
                        {isCopied ? "Copied" : `var(${v})`}
                      </p> */}
                    </div>
                    <p className="text-foreground/45 font-mono text-[10px]">
                      {isCopied ? "Copied" : v}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </Subsection>
      </StyleFontWrapper>
    </div>
  );
}

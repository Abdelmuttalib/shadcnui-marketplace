"use client";

import { useTheme } from "next-themes";

import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { useStyleStore } from "@/hooks/use-style-store";

import { cn } from "cn";

import { ExamplePreviewFrame } from "./example-preview-frame";

import type { ExamplePreviewProps } from "./example-preview.types";

export function ExamplePreview({
  style: styleProp,
  name,
  className,
  aspectRatio = "2528/1440",
  onLoad,
}: ExamplePreviewProps) {
  const { resolvedTheme } = useTheme();

  const { style: activeStyle } = useStyleStore();

  const { activePalette, activeRadius } = useThemePaletteStore();

  const style = styleProp ?? activeStyle ?? "carbon";

  const src = `/example/${style}/${name}`;

  return (
    <div
      className={cn(
        "border-border bg-background relative w-full overflow-hidden",
        className
      )}
    >
      <ExamplePreviewFrame
        src={src}
        palette={activePalette}
        radius={activeRadius}
        theme={resolvedTheme}
        onLoad={onLoad}
        className={cn("block w-full border-0")}
        style={{ aspectRatio }}
      />

      {/* <style jsx>{`
        iframe {
          width: 100%;
          aspect-ratio: ${aspectRatio};
          height: auto;
          display: block;
        }
      `}</style> */}
    </div>
  );
}

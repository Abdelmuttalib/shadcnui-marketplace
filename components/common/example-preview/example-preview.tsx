"use client";

import { useTheme } from "next-themes";

import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { useStyleStore } from "@/hooks/use-style-store";

import { cn } from "cn";

import { ExamplePreviewFrame } from "./example-preview-frame";

import type { ExamplePreviewProps } from "./example-preview.types";
import { DEFAULT_STYLE } from "@/registry/styles";

export function ExamplePreview({
  style: styleProp,
  name: nameProp,
  className,
  aspectRatio = "2528/1440",
  onLoad,
}: ExamplePreviewProps) {
  const { resolvedTheme } = useTheme();

  // const activeStyle = useStyleStore((state) => state.style);
  const activeStyle = useStyleStore((state) => state.style);
  const activeExample = useStyleStore((state) => state.activeExample);

  const activePalette = useThemePaletteStore((state) => state.activePalette);

  const activeRadius = useThemePaletteStore((state) => state.activeRadius);

  const style = styleProp ?? activeStyle ?? DEFAULT_STYLE.name;
  const name = nameProp ?? activeExample;

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

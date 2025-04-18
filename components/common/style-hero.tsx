"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { renderStyleHero } from "@/registry/styles";

import { getStyleFontClassname } from "../style-font-wrapper";

export function StyleHero() {
  const { style } = useStyleStore();

  return (
    <div className={cn(getStyleFontClassname(style))}>
      {renderStyleHero(style)}
    </div>
  );
}

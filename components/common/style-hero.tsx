"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { getStyleFontClassname, renderStyleHero } from "@/registry/styles";

export function StyleHero() {
  const { style } = useStyleStore();

  return (
    <div className={cn(getStyleFontClassname(style))}>
      {renderStyleHero(style)}
    </div>
  );
}

"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { ExampleRenderer } from "@/registry/bases/base/shared/example-renderer";

export function StyleHero() {
  const { style } = useStyleStore();

  return <ExampleRenderer style={style as any} name="hero" />;
}

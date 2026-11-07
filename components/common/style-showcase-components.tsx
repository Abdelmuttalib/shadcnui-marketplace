"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { renderStyleShowcaseComponents } from "@/registry/styles-components";

export function StyleShowcaseComponents() {
  const { style } = useStyleStore();

  return <>{renderStyleShowcaseComponents(style)}</>;
}

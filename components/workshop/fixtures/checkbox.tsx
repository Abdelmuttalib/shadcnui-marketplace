"use client";

import * as Default from "@/registry/bases/base/default/ui/checkbox";
import * as V4 from "@/registry/bases/base/styles/default/ui/checkbox";

import type { FixtureSide } from "./types";

export function CheckboxFixture({ side }: { side: FixtureSide }) {
  const { Checkbox } = side === "default" ? Default : V4;
  return (
    <div className="flex items-center gap-4">
      <Checkbox aria-label="Unchecked" />
      <Checkbox defaultChecked aria-label="Checked" />
      <Checkbox disabled aria-label="Disabled" />
      <Checkbox defaultChecked disabled aria-label="Checked disabled" />
    </div>
  );
}

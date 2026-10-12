"use client";

import * as Default from "@/registry/default/ui/switch";
import * as V4 from "@/registry/default-v4/ui/switch";

import type { FixtureSide } from "./types";

export function SwitchFixture({ side }: { side: FixtureSide }) {
  const { Switch } = side === "default" ? Default : V4;
  return (
    <div className="flex items-center gap-4">
      <Switch aria-label="Off" />
      <Switch defaultChecked aria-label="On" />
      <Switch disabled aria-label="Disabled" />
    </div>
  );
}

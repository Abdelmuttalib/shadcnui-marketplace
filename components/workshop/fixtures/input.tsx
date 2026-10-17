"use client";

import * as Default from "@/registry/bases/base/default/ui/input";
import * as V4 from "@/registry/bases/base/styles/default-v4/ui/input";

import type { FixtureSide } from "./types";

export function InputFixture({ side }: { side: FixtureSide }) {
  const { Input } = side === "default" ? Default : V4;
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Input placeholder="Empty input" />
      <Input defaultValue="Filled value" />
      <Input disabled placeholder="Disabled input" />
    </div>
  );
}

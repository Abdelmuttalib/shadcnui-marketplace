"use client";

import * as Default from "@/registry/bases/base/default/ui/textarea";
import * as V4 from "@/registry/bases/base/styles/default/ui/textarea";

import type { FixtureSide } from "./types";

export function TextareaFixture({ side }: { side: FixtureSide }) {
  const { Textarea } = side === "default" ? Default : V4;
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Textarea placeholder="Empty textarea" />
      <Textarea defaultValue="Filled value" />
      <Textarea disabled placeholder="Disabled textarea" />
    </div>
  );
}

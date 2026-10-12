"use client";

import * as Default from "@/registry/default/ui/textarea";
import * as V4 from "@/registry/default-v4/ui/textarea";

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

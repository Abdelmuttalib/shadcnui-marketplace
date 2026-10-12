"use client";

import * as Default from "@/registry/default/ui/radio-group";
import * as V4 from "@/registry/default-v4/ui/radio-group";

import type { FixtureSide } from "./types";

export function RadioGroupFixture({ side }: { side: FixtureSide }) {
  const { RadioGroup, RadioGroupItem } =
    side === "default" ? Default : V4;
  return (
    <div className="flex items-center gap-4">
      <RadioGroup defaultValue="a" aria-label="Options">
        <div className="flex items-center gap-4">
          <RadioGroupItem value="a" aria-label="Option A" />
          <RadioGroupItem value="b" aria-label="Option B" />
          <RadioGroupItem value="c" disabled aria-label="Option C disabled" />
        </div>
      </RadioGroup>
    </div>
  );
}

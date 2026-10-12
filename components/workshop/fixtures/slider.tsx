"use client";

import * as Default from "@/registry/default/ui/slider";
import * as V4 from "@/registry/default-v4/ui/slider";

import type { FixtureSide } from "./types";

export function SliderFixture({ side }: { side: FixtureSide }) {
  const { Slider } = side === "default" ? Default : V4;
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Slider defaultValue={[40]} aria-label="Volume" />
      <Slider defaultValue={[70]} disabled aria-label="Disabled" />
    </div>
  );
}

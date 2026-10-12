"use client";

import * as Default from "@/registry/default/ui/label";
import * as V4 from "@/registry/default-v4/ui/label";

import type { FixtureSide } from "./types";

export function LabelFixture({ side }: { side: FixtureSide }) {
  const { Label } = side === "default" ? Default : V4;
  return (
    <div className="grid gap-3">
      <Label htmlFor={`${side}-email`}>Email address</Label>
      <Label>
        <span>Accept terms</span>
      </Label>
    </div>
  );
}

"use client";

import * as Default from "@/registry/default/ui/badge";
import * as V4 from "@/registry/default-v4/ui/badge";

import type { FixtureSide } from "./types";

export function BadgeFixture({ side }: { side: FixtureSide }) {
  const { Badge } = side === "default" ? Default : V4;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

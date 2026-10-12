"use client";

import * as Default from "@/registry/default/ui/button";
import * as V4 from "@/registry/default-v4/ui/button";

import type { FixtureSide } from "./types";

export function ButtonFixture({ side }: { side: FixtureSide }) {
  const { Button } = side === "default" ? Default : V4;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon button">
        ★
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

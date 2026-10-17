"use client";

import * as Default from "@/registry/bases/base/default/ui/card";
import * as V4 from "@/registry/bases/base/styles/default-v4/ui/card";

import type { FixtureSide } from "./types";

export function CardFixture({ side }: { side: FixtureSide }) {
  const mods = side === "default" ? Default : V4;
  const { Card, CardContent, CardDescription, CardHeader, CardTitle } = mods;
  return (
    <div className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Supporting description text.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Body content for visual comparison.</p>
        </CardContent>
      </Card>
    </div>
  );
}

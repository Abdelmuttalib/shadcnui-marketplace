"use client";

import * as Default from "@/registry/default/ui/alert";
import * as V4 from "@/registry/default-v4/ui/alert";

import type { FixtureSide } from "./types";

export function AlertFixture({ side }: { side: FixtureSide }) {
  const { Alert, AlertDescription, AlertTitle } =
    side === "default" ? Default : V4;
  return (
    <div className="grid w-full max-w-md gap-3">
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Default alert description.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Destructive alert description.</AlertDescription>
      </Alert>
    </div>
  );
}

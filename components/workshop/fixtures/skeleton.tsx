"use client";

import * as Default from "@/registry/bases/base/default/ui/skeleton";
import * as V4 from "@/registry/bases/base/styles/default/ui/skeleton";

import type { FixtureSide } from "./types";

export function SkeletonFixture({ side }: { side: FixtureSide }) {
  const { Skeleton } = side === "default" ? Default : V4;
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Skeleton className="h-10 w-full" />
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="grid flex-1 gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  );
}

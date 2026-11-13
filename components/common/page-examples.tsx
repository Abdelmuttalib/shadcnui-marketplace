"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { getPageExamples } from "@/registry/bases/base/shared/page-examples";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
  getStyleForegroundClassname,
} from "@/registry/styles-components";

export function PageExamples() {
  const { style } = useStyleStore();

  const sPagesExample = getPageExamples(style);

  return (
    <>
      {sPagesExample.map((s) => {
        return (
          <>
            <div className="bg-background rounded-xl border p-2">
              <div
                className={cn(
                  "h-[85svh] overflow-y-auto rounded-lg border",
                  getStyleBackgroundClassname(style),
                  getStyleForegroundClassname(style),
                  getStyleFontClassname(style)
                )}
              >
                {s}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

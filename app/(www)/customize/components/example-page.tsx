"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
  getStyleForegroundClassname,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import { CarbonPageExamples } from "@/registry/carbon/page-examples";
import { CatalystPageExamples } from "@/registry/catalyst/page-examples";
import { DefaultPageExamples } from "@/registry/default/page-examples";
import { LibellePageExamples } from "@/registry/libelle/page-examples";
import { LinearPageExamples } from "@/registry/linear/page-examples";
import { LucidPageExamples } from "@/registry/lucid/page-examples";
import { MaterialPageExamples } from "@/registry/material/page-examples";
import { MoonPageExamples } from "@/registry/moon/page-examples";
import { NeonPageExamples } from "@/registry/neon/page-examples";
import { SnowPageExamples } from "@/registry/snow/page-examples";
import { SpectrumPageExamples } from "@/registry/spectrum/page-examples";
import { WedgesPageExamples } from "@/registry/wedges/page-examples";

export const pageExamples = {
  default: DefaultPageExamples,
  catalyst: CatalystPageExamples,
  wedges: WedgesPageExamples,
  material: MaterialPageExamples,
  spectrum: SpectrumPageExamples,
  carbon: CarbonPageExamples,
  linear: LinearPageExamples,
  moon: MoonPageExamples,
  lucid: LucidPageExamples,
  snow: SnowPageExamples,
  neon: NeonPageExamples,
  libelle: LibellePageExamples,
};

export function PageExamples() {
  const { style } = useStyleStore();

  const sExamplePages = pageExamples[style];

  return (
    <>
      {sExamplePages.map((c) => {
        return (
          <>
            <div className="rounded-xl border bg-background p-2">
              <div
                className={cn(
                  "h-[85svh] overflow-y-auto rounded-lg border",
                  getStyleBackgroundClassname(style),
                  getStyleForegroundClassname(style),
                  getStyleFontClassname(style)
                )}
              >
                {c}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { CarbonPageExamples } from "@/registry/bases/base/carbon/page-examples";
import { CatalystPageExamples } from "@/registry/bases/base/catalyst/page-examples";
import { DefaultPageExamples } from "@/registry/bases/base/default/page-examples";
import { LibellePageExamples } from "@/registry/bases/base/libelle/page-examples";
import { LinearPageExamples } from "@/registry/bases/base/linear/page-examples";
import { LucidPageExamples } from "@/registry/bases/base/lucid/page-examples";
import { MaterialPageExamples } from "@/registry/bases/base/material/page-examples";
import { MoonPageExamples } from "@/registry/bases/base/moon/page-examples";
import { NeonPageExamples } from "@/registry/bases/base/neon/page-examples";
import { SnowPageExamples } from "@/registry/bases/base/snow/page-examples";
import { SpectrumPageExamples } from "@/registry/bases/base/spectrum/page-examples";
import { WedgesPageExamples } from "@/registry/bases/base/wedges/page-examples";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
  getStyleForegroundClassname,
} from "@/registry/styles-components";

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

  const sPagesExample = pageExamples[style];

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

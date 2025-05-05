"use client";

import { ArrowRightIcon } from "lucide-react";

import { StyleHero } from "@/components/common/style-hero";
import { ThemeCSSGenerator } from "@/components/common/theme-css-generator";
import { ThemeCustomizerDialog } from "@/components/common/theme-customizer";
import { ThemePaletteSelector } from "@/components/common/theme-palette-select";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { getStyleVariablesPrefix } from "@/registry/styles";

import { PageExamples } from "./components/example-page";

export default function CustomizePage() {
  const { style } = useStyleStore();

  const bgClass = `to-${getStyleVariablesPrefix(style)}-background`;

  return (
    <div>
      <div className="relative grid grid-cols-1 gap-10 xl:grid-cols-7">
        <div className="relative xl:col-span-2">
          <div className="to-moon-desctructive sticky left-0 top-16 size-56 bg-gradient-to-r from-moon-primary via-moon-secondary to-moon-primary opacity-40 blur-2xl"></div>
          <ThemeCustomizerDialog />
          {/* <div className="sticky top-16 z-10 flex flex-col gap-y-2 overflow-auto p-4">
            <div className="flex items-center gap-2">
              <Typography
                as={"h1"}
                variant="3xl/semibold"
                className="capitalize tracking-tighter"
              >
                Customize
              </Typography>
            </div>

            <div>
              <Typography
                as={"p"}
                variant="lg/normal"
                className="max-w-4xl text-muted-foreground"
              >
                Customize your theme and get access to the Shadcn UI
                Marketplace.
              </Typography>
              <ThemePaletteSelector />
              <ThemeCSSGenerator />
            </div>
            <div className="mt-2 flex gap-2">
              <Button>
                Get Access
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary">How does it work?</Button>
            </div>
          </div> */}
        </div>
        <div
          className={cn(
            "relative grid gap-8 bg-gradient-to-r from-background p-4 xl:col-span-5",
            bgClass,
            {}
          )}
        >
          <div className="relative max-w-[95%]">
            <StyleHero />
          </div>
          <PageExamples />
          {/* {sExamplePages.map((c) => {
            return (
              <>
                <div className="rounded-xl border bg-background p-2">
                  <div
                    className={cn(
                      "h-[85svh] overflow-y-auto rounded-lg border",
                      getStyleBackgroundClassname("wedges")
                    )}
                  >
                    {c}
                  </div>
                </div>
              </>
            );
          })} */}

          {/* <Separator className="mx-auto" /> */}
        </div>
      </div>
      {/* suggestion */}
      {/* <SuggestedStyles excludedStyle={"catalyst"} /> */}
    </div>
  );
}

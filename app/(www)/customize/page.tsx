import { ArrowRightIcon } from "lucide-react";

import { StyleHero } from "@/components/common/style-hero";
import { ThemeCSSGenerator } from "@/components/common/theme-css-generator";
import { ThemePaletteSelector } from "@/components/common/theme-palettes";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { PageExamples } from "./components/example-page";

export default function CustomizePage() {
  return (
    <div>
      <div className="relative grid grid-cols-1 gap-10 xl:grid-cols-7">
        <div className="relative xl:col-span-2">
          <div className="sticky top-16 z-10 flex flex-col gap-y-2 overflow-auto p-4">
            {/* <div className="">
              <div>
                <StylesBreadcrumb />
              </div>
            </div> */}
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
          </div>
        </div>
        <div className="relative grid gap-8 bg-gradient-to-r from-accent to-background p-4 xl:col-span-5">
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

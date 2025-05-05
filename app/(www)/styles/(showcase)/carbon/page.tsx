"use client";

import { ArrowRightIcon } from "lucide-react";

import { PageTitle } from "@/components/common/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { PAGE_EXAMPLE_TYPES, useStyleStore } from "@/hooks/use-style-store";

export default function CarbonStylePage() {
  const { style } = useStyleStore();

  return (
    <div>
      <div className="relative grid grid-cols-1 gap-10 xl:grid-cols-5">
        <div className="relative xl:col-span-2">
          <div className="sticky top-20 z-10 space-y-4 p-4 pt-10 xl:ml-auto xl:max-w-md xl:p-0 xl:pt-60">
            {/* <div className="">
              <div>
                <StylesBreadcrumb />
              </div>
            </div> */}

            <div className="flex items-center gap-2">
              <PageTitle>Carbon Style</PageTitle>
              <Badge>Pro</Badge>
            </div>

            <div className="">
              <Typography
                as={"p"}
                variant="lg/normal"
                className="max-w-4xl text-muted-foreground"
              >
                Carbon IBM inspired design system style for shadcn ui
              </Typography>
            </div>
            <div className="mt-2 flex gap-2">
              <Button>
                Get Access
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary">How does it work?</Button>
            </div>
            {/* <div className="pt-10">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does it work?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div> */}
          </div>
        </div>
        <div className="grid bg-gradient-to-r from-accent/80 to-background p-4 lg:rounded-l-2xl xl:col-span-3">
          {PAGE_EXAMPLE_TYPES.map((styleCat, index) => {
            return (
              <StylePageExamplePreview
                key={styleCat + index}
                id={`${style}-${styleCat}-example`}
                styleProp={"carbon"}
                styleCat={styleCat}
                examplePage={styleCat}
                hideBadge={true}
                className="overflow-auto"
                iframeClassName="h-[45rem] overflow-auto"
                // iframeClassName="min-h-[30rem] md:min-h-[33rem] lg:min-h-[39rem] xl:min-h-[45rem] xl:max-h-[45rem]"
              />
              // <StylePreview
              //   key={style + index}
              //   id={style}
              //   // @ts-ignore
              //   title={""}
              //   styleProp={"carbon"}
              //   styleCat={styleCat}
              //   // description="Carbon IBM inspired design system style for shadcn ui"
              //   examplePage={styleCat}
              //   iframeClassName="min-h-[30rem] md:min-h-[33rem] lg:min-h-[39rem] xl:min-h-[45rem]"
              // />
            );
          })}
        </div>
      </div>

      <div className="mt-56">
        <PageContainer size={"xl"}>
          <SuggestedStyles excludedStyle={"carbon"} />
        </PageContainer>
      </div>
    </div>
  );
}

import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { mainColors } from "@/components/common/theme-palette-select";
import {
  StyleCssWrapper,
  StyleFontWrapper,
} from "@/components/style-font-wrapper";
import { RichBadge } from "@/components/ui/rich-badge";
import { Style, STYLES } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { getStyleVariablesPrefix } from "@/registry/styles";

export function SuggestedStyles({ excludedStyle }: { excludedStyle: Style }) {
  const suggestedStyles = STYLES.filter(
    (s) => s !== excludedStyle && s !== "default" && s !== "material"
  );

  return (
    <div className="grid gap-6">
      <div className="grid">
        <Typography as="h3" variant="xl/medium">
          Discover more styles
        </Typography>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {suggestedStyles.map((style, index) => {
          const s = `--${getStyleVariablesPrefix(style)}-primary`;
          const c = `--${getStyleVariablesPrefix(style)}`;
          return (
            <StyleCssWrapper key={style + index}>
              <StyleFontWrapper sStyle={style}>
                {/* <StyleShowcaseCardLink style={style} /> */}
                <div className="group relative flex max-h-[30rem] min-h-[30rem] w-full flex-col gap-2 overflow-hidden rounded-md border bg-gradient-to-r from-transparent to-accent p-6">
                  {/* <div className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-transparent to-accent"></div> */}
                  <div className="flex w-full items-center justify-between">
                    <Link href={`/styles/${style}`} className="">
                      <Typography
                        as="h4"
                        variant="3xl/semibold"
                        className="group inline-flex items-center gap-2 capitalize tracking-tight"
                      >
                        {style}{" "}
                        <ArrowRightIcon className="size-5 -rotate-45 text-transparent group-hover:text-primary" />
                      </Typography>
                    </Link>

                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-2">
                        <RichBadge
                          variant="neutral"
                          className="hidden capitalize sm:block"
                        >
                          Palette
                        </RichBadge>
                        <div className="flex rounded-sm border">
                          {mainColors.map((color, index) => (
                            <div
                              key={`light-${color}`}
                              className={cn("size-6", {
                                "rounded-l-sm": index === 0,
                                "rounded-r-sm": index === mainColors.length - 1,
                              })}
                              style={{
                                // backgroundColor: `oklch(${palette.light[color]})`,
                                backgroundColor: `oklch(var(${c}-${color}))`,
                              }}
                              title={`Light ${color}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative -ml-2">
                    <div
                      // bg-blue-500/30
                      className="absolute left-0 top-0 z-10 flex size-[29rem] items-center justify-center opacity-40 blur-xl transition-all duration-200 ease-in-out group-hover:size-96 group-hover:opacity-50 group-hover:blur-lg"
                      style={{
                        backgroundColor: `oklch(var(${s}))`,
                      }}
                    ></div>
                    <StylePageExamplePreview
                      id="dashboard"
                      styleProp={style}
                      styleCat="dashboard"
                      examplePage="dashboard"
                      hideBadge={true}
                      className="absolute left-0 top-0 z-20 w-[70vw] max-w-[70vw]"
                      iframeClassName="w-[70vw] max-w-[70vw]"
                    />
                  </div>
                </div>
              </StyleFontWrapper>
            </StyleCssWrapper>
          );
        })}
        {/* {STYLES.filter((s) => s !== excludedStyle && s !== "default").map(
          (s) => (
            <StyleShowcaseCardLink key={s} style={s} />
          )
        )} */}
      </div>
    </div>
  );
}

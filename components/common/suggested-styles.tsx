import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import {
  StyleCssWrapper,
  StyleFontWrapper,
} from "@/components/style-font-wrapper";
import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { cn } from "@/lib/utils";
import { mainPaletteColorsKeys } from "@/registry/registry-palettes";
import { getStyleVariablesPrefix } from "@/registry/styles-components";
import { StyleName, STYLES } from "@/registry/styles";

export function SuggestedStyles({
  excludedStyle,
}: {
  excludedStyle: StyleName;
}) {
  const suggestedStyles = STYLES.filter(
    (s) =>
      s.name !== excludedStyle && s.name !== "default" && s.name !== "material"
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
          const s = `--${getStyleVariablesPrefix(style.name)}-primary`;
          const c = `--${getStyleVariablesPrefix(style.name)}`;
          return (
            <StyleCssWrapper key={style.name + index}>
              <StyleFontWrapper sStyle={style.name}>
                {/* <StyleShowcaseCardLink style={style} /> */}
                <div className="to-accent group relative flex max-h-[30rem] min-h-[30rem] w-full flex-col gap-2 overflow-hidden rounded-md border bg-linear-to-r from-transparent p-6">
                  {/* <div className="absolute inset-0 z-50 flex items-center justify-center bg-linear-to-br from-transparent to-accent"></div> */}
                  <div className="flex w-full items-center justify-between">
                    <Link href={`/styles/${style}`} className="">
                      <Typography
                        as="h4"
                        variant="3xl/semibold"
                        className="group inline-flex items-center gap-2 tracking-tight capitalize"
                      >
                        {style.name}{" "}
                        <ArrowRightIcon className="group-hover:text-primary size-5 -rotate-45 text-transparent" />
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
                          {mainPaletteColorsKeys.map((color, index) => (
                            <div
                              key={`light-${color}`}
                              className={cn("size-6", {
                                "rounded-l-sm": index === 0,
                                "rounded-r-sm":
                                  index === mainPaletteColorsKeys.length - 1,
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
                      className="absolute top-0 left-0 z-10 flex size-[29rem] items-center justify-center opacity-40 blur-xl transition-all duration-200 ease-in-out group-hover:size-96 group-hover:opacity-50 group-hover:blur-lg"
                      style={{
                        backgroundColor: `oklch(var(${s}))`,
                      }}
                    ></div>
                    <StylePageExamplePreview
                      id="dashboard"
                      styleProp={style.name}
                      hideBadge={true}
                      className="absolute top-0 left-0 z-20 w-[70vw] max-w-[70vw]"
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

"use client";

import * as React from "react";

import { FONTS } from "@/app/(www)/(create)/lib/fonts";
import { useDesignSystemSearchParams } from "@/app/(www)/(create)/lib/search-params";
import { Card, CardContent } from "@/registry/bases/base/styles/lucid/ui/card";
import { STYLES } from "@/registry/styles";

export function StyleOverview() {
  const [params] = useDesignSystemSearchParams();

  const currentFont = React.useMemo(
    () => FONTS.find((font) => font.value === params.font),
    [params.font]
  );

  const currentFontHeading = React.useMemo(
    () => FONTS.find((font) => font.value === params.fontHeading),
    [params.fontHeading]
  );

  const currentStyle = React.useMemo(
    () => STYLES.find((style) => style.name === params.style),
    [params.style]
  );

  return (
    <Card>
      <CardContent className="style-lyra:gap-4 style-mira:gap-4 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="cn-font-heading style-lyra:text-lg style-mira:text-lg style-sera:text-lg style-sera:font-semibold style-sera:tracking-wide style-sera:uppercase text-2xl font-medium">
            {currentStyle?.title} -{" "}
            {currentFontHeading?.name &&
            currentFontHeading.name !== currentFont?.name
              ? currentFontHeading.name
              : currentFont?.name}
          </div>
          <div className="text-lucid-muted-foreground style-lyra:text-sm style-mira:text-sm style-sera:text-sm style-sera:leading-relaxed line-clamp-2 text-base">
            Designers love packing quirky glyphs into test phrases. This is a
            preview of the typography styles.
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {[
            "--lucid-background",
            "--lucid-foreground",
            "--lucid-primary",
            "--lucid-secondary",
            "--lucid-muted",
            "--lucid-accent",
            "--lucid-border",
            "--lucid-chart-1",
            "--lucid-chart-2",
            "--lucid-chart-3",
            "--lucid-chart-4",
            "--lucid-chart-5",
          ].map((variant) => (
            <div
              key={variant}
              className="flex flex-col flex-wrap items-center gap-2"
            >
              <div
                className="after:border-lucid-border style-sera:rounded-none style-sera:after:rounded-none rounded-lucid-lg after:rounded-lucid-lg relative aspect-square w-full bg-(--color) after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten"
                style={
                  {
                    "--color": `var(${variant})`,
                  } as React.CSSProperties
                }
              />
              <div className="style-lyra:max-w-10 style-mira:max-w-10 hidden max-w-14 truncate font-mono text-[0.60rem] md:block">
                {variant}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

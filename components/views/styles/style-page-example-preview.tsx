"use client";

import React from "react";

import { RichBadge } from "@/components/ui/rich-badge";
import { BlockPlan } from "@/config/data";
import { PageExampleType, Style, useStyleStore } from "@/hooks/use-style-store";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
  getStyleVariablesPrefix,
  renderStylePageExample,
} from "@/registry/styles";
import { cn } from "@/utils/cn";

export function StylePageExamplePreview({
  id,
  styleProp = "carbon",
  plan,
  pageExampleTypeProp,
  className,
  coloredEdge = false,
  style,
  hideBadge = false,
}: {
  id: string;
  styleProp?: Style;
  plan?: BlockPlan;
  className?: string;
  coloredEdge?: boolean;
  pageExampleTypeProp?: PageExampleType;
  style?: React.CSSProperties;
  hideBadge?: boolean;
}) {
  const { pageExampleType } = useStyleStore();

  function getPlanBadge() {
    switch (plan) {
      case BlockPlan.Free:
        return "green";
      case BlockPlan.Basic:
        return "default";
      case BlockPlan.Pro:
        return "blue";
      default:
        return "neutral";
    }
  }

  return (
    <div
      className={cn("w-full max-w-[1440px]", className)}
      id={id}
      style={style}
    >
      {/* <div className="mb-6 space-y-2">
        <div className="flex items-center gap-2">
          <Typography
            as="h2"
            variant="5xl/medium"
            className="bg-gradient-to-br from-foreground to-foreground bg-clip-text px-3 tracking-tighter text-transparent dark:to-accent"
          >
            {title}
          </Typography>

          <Typography
            as="h2"
            variant="md/normal"
            className="text-foreground-secondary"
          >
            {description}
          </Typography>
        </div>
      </div> */}
      <div
        className={cn(
          "mb-6 space-y-1"
          // "overflow-hidden"
          // "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]",
          // "relative overflow-hidden",
          // "h-full w-full rounded-xl shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
        )}
      >
        {/* gradient effect lightning */}
        {/* <div className="absolute left-0 top-0 z-10 flex size-44 items-center justify-center bg-gradient-to-br from-primary to-accent blur-lg"></div> */}
        {!hideBadge ? (
          <div className="flex items-center gap-2 px-0.5">
            <RichBadge variant="neutral" className="capitalize">
              {styleProp} style
              {/* {styleCat || pageExampleType} */}
            </RichBadge>
          </div>
        ) : null}
        <div
          className="relative flex flex-col justify-between gap-2 overflow-x-auto rounded-2xl border bg-background p-2"
          style={
            coloredEdge
              ? {
                  backgroundColor: `oklch(var(--${getStyleVariablesPrefix(
                    styleProp
                  )}-primary) / 0.6)`,
                }
              : {}
          }
        >
          {/* gradient effect lightning */}
          <div className="flex h-full w-full gap-2 overflow-hidden">
            <div
              className={cn(
                "h-fit min-h-[32rem] w-full overflow-hidden rounded-lg border dark:shadow dark:shadow-gray-950",
                getStyleFontClassname(styleProp),
                getStyleBackgroundClassname(styleProp)
                // {
                //   "max-w-md": breakpoint === "sm",
                //   "max-w-screen-md": breakpoint === "md",
                //   "max-w-full": breakpoint === "lg",
                // }
              )}
            >
              {renderStylePageExample(
                styleProp,
                pageExampleTypeProp || pageExampleType
              )}
            </div>
            {/* {preview ? (
              <div
                className={cn(
                  "h-fit w-full overflow-hidden rounded-lg border dark:shadow dark:shadow-gray-950",
                  {
                    "max-w-md": breakpoint === "sm",
                    "max-w-screen-md": breakpoint === "md",
                    "max-w-full": breakpoint === "lg",
                  }
                )}
              >
                {renderStylePageExample(styleProp, pageExampleType)}
              </div>
            ) : (
              <div className="w-full">{children}</div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

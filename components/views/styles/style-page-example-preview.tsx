"use client";

import React from "react";

import { RichBadge } from "@/components/ui/rich-badge";
import { PageExampleType, useStyleStore } from "@/hooks/use-style-store";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
  getStyleRadius,
  renderStylePageExample,
} from "@/registry/styles-components";
import { cn } from "@/utils/cn";
import { StyleName } from "@/registry/styles";

export function StylePageExamplePreview({
  id,
  styleProp = "carbon",
  pageExampleTypeProp,
  className,
  coloredEdge = false,
  style,
  hideBadge = false,
  screenWidth,
}: {
  id: string;
  styleProp?: StyleName;
  className?: string;
  coloredEdge?: boolean;
  pageExampleTypeProp?: PageExampleType;
  style?: React.CSSProperties;
  hideBadge?: boolean;
  screenWidth?: boolean;
}) {
  const { pageExampleType } = useStyleStore();

  return (
    <div
      className={cn(
        "w-full max-w-full",
        {
          "w-[1440px] max-w-[1440px]": screenWidth,
        },
        className
      )}
      id={id}
      style={style}
    >
      <div className={cn("mb-6 space-y-1")}>
        {/* gradient effect lightning */}
        {/* <div className="absolute left-0 top-0 z-10 flex size-44 items-center justify-center bg-linear-to-br from-primary to-accent blur-lg"></div> */}
        {!hideBadge ? (
          <div className="flex items-center gap-2 px-0.5">
            <RichBadge variant="neutral" className="capitalize">
              {styleProp} style
              {/* {styleCat || pageExampleType} */}
            </RichBadge>
          </div>
        ) : null}
        <div
          className="bg-background relative flex flex-col justify-between gap-2 overflow-x-auto"
          style={{
            borderRadius: getStyleRadius(styleProp),
            // coloredEdge
            //   ? {
            //       backgroundColor: `var(--${getStyleVariablesPrefix(
            //         styleProp
            //       )}-primary)`,
            //     }
            //   : {}
          }}
        >
          {/* gradient effect lightning */}
          <div className="flex h-full w-full gap-2 overflow-hidden">
            <div
              className={cn(
                "h-fit w-full overflow-hidden border dark:shadow dark:shadow-gray-950",
                getStyleFontClassname(styleProp),
                getStyleBackgroundClassname(styleProp)
                // {
                //   "max-w-md": breakpoint === "sm",
                //   "max-w-screen-md": breakpoint === "md",
                //   "max-w-full": breakpoint === "lg",
                // }
              )}
              style={{
                borderRadius: getStyleRadius(styleProp),
              }}
            >
              {renderStylePageExample(
                styleProp,
                pageExampleTypeProp || pageExampleType
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

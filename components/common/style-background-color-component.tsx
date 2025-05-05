"use client";

import * as React from "react";

import { Style, STYLES, useStyleStore } from "@/hooks/use-style-store";
import { getStyleVariablesPrefix } from "@/registry/styles";
import { cn } from "@/utils/cn";

export function StyleGradientBackgroundColorComponent({
  className,
}: {
  className?: string;
}) {
  const { style } = useStyleStore();

  const gradientClasses = React.useMemo(() => {
    return {
      fromVia: STYLES.map((_style) => {
        const cls = `from-${getStyleVariablesPrefix(
          _style
        )}-background via-${getStyleVariablesPrefix(
          _style
        )}-background to-background`;

        return {
          [cls]: style === _style,
        };
      }),
      from: STYLES.map((_style) => {
        const cls = `from-${getStyleVariablesPrefix(_style)}-background`;

        return {
          [cls]: style === _style,
        };
      }),
    };
  }, [style]);

  function getGradientClasses(style: Style) {
    const stylePrefix = getStyleVariablesPrefix(style);
    return `from-${stylePrefix}-background via-${stylePrefix}-background to-${stylePrefix}-background bg-${stylePrefix}-background`;
  }

  const sClass = React.useMemo(() => {
    return getGradientClasses(style);
  }, [style]);

  return (
    <>
      <div className={cn("bg-gradient-to-b", sClass, className)}></div>
      {/* <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-50 h-24 w-full bg-gradient-to-b to-background",
          sClass
        )}
      ></div> */}
    </>
  );
}

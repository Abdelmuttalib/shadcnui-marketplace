"use client";

import { Style, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
} from "@/registry/styles-components";

type StyleFontWrapperProps = React.ComponentPropsWithoutRef<"div"> & {
  sStyle?: Style;
};

export function StyleFontWrapper({
  children,
  className,
  sStyle,
  ...props
}: StyleFontWrapperProps) {
  const { style } = useStyleStore();

  return (
    <div
      className={cn(getStyleFontClassname(sStyle || style), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function StyleCssWrapper({
  children,
  className,
  style,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: Style;
}>) {
  const { style: _style } = useStyleStore();

  return (
    <div
      className={cn(getStyleBackgroundClassname(style || _style), className)}
    >
      {children}
    </div>
  );
}

"use client";

import { Style, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
} from "@/registry/styles";

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

  // const styles = {
  //   default: "bg-dft-background",
  //   carbon: "bg-cb-background",
  //   linear: "bg-linear-background",
  //   material: "bg-material-background",
  //   catalyst: "bg-catalyst-background",
  //   wedges: "bg-wedges-background",
  //   spectrum: "bg-spctm-background",
  //   moon: "bg-moon-background",
  //   lucid: "bg-lucid-background",
  //   snow: "bg-snow-background",
  //   neon: "bg-neon-background",
  // };

  return (
    <div
      className={cn(getStyleBackgroundClassname(style || _style), className)}
    >
      {children}
    </div>
  );
}

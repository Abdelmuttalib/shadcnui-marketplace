import * as React from "react";
import { cn } from "@/utils/cn";

const Separator = ({ className, ...props }: { className?: string }) => (
  <div
    // ref={ref}
    className={cn(
      "shrink-0 bg-border",
      // orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
);
// Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

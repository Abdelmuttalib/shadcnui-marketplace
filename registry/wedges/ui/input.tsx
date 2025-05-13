import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-wedges-md border border-wedges-input bg-wedges-input/20 px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-wedges-foreground placeholder:text-wedges-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

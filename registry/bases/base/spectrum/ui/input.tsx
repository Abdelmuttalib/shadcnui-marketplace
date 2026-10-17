import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-spctm-md border border-spctm-input bg-inherit px-3 py-2 text-base ring-offset-spctm-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-spctm-foreground placeholder:text-spctm-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spctm-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-spctm-muted disabled:opacity-50 md:text-sm",
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

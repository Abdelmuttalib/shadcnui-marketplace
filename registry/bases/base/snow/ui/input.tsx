import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-snow-md border border-snow-input bg-snow-background px-3.5 py-2 text-base ring-offset-snow-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-snow-foreground placeholder:text-snow-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ring  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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

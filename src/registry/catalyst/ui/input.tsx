import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-catalyst-md border border-catalyst-input bg-catalyst-muted px-3 py-2 text-base ring-offset-catalyst-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-catalyst-foreground placeholder:text-catalyst-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-catalyst-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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

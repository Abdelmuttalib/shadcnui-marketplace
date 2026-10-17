import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-cb-md border border-transparent border-b-cb-foreground/40 bg-cb-input/40 px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-cb-foreground placeholder:text-cb-muted-foreground focus-visible:border-cb-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cb-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-material-md border-2 border-transparent bg-material-input/60 px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-material-foreground placeholder:text-material-muted-foreground focus-visible:border-material-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 md:text-sm",
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

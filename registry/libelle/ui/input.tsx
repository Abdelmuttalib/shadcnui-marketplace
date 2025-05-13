import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-libelle-md rounded-t-[4px] border-b border-libelle-input border-b-libelle-primary bg-libelle-input/50 px-3 py-2 text-base ring-offset-libelle-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-libelle-foreground placeholder:text-libelle-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-libelle-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
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

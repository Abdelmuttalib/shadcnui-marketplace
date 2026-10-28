import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-spctm-input file:text-spctm-foreground placeholder:text-spctm-muted-foreground focus-visible:border-spctm-ring focus-visible:ring-spctm-ring/50 aria-invalid:border-spctm-destructive aria-invalid:ring-spctm-destructive/20 dark:bg-spctm-input/30 dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:ring-spctm-destructive/40 rounded-spctm-md h-9 w-full min-w-0 border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

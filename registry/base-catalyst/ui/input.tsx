import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-catalyst-input file:text-catalyst-foreground placeholder:text-catalyst-muted-foreground focus-visible:border-catalyst-ring focus-visible:ring-catalyst-ring/50 aria-invalid:border-catalyst-destructive aria-invalid:ring-catalyst-destructive/20 dark:bg-catalyst-input/30 dark:aria-invalid:border-catalyst-destructive/50 dark:aria-invalid:ring-catalyst-destructive/40 rounded-catalyst-md h-9 w-full min-w-0 border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

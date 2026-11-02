import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-wedges-input file:text-wedges-foreground placeholder:text-wedges-muted-foreground focus-visible:border-wedges-ring focus-visible:ring-wedges-ring/30 aria-invalid:border-wedges-destructive aria-invalid:ring-wedges-destructive/20 bg-wedges-input/30 dark:aria-invalid:border-wedges-destructive/50 dark:aria-invalid:ring-wedges-destructive/30 rounded-wedges-md h-9 w-full min-w-0 border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

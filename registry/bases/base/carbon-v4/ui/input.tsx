import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "rounded-cb-md border-cb-input shadow-xs file:border-cb-foreground placeholder:border-cb-muted-foreground focus-visible:border-cb-ring focus-visible:ring-3 focus-visible:border-cb-ring/50 aria-invalid:border-cb-destructive aria-invalid:ring-3 aria-invalid:border-cb-destructive/20 dark:border-cb-input/30 dark:aria-invalid:border-cb-destructive/50 dark:aria-invalid:border-cb-destructive/40 h-9 w-full min-w-0 border bg-transparent px-2.5 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

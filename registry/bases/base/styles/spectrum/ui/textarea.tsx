import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-spctm-input placeholder:text-spctm-muted-foreground focus-visible:border-spctm-ring focus-visible:ring-spctm-ring/50 aria-invalid:border-spctm-destructive aria-invalid:ring-spctm-destructive/20 dark:bg-spctm-input/30 dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:ring-spctm-destructive/40 rounded-spctm-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-linear-input placeholder:text-linear-muted-foreground focus-visible:border-linear-ring focus-visible:ring-linear-ring/50 aria-invalid:border-linear-destructive aria-invalid:ring-linear-destructive/20 dark:bg-linear-input/30 dark:aria-invalid:border-linear-destructive/50 dark:aria-invalid:ring-linear-destructive/40 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

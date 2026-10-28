import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-moon-input placeholder:text-moon-muted-foreground focus-visible:border-moon-ring focus-visible:ring-moon-ring/50 aria-invalid:border-moon-destructive aria-invalid:ring-moon-destructive/20 dark:bg-moon-input/30 dark:aria-invalid:border-moon-destructive/50 dark:aria-invalid:ring-moon-destructive/40 rounded-moon-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-snow-input placeholder:text-snow-muted-foreground focus-visible:border-snow-ring focus-visible:ring-snow-ring/50 aria-invalid:border-snow-destructive aria-invalid:ring-snow-destructive/20 dark:bg-snow-input/30 dark:aria-invalid:border-snow-destructive/50 dark:aria-invalid:ring-snow-destructive/40 rounded-snow-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

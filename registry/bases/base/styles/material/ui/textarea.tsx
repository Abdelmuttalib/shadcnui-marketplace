import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-material-input placeholder:text-material-muted-foreground focus-visible:border-material-ring focus-visible:ring-material-ring/50 aria-invalid:border-material-destructive aria-invalid:ring-material-destructive/20 dark:bg-material-input/30 dark:aria-invalid:border-material-destructive/50 dark:aria-invalid:ring-material-destructive/40 rounded-material-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

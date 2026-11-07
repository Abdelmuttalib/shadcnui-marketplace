import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-wedges-input placeholder:text-wedges-muted-foreground focus-visible:border-wedges-ring focus-visible:ring-wedges-ring/50 aria-invalid:border-wedges-destructive aria-invalid:ring-wedges-destructive/20 dark:bg-wedges-input/30 dark:aria-invalid:border-wedges-destructive/50 dark:aria-invalid:ring-wedges-destructive/40 rounded-wedges-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

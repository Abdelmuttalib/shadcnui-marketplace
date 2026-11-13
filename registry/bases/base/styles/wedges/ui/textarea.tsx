import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-wedges-input placeholder:text-wedges-muted-foreground focus-visible:border-wedges-ring focus-visible:ring-wedges-ring/30 aria-invalid:border-wedges-destructive aria-invalid:ring-wedges-destructive/20 bg-wedges-input/30 dark:aria-invalid:border-wedges-destructive/50 dark:aria-invalid:ring-wedges-destructive/30 rounded-wedges-md flex field-sizing-content min-h-16 w-full border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

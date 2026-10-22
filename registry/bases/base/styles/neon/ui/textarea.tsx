import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-neon-input placeholder:text-neon-muted-foreground focus-visible:border-neon-ring focus-visible:ring-neon-ring/50 aria-invalid:border-neon-destructive aria-invalid:ring-neon-destructive/20 dark:bg-neon-input/30 dark:aria-invalid:border-neon-destructive/50 dark:aria-invalid:ring-neon-destructive/40 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

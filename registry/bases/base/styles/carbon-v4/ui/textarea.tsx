import { cn } from "cn";
import * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content rounded-cb-md border-cb-input shadow-xs placeholder:border-cb-muted-foreground focus-visible:border-cb-ring focus-visible:ring-3 focus-visible:border-cb-ring/50 aria-invalid:border-cb-destructive aria-invalid:ring-3 aria-invalid:border-cb-destructive/20 dark:border-cb-input/30 dark:aria-invalid:border-cb-destructive/50 dark:aria-invalid:border-cb-destructive/40 flex min-h-16 w-full border bg-transparent px-2.5 py-2 text-base outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

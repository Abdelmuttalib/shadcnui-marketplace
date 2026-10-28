import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-lucid-input placeholder:text-lucid-muted-foreground focus-visible:outline-lucid-ring aria-invalid:border-lucid-destructive aria-invalid:ring-lucid-destructive/20 dark:bg-lucid-input/30 rounded-lucid-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

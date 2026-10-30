import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-catalyst-input placeholder:text-catalyst-muted-foreground focus-visible:border-catalyst-ring focus-visible:ring-catalyst-ring/50 aria-invalid:border-catalyst-destructive aria-invalid:ring-catalyst-destructive/20 dark:bg-catalyst-input/30 dark:aria-invalid:border-catalyst-destructive/50 dark:aria-invalid:ring-catalyst-destructive/40 rounded-catalyst-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

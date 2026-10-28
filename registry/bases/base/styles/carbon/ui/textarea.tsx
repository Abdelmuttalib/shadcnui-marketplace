import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "rounded-cb-md bg-cb-input/40 ring-offset-cb-background placeholder:text-cb-muted-foreground focus-visible:border-cb-ring focus-visible:ring-cb-ring aria-invalid:border-cb-destructive aria-invalid:ring-cb-destructive flex field-sizing-content min-h-16 w-full border border-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 md:text-sm",
        "border-b-cb-foreground/40",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

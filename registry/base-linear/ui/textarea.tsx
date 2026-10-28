import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-linear-input placeholder:text-linear-muted-foreground focus-visible:ring-linear-ring ring-offset-background aria-invalid:ring-linear-destructive/60 rounded-linear-md flex field-sizing-content min-h-16 w-full border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

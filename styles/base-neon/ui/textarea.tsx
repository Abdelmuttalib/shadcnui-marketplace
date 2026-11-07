import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-neon-input placeholder:text-neon-muted-foreground focus-visible:ring-neon-ring aria-invalid:border-neon-destructive aria-invalid:ring-neon-destructive bg-neon-input/40 rounded-neon-md flex field-sizing-content min-h-16 w-full border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

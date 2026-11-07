import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-neon-input placeholder:text-neon-muted-foreground focus-visible:outline-neon-ring outline-offset-transparent aria-invalid:border-neon-destructive aria-invalid:outline-neon-destructive bg-neon-input/40 rounded-neon-md flex field-sizing-content min-h-16 w-full border px-3 py-2 text-base shadow-xs outline-offset-2 transition-[color,box-shadow] outline-none focus-visible:outline-2 focus-visible:outline-solid disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

import { cn } from "cn";
import * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content rounded-dft-md border-dft-input shadow-xs placeholder:border-dft-muted-foreground focus-visible:border-dft-ring focus-visible:ring-3 focus-visible:border-dft-ring/50 aria-invalid:border-dft-destructive aria-invalid:ring-3 aria-invalid:border-dft-destructive/20 dark:border-dft-input/30 dark:aria-invalid:border-dft-destructive/50 dark:aria-invalid:border-dft-destructive/40 flex min-h-16 w-full border bg-transparent px-2.5 py-2 text-base outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

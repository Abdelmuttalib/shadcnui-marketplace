import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-libelle-input placeholder:text-libelle-muted-foreground focus-visible:border-libelle-ring focus-visible:ring-libelle-ring/50 aria-invalid:border-libelle-destructive aria-invalid:ring-libelle-destructive/20 dark:bg-libelle-input/30 dark:aria-invalid:border-libelle-destructive/50 dark:aria-invalid:ring-libelle-destructive/40 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

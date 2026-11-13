import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-catalyst-input outline-offset-transparent placeholder:text-catalyst-muted-foreground focus-visible:outline-catalyst-ring aria-invalid:border-catalyst-destructive aria-invalid:outline-catalyst-destructive/20 dark:bg-catalyst-input/50 dark:aria-invalid:border-catalyst-destructive/50 dark:aria-invalid:outline-catalyst-destructive rounded-catalyst-md flex field-sizing-content min-h-16 w-full border bg-transparent px-3 py-2 text-base shadow-xs outline-offset-1 transition-[color,box-shadow] outline-none focus-visible:outline-2 focus-visible:outline-solid disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

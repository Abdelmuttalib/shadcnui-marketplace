import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-spctm-input/80 hover:border-spctm-input placeholder:text-spctm-muted-foreground focus-visible:border-spctm-primary focus-visible:outline-spctm-ring aria-invalid:border-spctm-destructive aria-invalid:outline-spctm-destructive/20 dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:outline-spctm-destructive rounded-spctm-md flex field-sizing-content min-h-16 w-full border-2 px-2.5 py-2 text-base shadow-xs outline-offset-2 transition-[color,box-shadow] outline-none focus-visible:outline-2 focus-visible:outline-solid disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

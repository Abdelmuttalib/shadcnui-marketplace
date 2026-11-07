import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-spctm-input/80 hover:border-spctm-input file:text-spctm-foreground placeholder:text-spctm-muted-foreground focus-visible:border-spctm-primary focus-visible:outline-spctm-ring aria-invalid:border-spctm-destructive aria-invalid:outline-spctm-destructive/20 dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:outline-spctm-destructive rounded-spctm-md h-8.5 w-full min-w-0 border-2 px-2.5 py-1 text-base shadow-xs outline-offset-2 transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-2 focus-visible:outline-solid disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

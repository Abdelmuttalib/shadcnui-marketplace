import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-catalyst-input file:text-catalyst-foreground placeholder:text-catalyst-muted-foreground focus-visible:outline-catalyst-ring aria-invalid:border-catalyst-destructive aria-invalid:outline-catalyst-destructive/20 bg-catalyst-input/50 dark:aria-invalid:border-catalyst-destructive/50 dark:aria-invalid:outline-catalyst-destructive rounded-catalyst-md outline-offset-transparent h-9 w-full min-w-0 border px-3 py-2 text-base shadow-xs outline-offset-1 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-2 focus-visible:outline-solid disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

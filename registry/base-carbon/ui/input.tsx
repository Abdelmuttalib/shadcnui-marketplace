import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "rounded-cb-md aria-invalid:border-cb-destructive aria-invalid:ring-cb-destructive placeholder:text-cb-muted-foreground focus-visible:ring-cb-ring focus-visible:border-cb-ring file:text-cb-foreground bg-cb-input/40 h-10 w-full min-w-0 border border-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 md:text-sm",
        "border-b-cb-foreground/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };

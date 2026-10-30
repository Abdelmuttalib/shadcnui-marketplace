import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-lucid-foreground/40 file:text-lucid-foreground placeholder:text-lucid-muted-foreground focus-visible:outline-lucid-ring aria-invalid:ring-lucid-destructive rounded-lucid-md h-9 w-full min-w-0 border bg-transparent px-2.5 py-1 text-base shadow-xs outline-offset-1 outline-transparent transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

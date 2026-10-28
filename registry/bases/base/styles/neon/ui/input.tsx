import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-neon-input file:text-neon-foreground placeholder:text-neon-muted-foreground focus-visible:ring-neon-ring aria-invalid:border-neon-destructive aria-invalid:ring-neon-destructive bg-neon-input/40 rounded-neon-md h-9 w-full min-w-0 border px-3 py-2 text-base shadow-xs ring-offset-2 ring-offset-transparent transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

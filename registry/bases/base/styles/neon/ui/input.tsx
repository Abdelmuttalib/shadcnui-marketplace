import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-neon-input outline-offset-transparent file:text-neon-foreground placeholder:text-neon-muted-foreground focus-visible:outline-neon-ring aria-invalid:border-neon-destructive aria-invalid:outline-neon-destructive bg-neon-input/40 rounded-neon-md h-9 w-full min-w-0 border px-3 py-2 text-base shadow-xs ring-offset-2 ring-offset-transparent outline-offset-2 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-2 focus-visible:outline-solid disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

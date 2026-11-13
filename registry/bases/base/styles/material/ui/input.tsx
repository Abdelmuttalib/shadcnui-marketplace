import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "bg-material-input/60 file:text-material-foreground placeholder:text-material-muted-foreground focus-visible:border-material-ring aria-invalid:border-material-destructive dark:aria-invalid:border-material-destructive/50 rounded-material-md h-10 w-full min-w-0 border-2 border-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };

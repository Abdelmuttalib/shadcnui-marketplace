"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "cn";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch focus-visible:ring-neon-ring aria-invalid:border-neon-destructive aria-invalid:ring-neon-destructive data-checked:bg-neon-primary data-unchecked:bg-neon-input rounded-neon-sm relative inline-flex shrink-0 items-center border-2 border-transparent shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 focus-visible:outline-none aria-invalid:ring-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-10 data-[size=sm]:h-4 data-[size=sm]:w-8",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-neon-background dark:data-checked:bg-neon-primary-foreground dark:data-unchecked:bg-neon-foreground rounded-neon-sm pointer-events-none block ring-0 transition-transform group-data-[size=default]/switch:h-4 group-data-[size=default]/switch:w-5 group-data-[size=sm]/switch:h-3 group-data-[size=sm]/switch:w-4 group-data-[size=default]/switch:data-checked:translate-x-4 group-data-[size=sm]/switch:data-checked:translate-x-3 group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

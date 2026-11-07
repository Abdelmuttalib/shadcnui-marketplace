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
        "peer group/switch focus-visible:outline-lucid-ring aria-invalid:border-lucid-destructive aria-invalid:ring-lucid-destructive/20 data-checked:bg-lucid-primary data-unchecked:bg-lucid-foreground/50 relative inline-flex shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:outline-2 aria-invalid:outline-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-8 data-[size=sm]:h-4 data-[size=sm]:w-6.5",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-lucid-background pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-3 group-data-[size=sm]/switch:data-checked:translate-x-2.5 group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

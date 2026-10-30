"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { CheckIcon } from "lucide-react";
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
        "peer group/switch border-libelle-primary focus-visible:border-libelle-ring focus-visible:ring-libelle-ring/50 aria-invalid:border-libelle-destructive aria-invalid:ring-libelle-destructive/20 dark:aria-invalid:border-libelle-destructive/50 dark:aria-invalid:ring-libelle-destructive/40 data-checked:bg-libelle-primary relative inline-flex shrink-0 items-center rounded-full border shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 aria-invalid:ring-3 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-6 data-[size=default]:w-11 data-[size=sm]:h-5 data-[size=sm]:w-9",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-libelle-background border-libelle-primary data-checked:bg-libelle-primary-foreground pointer-events-none block rounded-full border ring-0 transition-transform group-data-[size=default]/switch:size-6 group-data-[size=sm]/switch:size-5 group-data-[size=default]/switch:data-checked:translate-x-5 group-data-[size=sm]/switch:data-checked:translate-x-4 group-data-[size=default]/switch:data-unchecked:-translate-x-0.5 group-data-[size=sm]/switch:data-unchecked:-translate-x-px"
      />

      <CheckIcon className="text-libelle-primary absolute top-1/2 -translate-y-1/2 group-data-checked/switch:block group-data-unchecked/switch:hidden group-data-[size=default]/switch:right-0.5 group-data-[size=default]/switch:size-3.5 group-data-[size=sm]/switch:right-px group-data-[size=sm]/switch:size-3" />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
};

function NativeSelect({
  className,
  size = "default",
  ...props
}: NativeSelectProps) {
  return (
    <div
      className={cn(
        "group/native-select relative w-fit has-[select:disabled]:opacity-50",
        className
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="rounded-dft-md border-dft-input shadow-xs selection:border-dft-primary selection:border-dft-primary-foreground placeholder:border-dft-muted-foreground focus-visible:border-dft-ring focus-visible:ring-3 focus-visible:border-dft-ring/50 aria-invalid:border-dft-destructive aria-invalid:ring-3 aria-invalid:border-dft-destructive/20 dark:border-dft-input/30 dark:hover:border-dft-input/50 dark:aria-invalid:border-dft-destructive/50 dark:aria-invalid:border-dft-destructive/40 h-9 w-full min-w-0 select-none appearance-none border bg-transparent py-1 pl-2.5 pr-8 text-sm outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8"
        {...props}
      />
      <ChevronDownIcon
        className="text-dft-muted-foreground pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
      {...props}
    />
  );
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
      {...props}
    />
  );
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };

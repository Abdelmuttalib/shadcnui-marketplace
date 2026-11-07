import * as React from "react";
import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";

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
        className="rounded-cb-md selection:bg-cb-primary selection:text-cb-primary-foreground placeholder:text-cb-muted-foreground focus-visible:border-cb-ring focus-visible:ring-cb-ring aria-invalid:border-cb-destructive aria-invalid:ring-cb-destructive bg-cb-input/40 hover:bg-cb-input/50 border-b-cb-foreground/40 ring-offset-cb-background h-10 w-full min-w-0 appearance-none border border-transparent py-1 pr-8 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] outline-none select-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:ring-1 data-[size=sm]:h-8"
        {...props}
      />
      <ChevronDownIcon
        className="text-cb-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 select-none"
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

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "cn";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item rounded-dft-full border-dft-input group-has-[:focus-visible]/field-label:not-data-checked:border-dft-input focus-visible:border-dft-ring focus-visible:border-dft-ring/50 aria-invalid:border-dft-destructive aria-invalid:border-dft-destructive/20 aria-invalid:aria-checked:border-dft-primary dark:border-dft-input/30 dark:aria-invalid:border-dft-destructive/50 dark:aria-invalid:border-dft-destructive/40 data-checked:border-dft-primary data-checked:border-dft-primary data-checked:border-dft-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-dft-primary dark:data-checked:border-dft-primary peer relative flex aspect-square size-4 shrink-0 border outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-4 items-center justify-center"
      >
        <span className="rounded-dft-full text-dft-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-spectrum-ring focus-visible:ring-3 focus-visible:ring-spectrum-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-spectrum-destructive aria-invalid:ring-3 aria-invalid:ring-spectrum-destructive/20 dark:aria-invalid:border-spectrum-destructive/50 dark:aria-invalid:ring-spectrum-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-spectrum-primary text-spectrum-primary-foreground hover:bg-spectrum-primary/80",
        outline:
          "border-spectrum-border bg-spectrum-background shadow-xs hover:bg-spectrum-muted hover:text-spectrum-foreground aria-expanded:bg-spectrum-muted aria-expanded:text-spectrum-foreground dark:border-spectrum-input dark:bg-spectrum-input/30 dark:hover:bg-spectrum-input/50",
        secondary:
          "bg-spectrum-secondary text-spectrum-secondary-foreground hover:bg-[color-mix(in_oklch,var(--spectrum-secondary),var(--spectrum-foreground)_5%)] aria-expanded:bg-spectrum-secondary aria-expanded:text-spectrum-secondary-foreground",
        ghost:
          "hover:bg-spectrum-muted hover:text-spectrum-foreground aria-expanded:bg-spectrum-muted aria-expanded:text-spectrum-foreground dark:hover:bg-spectrum-muted/50",
        destructive:
          "bg-spectrum-destructive/10 text-spectrum-destructive hover:bg-spectrum-destructive/20 focus-visible:border-spectrum-destructive/40 focus-visible:ring-spectrum-destructive/20 dark:bg-spectrum-destructive/20 dark:hover:bg-spectrum-destructive/30 dark:focus-visible:ring-spectrum-destructive/40",
        link: "text-spectrum-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

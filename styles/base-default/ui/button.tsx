import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-dft-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-dft-ring focus-visible:ring-3 focus-visible:border-dft-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-dft-destructive aria-invalid:ring-3 aria-invalid:border-dft-destructive/20 dark:aria-invalid:border-dft-destructive/50 dark:aria-invalid:border-dft-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-dft-primary text-dft-primary-foreground hover:bg-dft-primary/80",
        outline:
          "border-dft-border border-dft-background shadow-xs hover:border-dft-muted hover:border-dft-foreground aria-expanded:border-dft-muted aria-expanded:border-dft-foreground dark:border-dft-input dark:border-dft-input/30 dark:hover:border-dft-input/50",
        secondary:
          "bg-dft-secondary text-dft-secondary-foreground hover:bg-[color-mix(in_oklch,var(--dft-secondary),var(--dft-foreground)_5%)] aria-expanded:bg-dft-secondary aria-expanded:text-dft-secondary-foreground",
        ghost:
          "hover:bg-dft-muted hover:bg-dft-foreground aria-expanded:bg-dft-muted aria-expanded:bg-dft-foreground dark:hover:bg-dft-muted/50",
        destructive:
          "bg-dft-destructive/10 bg-dft-destructive hover:bg-dft-destructive/20 focus-visible:bg-dft-destructive/40 focus-visible:bg-dft-destructive/20 dark:bg-dft-destructive/20 dark:hover:bg-dft-destructive/30 dark:focus-visible:bg-dft-destructive/40",
        link: "text-dft-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-dft-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-dft-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-dft-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-dft-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-dft-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-dft-md),8px)] in-data-[slot=button-group]:rounded-dft-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-dft-md),10px)] in-data-[slot=button-group]:rounded-dft-md",
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
      className={cn(
        buttonVariants({ variant, size, className }),
        "rounded-dft"
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };

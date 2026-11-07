import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-spctm-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-spctm-ring focus-visible:ring-3 focus-visible:ring-spctm-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-spctm-destructive aria-invalid:ring-3 aria-invalid:ring-spctm-destructive/20 dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:ring-spctm-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-spctm-primary text-spctm-primary-foreground hover:bg-spctm-primary/80",
        outline:
          "border-spctm-border bg-spctm-background shadow-xs hover:bg-spctm-muted hover:text-spctm-foreground aria-expanded:bg-spctm-muted aria-expanded:text-spctm-foreground dark:border-spctm-input dark:bg-spctm-input/30 dark:hover:bg-spctm-input/50",
        secondary:
          "bg-spctm-secondary text-spctm-secondary-foreground hover:bg-[color-mix(in_oklch,var(--spctm-secondary),var(--spctm-foreground)_5%)] aria-expanded:bg-spctm-secondary aria-expanded:text-spctm-secondary-foreground",
        ghost:
          "hover:bg-spctm-muted hover:text-spctm-foreground aria-expanded:bg-spctm-muted aria-expanded:text-spctm-foreground dark:hover:bg-spctm-muted/50",
        destructive:
          "bg-spctm-destructive/10 text-spctm-destructive hover:bg-spctm-destructive/20 focus-visible:border-spctm-destructive/40 focus-visible:ring-spctm-destructive/20 dark:bg-spctm-destructive/20 dark:hover:bg-spctm-destructive/30 dark:focus-visible:ring-spctm-destructive/40",
        link: "text-spctm-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-spctm-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-spctm-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-spctm-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-spctm-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-spctm-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-spctm-md),8px)] in-data-[slot=button-group]:rounded-spctm-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-spctm-md),10px)] in-data-[slot=button-group]:rounded-spctm-md",
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

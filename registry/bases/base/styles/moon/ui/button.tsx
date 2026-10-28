import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-moon-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-moon-ring focus-visible:ring-3 focus-visible:ring-moon-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-moon-destructive aria-invalid:ring-3 aria-invalid:ring-moon-destructive/20 dark:aria-invalid:border-moon-destructive/50 dark:aria-invalid:ring-moon-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-moon-primary text-moon-primary-foreground hover:bg-moon-primary/80",
        outline:
          "border-moon-border bg-moon-background shadow-xs hover:bg-moon-muted hover:text-moon-foreground aria-expanded:bg-moon-muted aria-expanded:text-moon-foreground dark:border-moon-input dark:bg-moon-input/30 dark:hover:bg-moon-input/50",
        secondary:
          "bg-moon-secondary text-moon-secondary-foreground hover:bg-[color-mix(in_oklch,var(--moon-secondary),var(--moon-foreground)_5%)] aria-expanded:bg-moon-secondary aria-expanded:text-moon-secondary-foreground",
        ghost:
          "hover:bg-moon-muted hover:text-moon-foreground aria-expanded:bg-moon-muted aria-expanded:text-moon-foreground dark:hover:bg-moon-muted/50",
        destructive:
          "bg-moon-destructive/10 text-moon-destructive hover:bg-moon-destructive/20 focus-visible:border-moon-destructive/40 focus-visible:ring-moon-destructive/20 dark:bg-moon-destructive/20 dark:hover:bg-moon-destructive/30 dark:focus-visible:ring-moon-destructive/40",
        link: "text-moon-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-moon-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-moon-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-moon-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-moon-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-moon-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-moon-md),8px)] in-data-[slot=button-group]:rounded-moon-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-moon-md),10px)] in-data-[slot=button-group]:rounded-moon-md",
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

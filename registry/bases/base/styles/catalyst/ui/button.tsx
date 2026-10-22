import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-catalyst-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-catalyst-ring focus-visible:ring-3 focus-visible:ring-catalyst-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-catalyst-destructive aria-invalid:ring-3 aria-invalid:ring-catalyst-destructive/20 dark:aria-invalid:border-catalyst-destructive/50 dark:aria-invalid:ring-catalyst-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-catalyst-primary text-catalyst-primary-foreground hover:bg-catalyst-primary/80",
        outline:
          "border-catalyst-border bg-catalyst-background shadow-xs hover:bg-catalyst-muted hover:text-catalyst-foreground aria-expanded:bg-catalyst-muted aria-expanded:text-catalyst-foreground dark:border-catalyst-input dark:bg-catalyst-input/30 dark:hover:bg-catalyst-input/50",
        secondary:
          "bg-catalyst-secondary text-catalyst-secondary-foreground hover:bg-[color-mix(in_oklch,var(--catalyst-secondary),var(--catalyst-foreground)_5%)] aria-expanded:bg-catalyst-secondary aria-expanded:text-catalyst-secondary-foreground",
        ghost:
          "hover:bg-catalyst-muted hover:text-catalyst-foreground aria-expanded:bg-catalyst-muted aria-expanded:text-catalyst-foreground dark:hover:bg-catalyst-muted/50",
        destructive:
          "bg-catalyst-destructive/10 text-catalyst-destructive hover:bg-catalyst-destructive/20 focus-visible:border-catalyst-destructive/40 focus-visible:ring-catalyst-destructive/20 dark:bg-catalyst-destructive/20 dark:hover:bg-catalyst-destructive/30 dark:focus-visible:ring-catalyst-destructive/40",
        link: "text-catalyst-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-catalyst-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-catalyst-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-catalyst-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-catalyst-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-catalyst-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-catalyst-md),8px)] in-data-[slot=button-group]:rounded-catalyst-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-catalyst-md),10px)] in-data-[slot=button-group]:rounded-catalyst-md",
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

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-wedges-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-wedges-ring focus-visible:ring-3 focus-visible:ring-wedges-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-wedges-destructive aria-invalid:ring-3 aria-invalid:ring-wedges-destructive/20 dark:aria-invalid:border-wedges-destructive/50 dark:aria-invalid:ring-wedges-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-wedges-primary text-wedges-primary-foreground hover:bg-wedges-primary/80",
        outline:
          "border-wedges-border bg-wedges-background shadow-xs hover:bg-wedges-muted hover:text-wedges-foreground aria-expanded:bg-wedges-muted aria-expanded:text-wedges-foreground dark:border-wedges-input dark:bg-wedges-input/30 dark:hover:bg-wedges-input/50",
        secondary:
          "bg-wedges-secondary text-wedges-secondary-foreground hover:bg-[color-mix(in_oklch,var(--wedges-secondary),var(--wedges-foreground)_5%)] aria-expanded:bg-wedges-secondary aria-expanded:text-wedges-secondary-foreground",
        ghost:
          "hover:bg-wedges-muted hover:text-wedges-foreground aria-expanded:bg-wedges-muted aria-expanded:text-wedges-foreground dark:hover:bg-wedges-muted/50",
        destructive:
          "bg-wedges-destructive/10 text-wedges-destructive hover:bg-wedges-destructive/20 focus-visible:border-wedges-destructive/40 focus-visible:ring-wedges-destructive/20 dark:bg-wedges-destructive/20 dark:hover:bg-wedges-destructive/30 dark:focus-visible:ring-wedges-destructive/40",
        link: "text-wedges-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-wedges-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-wedges-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-wedges-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-wedges-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-wedges-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-wedges-md),8px)] in-data-[slot=button-group]:rounded-wedges-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-wedges-md),10px)] in-data-[slot=button-group]:rounded-wedges-md",
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

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-snow-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-snow-ring focus-visible:ring-3 focus-visible:ring-snow-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-snow-destructive aria-invalid:ring-3 aria-invalid:ring-snow-destructive/20 dark:aria-invalid:border-snow-destructive/50 dark:aria-invalid:ring-snow-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-snow-primary text-snow-primary-foreground hover:bg-snow-primary/80",
        outline:
          "border-snow-border bg-snow-background shadow-xs hover:bg-snow-muted hover:text-snow-foreground aria-expanded:bg-snow-muted aria-expanded:text-snow-foreground dark:border-snow-input dark:bg-snow-input/30 dark:hover:bg-snow-input/50",
        secondary:
          "bg-snow-secondary text-snow-secondary-foreground hover:bg-[color-mix(in_oklch,var(--snow-secondary),var(--snow-foreground)_5%)] aria-expanded:bg-snow-secondary aria-expanded:text-snow-secondary-foreground",
        ghost:
          "hover:bg-snow-muted hover:text-snow-foreground aria-expanded:bg-snow-muted aria-expanded:text-snow-foreground dark:hover:bg-snow-muted/50",
        destructive:
          "bg-snow-destructive/10 text-snow-destructive hover:bg-snow-destructive/20 focus-visible:border-snow-destructive/40 focus-visible:ring-snow-destructive/20 dark:bg-snow-destructive/20 dark:hover:bg-snow-destructive/30 dark:focus-visible:ring-snow-destructive/40",
        link: "text-snow-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-snow-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-snow-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-snow-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-snow-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-snow-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-snow-md),8px)] in-data-[slot=button-group]:rounded-snow-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-snow-md),10px)] in-data-[slot=button-group]:rounded-snow-md",
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

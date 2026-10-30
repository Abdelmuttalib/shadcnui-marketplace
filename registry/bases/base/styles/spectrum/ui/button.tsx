import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent rounded-full bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-2 outline-transparent outline-offset-1 select-none focus-visible:outline-2 focus-visible:outline-spctm-ring active:not-aria-[haspopup]:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-spctm-destructive aria-invalid:outline-2 aria-invalid:outline-spctm-destructive/20 dark:aria-invalid:outline-spctm-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
          "bg-spctm-destructive/10 text-spctm-destructive hover:bg-spctm-destructive/20 focus-visible:border-spctm-destructive/40 focus-visible:outline-spctm-destructive/20 dark:bg-spctm-destructive/20 dark:hover:bg-spctm-destructive/30 dark:focus-visible:outline-spctm-destructive/40",
        link: "text-spctm-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8.5 gap-1.5 px-4 in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-7 gap-1 rounded-full px-4 text-xs in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-full px-4 in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        lg: "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-spctm-md),8px)] in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-spctm-md),10px)] in-data-[slot=button-group]:rounded-full",
        "icon-lg": "size-9",
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

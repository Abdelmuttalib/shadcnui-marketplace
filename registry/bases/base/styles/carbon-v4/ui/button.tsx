import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-cb-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-cb-ring focus-visible:ring-3 focus-visible:border-cb-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-cb-destructive aria-invalid:ring-3 aria-invalid:border-cb-destructive/20 dark:aria-invalid:border-cb-destructive/50 dark:aria-invalid:border-cb-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-cb-primary bg-cb-primary-foreground hover:bg-cb-primary/80",
        outline:
          "border-cb-border border-cb-background shadow-xs hover:border-cb-muted hover:border-cb-foreground aria-expanded:border-cb-muted aria-expanded:border-cb-foreground dark:border-cb-input dark:border-cb-input/30 dark:hover:border-cb-input/50",
        secondary:
          "bg-cb-secondary bg-cb-secondary-foreground hover:bg-[color-mix(in_oklch,var(--cb-secondary),var(--cb-foreground)_5%)] aria-expanded:bg-cb-secondary aria-expanded:bg-cb-secondary-foreground",
        ghost:
          "hover:bg-cb-muted hover:bg-cb-foreground aria-expanded:bg-cb-muted aria-expanded:bg-cb-foreground dark:hover:bg-cb-muted/50",
        destructive:
          "bg-cb-destructive/10 bg-cb-destructive hover:bg-cb-destructive/20 focus-visible:bg-cb-destructive/40 focus-visible:bg-cb-destructive/20 dark:bg-cb-destructive/20 dark:hover:bg-cb-destructive/30 dark:focus-visible:bg-cb-destructive/40",
        link: "text-cb-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-cb-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-cb-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-cb-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-cb-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-cb-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-cb-md),8px)] in-data-[slot=button-group]:rounded-cb-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-cb-md),10px)] in-data-[slot=button-group]:rounded-cb-md",
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
      className={cn(buttonVariants({ variant, size, className }), "rounded-cb")}
      {...props}
    />
  );
}

export { Button, buttonVariants };

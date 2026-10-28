import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-linear-md bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-linear-ring focus-visible:ring-offset-1 ring-offset-linear-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-linear-destructive/60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-linear-primary text-linear-primary-foreground hover:bg-linear-primary/80",
        outline:
          "border border-linear-input bg-linear-background shadow-sm hover:bg-linear-muted hover:text-linear-foreground aria-expanded:bg-linear-muted aria-expanded:text-linear-foreground dark:bg-linear-input/30 dark:hover:bg-linear-input/50",
        secondary:
          "bg-linear-secondary text-linear-secondary-foreground hover:bg-[color-mix(in_oklch,var(--linear-secondary),var(--linear-foreground)_5%)] aria-expanded:bg-linear-secondary aria-expanded:text-linear-secondary-foreground",
        ghost:
          "hover:bg-linear-muted hover:text-linear-foreground aria-expanded:bg-linear-muted aria-expanded:text-linear-foreground dark:hover:bg-linear-muted/50",
        destructive:
          "bg-linear-destructive text-linear-destructive hover:bg-linear-destructive/90 focus-visible:ring-linear-destructive",
        link: "text-linear-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 in-data-[slot=button-group]:rounded-linear-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-linear-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-linear-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-linear-md),10px)] px-2 in-data-[slot=button-group]:rounded-linear-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-linear-md),8px)] in-data-[slot=button-group]:rounded-linear-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-linear-md),10px)] in-data-[slot=button-group]:rounded-linear-md",
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

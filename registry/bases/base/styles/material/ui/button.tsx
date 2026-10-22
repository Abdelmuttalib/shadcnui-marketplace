import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-material-ring focus-visible:ring-3 focus-visible:ring-material-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-material-destructive aria-invalid:ring-3 aria-invalid:ring-material-destructive/20 dark:aria-invalid:border-material-destructive/50 dark:aria-invalid:ring-material-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-material-primary text-material-primary-foreground hover:bg-material-primary/80",
        outline:
          "border-material-border bg-material-background shadow-xs hover:bg-material-muted hover:text-material-foreground aria-expanded:bg-material-muted aria-expanded:text-material-foreground dark:border-material-input dark:bg-material-input/30 dark:hover:bg-material-input/50",
        secondary:
          "bg-material-secondary text-material-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-material-secondary aria-expanded:text-material-secondary-foreground",
        ghost:
          "hover:bg-material-muted hover:text-material-foreground aria-expanded:bg-material-muted aria-expanded:text-material-foreground dark:hover:bg-material-muted/50",
        destructive:
          "bg-material-destructive/10 text-material-destructive hover:bg-material-destructive/20 focus-visible:border-material-destructive/40 focus-visible:ring-material-destructive/20 dark:bg-material-destructive/20 dark:hover:bg-material-destructive/30 dark:focus-visible:ring-material-destructive/40",
        link: "text-material-primary underline-offset-4 hover:underline",
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

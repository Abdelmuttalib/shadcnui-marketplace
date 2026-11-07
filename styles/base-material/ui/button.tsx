import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-material-ring focus-visible:ring-3 focus-visible:ring-material-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-material-destructive aria-invalid:ring-3 aria-invalid:ring-material-destructive/20 dark:aria-invalid:border-material-destructive/50 dark:aria-invalid:ring-material-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-material-primary text-material-primary-foreground hover:bg-material-primary/80",
        outline:
          "border border-material-border bg-material-background shadow-xs hover:bg-material-secondary hover:text-material-secondary-foreground aria-expanded:bg-material-secondary aria-expanded:text-material-secondary-foreground",
        secondary:
          "bg-material-secondary text-material-secondary-foreground hover:bg-[color-mix(in_oklch,var(--material-secondary),var(--material-foreground)_5%)] aria-expanded:bg-material-secondary aria-expanded:text-material-secondary-foreground hover:bg-material-secondary/80",
        ghost:
          "hover:bg-material-secondary hover:text-material-secondary-foreground aria-expanded:bg-material-secondary aria-expanded:text-material-secondary-foreground",
        destructive:
          "bg-material-destructive text-material-destructive-foreground hover:bg-material-destructive/80 focus-visible:ring-material-destructive/20",
        link: "text-material-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-5 in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-7 gap-1 rounded-full px-2.5 text-xs in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 rounded-full px-4 in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-11 gap-1.5 px-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-10",
        "icon-xs":
          "size-7 rounded-full in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-9 rounded-full in-data-[slot=button-group]:rounded-full",
        "icon-lg": "size-11",
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

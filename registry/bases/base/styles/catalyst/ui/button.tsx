import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-catalyst-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none outline-offset-transparent aria-invalid:outline-solid focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-catalyst-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-catalyst-destructive aria-invalid:outline-2 aria-invalid:outline-catalyst-destructive dark:aria-invalid:border-catalyst-destructive/50 dark:aria-invalid:outline-catalyst-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-catalyst-primary text-catalyst-primary-foreground hover:bg-catalyst-primary/80",
        outline:
          "border-catalyst-input shadow-xs hover:bg-catalyst-muted hover:text-catalyst-foreground aria-expanded:bg-catalyst-muted aria-expanded:text-catalyst-foreground",
        secondary:
          "bg-catalyst-secondary text-catalyst-secondary-foreground hover:bg-[color-mix(in_oklch,var(--catalyst-secondary),var(--catalyst-foreground)_5%)] aria-expanded:bg-catalyst-secondary aria-expanded:text-catalyst-secondary-foreground",
        ghost:
          "hover:bg-catalyst-muted hover:text-catalyst-foreground aria-expanded:bg-catalyst-muted aria-expanded:text-catalyst-foreground dark:hover:bg-catalyst-muted/50",
        destructive:
          "bg-catalyst-destructive text-catalyst-destructive-foregroundd hover:bg-catalyst-destructive/80",
        link: "text-catalyst-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 in-data-[slot=button-group]:rounded-catalyst-md has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-7 gap-1 rounded-[min(var(--radius-catalyst-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-catalyst-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-catalyst-md),10px)] px-2 in-data-[slot=button-group]:rounded-catalyst-md has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1",
        lg: "h-10 gap-1.5 px-5 has-data-[icon=inline-end]:pr-4.5 has-data-[icon=inline-start]:pl-4.5",
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

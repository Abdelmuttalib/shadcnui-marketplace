import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-cb-md  bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-100 ease-in-out outline-none select-none focus-visible:outline-none focus:ring-1 focus:ring-cb-background focus:ring-offset-2 focus:ring-offset-cb-ring ring-inset ring-offset-cb-background focus-visible:ring-1 focus-visible:ring-cb-background focus-visible:ring-offset-cb-ring focus-visible:ring-transparent active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-cb-destructive aria-invalid:ring-3 aria-invalid:ring-cb-destructive/20 dark:aria-invalid:border-cb-destructive/50 dark:aria-invalid:ring-cb-destructive/40 dark:focus-visible:ring-offset-1 dark:focus:ring-offset-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-cb-primary text-cb-primary-foreground hover:bg-cb-primary/90",
        outline:
          "border border-cb-border shadow-xs hover:bg-cb-accent hover:text-cb-accent-foreground aria-expanded:bg-cb-accent aria-expanded:text-cb-foreground [&_svg]:hover:text-cb-accent-foreground",
        secondary:
          "border border-cb-border bg-cb-secondary text-cb-secondary-foreground hover:bg-[color-mix(in_oklch,var(--cb-secondary),var(--cb-foreground)_5%)] aria-expanded:bg-cb-secondary aria-expanded:text-cb-secondary-foreground",
        // secondary hover:bg-cb-secondary/80
        ghost:
          "hover:bg-cb-accent hover:text-cb-accent-foreground aria-expanded:bg-cb-accent aria-expanded:text-cb-accent-foreground",
        destructive:
          "bg-cb-destructive text-cb-destructive-foreground hover:bg-cb-destructive/90",
        link: "text-cb-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-4 in-data-[slot=button-group]:rounded-cb-md has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-7 gap-1 rounded-[min(var(--radius-cb-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-cb-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 rounded-[min(var(--radius-cb-md),10px)] px-3 in-data-[slot=button-group]:rounded-cb-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-11 gap-1.5 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-10",
        "icon-xs":
          "size-7 rounded-[min(var(--radius-cb-md),8px)] in-data-[slot=button-group]:rounded-cb-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-9 rounded-[min(var(--radius-cb-md),10px)] in-data-[slot=button-group]:rounded-cb-md",
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

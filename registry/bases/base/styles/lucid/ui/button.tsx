import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lucid-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-lucid-ring focus-visible:ring-3 focus-visible:ring-lucid-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-lucid-destructive aria-invalid:ring-3 aria-invalid:ring-lucid-destructive/20 dark:aria-invalid:border-lucid-destructive/50 dark:aria-invalid:ring-lucid-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-lucid-primary text-lucid-primary-foreground hover:bg-lucid-primary/80",
        outline:
          "border-lucid-border bg-lucid-background shadow-xs hover:bg-lucid-muted hover:text-lucid-foreground aria-expanded:bg-lucid-muted aria-expanded:text-lucid-foreground dark:border-lucid-input dark:bg-lucid-input/30 dark:hover:bg-lucid-input/50",
        secondary:
          "bg-lucid-secondary text-lucid-secondary-foreground hover:bg-[color-mix(in_oklch,var(--lucid-secondary),var(--lucid-foreground)_5%)] aria-expanded:bg-lucid-secondary aria-expanded:text-lucid-secondary-foreground",
        ghost:
          "hover:bg-lucid-muted hover:text-lucid-foreground aria-expanded:bg-lucid-muted aria-expanded:text-lucid-foreground dark:hover:bg-lucid-muted/50",
        destructive:
          "bg-lucid-destructive/10 text-lucid-destructive hover:bg-lucid-destructive/20 focus-visible:border-lucid-destructive/40 focus-visible:ring-lucid-destructive/20 dark:bg-lucid-destructive/20 dark:hover:bg-lucid-destructive/30 dark:focus-visible:ring-lucid-destructive/40",
        link: "text-lucid-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-lucid-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-lucid-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-lucid-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-lucid-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-lucid-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-lucid-md),8px)] in-data-[slot=button-group]:rounded-lucid-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-lucid-md),10px)] in-data-[slot=button-group]:rounded-lucid-md",
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

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 ring-offset-2 ring-offset-transparent items-center justify-center rounded-neon-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-neon-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-neon-destructive aria-invalid:ring-2 aria-invalid:ring-neon-destructive   [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-neon-primary text-neon-primary-foreground hover:bg-neon-primary/80",
        outline:
          "border-neon-border bg-neon-background shadow-xs hover:bg-neon-muted hover:text-neon-foreground aria-expanded:bg-neon-muted aria-expanded:text-neon-foreground dark:border-neon-input bg-neon-input/40 dark:hover:bg-neon-input/50",
        secondary:
          "bg-neon-secondary text-neon-secondary-foreground hover:bg-[color-mix(in_oklch,var(--neon-secondary),var(--neon-foreground)_5%)] aria-expanded:bg-neon-secondary aria-expanded:text-neon-secondary-foreground",
        ghost:
          "hover:bg-neon-muted hover:text-neon-foreground aria-expanded:bg-neon-muted aria-expanded:text-neon-foreground dark:hover:bg-neon-muted/50",
        destructive:
          "bg-neon-destructive/10 text-neon-destructive hover:bg-neon-destructive/20 focus-visible:border-neon-destructive/40 focus-visible:ring-neon-destructive/20 dark:bg-neon-destructive/20 dark:hover:bg-neon-destructive/30 dark:focus-visible:ring-neon-destructive/40",
        link: "text-neon-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-neon-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-neon-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-neon-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-neon-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-neon-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-neon-md),8px)] in-data-[slot=button-group]:rounded-neon-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-neon-md),10px)] in-data-[slot=button-group]:rounded-neon-md",
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

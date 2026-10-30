import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-libelle-md border border-transparent bg-clip-padding text-base whitespace-nowrap transition-all outline-none select-none focus-visible:border-libelle-ring focus-visible:ring-3 focus-visible:ring-libelle-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-libelle-destructive aria-invalid:ring-3 aria-invalid:ring-libelle-destructive/20 dark:aria-invalid:border-libelle-destructive/50 dark:aria-invalid:ring-libelle-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-libelle-primary text-libelle-primary-foreground hover:bg-libelle-primary/80",
        outline:
          "border-libelle-primary text-libelle-primary shadow-xs hover:bg-libelle-muted hover:text-libelle-foreground aria-expanded:bg-libelle-muted aria-expanded:text-libelle-foreground",
        secondary:
          "bg-libelle-secondary text-libelle-secondary-foreground hover:bg-[color-mix(in_oklch,var(--libelle-secondary),var(--libelle-foreground)_5%)] aria-expanded:bg-libelle-secondary/80 aria-expanded:text-libelle-secondary-foreground hover:bg-libelle-secondary/80",
        ghost:
          "hover:bg-libelle-muted hover:text-libelle-foreground aria-expanded:bg-libelle-muted aria-expanded:text-libelle-foreground dark:hover:bg-libelle-muted/50",
        destructive:
          "border-destructive/30 bg-libelle-destructive/15 text-libelle-destructive hover:bg-libelle-destructive/35 focus-visible:border-libelle-destructive/40 focus-visible:ring-libelle-destructive/20 dark:bg-libelle-destructive/20 dark:hover:bg-libelle-destructive/30 dark:focus-visible:ring-libelle-destructive/40",
        link: "text-libelle-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-4 in-data-[slot=button-group]:rounded-libelle-md has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-7 gap-1 rounded-[min(var(--radius-libelle-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-libelle-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3 text-sm",
        sm: "h-9 gap-1 rounded-[min(var(--radius-libelle-md),10px)] px-3 in-data-[slot=button-group]:rounded-libelle-md has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        lg: "h-11 gap-1.5 px-4.5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-10",
        "icon-xs":
          "size-7 rounded-[min(var(--radius-libelle-md),8px)] in-data-[slot=button-group]:rounded-libelle-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-9 rounded-[min(var(--radius-libelle-md),10px)] in-data-[slot=button-group]:rounded-libelle-md",
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

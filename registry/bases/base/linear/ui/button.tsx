import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-linear-md text-sm font-medium ring-offset-linear-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linear-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-linear-primary text-linear-primary-foreground hover:bg-linear-primary/90",
        destructive:
          "bg-linear-destructive text-linear-destructive-foreground hover:bg-linear-destructive/90",
        outline:
          "border border-linear-input bg-linear-background hover:bg-linear-muted hover:text-linear-accent-foreground shadow-sm dark:bg-linear-accent/70 shadow-sm",
        secondary:
          "bg-linear-secondary text-linear-secondary-foreground hover:bg-linear-secondary/80",
        ghost: "hover:bg-linear-accent hover:text-linear-accent-foreground",
        link: "text-linear-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-3.5",
        sm: "h-8 px-2.5",
        lg: "h-10 px-5",
        icon: "h-9 w-9",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-catalyst-md text-sm font-semibold ring-offset-catalyst-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-catalyst-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-catalyst-primary text-catalyst-primary-foreground hover:bg-catalyst-primary/90",
        destructive:
          "bg-catalyst-destructive text-catalyst-destructive-foreground hover:bg-catalyst-destructive/90",
        outline:
          "border border-catalyst-input hover:bg-catalyst-secondary hover:text-catalyst-secondary-foreground shadow-sm",
        secondary:
          "bg-catalyst-secondary text-catalyst-secondary-foreground hover:bg-catalyst-secondary/80",
        ghost: "hover:bg-catalyst-accent hover:text-catalyst-accent-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-8 rounded-catalyst-md px-2",
        lg: "h-10 rounded-catalyst-md px-7",
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
        className={cn(buttonVariants({ variant, size, className }), "")}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

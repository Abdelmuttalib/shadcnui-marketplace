import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-spctm-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spctm-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-spctm-primary text-spctm-primary-foreground hover:bg-spctm-primary/90",
        destructive:
          "bg-spctm-destructive text-spctm-destructive-foreground hover:bg-spctm-destructive/90",
        outline:
          "border border-spctm-input text-spctm-foreground hover:bg-spctm-accent hover:text-spctm-accent-foreground",
        secondary:
          "bg-spctm-secondary text-spctm-secondary-foreground hover:bg-spctm-secondary/80",
        ghost: "hover:bg-spctm-accent hover:text-spctm-accent-foreground",
        link: "text-spctm-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-4 py-1.5",
        sm: "h-7 px-2.5",
        lg: "h-9 px-6",
        icon: "h-8 w-8",
        "icon-sm": "h-7 w-7 [&_svg]:size-3.5",
        "icon-lg": "h-9 w-9",
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

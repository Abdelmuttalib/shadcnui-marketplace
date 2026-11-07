import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-snow-md text-sm font-medium ring-offset-snow-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ring  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-snow-primary text-snow-primary-foreground hover:bg-snow-primary/90",
        destructive:
          "bg-snow-destructive text-snow-destructive-foreground hover:bg-snow-destructive/90",
        outline:
          "border border-snow-input bg-snow-background hover:bg-snow-accent hover:text-snow-accent-foreground",
        secondary:
          "bg-snow-secondary text-snow-secondary-foreground hover:bg-snow-secondary/80",
        ghost: "hover:bg-snow-accent hover:text-snow-accent-foreground",
        link: "text-snow-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-snow-sm px-3",
        lg: "h-10 rounded-snow-lg px-8",
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

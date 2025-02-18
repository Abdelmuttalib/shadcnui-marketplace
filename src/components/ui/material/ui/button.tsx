import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-material-md text-sm font-medium ring-offset-material-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-material-ring/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-material-primary text-material-primary-foreground hover:bg-material-primary/90",
        destructive:
          "bg-material-destructive text-material-destructive-foreground hover:bg-material-destructive/90",
        outline:
          "border hover:bg-material-secondary hover:text-secondary-foreground",
        secondary:
          "bg-material-secondary text-secondary-foreground hover:bg-material-secondary/80",
        ghost: "hover:bg-material-secondary hover:text-secondary-foreground",
        link: "text-material-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-material-md px-3",
        lg: "h-11 rounded-material-md px-8",
        icon: "h-10 w-10",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-11 w-11",
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

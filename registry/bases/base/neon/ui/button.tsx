import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-neon-md text-sm font-medium ring-offset-neon-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-neon-primary text-neon-primary-foreground hover:bg-neon-primary/90",
        destructive:
          "bg-neon-destructive text-neon-destructive-foreground hover:bg-neon-destructive/90",
        outline:
          "border border-neon-input bg-neon-background hover:bg-neon-accent hover:text-neon-accent-foreground",
        secondary:
          "bg-neon-secondary text-neon-secondary-foreground hover:bg-neon-secondary/80",
        ghost: "hover:bg-neon-accent hover:text-neon-accent-foreground",
        link: "text-neon-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-3.5 py-2",
        sm: "h-8 px-2.5",
        lg: "h-10 px-6",
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

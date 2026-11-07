import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-wedges-md text-sm font-medium transition-colors ring-offset-1 ring-offset-wedges-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedges-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-wedges-primary text-wedges-primary-foreground hover:bg-wedges-primary/90",
        destructive:
          "bg-wedges-destructive text-wedges-destructive-foreground hover:bg-wedges-destructive/90",
        outline:
          "border border-wedges-border hover:bg-wedges-accent/50 hover:text-wedges-accent-foreground",
        secondary:
          "bg-wedges-secondary text-wedges-secondary-foreground hover:bg-wedges-secondary/80",
        ghost: "hover:bg-wedges-accent/50 hover:text-wedges-accent-foreground",
        link: "text-wedges-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-9 rounded-wedges-md px-3",
        lg: "h-10 rounded-wedges-md px-8",
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

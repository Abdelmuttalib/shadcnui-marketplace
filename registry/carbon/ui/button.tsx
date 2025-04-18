import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-cb-md text-sm font-medium ring-offset-cb-background transition-colors focus-visible:outline-none ring-inset disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-100 ease-in-out focus-visible:ring-2 focus-visible:ring-transparent focus:ring-1 focus-visible:ring-1 focus:ring-offset-2 focus-visible:ring-offset-2 dark:focus:ring-offset-1 dark:focus-visible:ring-offset-1 focus:ring-cb-background focus-visible:ring-cb-background focus:ring-offset-cb-ring focus-visible:ring-offset-cb-ring",
  {
    variants: {
      variant: {
        default:
          "bg-cb-primary text-cb-primary-foreground hover:bg-cb-primary/90",
        destructive:
          "bg-cb-destructive text-cb-destructive-foreground hover:bg-cb-destructive/90",
        outline:
          "border border-cb-border hover:bg-cb-accent hover:text-cb-accent-foreground [&_svg]:hover:text-cb-accent-foreground",
        secondary:
          "border border-cb-border bg-cb-secondary text-cb-secondary-foreground hover:bg-cb-secondary/80",
        ghost: "hover:bg-cb-accent hover:text-cb-accent-foreground",
        link: "text-cb-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-cb-md px-3",
        lg: "h-11 rounded-cb-md px-8",
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

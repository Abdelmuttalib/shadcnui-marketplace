import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-moon-md text-sm font-medium ring-offset-moon-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moon-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-moon-primary text-moon-primary-foreground hover:bg-moon-primary/90",
        destructive:
          "bg-moon-destructive text-moon-destructive-foreground hover:bg-moon-destructive/90",
        outline:
          "border border-moon-input hover:bg-moon-accent hover:text-moon-accent-foreground",
        secondary:
          "bg-moon-secondary text-moon-secondary-foreground hover:bg-moon-secondary/80",
        ghost: "hover:bg-moon-accent hover:text-moon-accent-foreground",
        link: "text-moon-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-moon-md px-3",
        lg: "h-11 rounded-moon-md px-8",
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

export interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      iconLeft,
      iconRight,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : Link;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          "inline-flex items-center justify-center gap-x-1.5":
            iconLeft || iconRight,
        })}
        ref={ref}
        {...props}
      >
        <>
          {iconLeft ? <>{iconLeft}</> : null}
          <>{props.children}</>
          {iconRight ? <>{iconRight}</> : null}
        </>
      </Comp>
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonVariants };

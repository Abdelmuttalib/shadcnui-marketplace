import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lucid-md text-sm border font-medium ring-offset-lucid-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lucid-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-lucid-primary text-lucid-primary-foreground hover:bg-lucid-primary/90 border-lucid-primary/30",
        destructive:
          "bg-lucid-destructive text-lucid-destructive-foreground hover:bg-lucid-destructive/90 border-lucid-destructive/20",
        outline:
          "border border-lucid-border hover:bg-lucid-accent hover:text-lucid-accent-foreground",
        secondary:
          "border border-lucid-input bg-lucid-secondary text-lucid-secondary-foreground hover:bg-lucid-secondary/80",
        ghost:
          "border-transparent hover:bg-lucid-accent hover:text-lucid-accent-foreground",
        link: "border-transparent text-lucid-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-2.5 py-2",
        sm: "h-8 px-2",
        lg: "h-10 px-8",
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

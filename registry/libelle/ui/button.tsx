import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-libelle-md text-base ring-offset-libelle-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-libelle-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-libelle-primary text-libelle-primary-foreground hover:bg-libelle-primary/90",
        destructive:
          "border border-destructive/30 bg-libelle-destructive/15 text-libelle-destructive hover:bg-libelle-destructive/35",
        outline:
          "border border-libelle-primary text-libelle-primary hover:bg-libelle-accent hover:text-libelle-accent-foreground",
        secondary:
          "bg-libelle-secondary text-libelle-secondary-foreground hover:bg-libelle-secondary/80",
        ghost: "hover:bg-libelle-accent hover:text-libelle-accent-foreground",
        link: "text-libelle-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-libelle-md px-3",
        lg: "h-11 rounded-libelle-md px-8",
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
      ></Comp>
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

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ease-in-out duration-100 transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 outline-transparent focus-visible:ring focus-visible:ring-primary/30 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring focus:ring-primary/30 focus:outline-none",
        // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-primary-200
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 outline-transparent focus-visible:ring focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/50 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring focus:ring-destructive/30 dark:focus:ring-destructive/50 focus:outline-none",
        "destructive-outline":
          "bg-transparent text-destructive hover:bg-destructive/10 outline-transparent border border-destructive focus-visible:ring focus-visible:ring-destructive/30 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring focus:ring-destructive/30 focus:outline-none",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground outline-transparent focus-visible:ring focus-visible:ring-primary/30 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring focus:ring-primary/30 focus:outline-none shadow-sm focus:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 outline-transparent focus-visible:ring focus-visible:ring-primary/30 focus-visible:outline-none focus:ring focus:ring-primary/30 focus:outline-none ring-offset-1 ring-offset-transparent focus:ring-offset-primary focus-visible:ring-offset-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-8 px-3",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
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
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          "inline-flex items-center justify-center gap-x-2":
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

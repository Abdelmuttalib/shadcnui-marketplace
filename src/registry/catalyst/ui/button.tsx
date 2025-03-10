import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-catalyst-md text-sm font-semibold ring-offset-catalyst-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-catalyst-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-catalyst-primary text-catalyst-primary-foreground hover:bg-catalyst-primary/90 shadow-[inset_0_2px_oklch(var(--catalyst-color-gray-600))] dark:shadow-[inset_0_1px_oklch(var(--catalyst-color-gray-500))] border border-catalyst-primary/60",
        destructive:
          "bg-catalyst-destructive text-catalyst-destructive-foreground hover:bg-catalyst-destructive/90",
        outline:
          "border border-catalyst-input hover:bg-catalyst-muted hover:text-catalyst-accent-foreground shadow-sm",
        secondary:
          "bg-catalyst-muted text-secondary-foreground hover:bg-catalyst-secondary/80",
        ghost: "hover:bg-catalyst-accent hover:text-catalyst-accent-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-8 rounded-catalyst-md px-2",
        lg: "h-10 rounded-catalyst-md px-7",
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
        className={cn(buttonVariants({ variant, size, className }), "")}
        ref={ref}
        style={
          {
            // boxShadow:
            // "0 -1px 0 0 #ff0000, " + // Red border on top
            // "-1px -1px 0 0 #00ff00, " + // Green border on top-left corner
            // "1px -1px 0 0 #0000ff", // Blue border on top-right corner
            // ["--tw-shadow"]:
            //   "inset 0 1px var(--tw-shadow-color), oklab(100% 0 5.96046e-8 / 0.5)",
            // boxShadow:
            //   "0 -1px 6px -2px rgba(0, 0, 0, 0.1), -4px -4px 6px -2px rgba(0, 0, 0, 0.1), 4px -4px 6px -2px rgba(0, 0, 0, 0.1)",
          }
        }
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

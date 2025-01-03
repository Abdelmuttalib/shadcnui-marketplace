import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import React from "react";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 ease-in-out duration-100 transition-all flex-shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 outline-transparent focus-visible:ring focus-visible:ring-primary/30 dark:focus-visible:ring-primary/50 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring focus:ring-primary/30 dark:focus:ring-primary/50 focus:outline-none",
        // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-primary-200
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 outline-transparent focus-visible:ring focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/50 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring focus:ring-destructive/30 dark:focus:ring-destructive/50 focus:outline-none",

        "destructive-outline":
          "bg-transparent text-destructive hover:bg-destructive/10 outline-transparent border border-destructive focus-visible:ring focus-visible:ring-destructive/30 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring focus:ring-destructive/30 focus:outline-none",

        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground outline-transparent focus-visible:ring focus-visible:ring-primary/30 dark:focus-visible:ring-primary/50 focus:border-primary focus-visible:border-primary focus-visible:outline-none focus:ring focus:ring-primary/30 dark:focus:ring-primary/50 focus:outline-none shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 outline-transparent focus-visible:ring focus-visible:ring-primary/30 dark:focus-visible:ring-primary/50 focus:ring-offset-1 focus-visible:ring-offset-1 focus:ring-offset-primary focus-visible:ring-offset-primary focus-visible:outline-none focus:ring focus:ring-primary/30 dark:focus:ring-primary/50 focus:outline-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "w-10 h-10",
        xs: "w-8 h-8",
        sm: "w-9 h-9",
        lg: "w-11 h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  className?: string;
}

const IconButton = ({
  className,
  variant,
  size,
  type,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type ?? "button"}
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

interface IconLinkProps
  extends LinkProps,
    VariantProps<typeof iconButtonVariants> {
  className?: string;
  children: React.ReactNode;
  newTab?: boolean;
}

const IconLink = ({
  className,
  variant,
  size,
  children,
  newTab,
  ...props
}: IconLinkProps) => {
  return (
    <Link
      // href={href}
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
};

export {
  IconButton,
  IconLink,
  iconButtonVariants,
  type IconButtonProps,
  type IconLinkProps,
};

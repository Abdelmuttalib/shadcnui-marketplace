"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        // @ts-expect-error - TODO: fix types
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-spctm-background group-[.toaster]:text-spctm-foreground group-[.toaster]:border-spctm-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-spctm-muted-foreground",
          actionButton:
            "group-[.toast]:bg-spctm-primary group-[.toast]:text-spctm-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-spctm-muted group-[.toast]:text-spctm-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

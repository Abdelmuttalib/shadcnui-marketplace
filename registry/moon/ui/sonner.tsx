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
            "group toast group-[.toaster]:bg-moon-background group-[.toaster]:text-moon-foreground group-[.toaster]:border-moon-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-moon-muted-foreground",
          actionButton:
            "group-[.toast]:bg-moon-primary group-[.toast]:text-moon-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-moon-muted group-[.toast]:text-moon-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

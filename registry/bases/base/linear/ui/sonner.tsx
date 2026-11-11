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
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-linear-background group-[.toaster]:text-linear-foreground group-[.toaster]:border-linear-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-linear-muted-foreground",
          actionButton:
            "group-[.toast]:bg-linear-primary group-[.toast]:text-linear-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-linear-muted group-[.toast]:text-linear-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

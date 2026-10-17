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
            "group toast group-[.toaster]:bg-lucid-background group-[.toaster]:text-lucid-foreground group-[.toaster]:border-lucid-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-lucid-muted-foreground",
          actionButton:
            "group-[.toast]:bg-lucid-primary group-[.toast]:text-lucid-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-lucid-muted group-[.toast]:text-lucid-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

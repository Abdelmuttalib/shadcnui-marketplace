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
            "group toast group-[.toaster]:bg-wedges-background group-[.toaster]:text-wedges-foreground group-[.toaster]:border-wedges-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-wedges-muted-foreground",
          actionButton:
            "group-[.toast]:bg-wedges-primary group-[.toast]:text-wedges-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-wedges-muted group-[.toast]:text-wedges-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

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
            "group toast group-[.toaster]:bg-snow-background group-[.toaster]:text-snow-foreground group-[.toaster]:border-snow-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-snow-muted-foreground",
          actionButton:
            "group-[.toast]:bg-snow-primary group-[.toast]:text-snow-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-snow-muted group-[.toast]:text-snow-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

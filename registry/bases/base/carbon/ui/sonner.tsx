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
            "group toast group-[.toaster]:bg-cb-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-cb-muted-foreground",
          actionButton:
            "group-[.toast]:bg-cb-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-cb-muted group-[.toast]:text-cb-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

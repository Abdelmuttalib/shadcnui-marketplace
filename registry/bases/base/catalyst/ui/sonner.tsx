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
            "group toast group-[.toaster]:bg-catalyst-popover group-[.toaster]:text-catalyst-foreground group-[.toaster]:border-catalyst-input group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-catalyst-muted-foreground",
          actionButton:
            "group-[.toast]:bg-catalyst-primary group-[.toast]:text-catalyst-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-catalyst-muted group-[.toast]:text-catalyst-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

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
            "group toast group-[.toaster]:bg-neon-background group-[.toaster]:text-neon-foreground group-[.toaster]:border-neon-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-neon-muted-foreground",
          actionButton:
            "group-[.toast]:bg-neon-primary group-[.toast]:text-neon-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-neon-muted group-[.toast]:text-neon-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

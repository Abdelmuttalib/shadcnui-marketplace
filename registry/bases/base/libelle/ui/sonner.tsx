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
            "group toast group-[.toaster]:bg-libelle-background group-[.toaster]:text-libelle-foreground group-[.toaster]:border-libelle-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-libelle-muted-foreground",
          actionButton:
            "group-[.toast]:bg-libelle-primary group-[.toast]:text-libelle-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-libelle-muted group-[.toast]:text-libelle-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

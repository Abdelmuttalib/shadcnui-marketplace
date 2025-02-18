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
        // @ts-ignore
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-material-background group-[.toaster]:text-material-foreground group-[.toaster]:border-material-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-material-muted-foreground",
          actionButton:
            "group-[.toast]:bg-material-primary group-[.toast]:text-material-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-material-muted group-[.toast]:text-material-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

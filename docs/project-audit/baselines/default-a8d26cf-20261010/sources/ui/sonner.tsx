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
            "group toast group-[.toaster]:bg-dft-background group-[.toaster]:text-dft-foreground group-[.toaster]:border-dft-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-dft-muted-foreground",
          actionButton:
            "group-[.toast]:bg-dft-primary group-[.toast]:text-dft-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-dft-muted group-[.toast]:text-dft-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

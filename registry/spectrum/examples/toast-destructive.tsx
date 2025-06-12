"use client";

import { toast } from "sonner";

import { Button } from "@/registry/spectrum/ui/button";

export default function ToastDestructive() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.error("Uh oh! Something went wrong.", {
          description: "There was a problem with your request.",
          action: {
            label: "Try again",
            onClick: () => console.log("Try again"),
          },
        });
      }}
    >
      Show Toast
    </Button>
  );
}

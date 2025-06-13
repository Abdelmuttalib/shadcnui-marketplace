"use client";

import { toast } from "sonner";

import { Button } from "@/registry/neon/ui/button";

export default function ToastWithAction() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.message("Uh oh! Something went wrong.", {
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

"use client";

import { toast } from "sonner";

import { Button } from "@/registry/libelle/ui/button";

export default function ToastWithTitle() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.message("Uh oh! Something went wrong.", {
          description: "There was a problem with your request.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}

"use client";

import { toast } from "sonner";

import { Button } from "@/registry/carbon/ui/button";

export default function ToastSimple() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.message("Your message has been sent.");
      }}
    >
      Show Toast
    </Button>
  );
}

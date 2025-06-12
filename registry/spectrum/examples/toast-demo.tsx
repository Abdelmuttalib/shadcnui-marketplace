"use client";

import { toast } from "sonner";

import { Button } from "@/registry/spectrum/ui/button";

export default function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.message("Scheduled: Catch up ", {
          description: "Friday, February 10, 2023 at 5:57 PM",
          // action: (
          //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          // ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
}

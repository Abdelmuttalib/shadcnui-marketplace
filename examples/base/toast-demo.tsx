"use client";

import { Button } from "@/registry/bases/base/styles/default/ui/button";
import { toast } from "@/registry/bases/base/styles/default/ui/toast";

export function ToastDemo() {
  function showToast() {
    const id = toast.add({
      title: "Event created",
      description: "Sunday, December 3 at 9:00 AM",
      actionProps: {
        children: "Undo",
        onClick() {
          toast.close(id);
        },
      },
    });
  }

  return (
    <Button variant="outline" onClick={showToast}>
      Show Toast
    </Button>
  );
}

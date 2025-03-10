"use client";

import { Button } from "@/registry/catalyst/ui/button";
import { ToastAction } from "@/registry/catalyst/ui/toast";
import { useToast } from "@/registry/catalyst/ui/use-toast";

export default function ToastWithAction() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}

"use client";

import { Button } from "@/registry/linear/ui/button";
import { ToastAction } from "@/registry/linear/ui/toast";
import { useToast } from "@/registry/linear/ui/use-toast";

export default function ToastDestructive() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
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

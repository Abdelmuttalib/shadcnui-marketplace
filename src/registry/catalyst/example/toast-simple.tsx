"use client";

import { Button } from "@/registry/catalyst/ui/button";
import { useToast } from "@/registry/catalyst/ui/use-toast";

export default function ToastSimple() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}

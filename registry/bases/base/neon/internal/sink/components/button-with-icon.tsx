import { MailOpen } from "lucide-react";

import { Button } from "@/registry/neon/ui/button";

export function ButtonWithIcon() {
  return (
    <Button>
      <MailOpen /> Login with Email
    </Button>
  );
}

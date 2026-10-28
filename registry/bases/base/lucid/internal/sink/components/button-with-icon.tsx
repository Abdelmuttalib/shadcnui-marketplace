import { MailOpen } from "lucide-react";

import { Button } from "@/registry/bases/base/lucid/ui/button";

export function ButtonWithIcon() {
  return (
    <Button>
      <MailOpen /> Login with Email
    </Button>
  );
}

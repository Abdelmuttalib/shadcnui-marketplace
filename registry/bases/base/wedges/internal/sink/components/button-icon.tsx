import { ChevronRight } from "lucide-react";

import { Button } from "@/registry/bases/base/wedges/ui/button";

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight />
    </Button>
  );
}

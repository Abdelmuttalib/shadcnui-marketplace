import { Italic } from "lucide-react";

import { Toggle } from "@/registry/bases/base/snow/ui/toggle";

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}

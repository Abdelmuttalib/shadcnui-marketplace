import { ItalicIcon } from "lucide-react";

import { Toggle } from "@/registry/bases/base/styles/default/ui/toggle";

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  );
}

import { Bold } from "lucide-react";

import { Toggle } from "@/registry/bases/base/snow/ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}

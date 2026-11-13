import { SaveIcon } from "lucide-react";

import { Button } from "@/registry/bases/base/styles/default/ui/button";
import { Kbd } from "@/registry/bases/base/styles/default/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/base/styles/default/ui/tooltip";

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
        <SaveIcon />
      </TooltipTrigger>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  );
}

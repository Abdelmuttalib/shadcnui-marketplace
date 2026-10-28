import { Button } from "@/styles/base-default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-default/ui/tooltip";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}

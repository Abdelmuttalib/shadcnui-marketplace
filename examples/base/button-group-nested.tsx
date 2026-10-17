import { AudioLinesIcon, PlusIcon } from "lucide-react";

import { Button } from "@/styles/base-default/ui/button";
import { ButtonGroup } from "@/styles/base-default/ui/button-group";
import { Input } from "@/styles/base-default/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-default/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-default/ui/tooltip";

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
              <AudioLinesIcon />
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}

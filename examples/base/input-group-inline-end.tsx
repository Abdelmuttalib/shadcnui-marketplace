import { EyeOffIcon } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-default/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-default/ui/input-group";

export function InputGroupInlineEnd() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="password"
          placeholder="Enter password"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  );
}

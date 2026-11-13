import { Button } from "@/registry/bases/base/styles/default/ui/button";
import { ButtonGroup } from "@/registry/bases/base/styles/default/ui/button-group";
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/styles/default/ui/field";
import { Input } from "@/registry/bases/base/styles/default/ui/input";

export function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  );
}

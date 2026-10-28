import { Button } from "@/styles/base-default/ui/button";
import { ButtonGroup } from "@/styles/base-default/ui/button-group";
import { Field, FieldLabel } from "@/styles/base-default/ui/field";
import { Input } from "@/styles/base-default/ui/input";

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

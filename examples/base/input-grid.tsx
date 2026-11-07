import { Field, FieldGroup, FieldLabel } from "@/styles/base-default/ui/field";
import { Input } from "@/styles/base-default/ui/input";

export function InputGrid() {
  return (
    <FieldGroup className="grid max-w-sm grid-cols-2">
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="Jordan" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Lee" />
      </Field>
    </FieldGroup>
  );
}

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/styles/default/ui/field";
import { Input } from "@/registry/bases/base/styles/default/ui/input";

export function InputInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" aria-invalid />
      <FieldDescription>
        This field contains validation errors.
      </FieldDescription>
    </Field>
  );
}

import { Checkbox } from "@/registry/bases/base/styles/default/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/styles/default/ui/field";

export function CheckboxBasic() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
}

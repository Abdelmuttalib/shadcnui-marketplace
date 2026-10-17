import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-default/ui/field";
import { Input } from "@/styles/base-default/ui/input";

export function InputField() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="Enter your username"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  );
}

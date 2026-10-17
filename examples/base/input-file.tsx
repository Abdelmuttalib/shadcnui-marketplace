import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-default/ui/field";
import { Input } from "@/styles/base-default/ui/input";

export function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  );
}

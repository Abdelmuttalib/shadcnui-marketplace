import { Field, FieldLabel } from "@/styles/base-default/ui/field";
import { Textarea } from "@/styles/base-default/ui/textarea";

export function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="Type your message here."
        disabled
      />
    </Field>
  );
}

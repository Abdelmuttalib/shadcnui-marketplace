import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-default/ui/field";
import { Textarea } from "@/styles/base-default/ui/textarea";

export function TextareaField() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  );
}

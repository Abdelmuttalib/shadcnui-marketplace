import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/styles/default/ui/field";
import { Input } from "@/registry/bases/base/styles/default/ui/input";

export function InputDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
      <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
      <FieldDescription>
        Your API key is encrypted and stored securely.
      </FieldDescription>
    </Field>
  );
}

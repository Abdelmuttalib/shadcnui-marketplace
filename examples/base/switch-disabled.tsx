import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/styles/default/ui/field";
import { Switch } from "@/registry/bases/base/styles/default/ui/switch";

export function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  );
}

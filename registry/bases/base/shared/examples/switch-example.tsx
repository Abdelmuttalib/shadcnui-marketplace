import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";

import { useDesignSystem } from "../components/design-system-provider";

export default function SwitchExample() {
  return (
    <ExampleWrapper>
      <SwitchBasic />
      <SwitchWithDescription />
      <SwitchWithLabel />
      <SwitchDisabled />
      <SwitchSizes />
    </ExampleWrapper>
  );
}

function SwitchBasic() {
  const { Field, FieldLabel, Switch } = useDesignSystem();

  return (
    <Example title="Basic">
      <Field orientation="horizontal">
        <Switch id="switch-basic" />
        <FieldLabel htmlFor="switch-basic">Airplane Mode</FieldLabel>
      </Field>
    </Example>
  );
}

function SwitchWithLabel() {
  const { Label, Switch } = useDesignSystem();
  return (
    <Example title="With Label">
      <div className="flex items-center gap-2">
        <Switch id="switch-bluetooth" defaultChecked />
        <Label htmlFor="switch-bluetooth">Bluetooth</Label>
      </div>
    </Example>
  );
}

function SwitchWithDescription() {
  const {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
    Switch,
  } = useDesignSystem();
  return (
    <Example title="With Description">
      <FieldLabel htmlFor="switch-focus-mode">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-focus-mode" />
        </Field>
      </FieldLabel>
    </Example>
  );
}

function SwitchDisabled() {
  const { Label, Switch } = useDesignSystem();

  return (
    <Example title="Disabled">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-2">
          <Switch id="switch-disabled-unchecked" disabled />
          <Label htmlFor="switch-disabled-unchecked">
            Disabled (Unchecked)
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="switch-disabled-checked" defaultChecked disabled />
          <Label htmlFor="switch-disabled-checked">Disabled (Checked)</Label>
        </div>
      </div>
    </Example>
  );
}

function SwitchSizes() {
  const { Label, Switch } = useDesignSystem();

  return (
    <Example title="Sizes">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-2">
          <Switch id="switch-size-sm" size="sm" />
          <Label htmlFor="switch-size-sm">Small</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="switch-size-default" size="default" />
          <Label htmlFor="switch-size-default">Default</Label>
        </div>
      </div>
    </Example>
  );
}

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";
import { useDesignSystem } from "../components/design-system-provider";

export default function NativeSelectExample() {
  return (
    <ExampleWrapper>
      <NativeSelectBasic />
      <NativeSelectWithGroups />
      <NativeSelectSizes />
      <NativeSelectWithField />
      <NativeSelectDisabled />
      <NativeSelectInvalid />
    </ExampleWrapper>
  );
}

function NativeSelectBasic() {
  const { NativeSelect, NativeSelectOption } = useDesignSystem();

  return (
    <Example title="Basic">
      <NativeSelect>
        <NativeSelectOption value="">Select a fruit</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        <NativeSelectOption value="grapes" disabled>
          Grapes
        </NativeSelectOption>
        <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
      </NativeSelect>
    </Example>
  );
}

function NativeSelectWithGroups() {
  const { NativeSelect, NativeSelectOptGroup, NativeSelectOption } =
    useDesignSystem();

  return (
    <Example title="With Groups">
      <NativeSelect>
        <NativeSelectOption value="">Select a food</NativeSelectOption>
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Vegetables">
          <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
          <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
          <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </Example>
  );
}

function NativeSelectSizes() {
  const { NativeSelect, NativeSelectOption } = useDesignSystem();

  return (
    <Example title="Sizes">
      <div className="flex flex-col gap-4">
        <NativeSelect size="sm">
          <NativeSelectOption value="">Select a fruit</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        </NativeSelect>
        <NativeSelect size="default">
          <NativeSelectOption value="">Select a fruit</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        </NativeSelect>
      </div>
    </Example>
  );
}

function NativeSelectWithField() {
  const {
    Field,
    FieldDescription,
    FieldLabel,
    NativeSelect,
    NativeSelectOption,
  } = useDesignSystem();

  return (
    <Example title="With Field">
      <Field>
        <FieldLabel htmlFor="native-select-country">Country</FieldLabel>
        <NativeSelect id="native-select-country">
          <NativeSelectOption value="">Select a country</NativeSelectOption>
          <NativeSelectOption value="us">United States</NativeSelectOption>
          <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
          <NativeSelectOption value="ca">Canada</NativeSelectOption>
          <NativeSelectOption value="au">Australia</NativeSelectOption>
        </NativeSelect>
        <FieldDescription>Select your country of residence.</FieldDescription>
      </Field>
    </Example>
  );
}

function NativeSelectDisabled() {
  const { NativeSelect, NativeSelectOption } = useDesignSystem();

  return (
    <Example title="Disabled">
      <NativeSelect disabled>
        <NativeSelectOption value="">Disabled</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      </NativeSelect>
    </Example>
  );
}

function NativeSelectInvalid() {
  const { NativeSelect, NativeSelectOption } = useDesignSystem();
  return (
    <Example title="Invalid">
      <NativeSelect aria-invalid="true">
        <NativeSelectOption value="">Error state</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      </NativeSelect>
    </Example>
  );
}

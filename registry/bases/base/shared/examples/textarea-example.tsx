import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";

import { useDesignSystem } from "../components/design-system-provider";

export default function TextareaExample() {
  return (
    <ExampleWrapper>
      <TextareaBasic />
      <TextareaInvalid />
      <TextareaWithLabel />
      <TextareaWithDescription />
      <TextareaDisabled />
    </ExampleWrapper>
  );
}

function TextareaBasic() {
  const { Textarea } = useDesignSystem();

  return (
    <Example title="Basic">
      <Textarea placeholder="Type your message here." />
    </Example>
  );
}

function TextareaInvalid() {
  const { Textarea } = useDesignSystem();

  return (
    <Example title="Invalid">
      <Textarea placeholder="Type your message here." aria-invalid="true" />
    </Example>
  );
}

function TextareaWithLabel() {
  const { Field, Textarea, FieldLabel } = useDesignSystem();

  return (
    <Example title="With Label">
      <Field>
        <FieldLabel htmlFor="textarea-demo-message">Message</FieldLabel>
        <Textarea
          id="textarea-demo-message"
          placeholder="Type your message here."
          rows={6}
        />
      </Field>
    </Example>
  );
}

function TextareaWithDescription() {
  const { Field, Textarea, FieldLabel, FieldDescription } = useDesignSystem();

  return (
    <Example title="With Description">
      <Field>
        <FieldLabel htmlFor="textarea-demo-message-2">Message</FieldLabel>
        <Textarea
          id="textarea-demo-message-2"
          placeholder="Type your message here."
          rows={6}
        />
        <FieldDescription>
          Type your message and press enter to send.
        </FieldDescription>
      </Field>
    </Example>
  );
}

function TextareaDisabled() {
  const { Field, Textarea, FieldLabel } = useDesignSystem();

  return (
    <Example title="Disabled">
      <Field>
        <FieldLabel htmlFor="textarea-demo-disabled">Message</FieldLabel>
        <Textarea
          id="textarea-demo-disabled"
          placeholder="Type your message here."
          disabled
        />
      </Field>
    </Example>
  );
}

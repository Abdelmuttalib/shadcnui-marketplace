import { Button } from "@/styles/base-default/ui/button";
import { Field } from "@/styles/base-default/ui/field";
import { Input } from "@/styles/base-default/ui/input";

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  );
}

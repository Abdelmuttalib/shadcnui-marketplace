import { Button } from "@/registry/bases/base/styles/default/ui/button";
import { Field } from "@/registry/bases/base/styles/default/ui/field";
import { Input } from "@/registry/bases/base/styles/default/ui/input";

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  );
}

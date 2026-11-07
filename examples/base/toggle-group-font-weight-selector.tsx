"use client";

import * as React from "react";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-default/ui/field";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-default/ui/toggle-group";

export function ToggleGroupFontWeightSelector() {
  const [fontWeight, setFontWeight] = React.useState("normal");
  return (
    <Field>
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        value={[fontWeight]}
        onValueChange={(value) => setFontWeight(value[0])}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light"
          className="size-16 flex flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl font-light leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="Normal"
          className="size-16 flex flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl font-normal leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="Medium"
          className="size-16 flex flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl font-medium leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          className="size-16 flex flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl font-bold leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Use{" "}
        <code className="bg-muted rounded-md px-1 py-0.5 font-mono">
          font-{fontWeight}
        </code>{" "}
        to set the font weight.
      </FieldDescription>
    </Field>
  );
}

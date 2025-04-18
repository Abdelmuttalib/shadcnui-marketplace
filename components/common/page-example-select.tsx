"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PageExampleType,
  pageExampleTypes,
  STYLES,
  useStyleStore,
} from "@/hooks/use-style-store";

export function PageExampleSelect({
  defaultStyle,
  onChange,
}: {
  defaultStyle?: any;
  onChange?: any;
}) {
  // update search params, 'style'

  const { style, pageExampleType, setPageExampleType } = useStyleStore();

  function onPageExampleChange(v: PageExampleType) {
    setPageExampleType(v);
  }

  return (
    <Select defaultValue={pageExampleType} onValueChange={onPageExampleChange}>
      <SelectTrigger className="w-fit max-w-52 border-input">
        <SelectValue
          placeholder="select a style"
          className="text-muted-foreground"
        >
          <span className="text-muted-foreground">example:</span>{" "}
          <span className="mr-2 font-medium capitalize">{pageExampleType}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {pageExampleTypes.map((pageExampleType) => (
            <SelectItem
              value={pageExampleType}
              key={pageExampleType}
              className="capitalize"
            >
              {pageExampleType}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

"use client";

import { useStyleStore } from "@/hooks/use-style-store";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EXAMPLES = [
  "authentication",
  "cards",
  "dashboard",
  "forms",
  "mail",
  "music",
  "playground",
  "tasks",
  "dashboard-01",
  "login-01",
  "login-02",
  "login-03",
  "login-04",
  "login-05",
  "preview",
  "preview-02",
  "preview-03",
  "sidebar-01",
  "sidebar-02",
  "sidebar-03",
  "sidebar-04",
  "sidebar-05",
  "sidebar-06",
  "sidebar-07",
  "sidebar-08",
  "sidebar-09",
  "sidebar-10",
  "sidebar-11",
  "sidebar-12",
  "sidebar-13",
  "sidebar-14",
  "sidebar-15",
  "sidebar-16",
  "signup-01",
  "signup-02",
  "signup-03",
  "signup-04",
  "signup-05",
] as const;

export function ExampleSelector() {
  const activeExample = useStyleStore((state) => state.activeExample);
  const setActiveExample = useStyleStore((state) => state.setActiveExample);

  return (
    <Select
      value={activeExample}
      onValueChange={(value) =>
        setActiveExample(value as (typeof EXAMPLES)[number])
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select example" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Examples</SelectLabel>

          {EXAMPLES.map((example) => (
            <SelectItem key={example} value={example}>
              {example}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function ExampleSelectorInline() {
  const activeExample = useStyleStore((state) => state.activeExample);
  const setActiveExample = useStyleStore((state) => state.setActiveExample);

  return (
    <Select
      value={activeExample}
      onValueChange={(value) =>
        setActiveExample(value as (typeof EXAMPLES)[number])
      }
    >
      <SelectTrigger className="text-foreground/50 h-6 rounded-none border-transparent bg-transparent py-0 text-xs shadow-none data-[size=default]:h-6 dark:bg-transparent">
        <SelectValue placeholder="Select example" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Examples</SelectLabel>

          {EXAMPLES.map((example) => (
            <SelectItem key={example} value={example}>
              {example}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

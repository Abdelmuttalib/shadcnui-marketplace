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
      <SelectTrigger
        aria-label="Select example"
        className="group text-foreground/80 hover:border-primary/30 hover:text-foreground focus:ring-primary/20 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.08] data-[state=open]:text-foreground dark:hover:border-primary/25 relative h-9 rounded-none border border-white/20 bg-white/[0.12] px-3.5 text-[13px] font-medium capitalize shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent hover:bg-white/[0.18] focus:ring-1 focus:ring-offset-0 data-[size=default]:h-9 dark:border-white/[0.12] dark:bg-white/[0.045] dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.2)] dark:hover:bg-white/[0.08] [&>svg]:size-3.5 [&>svg]:opacity-50 [&>svg]:transition-transform data-[state=open]:[&>svg]:rotate-180"
      >
        <SelectValue placeholder="Select example" />
      </SelectTrigger>

      <SelectContent className="w-full rounded-none">
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

"use client";

import { PageExampleType, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/utils/cn";

const DEFAULT_EXAMPLES_PATH = "/example";

const examples = [
  {
    name: "Mail",
    href: `${DEFAULT_EXAMPLES_PATH}/mail`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/mail",
  },
  {
    name: "Dashboard",
    href: `${DEFAULT_EXAMPLES_PATH}/dashboard`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard",
  },
  {
    name: "Cards",
    href: `${DEFAULT_EXAMPLES_PATH}/cards`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/cards",
  },
  {
    name: "Tasks",
    href: `${DEFAULT_EXAMPLES_PATH}/tasks`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks",
  },
  {
    name: "Playground",
    href: `${DEFAULT_EXAMPLES_PATH}/playground`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground",
  },
  {
    name: "Forms",
    href: `${DEFAULT_EXAMPLES_PATH}/forms`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms",
  },
  {
    name: "Music",
    href: `${DEFAULT_EXAMPLES_PATH}/music`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music",
  },
  {
    name: "Authentication",
    href: `${DEFAULT_EXAMPLES_PATH}/authentication`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication",
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  // const pathname = usePathname();

  const { pageExampleType, setPageExampleType } = useStyleStore();

  return (
    <div className="relative rounded-lg bg-background">
      <div className="max-w-[600px] lg:max-w-none">
        <div
          className={cn("flex flex-wrap items-center gap-1 gap-y-3", className)}
          {...props}
        >
          {examples.map((example, index) => {
            const caseExampleName = example.name.toLowerCase();
            return (
              <button
                key={example.href}
                className={cn(
                  "flex h-12 items-center justify-center border-x border-transparent px-4 text-center text-sm transition-colors hover:bg-accent/40 hover:text-ring",
                  pageExampleType === caseExampleName
                    ? "bg-accent/60 font-semibold text-ring"
                    : "text-muted-foreground"
                )}
                onClick={() =>
                  setPageExampleType(caseExampleName as PageExampleType)
                }
              >
                {example.name}
              </button>
            );
          })}
        </div>
        {/* <ScrollBar orientation="horizontal"  /> */}
      </div>
    </div>
  );
}

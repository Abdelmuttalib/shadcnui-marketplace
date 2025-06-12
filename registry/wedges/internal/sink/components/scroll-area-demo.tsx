import * as React from "react";

import { ScrollArea } from "@/registry/wedges/ui/scroll-area";
import { Separator } from "@/registry/wedges/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-wedges-md border border-wedges-border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

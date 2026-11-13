import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/registry/bases/base/styles/default/ui/badge";

export function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  );
}

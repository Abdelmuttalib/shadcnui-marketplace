import { type Registry } from "shadcn/schema";

import { hooks } from "@/registry/registry-hooks";
import { themes } from "@/registry/registry-themes";
import { ui } from "@/registry/registry-ui";

export const registry = {
  name: "shadcnmarketplace",
  homepage: "https://shadcnmarketplace.com",
  items: [
    ...ui,
    ...hooks,
    ...themes,

    // Internal use only.
    // ...internal,
    // ...examples,
  ],
} satisfies Registry;

import { type Registry } from "shadcn/schema";

// import { z } from "zod";
// import { blocks } from "@/registry/registry-blocks"
// import { charts } from "@/registry/registry-charts"
// import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks";
// import { internal } from "@/registry/registry-internal";
import { themes } from "@/registry/registry-themes";
import { ui } from "@/registry/registry-ui";

export const registry = {
  name: "shadcnmarketplace",
  homepage: "https://shadcnmarketplace.com",
  items: [
    ...ui,
    // ...blocks,
    // ...charts,
    ...hooks,
    ...themes,

    // Internal use only.
    // ...internal,
    // ...examples,
  ],
} satisfies Registry;

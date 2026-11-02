import fs from "node:fs";
import path from "node:path";

const ROOT = "registry/bases/base";

const styles = [
  "default",
  "carbon",
  "neon",
  "linear",
  "catalyst",
  "material",
  "spectrum",
  "wedges",
  "moon",
  "lucid",
  "snow",
  "libelle",
];

const components = [
  "accordion",
  "alert-dialog",
  "alert",
  "aspect-ratio",
  "attachment",
  "avatar",
  "badge",
  "breadcrumb",
  "bubble",
  "button-group",
  "button",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "code-block",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "direction",
  "drawer",
  "dropdown-menu",
  "empty",
  "field",
  "hover-card",
  "input-group",
  "input-otp",
  "input",
  "item",
  "kbd",
  "label",
  "marker",
  "menubar",
  "message-scroller",
  "message",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "questionnaire",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "sonner",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toggle-group",
  "toggle",
  "tooltip",
  "trace",
];

const sharedAdapters = path.join(ROOT, "shared/adapters");

fs.mkdirSync(sharedAdapters, { recursive: true });

for (const style of styles) {
  const uiDirectory = path.join(ROOT, `styles/${style}/ui`);

  const exports = components
    .filter((component) =>
      fs.existsSync(path.join(uiDirectory, `${component}.tsx`))
    )
    .map((component) => `export * from "./ui/${component}";`)
    .join("\n");

  fs.writeFileSync(
    path.join(ROOT, `styles/${style}/components.ts`),
    `${exports}\n`
  );

  const styleCapitalized = style.charAt(0).toUpperCase() + style.slice(1);

  const adapter = `"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/${style}/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

export function ${styleCapitalized}Adapter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div
        className="${style}-style"
        data-design-system="${style}"
      >
        {children}
      </div>
    </DesignSystemProvider>
  );
}
`;

  fs.writeFileSync(path.join(sharedAdapters, `${style}.tsx`), adapter);
}

console.log("Generated component barrels and design-system adapters.");

import { promises as fs } from "node:fs";
import path from "node:path";

import { styles } from "@/registry/registry-styles";
import { ui } from "@/registry/registry-ui";

export type WorkshopStyle = {
  name: string;
  label: string;
};

export type WorkshopComponent = {
  /** Registry item name, e.g. "button". */
  name: string;
  /** Display title, e.g. "Button". */
  title: string;
  /** Curated group for the sidebar. */
  group: string;
  /** Style names that have a `ui/<name>.tsx` source file. */
  styles: string[];
  /** Source file path relative to a style dir, e.g. `ui/button.tsx`. */
  filePath: string;
};

export type WorkshopCatalog = {
  styles: WorkshopStyle[];
  components: WorkshopComponent[];
};

const GROUP_BY_COMPONENT: Record<string, string> = {
  button: "Actions",
  "button-group": "Actions",
  input: "Forms and inputs",
  textarea: "Forms and inputs",
  label: "Forms and inputs",
  checkbox: "Forms and inputs",
  "radio-group": "Forms and inputs",
  switch: "Forms and inputs",
  select: "Forms and inputs",
  "native-select": "Forms and inputs",
  slider: "Forms and inputs",
  form: "Forms and inputs",
  "input-otp": "Forms and inputs",
  "input-group": "Forms and inputs",
  field: "Forms and inputs",
  calendar: "Forms and inputs",
  combobox: "Forms and inputs",
  card: "Data display",
  badge: "Data display",
  alert: "Data display",
  table: "Data display",
  avatar: "Data display",
  skeleton: "Data display",
  tabs: "Navigation",
  breadcrumb: "Navigation",
  pagination: "Navigation",
  menubar: "Navigation",
  "navigation-menu": "Navigation",
  dialog: "Overlays",
  "alert-dialog": "Overlays",
  popover: "Overlays",
  sheet: "Overlays",
  drawer: "Overlays",
  "hover-card": "Overlays",
  tooltip: "Overlays",
  "command": "Overlays",
  "dropdown-menu": "Menus",
  "context-menu": "Menus",
  accordion: "Layout",
  collapsible: "Layout",
  resizable: "Layout",
  "scroll-area": "Layout",
  separator: "Layout",
  "aspect-ratio": "Layout",
  carousel: "Layout",
  sidebar: "Layout",
  chart: "Data display",
  progress: "Feedback",
  spinner: "Feedback",
  sonner: "Feedback",
  toast: "Feedback",
  empty: "Feedback",
  typography: "Typography",
  kbd: "Typography",
  item: "Data display",
  marker: "Data display",
  message: "Feedback",
  bubble: "Feedback",
  attachment: "Feedback",
  "message-scroller": "Feedback",
  questionnaire: "Feedback",
  direction: "Utilities",
  toggle: "Selection controls",
  "toggle-group": "Selection controls",
};

function titleize(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function getWorkshopCatalog(): Promise<WorkshopCatalog> {
  const root = process.cwd();
  const styleNames = styles.map((style) => style.name);

  const components: WorkshopComponent[] = [];
  for (const item of ui) {
    const file = item.files?.[0];
    const filePath = typeof file === "string" ? file : file?.path;
    if (!filePath) continue;
    const available: string[] = [];
    for (const styleName of styleNames) {
      if (await fileExists(path.join(root, "registry", styleName, filePath))) {
        available.push(styleName);
      }
    }
    components.push({
      name: item.name,
      title: titleize(item.name),
      group: GROUP_BY_COMPONENT[item.name] ?? "Utilities",
      styles: available,
      filePath,
    });
  }

  components.sort((a, b) => a.title.localeCompare(b.title));

  return {
    styles: styles.map((style) => ({ name: style.name, label: style.label })),
    components,
  };
}

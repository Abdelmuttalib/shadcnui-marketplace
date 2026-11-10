import type { ExampleName } from "./example-renderer";

export interface ExampleDefinition {
  name: ExampleName;
  title: string;
  description?: string;
}

export const examples: ExampleDefinition[] = [
  {
    name: "authentication",
    title: "Authentication",
  },
  {
    name: "cards",
    title: "Cards",
  },
  {
    name: "dashboard",
    title: "Dashboard",
  },
  {
    name: "forms",
    title: "Forms",
  },
  {
    name: "mail",
    title: "Mail",
  },
  {
    name: "music",
    title: "Music",
  },
  {
    name: "playground",
    title: "Playground",
  },
  // {
  //   name: "tasks",
  //   title: "Tasks",
  // },
];

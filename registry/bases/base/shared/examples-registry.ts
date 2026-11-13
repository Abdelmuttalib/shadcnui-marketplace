import type { ExampleName } from "./example-renderer";

export interface ExampleDefinition {
  name: ExampleName;
  title: string;
  category: ExampleCategory;
}

export type ExampleCategory =
  "General" | "Dashboard" | "Authentication" | "Preview" | "Sidebar" | "Signup";

export const examples: ExampleDefinition[] = [
  // General
  { name: "authentication", title: "Authentication", category: "General" },
  { name: "cards", title: "Cards", category: "General" },
  { name: "dashboard", title: "Dashboard", category: "General" },
  { name: "forms", title: "Forms", category: "General" },
  { name: "mail", title: "Mail", category: "General" },
  { name: "music", title: "Music", category: "General" },
  { name: "playground", title: "Playground", category: "General" },
  { name: "tasks", title: "Tasks", category: "General" },

  // Dashboard
  { name: "dashboard-01", title: "Dashboard 01", category: "Dashboard" },

  // Authentication
  { name: "login-01", title: "Login 01", category: "Authentication" },
  { name: "login-02", title: "Login 02", category: "Authentication" },
  { name: "login-03", title: "Login 03", category: "Authentication" },
  { name: "login-04", title: "Login 04", category: "Authentication" },
  { name: "login-05", title: "Login 05", category: "Authentication" },

  // Preview
  { name: "preview", title: "Preview", category: "Preview" },
  { name: "preview-02", title: "Preview 02", category: "Preview" },
  { name: "preview-03", title: "Preview 03", category: "Preview" },

  // Sidebar
  { name: "sidebar-01", title: "Sidebar 01", category: "Sidebar" },
  { name: "sidebar-02", title: "Sidebar 02", category: "Sidebar" },
  { name: "sidebar-03", title: "Sidebar 03", category: "Sidebar" },
  { name: "sidebar-04", title: "Sidebar 04", category: "Sidebar" },
  { name: "sidebar-05", title: "Sidebar 05", category: "Sidebar" },
  { name: "sidebar-06", title: "Sidebar 06", category: "Sidebar" },
  { name: "sidebar-07", title: "Sidebar 07", category: "Sidebar" },
  { name: "sidebar-08", title: "Sidebar 08", category: "Sidebar" },
  { name: "sidebar-09", title: "Sidebar 09", category: "Sidebar" },
  { name: "sidebar-10", title: "Sidebar 10", category: "Sidebar" },
  { name: "sidebar-11", title: "Sidebar 11", category: "Sidebar" },
  { name: "sidebar-12", title: "Sidebar 12", category: "Sidebar" },
  { name: "sidebar-13", title: "Sidebar 13", category: "Sidebar" },
  { name: "sidebar-14", title: "Sidebar 14", category: "Sidebar" },
  { name: "sidebar-15", title: "Sidebar 15", category: "Sidebar" },
  { name: "sidebar-16", title: "Sidebar 16", category: "Sidebar" },

  // Signup
  { name: "signup-01", title: "Signup 01", category: "Signup" },
  { name: "signup-02", title: "Signup 02", category: "Signup" },
  { name: "signup-03", title: "Signup 03", category: "Signup" },
  { name: "signup-04", title: "Signup 04", category: "Signup" },
  { name: "signup-05", title: "Signup 05", category: "Signup" },
];

// All example names
export const EXAMPLES = examples.map((example) => example.name);

// Example lookup by name
export const EXAMPLE_MAP = Object.fromEntries(
  examples.map((example) => [example.name, example])
) as Record<ExampleName, ExampleDefinition>;

// Unique categories
export const EXAMPLE_CATEGORIES = [
  ...new Set(examples.map((example) => example.category)),
];

// Group examples by category
export const EXAMPLES_BY_CATEGORY = examples.reduce(
  (groups, example) => {
    (groups[example.category] ??= []).push(example);
    return groups;
  },
  {} as Record<ExampleCategory, ExampleDefinition[]>
);

// dynamic import

// replace with React.lazy
import dynamic from "next/dynamic";
import React from "react";

export const CatalystStyleRegistryIndex = {
  button: {
    demo: React.lazy(() => import("./demo/button-demo")),
    code: "",
    title: "Button",
    description: "Buttons are used to perform an action.",
  },
  checkbox: {
    demo: dynamic(() => import("./demo/checkbox-demo")),
    code: "",
    title: "Checkbox",
    description: "Checkboxes are used to select one or more items.",
  },
  command: {
    demo: dynamic(() => import("./demo/command-demo")),
    code: "",
    title: "Command",
    description: "Commands are used to display a list of actions.",
  },
  "context-menu": {
    demo: dynamic(() => import("./demo/context-menu-demo")),
    code: "",
    title: "Context Menu",
    description: "Context menus are used to display a list of actions.",
  },
  "data-table": {
    demo: dynamic(() => import("./demo/data-table-demo")),
    code: "",
    title: "Data Table",
    description: "Data tables are used to display tabular data.",
  },
  drawer: {
    demo: dynamic(() => import("./demo/drawer-demo")),
    code: "",
    title: "Drawer",
    description: "Drawers are used to display a list of actions.",
  },
  input: {
    demo: dynamic(() => import("./demo/input-demo")),
    code: "",
    title: "Input",
    description: "Inputs are used to collect user input.",
  },
  "input-otp": {
    demo: dynamic(() => import("./demo/input-otp-demo")),
    code: "",
    title: "Input OTP",
    description: "Inputs are used to collect user input.",
  },
  menubar: {
    demo: dynamic(() => import("./demo/menubar-demo")),
    code: "",
    title: "Menubar",
    description: "Menubars are used to display a list of actions.",
  },
  pagination: {
    demo: dynamic(() => import("./demo/pagination-demo")),
    code: "",
    title: "Pagination",
    description: "Pagination is used to navigate through a list of items.",
  },
  popover: {
    demo: dynamic(() => import("./demo/popover-demo")),
    code: "",
    title: "Popover",
    description: "Popovers are used to display additional information.",
  },
  select: {
    demo: dynamic(() => import("./demo/select-demo")),
    code: "",
    title: "Select",
    description: "Selects are used to display a list of options.",
  },
  sheet: {
    demo: dynamic(() => import("./demo/sheet-demo")),
    code: "",
    title: "Sheet",
    description: "Sheets are used to display a list of actions.",
  },
  slider: {
    demo: dynamic(() => import("./demo/slider-demo")),
    code: "",
    title: "Slider",
    description: "Sliders are used to select a value from a range.",
  },
  table: {
    demo: dynamic(() => import("./demo/table-demo")),
    code: "",
    title: "Table",
    description: "Tables are used to display tabular data.",
  },
  textarea: {
    demo: dynamic(() => import("./demo/textarea-demo")),
    code: "",
    title: "Textarea",
    description: "Textareas are used to collect user input.",
  },
  "toggle-group": {
    demo: dynamic(() => import("./demo/toggle-group-demo")),
    code: "",
    title: "Toggle Group",
    description: "Toggle groups are used to select one or more items.",
  },
  toggle: {
    demo: dynamic(() => import("./demo/toggle-demo")),
    code: "",
    title: "Toggle",
    description: "Toggles are used to select one or more items.",
  },
  tabs: {
    demo: dynamic(() => import("./demo/tabs-demo")),
    code: "",
    title: "Tabs",
    description: "Tabs are used to display different content.",
  },
  tooltip: {
    demo: dynamic(() => import("./demo/tooltip-demo")),
    code: "",
    title: "Tooltip",
    description: "Tooltips are used to display additional information.",
  },
  accordion: {
    demo: dynamic(() => import("./demo/accordion-demo")),
    code: "",
    title: "Accordion",
    description: "Accordions are used to display a list of items.",
  },
  alert: {
    demo: dynamic(() => import("./demo/alert-demo")),
    code: "",
    title: "Alert",
    description:
      "Alerts are used to communicate a state that affects the entire system.",
  },
  "alert-dialog": {
    demo: dynamic(() => import("./demo/alert-dialog-demo")),
    code: "",
    title: "Alert Dialog",
    description:
      "Alert dialogs are used to communicate a state that affects the entire system.",
  },
  avatar: {
    demo: dynamic(() => import("./demo/avatar-demo")),
    code: "",
    title: "Avatar",
    description: "Avatars are used to represent users or objects.",
  },
  badge: {
    demo: dynamic(() => import("./demo/badge-demo")),
    code: "",
    title: "Badge",
    description: "Badges are used to highlight an item's status.",
  },
};

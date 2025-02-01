import {
  BadgesDemo,
  ButtonsDemo,
  DataTableDemo,
  NotificationAlert,
} from "@/components/demo";

const SOURCE_EXAMPLES_URL = "https://shadcn-default.vercel.app";
export const SOURCE_SHADCN_CARBON_URL = "https://shadcn-carbon.vercel.app";
// const SOURCE_EXAMPLES_URL = "http://localhost:3000";
const SOURCE_CODES_URL = "@/code";

// Async function to dynamically import and resolve the module
const getCode = async (modulePath: string) => {
  try {
    // "@/code/examples/landing-pages/landing-page-1"
    const mPath = `${SOURCE_CODES_URL}/`;
    const modul = await import("@/code/examples/features/features-1"); // Import the module
    // const modul = await import(modulePath);
    return modul.default; // Return the resolved string
  } catch (error) {
    console.error("Failed to load module:", error);
    return ""; // Return an empty string or handle the error as needed
  }
};

// block
// example
// template
// component

enum RegistryType {
  Blocks = "blocks",
  Examples = "examples",
  Templates = "templates",
  Components = "components",
}

export const initialExamplesRegistry = {
  // styles: [
  //   {
  //     id: "style-1",
  //     title: "Shadcn Carbon",
  //     description: "a Carbon inspired design system style for shadcn ui",
  //     registryType: RegistryType.Examples,
  //   },
  // ],
  portfolios: [
    {
      id: "portfolio-1",
      title: "Portfolio 1",
      description: "a simple and modern portfolio template",
      registryType: RegistryType.Examples,
    },
  ],
  "landing-pages": [
    {
      id: "landing-page-1",
      title: "Landing Page 1",
      description: "Landing Page 1 description",
      registryType: RegistryType.Examples,
      // href: `${SOURCE_EXAMPLES_URL}/examples/landing-page`,
      // dynamuc import example code from "@/code/examples/"
      // code: getCode(),
      // code: dynamic(() => import("@/code/examples/landing-pages/landing-page-1")),
      // code: dynamic(() =>
      //   import("@/code/examples/landing-pages/landing-page-1").then(
      //     (module) => {
      //       // Render the string content in a component
      //       const CodeComponent = () => <pre>{module.default}</pre>;
      //       return CodeComponent;
      //     }
      //   )
      // ),
    },
  ],
  features: [
    {
      id: "features-1",
      title: "Features 1",
      description: "Features 1 description",
      registryType: RegistryType.Examples,
      // href: `${SOURCE_EXAMPLES_URL}/examples/features-1`,
    },
    {
      id: "features-2",
      title: "Features 2",
      description: "Features 2 description",
      registryType: RegistryType.Examples,
      // href: `${SOURCE_EXAMPLES_URL}/examples/features-2`,
    },
    {
      id: "features-3",
      title: "Features 3",
      description: "Features 3 description",
      registryType: RegistryType.Examples,
      // href: `${SOURCE_EXAMPLES_URL}/examples/features-3`,
    },
    {
      id: "features-4",
      title: "Features 4",
      description: "Features 3 description",
      registryType: RegistryType.Examples,
      // href: `${`${SOURCE_EXAMPLES_URL}/examples/features-3`}`,
    },
  ],
};

type Example = {
  id: string;
  title: string;
  description: string;
  registryType: RegistryType;
  href: string;
  code: string;
};

type ExamplesRegistryKey = keyof typeof initialExamplesRegistry;

type ExamplesRegistry = Record<ExamplesRegistryKey, Example[]>;

export const examplesRegistry = Object.fromEntries(
  Object.entries(initialExamplesRegistry).map(([k, v]) => [
    k as ExamplesRegistryKey, // Preserve the key
    v.map((e) => ({
      ...e,
      category: k,
      href: `${SOURCE_EXAMPLES_URL}/${e.registryType}/${k}/${e.id}`,
      code: getCode(`${SOURCE_CODES_URL}/${e.registryType}/${k}/${e.id}`),
      codePath: `${SOURCE_CODES_URL}/${e.registryType}/${k}/${e.id}`,
    })),
  ])
);

// export const examplesRegistry: ExamplesRegistry = Object.entries(
//   initialExamplesRegistry
// ).map(([k, v]) => ({
//   [k]: v.map((e) => ({
//     ...e,
//     category: k,
//     href: `${SOURCE_EXAMPLES_URL}/${e.registryType}/${e.id}`,
//     code: getCode(`${SOURCE_CODES_URL}/${e.registryType}/${k}/${e.id}`),
//   })),
// })) as unknown as ExamplesRegistry;

export const applicationUIComponentsData = [
  {
    title: "Application Shells",
    components: [
      {
        title: "Buttons",
        description: "Buttons are used to perform an action.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 8,
        component: <ButtonsDemo />,
      },

      {
        title: "Data Table",
        description: "Display tabular data.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 1,
        component: <DataTableDemo />,
      },
      {
        title: "Badges",
        description: "Badges are used to highlight an item's status.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 8,
        component: <BadgesDemo />,
      },
      {
        title: "Alert",
        description:
          "Alerts are used to communicate a state that affects the entire system.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 1,
        component: <NotificationAlert />,
      },
    ],
  },
];

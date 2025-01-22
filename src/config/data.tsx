import {
  BadgesDemo,
  ButtonsDemo,
  DataTableDemo,
  NotificationAlert,
} from "@/components/demo";

const SOURCE_EXAMPLES_URL = "https://shadcn-default.vercel.app";

export const examplesRegistry = {
  "landing-pages": [
    {
      id: "landing-page-1",
      title: "Landing Page 1",
      description: "Landing Page 1 description",
      href: `${SOURCE_EXAMPLES_URL}/examples/landing-page`,
    },
  ],
  features: [
    // {
    //   id: "features-1",
    //   title: "Features 1",
    //   description: "Features 1 description",
    //   href: `${SOURCE_EXAMPLES_URL}/examples/features-1`,
    // },
    {
      id: "features-2",
      title: "Features 2",
      description: "Features 2 description",
      href: `${SOURCE_EXAMPLES_URL}/examples/features-2`,
    },
    {
      id: "features-3",
      title: "Features 3",
      description: "Features 3 description",
      href: `${`${SOURCE_EXAMPLES_URL}/examples/features-3`}`,
    },
    {
      id: "features-3",
      title: "Features 3",
      description: "Features 3 description",
      href: `${`${SOURCE_EXAMPLES_URL}/examples/features-3`}`,
    },
  ],
};

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

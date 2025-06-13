const mainLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blocks",
    href: "/blocks",
  },
  {
    label: "Styles",
    href: "/styles",
  },
  // {
  //   label: "Customize",
  //   href: "/customize",
  // },
  {
    label: "Typography",
    href: "/typography",
  },
];

// multiple domains can be added here
export const BASE_SITE_URL = "https://shadcnmarketplace.com";

export const siteConfig = {
  name: "shadcn ui marketplace",
  description:
    "shadcn ui marketplace, A marketplace for shadcn ui styles, blocks, palettes, and components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, blocks, palettes, and guidelines.",
  url: BASE_SITE_URL,
  logo: "/images/logo.png",
  favicon: "/favicon.ico",
  twitterUrl: "https://x.com/shadcnui_styles",
  twitterHandle: "@shadcnui_styles",

  siteUrl: "https://shadcnmarketplace.com",

  mainNavLinks: mainLinks,
  footerLinks: mainLinks,

  suggestedNotFoundLinks: mainLinks,
  frequentlyAskedQuestions: [
    {
      question: "What is shadcn marketplace?",
      answer:
        "shadcn marketplace is a platform that provides premium, ready-to-use style variations for shadcn/ui components. We offer a variety of styles beyond the default and New York themes, allowing you to quickly transform the look and feel of your application.",
    },
    {
      question:
        "How do the styles integrate with my existing shadcn/ui components?",
      answer:
        "Our styles are designed as drop-in replacements for the default shadcn/ui styling. You don't need to modify your component usage or structure. Simply import and apply our style configuration, and all your components will be transformed instantly.",
    },
    {
      question: "Do the styles work with the latest version of shadcn/ui?",
      answer:
        "Yes, we keep our styles up-to-date with the latest shadcn/ui releases. We thoroughly test each style with the current version to ensure compatibility and consistency across all components.",
    },
    {
      question: "Can I customize the styles after purchasing?",
      answer:
        "Our styles are designed to be fully customizable. You can use them as a starting point and modify colors, spacing, typography, and other properties to match your brand's unique identity.",
    },
    {
      question: "Do the styles include dark mode support?",
      answer:
        "Yes, all our styles come with carefully crafted dark mode variants that look just as good as their light counterparts. The dark mode styling is automatically applied when your application's theme changes.",
    },
    {
      question: "What's included in the purchase?",
      answer:
        "When you purchase a style, you receive the complete style configuration file, documentation on how to integrate and customize it, and free updates for the period specified in your plan. You also get access to our support channels for any questions or issues.",
    },
    {
      question: "Can I use the styles in multiple projects?",
      answer:
        "Yes, depending on the plan you choose. The Individual plan allows usage on unlimited personal projects, while the Professional and Enterprise plans allow usage on unlimited commercial projects. Check our pricing section for more details.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 14-day money-back guarantee if you're not satisfied with your purchase. Simply contact our support team within 14 days of your purchase, and we'll process your refund.",
    },
  ],
};

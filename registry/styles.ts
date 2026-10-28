export const styles = [
  {
    name: "default",
    label: "Default",
    title: "Default",
    description:
      "The default style is a versatile and widely used design that provides a clean and modern look for user interfaces. It features a balanced combination of colors, typography, and spacing, making it suitable for various applications and platforms.",
    defaultRadius: "0.5rem",
  },

  {
    name: "carbon",
    label: "Carbon",
    title: "Carbon",
    description:
      "IBM inspired design system with a focus on accessibility and usability.",
    defaultRadius: "0rem",
  },

  {
    name: "catalyst",
    label: "Catalyst",
    title: "Catalyst",
    description:
      "Sleek and modern design system with a focus on simplicity and elegance.",
    defaultRadius: "0.6rem",
  },
  {
    name: "linear",
    label: "Linear",
    title: "Linear",
    description:
      "Linear inspired design system with a focus on minimalism and clarity.",
    defaultRadius: "0.5rem",
  },
  {
    name: "material",
    label: "Material",
    title: "Material",
    description:
      "Material Design inspired design system with a focus on usability and consistency.",
    defaultRadius: "0.75rem",
  },
  {
    name: "spectrum",
    label: "Spectrum",
    title: "Spectrum",
    description:
      "Adobe inspired design system with a focus on creativity and collaboration.",
    defaultRadius: "0.4rem",
  },
  {
    name: "wedges",
    label: "Wedges",
    title: "Wedges",
    description:
      "Reach and visually appealing design system with a focus on user engagement and interaction.",
    defaultRadius: "0.5rem",
  },
  {
    name: "moon",
    label: "Moon",
    title: "Moon",
    description:
      "Elegant and modern design system with a focus on simplicity and clarity.",
    defaultRadius: "0.6rem",
  },
  {
    name: "lucid",
    label: "Lucid",
    title: "Lucid",
    description:
      "Clear and intuitive design system with a focus on user experience and accessibility.",
    defaultRadius: "0.5rem",
  },
  {
    name: "snow",
    label: "Snow",
    title: "Snow",
    description:
      "Cool and refreshing design system with a focus on clarity and simplicity.",
    defaultRadius: "0.4rem",
  },
  {
    name: "neon",
    label: "Neon",
    title: "Neon",
    description:
      "Vibrant and energetic design system with a focus on bold colors and dynamic visuals.",
    defaultRadius: "0rem",
  },
  {
    name: "libelle",
    label: "Libelle",
    title: "Libelle",
    description:
      "Lightweight and elegant design system with a focus on simplicity and clarity.",
    defaultRadius: "0rem",
  },
];

export const DEFAULT_STYLE = styles[1];

export const STYLES = styles;

export type StyleRegistry = (typeof styles)[number];
export type Style = StyleRegistry;

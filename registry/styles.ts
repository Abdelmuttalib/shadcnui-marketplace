export const styles = [
  {
    name: "default",
    label: "Default",
    title: "Default",
    description:
      "The default style is a versatile and widely used design that provides a clean and modern look for user interfaces. It features a balanced combination of colors, typography, and spacing, making it suitable for various applications and platforms.",
    defaultRadius: "0.5rem",
    // css prefix for the style, used for scoping css variables
    cssPrefix: "dft",
    font: "inter",
    fontHeading: "inherit",
  },
  {
    name: "carbon",
    label: "Carbon",
    title: "Carbon",
    description:
      "IBM inspired design system with a focus on accessibility and usability.",
    defaultRadius: "0rem",
    cssPrefix: "cb",
    font: "ibm-plex-sans",
    fontHeading: "inherit",
  },
  {
    name: "linear",
    label: "Linear",
    title: "Linear",
    description:
      "Linear inspired design system with a focus on minimalism and clarity.",
    defaultRadius: "0.5rem",
    cssPrefix: "linear",
    font: "inter",
    fontHeading: "inherit",
  },
  {
    name: "catalyst",
    label: "Catalyst",
    title: "Catalyst",
    description:
      "Sleek and modern design system with a focus on simplicity and elegance.",
    defaultRadius: "0.6rem",
    cssPrefix: "catalyst",
    font: "inter",
    fontHeading: "inherit",
  },
  {
    name: "material",
    label: "Material",
    title: "Material",
    description:
      "Material Design inspired design system with a focus on usability and consistency.",
    defaultRadius: "0.75rem",
    cssPrefix: "material",
    font: "roboto",
    fontHeading: "inherit",
  },
  {
    name: "spectrum",
    label: "Spectrum",
    title: "Spectrum",
    description:
      "Adobe inspired design system with a focus on creativity and collaboration.",
    defaultRadius: "0.4rem",
    cssPrefix: "spctm",
    font: "ubuntu",
    fontHeading: "inherit",
  },
  {
    name: "wedges",
    label: "Wedges",
    title: "Wedges",
    description:
      "Reach and visually appealing design system with a focus on user engagement and interaction.",
    defaultRadius: "0.5rem",
    cssPrefix: "wedges",
    font: "inter",
    fontHeading: "inherit",
  },
  {
    name: "moon",
    label: "Moon",
    title: "Moon",
    description:
      "Elegant and modern design system with a focus on simplicity and clarity.",
    defaultRadius: "0.6rem",
    cssPrefix: "moon",
    font: "inter",
    fontHeading: "inherit",
  },
  {
    name: "lucid",
    label: "Lucid",
    title: "Lucid",
    description:
      "Clear and intuitive design system with a focus on user experience and accessibility.",
    defaultRadius: "0.5rem",
    cssPrefix: "lucid",
    font: "inter",
    fontHeading: "inherit",
  },
  {
    name: "snow",
    label: "Snow",
    title: "Snow",
    description:
      "Cool and refreshing design system with a focus on clarity and simplicity.",
    defaultRadius: "0.4rem",
    cssPrefix: "snow",
    font: "inter",
    fontHeading: "inherit",
  },
  {
    name: "neon",
    label: "Neon",
    title: "Neon",
    description:
      "Vibrant and energetic design system with a focus on bold colors and dynamic visuals.",
    defaultRadius: "0rem",
    cssPrefix: "neon",
    font: "poppins",
    fontHeading: "inherit",
  },
  {
    name: "libelle",
    label: "Libelle",
    title: "Libelle",
    description:
      "Lightweight and elegant design system with a focus on simplicity and clarity.",
    defaultRadius: "0rem",
    cssPrefix: "libelle",
    font: "outfit",
    fontHeading: "inherit",
  },
];

export const DEFAULT_STYLE = styles[2];

export const STYLES = styles;

export type StyleRegistry = (typeof styles)[number];
export type Style = StyleRegistry;
export type StyleName = StyleRegistry["name"];

import type { ReactNode } from "react";

function StyleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      color="currentColor"
      aria-hidden="true"
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export type StyleDefinition = {
  name: string;
  label: string;
  title: string;
  description: string;
  defaultRadius: string;
  icon: ReactNode;
};

export const styles = [
  {
    name: "default",
    label: "Default",
    title: "Default",
    description:
      "The default style is a versatile and widely used design that provides a clean and modern look for user interfaces. It features a balanced combination of colors, typography, and spacing, making it suitable for various applications and platforms.",
    defaultRadius: "0.5rem",
    icon: <StyleIcon />,
  },
  {
    name: "carbon",
    label: "Carbon",
    title: "Carbon",
    description:
      "IBM inspired design system with a focus on accessibility and usability.",
    defaultRadius: "0rem",
    icon: <StyleIcon />,
  },
  {
    name: "catalyst",
    label: "Catalyst",
    title: "Catalyst",
    description:
      "Sleek and modern design system with a focus on simplicity and elegance.",
    defaultRadius: "0.6rem",
    icon: <StyleIcon />,
  },
  {
    name: "linear",
    label: "Linear",
    title: "Linear",
    description:
      "Linear inspired design system with a focus on minimalism and clarity.",
    defaultRadius: "0.5rem",
    icon: <StyleIcon />,
  },
  {
    name: "material",
    label: "Material",
    title: "Material",
    description:
      "Material Design inspired design system with a focus on usability and consistency.",
    defaultRadius: "0.75rem",
    icon: <StyleIcon />,
  },
  {
    name: "spectrum",
    label: "Spectrum",
    title: "Spectrum",
    description:
      "Adobe inspired design system with a focus on creativity and collaboration.",
    defaultRadius: "0.4rem",
    icon: <StyleIcon />,
  },
  {
    name: "wedges",
    label: "Wedges",
    title: "Wedges",
    description:
      "Reach and visually appealing design system with a focus on user engagement and interaction.",
    defaultRadius: "0.5rem",
    icon: <StyleIcon />,
  },
  {
    name: "moon",
    label: "Moon",
    title: "Moon",
    description:
      "Elegant and modern design system with a focus on simplicity and clarity.",
    defaultRadius: "0.6rem",
    icon: <StyleIcon />,
  },
  {
    name: "lucid",
    label: "Lucid",
    title: "Lucid",
    description:
      "Clear and intuitive design system with a focus on user experience and accessibility.",
    defaultRadius: "0.5rem",
    icon: <StyleIcon />,
  },
  {
    name: "snow",
    label: "Snow",
    title: "Snow",
    description:
      "Cool and refreshing design system with a focus on clarity and simplicity.",
    defaultRadius: "0.4rem",
    icon: <StyleIcon />,
  },
  {
    name: "neon",
    label: "Neon",
    title: "Neon",
    description:
      "Vibrant and energetic design system with a focus on bold colors and dynamic visuals.",
    defaultRadius: "0rem",
    icon: <StyleIcon />,
  },
  {
    name: "libelle",
    label: "Libelle",
    title: "Libelle",
    description:
      "Lightweight and elegant design system with a focus on simplicity and clarity.",
    defaultRadius: "0rem",
    icon: <StyleIcon />,
  },
] satisfies StyleDefinition[];

export const DEFAULT_STYLE = styles[0];

export const STYLES = styles;

export type StyleRegistry = (typeof styles)[number];

export type Style = StyleRegistry;

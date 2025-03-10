import { Style as StyleT } from "@/hooks/use-style";

export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "new-york",
    label: "New York",
  },
] as const;

export type Style = (typeof styles)[number];

export function getStyleBackgroundClassname(style: StyleT) {
  switch (style) {
    case "default":
      return "bg-dft-background";
    case "carbon":
      return "bg-cb-background";
    case "linear":
      return "bg-linear-background";
    case "material":
      return "bg-material-background";
    case "catalyst":
      return "bg-catalyst-background";
  }
}

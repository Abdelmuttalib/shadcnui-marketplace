import { Style as StyleT } from "@/hooks/use-style-store";

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
    case "spectrum":
      return "bg-spctm-background";
    case "wedges":
      return "bg-wedges-background";
    case "moon":
      return "bg-moon-background";
    case "lucid":
      return "bg-lucid-background";
    case "snow":
      return "bg-snow-background";
    case "neon":
      return "bg-neon-background";
    case "libelle":
      return "bg-libelle-background";
    default:
      return "bg-linear-background";
  }
}

export function getStyleForegroundClassname(style: StyleT) {
  switch (style) {
    case "default":
      return "text-dft-foreground";
    case "carbon":
      return "text-cb-foreground";
    case "linear":
      return "text-linear-foreground";
    case "material":
      return "text-material-foreground";
    case "catalyst":
      return "text-catalyst-foreground";
    case "spectrum":
      return "text-spctm-foreground";
    case "wedges":
      return "text-wedges-foreground";
    case "moon":
      return "text-moon-foreground";
    case "lucid":
      return "text-lucid-foreground";
    case "snow":
      return "text-snow-foreground";
    case "neon":
      return "text-neon-foreground";
    case "libelle":
      return "text-libelle-foreground";
    default:
      return "text-linear-foreground";
  }
}

export function getStyleFontClassname(style: StyleT) {
  switch (style) {
    case "default":
      return "font-sans";
    case "carbon":
      return "font-carbon";
    case "linear":
      return "font-sans";
    case "material":
      return "font-roboto";
    case "catalyst":
      return "font-sans";
    case "spectrum":
      return "font-spectrum";
    case "wedges":
      return "font-sans";
    case "moon":
      return "font-sans";
    case "lucid":
      return "font-sans";
    case "snow":
      return "font-sans";
    case "neon":
      return "font-poppins";
    // return "font-work-sans";
    // return "font-dm-sans";
    // return "font-public-sans";
    case "libelle":
      return "font-outfit";
    default:
      return "font-sans";
  }
}

import { cn } from "@/lib/utils";

export function getStyleFontClassname(style: string | undefined) {
  switch (style) {
    case "default":
      return "font-sans";
    case "carbon":
      return "font-carbon";
    case "linear":
      return "font-sans";
    case "material":
      return "font-material";
    case "catalyst":
      return "font-sans";
    case "spectrum":
      return "font-spectrum";
    case "wedges":
      return "font-sans";
    case "snow":
      return "font-sans";
    case "moon":
      return "font-sans";
    case "lucid":
      return "font-sans";
    case "neon":
      return "font-poppins";
    case "libelle":
      return "font-outfit";
    default:
      return "font-sans";
  }
}

type StyleFontWrapperProps = React.ComponentPropsWithoutRef<"div"> & {
  sStyle?: string;
};

export function StyleFontWrapper({
  children,
  className,
  sStyle,
  ...props
}: StyleFontWrapperProps) {
  const stylesFonts = {
    default: "font-sans",
    carbon: "font-carbon",
    linear: "font-sans",
    material: "font-material",
    catalyst: "font-sans",
    spectrum: "font-spectrum",
  };

  return (
    <div className={cn(getStyleFontClassname(sStyle), className)} {...props}>
      {children}
    </div>
  );
}

export function StyleCssWrapper({
  children,
  className,
  style,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: string;
}>) {
  const styles = {
    default: "bg-dft-background",
    carbon: "bg-cb-background",
    linear: "bg-linear-background",
    material: "bg-material-background",
    catalyst: "bg-catalyst-background",
    wedges: "bg-wedges-background",
    spectrum: "bg-spctm-background",
    moon: "bg-moon-background",
    lucid: "bg-lucid-background",
    snow: "bg-snow-background",
    neon: "bg-neon-background",
  };

  return (
    <div className={cn(styles[style as keyof typeof styles], className)}>
      {children}
    </div>
  );
}

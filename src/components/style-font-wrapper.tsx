import { cn } from "@/lib/utils";

export function StyleFontWrapper({
  children,
  className,
  style,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: string;
}>) {
  const styles = {
    default: "font-sans",
    carbon: "font-carbon",
    linear: "font-sans",
    material: "font-material",
    catalyst: "font-sans",
  };

  return (
    <div className={cn(styles[style as keyof typeof styles], className)}>
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
  };

  return (
    <div className={cn(styles[style as keyof typeof styles], className)}>
      {children}
    </div>
  );
}

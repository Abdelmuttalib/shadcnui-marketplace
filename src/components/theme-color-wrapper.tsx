import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@/utils/cn";
import { useEffect } from "react";

interface ThemeColorWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeColorWrapper({
  children,
  className,
}: ThemeColorWrapperProps) {
  const [themeColor] = useThemeColor();

  useEffect(() => {
    if (document) {
      // Remove existing theme color classes and add the new one
      document.documentElement.classList.forEach((className) => {
        if (className.startsWith("theme-")) {
          document.documentElement.classList.remove(className);
        }
      });
      document.documentElement.classList.add(`theme-${themeColor.colorName}`);
    }
  }, [themeColor]);

  return (
    <div
      className={cn(
        // `theme-${defaultTheme || themeColor}`,
        "relative w-full",
        // fonts,
        // fontSizeClass,
        className
      )}
      // style={
      //   {
      //     "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
      //   } as React.CSSProperties
      // }
    >
      {children}
    </div>
  );
}

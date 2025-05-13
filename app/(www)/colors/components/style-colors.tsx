import { Typography } from "@/components/ui/typography";
import { Style, STYLES } from "@/hooks/use-style-store";
import { getStyleVariablesPrefix } from "@/registry/styles";

export function StylesColors() {
  return (
    <>
      {STYLES.map((style) => (
        <StyleColors key={style} style={style} />
      ))}
    </>
  );
}

function StyleColors({ style }: { style: Style }) {
  const cssVariablesKeys = [
    "background",
    "foreground",
    "card",
    "card-foreground",
    "popover",
    "popover-foreground",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "muted",
    "muted-foreground",
    "accent",
    "accent-foreground",
    "destructive",
    "destructive-foreground",
    "border",
    "input",
    "ring",
    "chart-1",
    "chart-2",
    "chart-3",
    "chart-4",
    "chart-5",
    "sidebar-background",
    "sidebar-foreground",
    "sidebar-primary",
    "sidebar-primary-foreground",
    "sidebar-accent",
    "sidebar-accent-foreground",
    "sidebar-border",
  ];

  const stylePrefix = getStyleVariablesPrefix(style);

  const styleSpecificVariables = cssVariablesKeys.map(
    (key) => `--${stylePrefix}-${key}`
  );

  const styleSpecificVariablesColors = styleSpecificVariables.map(
    (key) => `oklch(var(${key}))`
  );

  return (
    <div className="grid scroll-mt-16 gap-6" id={`${style}-colors`}>
      <div>
        <Typography
          as={"h2"}
          variant="4xl/semibold"
          className="font-[490] tracking-tighter"
        >
          <span className="capitalize">{style}</span> colors
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {styleSpecificVariables.map((variable, index) => (
          <div key={variable} className="grid gap-2">
            <div
              className="h-20 w-full rounded-md border"
              style={{
                backgroundColor: styleSpecificVariablesColors[index],
              }}
            ></div>
            <p className="font-mono text-sm font-medium">{variable}</p>
            <p className="text-sm text-muted-foreground">
              {styleSpecificVariablesColors[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { Style, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { mainPaletteColorsKeys } from "@/registry/registry-palettes";
import { getStyleVariablesPrefix } from "@/registry/styles";

export function StylePreviewCard({
  title,
  style,
  asLink,
  href,
}: {
  title: string;
  style: Style;
  asLink?: boolean;
  href?: string;
}) {
  const { pageExampleType } = useStyleStore();

  const stylePrimaryColorCssVariableName = `--${getStyleVariablesPrefix(
    style
  )}-primary`;
  const styleCssVariableWithPrefix = `--${getStyleVariablesPrefix(style)}`;

  return (
    <div className="group relative flex max-h-[30rem] min-h-[30rem] w-full flex-col gap-2 overflow-hidden rounded-md border bg-gradient-to-r from-transparent to-accent p-6">
      {/* <div className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-transparent to-accent"></div> */}
      <div className="z-20 flex w-full items-center justify-between">
        <Typography
          variant="3xl/semibold"
          className="font-[490] capitalize tracking-tight"
        >
          {title}
        </Typography>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2">
            <RichBadge variant="neutral" className="capitalize">
              Palette
            </RichBadge>
            <div className="flex rounded-sm border">
              {mainPaletteColorsKeys.map((color, index) => (
                <div
                  key={`light-${color}`}
                  className={cn("size-6", {
                    "rounded-l-sm": index === 0,
                    "rounded-r-sm": index === mainPaletteColorsKeys.length - 1,
                  })}
                  style={{
                    // backgroundColor: `oklch(${palette.light[color]})`,
                    backgroundColor: `oklch(var(${styleCssVariableWithPrefix}-${color}))`,
                  }}
                  title={`${title}-${style}-${color}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative -ml-1">
        <div
          className="absolute left-0 top-0 z-10 flex size-[29rem] items-center justify-center opacity-40 blur-xl transition-all duration-200 ease-in-out group-hover:size-96 group-hover:opacity-50 group-hover:blur-lg"
          style={{
            backgroundColor: `oklch(var(${stylePrimaryColorCssVariableName}))`,
          }}
        ></div>
        <StylePageExamplePreview
          id="dashboard"
          styleProp={style}
          pageExampleTypeProp={pageExampleType || "dashboard"}
          hideBadge={true}
          className="absolute left-0 top-0 z-20 w-[70vw] max-w-[70vw]"
        />
      </div>
    </div>
  );
}

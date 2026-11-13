"use client";

import { useParams } from "next/navigation";
import { StyleName, STYLES } from "@/registry/styles";
import { ExamplePreview } from "./common/example-preview";

export function PreviewSurface() {
  const params = useParams<{ style?: string }>();
  const styleName = params?.style;

  // const preset = useMemo(() => (code ? getDecodedPreset(code) : null), [code]);
  // const theme = useMemo(() => (code ? getBuiltTheme(code) : null), [code]);

  if (!styleName) return null;

  const isValidStyle = STYLES.find((s) => s.name === styleName);

  if (!isValidStyle) return null;

  return (
    <div className="h-full w-full">
      <ExamplePreview style={styleName as any} aspectRatio="2528 / 1440" />
    </div>
  );
}

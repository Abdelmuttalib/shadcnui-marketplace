"use client";

import { useParams } from "next/navigation";
import { STYLES } from "@/registry/styles";

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
      <iframe src={`/example/${styleName}/music`} className="h-full w-full" />
    </div>
  );

  // return (
  //   <DesignSystemProvider preset={preset} theme={theme}>
  //     <Preview02Example />
  //   </DesignSystemProvider>
  // );
}

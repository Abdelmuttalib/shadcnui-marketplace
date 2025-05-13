import { StylePreviewCard } from "@/components/common/style-preview-card";
import { stylesDataList } from "@/hooks/use-style-store";

export function StylesPreview() {
  return (
    <>
      {stylesDataList
        .filter((style) => style.name !== "default")
        .map((style) => (
          <StylePreviewCard
            key={style.name}
            title={style.title}
            style={style.name}
            href={`/styles/${style.name}`}
          />
        ))}
    </>
  );
}

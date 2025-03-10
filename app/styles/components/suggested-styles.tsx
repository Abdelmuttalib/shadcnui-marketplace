import { PageContainer } from "@/components/common/page-container";
import { Typography } from "@/components/ui/typography";
import { StyleShowcaseCardLink } from "@/components/views/styles/style-showcase-card-link";
import { Style, STYLES } from "@/hooks/use-style";

export function SuggestedStyles({ excludedStyle }: { excludedStyle: Style }) {
  return (
    <PageContainer className="mt-56 grid gap-6">
      <div className="grid">
        <Typography as="h3" variant="xl/medium">
          Discover more styles
        </Typography>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {STYLES.filter((s) => s !== excludedStyle && s !== "default").map(
          (s) => (
            <StyleShowcaseCardLink key={s} style={s} />
          )
        )}
      </div>
    </PageContainer>
  );
}

import { ScreenContainer } from "@/components/container";
import { GradientBackground } from "@/components/gradient";
import { Typography } from "@/components/ui/typography";
import { ExamplesLayout } from "@/components/views/examples";
import { examplesRegistry } from "@/config/data";

export default function ExamplesPage() {
  return (
    <>
      <AllExamples />
    </>
  );
}

export function AllExamples() {
  const ex1 = examplesRegistry["portfolios"];
  const ex2 = examplesRegistry["features"];
  const ex3 = examplesRegistry["landing-pages"];

  const examples = [ex1, ex2, ex3];

  return (
    <div className="relative isolate mt-16 md:mt-32 pt-10" id="examples">
      <ScreenContainer>
        <div className="relative flex flex-col items-center justify-center text-center gap-4">
          <GradientBackground />
          <Typography variant="display-lg/medium" className="tracking-tight">
            Examples & Templates
          </Typography>
          <Typography
            variant="xl/regular"
            className="text-foreground-secondary max-w-3xl"
          >
            Discover a wide range of examples and templates to help you quickly
            build your next project.
          </Typography>
        </div>
        {examples.map((example) =>
          example.map((example, index) => (
            <ExamplesLayout
              key={index}
              title={example.title}
              description={example.description}
              href={example.href}
              code={example.code}
              codePath={example.codePath}
              // className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0"
            />
          ))
        )}
      </ScreenContainer>
    </div>
  );
}

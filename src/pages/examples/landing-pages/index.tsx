import React from "react";
import { Typography } from "@/components/ui/typography";
import { ScreenContainer } from "@/components/container";
import { UICustomizer } from "@/components/ui-customizer";
import { applicationUIComponentsData, examplesRegistry } from "@/config/data";
import {
  ComponentShowcaseCard,
  ExamplesLayout,
  FeaturesExamples,
} from "@/components/views/examples";
import { GradientBackground } from "@/components/gradient";

export default function LandingPage1() {
  return <ExamplesShowcaseDemo />;
}

export function ExamplesShowcaseDemo() {
  return (
    <div className="mt-16 md:mt-32 pt-10" id="features">
      <ScreenContainer>
        <div>
          <UICustomizer />
          <div className="relative flex flex-col items-center justify-center text-center gap-4">
            {/* <GradientBackground /> */}
            <Typography variant="display-lg/medium" className="tracking-tight">
              Examples & Templates
            </Typography>
            <Typography
              variant="xl/regular"
              className="text-foreground-secondary max-w-3xl"
            >
              Discover a wide range of examples and templates to help you
              quickly build your next project.
            </Typography>
          </div>
          <LandingPageExamples />
          <FeaturesExamples />
        </div>
        {/* <SuggestedComponentsSection /> */}
      </ScreenContainer>
    </div>
  );
}

function LandingPageExamples() {
  const examples = examplesRegistry["landing-pages"];
  return (
    <div>
      {examples.map((example, index) => (
        <ExamplesLayout
          key={index}
          title={example.title}
          description={example.description}
          href={example.href}
          // className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0"
        />
      ))}
    </div>
  );
}

const suggestedComponentsData = [
  {
    title: "Features Sections",
    description: "Features Sections are used to showcase features.",
    href: "/examples/landing-page",
    examplesCount: 4,
  },
];

function SuggestedComponentsSection() {
  return (
    <div className="lg:mt-72 mb-24">
      <div className="space-y-2">
        <Typography as="h2" variant="display-xs/medium">
          {/* Landing Pages */}
          Explore more examples
        </Typography>
        {/* <Typography
          as="h2"
          variant="md/regular"
          className="text-foreground-secondary"
        >
          description
        </Typography> */}
      </div>
      <div>
        <section
          // id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
          className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-6"
        >
          {/* <h3 className="text-base font-semibold text-foreground">{title}</h3> */}
          <ul className="relative col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {suggestedComponentsData.map((component, index) => (
              <li key={component.title + index}>
                <ComponentShowcaseCard {...component} />
              </li>
            ))}
            {/* {suggestedComponentsData.map((section) => (
              <ShowcaseCommingSoonSection
                key={section.title}
                title={section.title}
                // components={section.components}
              />
            ))} */}
          </ul>
        </section>
      </div>
    </div>
  );
}

import * as React from "react";

import Container, { ScreenContainer } from "@/components/container";
import Head from "next/head";
import {
  applicationUIComponentsData,
  SOURCE_SHADCN_CARBON_URL,
} from "@/config/data";
import { DemoShowcase } from "@/components/demo";
import {
  ExamplesLayout,
  ShowcaseCommingSoonSection2,
} from "@/components/views/examples";
import { ExamplesShowcaseDemo } from "./examples/landing-pages";
import { Typography } from "@/components/ui/typography";
import { exampleCode } from "@/components/views/docs/code";

// #030101
// #0300d6
// hsl(100, 9%, 93%)
// #edefec
// rgb(237, 239, 236)

export function ApplicationUI() {
  return (
    <section id="product-application-ui" className="scroll-mt-28">
      <ScreenContainer>
        <h2 className="text-xl font-bold text-foreground">
          shadcn ui Application UI Styles
        </h2>
        <p className="mt-3 text-sm/7 text-foreground-secondary">
          {/* Form layouts, tables, modal dialogs — everything you need to build
          beautiful responsive web applications. */}
          Button styles, tables, badges and everything of shadcn ui components
          with multiple styles to choose from.
        </p>
        <div className="mt-4">
          {applicationUIComponentsData.map((section) => (
            <ShowcaseCommingSoonSection2
              key={section.title}
              title={section.title}
              components={section.components}
            />
          ))}
          {/* {applicationUIData.map((section) => (
            <ShowcaseSection title={section.title} cards={section.cards} />
          ))} */}
        </div>
      </ScreenContainer>
    </section>
  );
}

export function Styles() {
  return (
    <div className="relative isolate mt-16 md:mt-32 pt-10 z-10" id="styles">
      <ScreenContainer>
        <div className="relative flex flex-col items-center justify-center text-center gap-4">
          <Typography variant="display-lg/medium" className="tracking-tight">
            Styles
          </Typography>
          <Typography
            variant="xl/regular"
            className="text-foreground-secondary max-w-3xl"
          >
            Discover a wide range of examples and templates to help you quickly
            build your next project.
          </Typography>
        </div>
        <ExamplesLayout
          // key={index}
          title="shadcn Carbon"
          description="a Carbon inspired design system style for shadcn ui"
          href={`${SOURCE_SHADCN_CARBON_URL}/showcase`}
          code={exampleCode}
          codePath={"/code/examples/features/features-1"}
          // className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0"
        />
      </ScreenContainer>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>shadcn ui styles</title>
        <meta
          name="description"
          content="shadcn ui styles, A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        <meta property="og:title" content="shadcn-ui Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="shadcn,ui, shadcn ui style, shadcn ui components, design system, design, components, ui kit, ui components, ui kits, react, react ui kit, react ui components, react components, component library, component kit, component ui kit, component ui components, components library, components kit, design system components, design system kit, design system ui kit, design system ui components, design systems, design ui kits, design ui components, ui design kits, ui design components, ui design systems, ui ui kits, ui ui components, open source, open source components, open source design systems, open source ui kits, open source ui components, shadcn ui, shadcn ui style, shadcn ui components, shadcn design system, shadcn design ui kits, shadcn design ui components, shadcn ui new york, shadcn ui design, shadcn ui styles, new york, new york style, new york components, new york design system, new york ui kits, new york ui components"
        />

        <meta
          name="description"
          content="A marketplace for shadcn ui kits and styles. Discover premium shadcn ui styles and ui designs for your web applications."
        />

        <meta property="og:title" content="shadcn ui Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for shadcn ui kits and styles. Discover premium shadcn ui styles and ui designs for your web applications."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="shadcn ui, shadcn ui Marketplace, UI Kits, UI Styles, shadcn ui Components, Web Design, Frontend UI, shadcn ui styles, shadcn ui kits, shadcn ui, shadcn ui Marketplace, Frontend UI, Design System, TailwindCSS, CSS, HTML, JavaScript, TypeScript"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="mb-40 space-y-40 flex-grow">
          {/* <Hero /> */}
          <DemoShowcase />
          <div className="mt-16 md:mt-32 pt-10" id="features">
            <ScreenContainer>
              <div>
                <Styles />
              </div>
            </ScreenContainer>
          </div>
          <ExamplesShowcaseDemo />
          {/* <div className="relative w-[32rem] h-52 bg-white z-[99999] isolate flex items-center justify-center m-64">
            <p className="absolute bottom-6 text-foreground-subtle/60 text-[10px] underline decoration-foreground-subtle/30 underline-offset-2">
              www.shadcn.style
            </p>
            <div className="p-5 bg-gray-50 flex flex-col sm:flex-row items-center gap-2 border rounded-lg">
              <div className="relative w-full">
                <label htmlFor="hero-input" className="sr-only">
                  Subscribe
                </label>
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                  <svg
                    className="shrink-0 size-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <Input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-2 ps-9 pe-3"
                  placeholder="Enter your email"
                />
              </div>
              <Button type="button" size={"sm"}>
                Join
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div> */}

          <ApplicationUI />
        </main>
        <footer className="mt-auto pt-8 pb-6 border-t border-border">
          <Container className="relative">
            <div className="relative text-center">
              <h3 className="text-foreground-secondary to-black h-fit">
                shadcn ui styles, beyond Default and New York
              </h3>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}

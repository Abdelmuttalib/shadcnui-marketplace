import * as React from "react";

import Container, { ScreenContainer } from "@/components/container";
import Head from "next/head";
import { applicationUIComponentsData } from "@/config/data";
import { DemoShowcase } from "@/components/demo";
import { ShowcaseCommingSoonSection2 } from "@/components/views/examples";
import { ExamplesShowcaseDemo } from "./examples/landing-pages";

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
          <ExamplesShowcaseDemo />
          {/* <ScreenContainer>
            <DD />
          </ScreenContainer> */}
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

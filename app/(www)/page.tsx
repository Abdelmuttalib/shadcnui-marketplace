import {
  CodeIcon,
  LayersIcon,
  PaletteIcon,
  RepeatIcon,
  SparklesIcon,
  Wand2Icon,
} from "lucide-react";
import { ArrowRight, Download, Paintbrush, Wrench } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { PageExampleSelect } from "@/components/common/page-example-select";
import { PageSubTitle, PageTitle } from "@/components/common/page-header";
import { ShowcaseStylePageExamplePreview } from "@/components/common/showcase-style-page-example-preview";
import { StyleGradientBackgroundColorComponent } from "@/components/common/style-background-color-component";
import { StyleHeroUI } from "@/components/common/style-hero-ui";
import { StylePreviewCard } from "@/components/common/style-preview-card";
import { StyleSelect } from "@/components/common/style-select";
import { ThemePaletteSelect } from "@/components/common/theme-palette-select";
import { StyleFontWrapper } from "@/components/style-font-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { stylesDataList } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";

function FeaturesSection() {
  const features = [
    {
      icon: PaletteIcon,
      title: "Curated Style Library",
      description:
        "Access a growing collection of professionally designed styles, from minimal to brutalist, corporate to playful.",
    },
    {
      icon: CodeIcon,
      title: "Simple Integration",
      description:
        "Drop-in replacement for shadcn/ui's default styles. No need to modify your component usage or structure.",
    },
    // {
    //   icon: <Brush className="h-6 w-6 text-primary" />,
    //   title: "Fully Customizable",
    //   description:
    //     "Use our styles as a starting point and customize them to match your brand's unique identity.",
    // },
    {
      icon: LayersIcon,
      title: "Component Consistency",
      description:
        "Each style is applied consistently across all shadcn/ui components, ensuring a cohesive look and feel.",
    },
    {
      icon: Wand2Icon,
      title: "Dark Mode Included",
      description:
        "Every style comes with carefully crafted dark mode variants that look just as good as their light counterparts.",
    },
    {
      icon: RepeatIcon,
      title: "Version Compatibility",
      description:
        "Our styles are kept up-to-date with the latest shadcn/ui releases, ensuring compatibility and consistency.",
    },
    {
      icon: SparklesIcon,
      title: "Unique Aesthetics",
      description:
        "Stand out from the crowd with distinctive styles that go beyond the standard look of web applications.",
    },
  ];

  return (
    <div>
      <PageContainer>
        <div>
          <div className="mb-16 space-y-4">
            <PageTitle as={"h2"}>Why Choose Our Custom Styles?</PageTitle>
            {/* <h2 className="text-3xl font-bold md:text-4xl">
            Why Choose Our Custom Styles
          </h2> */}
            <PageSubTitle className="max-w-2xl">
              Enhance your shadcn/ui components with professionally designed
              styles that make your application stand out.
            </PageSubTitle>
            {/* <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Enhance your shadcn/ui components with professionally designed
              styles that make your application stand out.
            </p> */}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-background to-accent/10 transition-colors hover:border-input hover:to-accent/60"
                >
                  <CardHeader className="pb-2">
                    <div className="mb-2">
                      <span className="inline-flex rounded-md border bg-muted/60 p-1.5 group-hover:bg-muted/80">
                        <FeatureIcon className="size-5 text-foreground" />
                      </span>
                    </div>
                    <CardTitle className="text-xl font-medium">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Choose & Download",
      description:
        "Browse our collection of premium styles and select the one that best fits your project's aesthetic.",
    },
    {
      number: "02",
      icon: Paintbrush,
      title: "Apply the Style",
      description:
        "Integrate the style into your project with our simple configuration. Just a few lines of code to transform your UI.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Customize (Optional)",
      description:
        "Tweak the style to match your brand's identity. Our styles are designed to be easily customizable.",
    },
  ];

  return (
    <div>
      <div>
        <div className="mb-16 space-y-4">
          <PageTitle as={"h2"}>How it works</PageTitle>
          <PageSubTitle className="max-w-2xl">
            Transform your shadcn/ui components in minutes with our simple
            integration process.
          </PageSubTitle>
          {/* <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transform your shadcn/ui components in minutes with our simple
            integration process.
          </p> */}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={index} className="group relative">
                <div className="z-[99999] mb-4 flex h-10 w-10 items-center justify-center rounded-md border bg-accent/30 group-hover:border-primary/30 group-hover:bg-accent/50">
                  <StepIcon className="h-5 w-5 text-foreground" />
                </div>
                <div className="absolute left-0 top-10 -mr-4 hidden font-mono text-4xl font-bold text-muted-foreground/30 group-hover:text-foreground md:block">
                  {step.number}
                </div>
                <div className="mt-10 space-y-1">
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-0 top-10 hidden h-px w-full bg-border md:block">
                    <ArrowRight className="absolute -right-3 -top-2 h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex gap-2">
          <Button>
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary">
            Browse All Styles <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main>
          <div
            className={cn(
              "relative min-h-screen w-full overflow-x-hidden pb-56"
            )}
          >
            <StyleGradientBackgroundColorComponent className="absolute inset-0 w-full" />

            <PageContainer>
              <div className="relative grid w-full grid-cols-1 pt-16 sm:pt-20 xl:pt-28">
                <Typography
                  as={"h1"}
                  variant="6xl/semibold"
                  className="z-10 col-start-1 row-start-1 font-[490] tracking-tighter xl:max-w-[36rem]"
                >
                  shadcn ui marketplace
                </Typography>

                <Typography
                  as="p"
                  variant="lg/normal"
                  className="z-10 col-start-1 row-start-2 mt-4 max-w-xl text-muted-foreground"
                >
                  Discover the best shadcn ui kits and styles for modern web
                  interfaces.
                </Typography>
                <div className="z-10 col-start-1 row-start-3 mt-6 flex w-fit flex-col gap-y-4 rounded-lg p-0.5 sm:gap-x-4 sm:gap-y-4">
                  <StyleSelect />
                  {/* <div className="flex flex-col gap-2 md:flex-row">
                    <Button>Get Started</Button>
                    <Button variant={"secondary"}>See Previews</Button>
                  </div> */}
                </div>
                {/* pointer-events-none  */}
                <StyleFontWrapper className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end">
                  <StyleHeroUI />
                </StyleFontWrapper>
              </div>
            </PageContainer>
          </div>

          {/* <LandingPageSection sectionId="features">
            <FeaturesSection />
          </LandingPageSection> */}

          {/* <LandingPageSection
            sectionId="shadcn-ui-styles"
            className="flex flex-col gap-8"
          >
            <PageContainer>
              <div className="space-y-4">
                <PageTitle>
                  <span className="lowercase">A Marketplace for shadcn ui</span>
                  <br />
                  <span className="flex w-fit gap-4 divide-x-2 rounded-lg border bg-accent/10">
                    <span className="decoration p-4 capitalize italic text-foreground underline decoration-blue-500 underline-offset-4">
                      Styles
                    </span>{" "}
                    <span className="decoration p-4 capitalize italic text-foreground underline decoration-orange-500 underline-offset-4">
                      Palletes
                    </span>{" "}
                    <span className="decoration p-4 capitalize italic text-foreground underline decoration-emerald-500 underline-offset-4">
                      Blocks
                    </span>
                  </span>
                </PageTitle>
              </div>
            </PageContainer>
          </LandingPageSection> */}

          <LandingPageSection
            sectionId="shadcn-ui-styles"
            className="flex min-h-screen flex-col gap-8"
          >
            <PageContainer>
              <div className="space-y-4">
                <PageTitle>
                  <span className="lowercase">shadcn, </span>
                  <span className="decoration lowercase italic text-foreground underline decoration-primary underline-offset-4">
                    your way
                  </span>
                </PageTitle>

                <Typography
                  as="p"
                  variant="lg/normal"
                  className="text-muted-foreground"
                >
                  Discover the best shadcn ui kits and styles for modern web
                  interfaces.
                </Typography>
              </div>
            </PageContainer>
            <PageContainer>
              <div>
                <div className="flex items-end justify-between gap-4 py-4">
                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex w-full flex-col gap-2 md:w-auto">
                      <h2 className="w-fit rounded-md border border-input bg-accent/80 px-1.5 py-0.5 text-sm font-medium text-muted-foreground">
                        Choose style
                      </h2>
                      <div className="w-full">
                        <StyleSelect />
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-2 md:w-auto">
                      <h2 className="w-fit rounded-md border border-input bg-accent/80 px-1.5 py-0.5 text-sm font-medium text-muted-foreground">
                        Choose example
                      </h2>
                      <PageExampleSelect />
                    </div>
                    <div className="flex w-full flex-col gap-2 md:w-auto">
                      <h2 className="w-fit rounded-md border border-input bg-accent/80 px-1.5 py-0.5 text-sm font-medium text-muted-foreground">
                        Choose palette
                      </h2>
                      <ThemePaletteSelect />
                    </div>
                  </div>
                  {/* <div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onResetPalette}
                    >
                      <Undo2 />
                      Reset Palette
                    </Button>
                  </div> */}
                </div>
              </div>
            </PageContainer>

            <div className="relative flex h-full min-h-screen gap-8 py-4">
              <PageContainer size="xl" className="relative">
                <ShowcaseStylePageExamplePreview />
              </PageContainer>
            </div>
          </LandingPageSection>

          {/* <LandingPageSection sectionId="how-it-works">
            <PageContainer>
              <div>
                <HowItWorksSection />
              </div>
            </PageContainer>
          </LandingPageSection> */}

          <LandingPageSection sectionId="styles">
            <div>
              <div className="grid grid-cols-1 gap-12">
                <PageContainer>
                  <div className="space-y-2">
                    <PageTitle as={"h2"} className="">
                      custom shadcn styles,
                      <br /> inspired by popular design systems
                    </PageTitle>
                    <PageSubTitle className="max-w-2xl">
                      <span className="text-muted-foreground">
                        Discover custom shadcn styles and ui kits, inspired by
                        popular design systems. Easily download all custom
                        styled{" "}
                        <span className="rounded bg-accent p-1 font-mono text-sm">
                          /ui/*
                        </span>{" "}
                        components directly into your project.
                      </span>
                    </PageSubTitle>
                  </div>
                </PageContainer>
                <PageContainer size={"full"}>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                  </div>
                </PageContainer>
              </div>
            </div>
          </LandingPageSection>

          {/* <section>
            <div className="grid gap-6 py-20">
              <div className="flex flex-col">
                <PageContainer>
                  <div className="flex flex-col gap-4">
                    <PageTitle as={"h2"}>
                      <span className="lowercase">shadcn, </span>
                      <span className="decoration lowercase italic text-foreground underline decoration-primary underline-offset-4">
                        your way
                      </span>
                    </PageTitle>

                    <div className="sticky top-16 z-20 w-full space-y-2 bg-background/[0.7] py-2 backdrop-blur-sm">
                      <div className="flex flex-col gap-1">
                        <div>
                          <RichBadge variant={"neutral"}>
                            <span>choose style:</span>
                          </RichBadge>
                        </div>
                        <StyleSelect />
                      </div>
                    </div>
                  </div>
                </PageContainer>
              </div>
              <div className="bg-accent py-4 dark:bg-background">
                <PageContainer size="xl">
                  <StyleShowcaseComponents />
                </PageContainer>
              </div>
            </div>
          </section> */}

          {/* <section className="relative py-32">
            <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div>
            <div className="grid gap-16">
              <PageContainer>
                <div className="">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div>
                        <RichBadge variant="blue">Blocks</RichBadge>
                      </div>
                      <Typography
                        as={"h2"}
                        variant="5xl/semibold"
                        className="font-[490] tracking-tighter"
                      >
                        Premium shadcn blocks
                      </Typography>
                    </div>
                    <Typography
                      as={"p"}
                      variant="lg/medium"
                      className="max-w-lg"
                    >
                      <span className="inline-block">
                        Discover premium shadcn blocks, well crafted, tested,
                        and developed with shadcn ui & tailwindcss.
                        <span className="text-muted-foreground">
                          {" "}
                          Copy & Paste blocks directly to your project.
                        </span>
                      </span>
                    </Typography>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Button>
                          Browse all Blocks
                          <ArrowRightIcon className="-rotate-45" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </PageContainer>
              <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:gap-8 lg:px-6">
                {blocksPreviewImagesData.map((blockPreviewImage, idx) => (
                  <div
                    key={blockPreviewImage.title + idx}
                    className="group relative"
                  >
                    <BlockCategoryPreviewCardLink
                      block={{
                        name: blockPreviewImage.title,
                        href: blockPreviewImage.href,
                        image: blockPreviewImage.imageSrc,
                        count: blockPreviewImage.blocksCount,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* <LandingPageSection sectionId="faq">
            <div>
              <div className="flex flex-col gap-8">
                <PageContainer>
                  <div className="mb-16 space-y-4">
                    <PageTitle as={"h2"}>Frequently Asked Questions</PageTitle>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                      Have questions? We&apos;ve got answers. If you don&apos;t
                      see what you&apos;re looking for, feel free to contact us.
                    </p>
                  </div>
                </PageContainer>
                <PageContainer>
                  <div className="">
                    <Accordion type="single" collapsible className="w-full">
                      {siteConfig.frequentlyAskedQuestions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-foreground/70">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </PageContainer>
              </div>
            </div>
          </LandingPageSection> */}
        </main>
      </div>
    </>
  );
}

function LandingPageSection({
  sectionId,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  className?: string;
  sectionId: string;
}) {
  return (
    <section
      id={sectionId}
      className={cn("relative py-20 md:py-32", className)}
    >
      {children}
    </section>
  );
}

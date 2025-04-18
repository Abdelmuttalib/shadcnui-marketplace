"use client";

import { ArrowRightIcon, Undo2 } from "lucide-react";
import {
  Brush,
  CodeIcon,
  LayersIcon,
  PaletteIcon,
  RepeatIcon,
  SparklesIcon,
  Wand2Icon,
  Zap,
} from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { PageExampleSelect } from "@/components/common/page-example-select";
import { PageSubTitle, PageTitle } from "@/components/common/page-header";
import { StyleSelect } from "@/components/common/style-select";
import { ThemePaletteSelect } from "@/components/common/theme-palettes";
import { StyleFontWrapper } from "@/components/style-font-wrapper";
import { useThemePalette } from "@/components/theme-customizer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { siteConfig } from "@/config/site-config";
import { Style, STYLES, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import {
  getStyleVariablesPrefix,
  renderStyleCardShowcase,
  renderStyleHero,
  renderStyleShowcaseComponents,
} from "@/registry/styles";

export function FeaturesSection() {
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

import { ArrowRight, Download, Paintbrush, Wrench } from "lucide-react";
import { useMemo } from "react";

import { useThemePaletteStore } from "@/lib/use-theme-palette-store";

export function HowItWorksSection() {
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
  const { style, pageExampleType } = useStyleStore();

  const { activePalette, onResetPalette } = useThemePaletteStore();

  const gradientClasses = useMemo(() => {
    return {
      fromVia: STYLES.map((_style) => {
        const cls = `from-${getStyleVariablesPrefix(
          _style
        )}-background via-${getStyleVariablesPrefix(
          _style
        )}-background to-background`;

        return {
          [cls]: style === _style,
        };
      }),
      from: STYLES.map((_style) => {
        const cls = `from-${getStyleVariablesPrefix(_style)}-background`;

        return {
          [cls]: style === _style,
        };
      }),
    };
  }, [style]);

  console.log("gradientClasses", gradientClasses);

  function getGradientClasses(style: Style) {
    return `from-${getStyleVariablesPrefix(
      style
    )}-background via-${getStyleVariablesPrefix(
      style
    )}-background to-background`;
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main>
          {/* <PageContainer size="xl"> */}
          <div
            className={cn(
              "relative min-h-screen w-full rounded-b-2xl bg-gradient-to-b pb-56",
              // gradientClasses.fromVia,
              getGradientClasses(style)
              // "from-material-background via-material-background to-background"
            )}
          >
            {/* <div
              className={cn("absolute bottom-0 left-0 right-0 h-24 w-full ", {
                "from-dft-background": style === "default",
                "from-cb-background": style === "carbon",
                "from-linear-background": style === "linear",
                "from-material-background": style === "material",
                "from-catalyst-background": style === "catalyst",
                "from-spctm-background": style === "spectrum",
                "from-wedges-background": style === "wedges",
                "from-moon-background": style === "moon",
                "from-lucid-background": style === "lucid",
                "from-neon-background": style === "neon",
              })}
            ></div> */}
            <PageContainer>
              <div className="max-w-container relative mx-auto grid w-full grid-cols-1 pt-16 sm:pt-20 xl:pt-28">
                <Typography
                  as={"h1"}
                  variant="6xl/semibold"
                  className="col-start-1 row-start-1 max-w-[36rem] font-[490] tracking-tighter"
                >
                  shadcn ui marketplace
                </Typography>

                <Typography
                  as="p"
                  variant="lg/normal"
                  className="col-start-1 row-start-2 mt-4 max-w-xl text-muted-foreground"
                  style={{
                    color: `oklch(var(--${getStyleVariablesPrefix(
                      style
                    )}-muted-foreground))`,
                  }}
                >
                  Discover the best shadcn ui kits and styles for modern web
                  interfaces.
                </Typography>
                <div className="z-20 col-start-1 row-start-3 mt-6 flex w-fit flex-col gap-y-4 rounded-lg p-0.5 sm:gap-x-4 sm:gap-y-4">
                  <StyleSelect />
                  {/* <div className="flex flex-col gap-2 md:flex-row">
                    <Button>Get Started</Button>
                    <Button variant={"secondary"}>See Previews</Button>
                  </div> */}
                </div>
                {/* pointer-events-none  */}
                <StyleFontWrapper
                  sStyle={style}
                  className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end"
                  // style={{
                  //   ["--material-radius"]: "0.9rem",
                  // }}
                >
                  {renderStyleHero(style)}
                </StyleFontWrapper>
              </div>
            </PageContainer>
          </div>

          {/* <ChartsDemo /> */}

          <a
            className="focus:ring-3 focus:outline-hidden group relative inline-block text-sm font-medium text-indigo-600"
            href="#"
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>

            <span className="relative block border border-current bg-white px-8 py-3">
              {" "}
              Download{" "}
            </span>
          </a>

          <LandingPageSection sectionId="features">
            <FeaturesSection />
          </LandingPageSection>

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
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                      <h2 className="w-fit rounded-md border border-input bg-accent/80 px-1.5 py-0.5 text-sm font-medium text-muted-foreground">
                        Choose style
                      </h2>
                      <StyleSelect />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="w-fit rounded-md border border-input bg-accent/80 px-1.5 py-0.5 text-sm font-medium text-muted-foreground">
                        Choose example
                      </h2>
                      <PageExampleSelect />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="w-fit rounded-md border border-input bg-accent/80 px-1.5 py-0.5 text-sm font-medium text-muted-foreground">
                        Choose palette
                      </h2>
                      <ThemePaletteSelect />
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onResetPalette}
                    >
                      <Undo2 />
                      Reset Palette
                    </Button>
                  </div>
                </div>
              </div>
            </PageContainer>

            <div className="relative flex h-full min-h-screen gap-8 py-4">
              <PageContainer size="xl" className="relative">
                <div
                  className="absolute -inset-y-4 inset-x-0 -z-10 h-full w-full opacity-30 blur-xl"
                  style={{
                    backgroundColor: `oklch(var(--${getStyleVariablesPrefix(
                      style
                    )}-primary))`,
                  }}
                ></div>
                <StylePageExamplePreview
                  key={style}
                  id={`${style}-${pageExampleType}-example`}
                  styleProp={style}
                  styleCat={pageExampleType}
                  examplePage={pageExampleType}
                  className="w-full max-w-full xl:max-w-full"
                  hideBadge
                  // style={{
                  //   position: "absolute",
                  //   left: left,
                  //   zIndex: left * 2,
                  // }}
                />
              </PageContainer>

              {/* {STYLES.filter((s) => s !== "default" && s !== "material").map(
                (_s, idx) => {
                  const indx = idx + 0;
                  const left = indx * 350;
                  const leftTailwindClass = `left-[${left}]`;
                  const dd = idx > 1;

                  return (
                    <StylePageExamplePreview
                      key={_s}
                      id={`${_s}-${pageExampleType}-example`}
                      styleProp={_s}
                      styleCat={pageExampleType}
                      examplePage={pageExampleType}
                      className="h-fit"
                      style={{
                        position: "absolute",
                        left: left,
                        zIndex: left * 2,
                      }}
                    />
                  );
                }
              )} */}
            </div>
          </LandingPageSection>

          <LandingPageSection sectionId="how-it-works">
            <PageContainer>
              <div>
                <HowItWorksSection />
              </div>
            </PageContainer>
          </LandingPageSection>

          {/* <section className="relative py-32">
            <PageContainer>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
                <div className="col-span-1 md:col-span-2 xl:col-span-4">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <PageTitle as={"h2"}>Custom shadcn styles</PageTitle>
                    </div>
                    <Typography
                      as={"p"}
                      variant="lg/medium"
                      className="max-w-lg"
                    >
                      <span className="inline-block">
                        Beyond Default and New York shadcn ui styles.
                        <span className="text-muted-foreground">
                          {" "}
                          Discover custom shadcn styles and ui kits, inspired by
                          popular design systems. Easily download all custom
                          styled{" "}
                          <span className="rounded bg-accent p-1 font-mono text-sm">
                            /ui/*
                          </span>{" "}
                          components directly into your project.
                        </span>
                      </span>
                    </Typography>
                  </div>
                </div>

                {STYLES.filter((s) => s !== "default").map((style) => (
                  <div
                    key={style}
                    className="relative col-span-1 grid gap-4 overflow-hidden md:col-span-2 xl:col-span-2"
                  ></div>
                ))}
              </div>
            </PageContainer>
          </section> */}

          <section>
            <PageContainer>
              <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-col gap-2">
                  <Typography
                    as="h3"
                    variant="3xl/medium"
                    className="font-[490] tracking-tight"
                  >
                    shadcn, unlimited possibilities
                  </Typography>
                  <p className="text-muted-foreground">
                    Customize your theme and get access to the Shadcn UI
                    Marketplace.
                    <br />
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div></div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <p>Style</p>
                            </div>
                            <div></div>
                          </div>
                          <div>
                            <StyleSelect triggerClassName="w-full max-w-full" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <p>Palette</p>
                            </div>
                            <div>
                              <Button
                                variant="outline"
                                size={"icon-xs"}
                                onClick={onResetPalette}
                                disabled={!activePalette}
                              >
                                <Undo2 />
                              </Button>
                            </div>
                          </div>
                          <div>
                            <ThemePaletteSelect />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md border border-input bg-accent p-2">
                      {renderStyleCardShowcase(style)}
                    </div>
                  </div>
                </div>
              </div>
            </PageContainer>
          </section>

          <section>
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
              <div className="bg-accent p-4 dark:bg-background">
                <PageContainer size="xl">
                  {renderStyleShowcaseComponents(style)}
                </PageContainer>
              </div>
            </div>
          </section>

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

          <LandingPageSection sectionId="faq">
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
          </LandingPageSection>
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

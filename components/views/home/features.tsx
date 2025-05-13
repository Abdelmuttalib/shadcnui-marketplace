"use client";

import {
  CodeIcon,
  LayersIcon,
  PaletteIcon,
  RepeatIcon,
  SparklesIcon,
  Wand2Icon,
} from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { PageSubTitle, PageTitle } from "@/components/common/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

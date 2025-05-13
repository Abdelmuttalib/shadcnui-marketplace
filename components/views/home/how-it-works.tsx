"use client";

import { ArrowRight, Download, Paintbrush, Wrench } from "lucide-react";

import { PageSubTitle, PageTitle } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";

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

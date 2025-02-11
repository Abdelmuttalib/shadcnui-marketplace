import type React from "react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <main>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background to-accent/60">
        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="lg:grid lg:gap-x-16 xl:gap-x-24">
            {/* Text Content */}
            <div className="mx-auto max-w-3xl text-center">
              <Typography as="h1" variant="7xl/bold" className="tracking-tight">
                Revolutionize Your{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {" "}
                    Workflow
                  </span>
                </span>
              </Typography>

              <Typography
                as="p"
                variant="xl/normal"
                className="mt-6 leading-8 text-muted-foreground"
              >
                Empower your team with AI-driven insights and seamless
                collaboration. Boost productivity and make data-driven decisions
                with ease.
              </Typography>

              {/* CTA Section */}
              <div className="mx-auto mt-12 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Schedule a Demo
                </Button>
              </div>

              {/* Feature List */}
              <ul className="mx-auto mt-10 grid max-w-xs grid-cols-1 items-center gap-2 sm:max-w-md sm:grid-cols-2">
                {[
                  "Advanced Analytics",
                  "Real-time Collaboration",
                  "AI-powered Insights",
                  "Customizable Workflows",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center rounded-md border bg-card p-2"
                  >
                    <CheckCircle className="mr-3 size-5 text-primary" />
                    <Typography as="span" variant="md/normal">
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

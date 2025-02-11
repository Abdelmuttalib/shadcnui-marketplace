"use client";

import { Briefcase, Rocket, Building } from "lucide-react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

const pricingTiers = [
  {
    name: "Essential",
    price: "$2,900",
    description:
      "Perfect for small businesses looking to establish a professional online presence.",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    features: [
      { text: "Custom website design" },
      { text: "Basic SEO optimization" },
      { text: "Mobile responsive layout" },
      { text: "5 pages included" },
      { text: "1 round of revisions" },
      { text: "1 month of support" },
    ],
  },
  {
    name: "Growth",
    price: "$4,900",
    description:
      "Ideal for growing businesses needing comprehensive digital solutions.",
    icon: <Rocket className="h-6 w-6 text-primary" />,
    highlighted: true,
    features: [
      { text: "Everything in Essential" },
      { text: "E-commerce integration" },
      { text: "Advanced SEO strategies" },
      { text: "10 pages included" },
      { text: "3 rounds of revisions" },
      { text: "3 months of support" },
    ],
  },
  {
    name: "Scale",
    price: "$7,900",
    description:
      "For established businesses requiring a full suite of digital services.",
    icon: <Building className="h-6 w-6 text-primary" />,
    features: [
      { text: "Everything in Growth" },
      { text: "Custom web application" },
      { text: "API integrations" },
      { text: "Unlimited pages" },
      { text: "Unlimited revisions" },
      { text: "12 months of support" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[radial-gradient(oklch(var(--foreground))_1px,transparent_1px)] opacity-15 [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Typography
            as="h1"
            variant="6xl/extrabold"
            className="tracking-tight"
          >
            Elevate Your Digital Presence
          </Typography>

          <Typography
            as="p"
            variant="xl/normal"
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            Choose the perfect plan to transform your online identity and
            accelerate your business growth.
          </Typography>
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Typography
            as="p"
            variant="base/normal"
            className="text-muted-foreground"
          >
            Choose the perfect plan to transform your online identity and
            accelerate your business growth.
          </Typography>
        </div>
      </div>
    </div>
  );
}

interface PricingFeature {
  text: string;
}

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  icon: React.ReactNode;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  icon,
  highlighted = false,
}: PricingTierProps) {
  return (
    <div className="h-full">
      <Card
        // className={`relative h-full overflow-hidden transition-shadow duration-300 ${
        //   highlighted ? "shadow-lg hover:shadow-xl" : "hover:shadow-md"
        // }`}
        className={cn(
          "relative h-full overflow-hidden transition-shadow duration-300",
          {
            "shadow-lg": highlighted,
            "hover:shadow-md": !highlighted,
          }
        )}
      >
        <CardHeader>
          <div className="mb-4 flex w-fit items-center rounded-md bg-primary/10 pr-4">
            <div className="flex h-12 w-12 items-center justify-center">
              {icon}
            </div>
            <Typography as="h3" variant="xl/semibold">
              {name}
            </Typography>
          </div>
          <div className="mt-2 flex items-baseline">
            <Typography as="span" variant="3xl/bold">
              {price}
            </Typography>
            <Typography
              as="span"
              variant="sm/normal"
              className="ml-1 text-muted-foreground"
            >
              /month
            </Typography>
          </div>
        </CardHeader>
        <CardContent>
          <Typography
            as="p"
            variant="sm/normal"
            className="text-muted-foreground"
          >
            {description}
          </Typography>
          <ul className="mt-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="mr-2 rounded-md bg-primary/10 p-1.5">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                {feature.text}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-6">
          <Button
            className={`w-full ${
              highlighted
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            }`}
            variant={highlighted ? "default" : "secondary"}
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

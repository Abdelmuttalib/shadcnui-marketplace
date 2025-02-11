"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CheckIcon, MessageSquare, Users } from "lucide-react";

const pricingTiers = [
  {
    name: "Essential",
    price: "$2,900",
    description:
      "For businesses ready to level up their digital presence with a professional website and brand identity.",
    teamMembers: "2 Team members",
    features: [
      { text: "1 active project at a time" },
      { text: "Web design & development" },
      { text: "Basic brand design" },
      { text: "Monthly design iterations" },
      { text: "Response within 48h" },
      { text: "3-month minimum commitment" },
    ],
  },
  {
    name: "Growth",
    price: "$4,900",
    description:
      "For companies who need ongoing design and development across web, brand, and product.",
    teamMembers: "3 Team members",
    features: [
      { text: "2 active projects at a time" },
      { text: "Product design" },
      { text: "Full brand identity" },
      { text: "Weekly design iterations" },
      { text: "Response within 24h" },
      { text: "2-month minimum commitment" },
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$7,900",
    description:
      "For established businesses who need a dedicated team to handle all their digital needs.",
    teamMembers: "Unlimited Team members",
    features: [
      { text: "3 active projects at a time" },
      { text: "Advanced motion graphics" },
      { text: "Full brand strategy" },
      { text: "Unlimited design iterations" },
      { text: "Same-day response" },
      { text: "1-month minimum commitment" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-16 text-center">
        <Typography
          as="h1"
          variant="5xl/medium"
          className="mb-4 tracking-tight"
        >
          Start growing today
        </Typography>
        <Typography
          as="p"
          variant="base/normal"
          className="mx-auto max-w-2xl text-muted-foreground"
        >
          Choose a plan that fits your needs. Get access to our team of
          designers and developers ready to help you grow.
        </Typography>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
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
  teamMembers: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  teamMembers,
  highlighted = false,
}: PricingTierProps) {
  return (
    <Card
      className={cn("relative flex flex-col overflow-hidden", {
        "shadow-lg": highlighted,
        "": !highlighted,
      })}
    >
      {highlighted && (
        <div className="absolute right-4 top-4 z-20">
          <span className="rounded-full bg-primary px-3 py-1 text-sm text-white">
            Best value!
          </span>
        </div>
      )}

      <CardHeader className="space-y-2">
        <Typography as="h3" variant="2xl/medium" className="">
          {name}
        </Typography>
        <div className="flex items-baseline">
          <Typography as="span" variant="4xl/bold">
            {price}
          </Typography>
          <Typography
            as="span"
            variant="lg/normal"
            className="ml-1 text-muted-foreground/60"
          >
            /month
          </Typography>
        </div>
        <Typography
          as="span"
          variant="sm/normal"
          className="text-muted-foreground"
        >
          {description}
        </Typography>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <Button
          className={cn("w-full")}
          variant={highlighted ? "default" : "secondary"}
        >
          Get Started Today
        </Button>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">Slack communication</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="text-sm">{teamMembers}</span>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Includes:</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckIcon className="size-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

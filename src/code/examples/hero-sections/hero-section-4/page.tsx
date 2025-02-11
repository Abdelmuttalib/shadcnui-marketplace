import type React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Rocket,
  Puzzle,
  Lock,
  VideoIcon,
  PlayIcon,
  PlayCircle,
} from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { AvatarDemo } from "@/components/showcase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main>
      <HeroSectionV3 />
    </main>
  );
}

export const GradientBlob = () => {
  return (
    <div className="absolute -z-10 h-[400px] w-[400px] blur-3xl">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="blob-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "rgba(79, 70, 229, 0.5)" }} />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(147, 51, 234, 0.5)" }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob-gradient)"
          d="M44.3,-76.8C55.9,-69.1,63.1,-54.3,71.3,-39.7C79.5,-25.1,88.7,-10.7,89.1,4.1C89.5,18.9,81.1,34.1,70.4,46.4C59.7,58.7,46.6,68.1,32.4,74.1C18.2,80.1,2.9,82.6,-12.3,80.5C-27.5,78.3,-42.6,71.4,-54.9,61.1C-67.2,50.8,-76.7,37.1,-80.8,22C-85,6.9,-83.8,-9.6,-78.5,-24.4C-73.2,-39.2,-63.8,-52.3,-51.3,-59.8C-38.8,-67.3,-23.2,-69.2,-7.5,-68.1C8.2,-67,23.9,-62.9,44.3,-76.8Z"
          transform="translate(100 100)"
          style={{
            animation: "blob-animation 20s infinite alternate",
          }}
        />
      </svg>
    </div>
  );
};

const FeatureIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="rounded-md bg-primary/20 p-2 text-primary">
    <Icon size={20} />
  </div>
);

export function HeroSectionV3() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <GradientBlob /> */}

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Text Content */}
          <div className="lg:col-span-6 lg:mt-0">
            <Typography as="h1" variant="7xl/bold" className="tracking-tight">
              <span className="block xl:inline">Supercharge your</span>{" "}
              <span className="block text-indigo-600 xl:inline">workflow</span>
            </Typography>

            <Typography
              as="h1"
              variant="xl/normal"
              className="mt-3 max-w-md text-muted-foreground md:mt-5 md:max-w-3xl"
            >
              Boost productivity, streamline collaboration, and make data-driven
              decisions with our cutting-edge SaaS platform.
            </Typography>

            {/* Feature Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Zap, text: "Lightning-fast performance" },
                { icon: Lock, text: "Bank-grade security" },
                { icon: Puzzle, text: "Seamless integrations" },
                { icon: Rocket, text: "AI-powered insights" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FeatureIcon Icon={feature.icon} />
                  <span className="text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <PlayCircle />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* 3D Element / Product Showcase */}
          <div className="relative mt-12 sm:mt-16 lg:col-span-6 lg:mt-0">
            <div className="relative mx-auto w-full max-w-none lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border bg-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-accent/20 to-accent/60" />
                {/* Replace this with an actual 3D model or product screenshot */}
                <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-foreground">
                  <h3 className="text-2xl font-bold">Your Product UI</h3>
                  <p className="mt-2">Interactive 3D Model or Screenshot</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="animate-float absolute -left-16 -top-16 h-40 w-40 rounded-full bg-purple-300 opacity-50 mix-blend-multiply blur-2xl" />
              <div className="animate-float animation-delay-2000 absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-indigo-300 opacity-50 mix-blend-multiply blur-2xl" />
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 border-t pt-8">
          <Typography as="p" variant="lg/medium" className="text-foreground">
            Trusted by industry leaders
          </Typography>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-md border bg-accent/20 p-2 px-3"
              >
                <Avatar className="size-7">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${_}.png`}
                    alt={`${_}`}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Typography as={"span"} variant="sm/medium">
                  shadcn-ui
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

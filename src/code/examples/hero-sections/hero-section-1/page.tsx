import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";

export default function HeroSectionPage() {
  const navItems = [
    { title: "Why us", href: "#" },
    { title: "Our Process", href: "#" },
    { title: "Testimonials", href: "#" },
    { title: "FAQ", href: "#" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-accent/80">
      <nav className="fixed left-0 right-0 top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="#" className="flex items-center space-x-2">
            <span className="text-xl font-medium text-foreground">
              Acme Inc
            </span>
          </Link>

          <div className="hidden items-center space-x-8 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button variant="secondary">Contact us</Button>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 z-20 grid grid-cols-2">
        <div className="container col-span-2 mx-auto pt-32 lg:col-span-1 lg:max-w-xl">
          <div className="space-y-6 px-4 py-16">
            <Typography
              as="h1"
              variant="7xl/medium"
              className="tracking-tight text-foreground"
            >
              Renovate Effortlessly
            </Typography>
            <Typography
              as="h1"
              variant="xl/normal"
              className="text-foreground/80"
            >
              Effortlessly compare quotes from top quality contractors, and get
              peace of mind with warranty & price protections.
            </Typography>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Get an estimate</Button>
              <Button size="lg" variant={"outline"}>
                <span className="relative mr-1 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                Live demo
              </Button>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Advanced Analytics",
                "Team Collaboration",
                "Custom Integrations",
                "24/7 Premium Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Badge className="rounded-md p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </Badge>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative hidden bg-black lg:block">
          <div
            className="relative min-h-screen bg-opacity-50 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}

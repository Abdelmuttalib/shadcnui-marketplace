import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionPage() {
  const appName = "Acme";
  const heroTitle =
    "Driven by innovative and research, a smart building solution provider";

  const heroDescription =
    "In the context of new infrastructure, Creative Technology applies cutting-edge sensing technologies, intelligent algorithms, 5G networks and other technologies to scenarios closely related to the development of construction and infrastructure, helping the construction industry to transform and upgrade and create smarter, more comfortable and more ecological future cities.";

  const navItems = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <section className="relative flex h-screen flex-col items-center justify-center bg-slate-900">
        <div className="absolute top-0 z-20 flex h-20 w-full items-center justify-between bg-transparent px-4 lg:px-20">
          <Link href="/" className="flex items-center gap-x-1">
            <p className="text-2xl font-semibold uppercase tracking-tight text-white/90">
              {appName}
              <span className="ml-1 font-normal lowercase text-muted-foreground">
                tech
              </span>
            </p>
          </Link>
          <div className="flex items-center gap-x-10 text-sm text-white">
            <div className="hidden items-center gap-x-10 md:flex">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
            <Button asChild>
              <a href="#">Log in</a>
            </Button>
          </div>
        </div>
        <Image
          alt="construction site"
          loading="lazy"
          layout="fill"
          objectFit="cover"
          className="object-center opacity-40 lg:object-none"
          src="https://images.unsplash.com/photo-1498631906572-66c58d46ecf7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex h-full w-full items-end justify-end bg-transparent">
          <div className="h-[43%] w-full bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent lg:h-[45%]">
            <div className="flex flex-col gap-y-4 px-4 text-white lg:gap-y-10 lg:px-20">
              <div className="flex w-full items-end justify-between text-balance text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                <Typography
                  as="h1"
                  variant="5xl/semibold"
                  className="max-w-5xl text-balance tracking-tight text-white"
                >
                  {heroTitle}
                </Typography>

                <p className="relative hidden pl-4 pt-6 xl:flex">
                  <span className="absolute left-0 top-0 text-xl text-gray-500">
                    for
                  </span>
                  Companies
                </p>
              </div>

              <hr className="opacity-30" />
              <div>
                <Typography
                  as="h1"
                  variant="lg/normal"
                  className="max-w-6xl text-balance tracking-tight text-white/60"
                >
                  {heroDescription}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

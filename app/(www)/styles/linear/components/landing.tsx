"use client";

import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { MainNavLinks, StyleSelect } from "@/components/draft";
import ThemeSwitcher from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";

import { CarbonUI } from "../../../ui/components/carbon-hero";
import { DefaultUI } from "../../../ui/components/default-hero";
import { HeroUI } from "../../../ui/components/heroui";
import { MaterialUI } from "../../../ui/components/material-hero";

function Hero() {
  const { style } = useStyleStore();
  return (
    <div className="relative -mt-[5.75rem] pb-16">
      {/* <img
          src="https://tailwindui.com/plus-assets/img/beams-home@95.jpg"
          alt=""
          className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]"
        /> */}
      <div className="relative mt-16 grid w-full grid-cols-1 border-y sm:mt-20 xl:mt-32">
        <Typography
          as={"h1"}
          variant="6xl/semibold"
          className="col-start-1 row-start-1 mt-4 max-w-[36rem] font-[490] tracking-tighter"
          // variant="6xl/medium"
          // className="col-start-1 row-start-1 mt-4 max-w-[36rem] tracking-tighter"
        >
          shadcn ui styles
        </Typography>

        <Typography
          as="p"
          variant="lg/normal"
          className="col-start-1 row-start-2 mt-4 max-w-xl text-muted-foreground"
        >
          Discover the best shadcn ui kits and styles for modern web interfaces.
        </Typography>
        <div className="z-20 col-start-1 row-start-3 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <StyleSelect />
        </div>

        {/* pointer-events-none  */}

        {style === "default" ? <DefaultUI /> : null}
        {style === "linear" ? <HeroUI /> : null}
        {style === "carbon" ? <CarbonUI /> : null}
        {style === "material" ? <MaterialUI /> : null}
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
      <PageContainer>
        <nav className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="pr-2 text-lg font-medium tracking-tight">
              shadcn{" "}
              <span className="bg-gradient-to-r from-foreground/90 to-primary bg-clip-text font-normal italic text-transparent dark:to-foreground/30">
                styles
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex">
              <ul className="inline-flex gap-2">
                <MainNavLinks />
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            {/* <UserMenu /> */}
          </div>
        </nav>
      </PageContainer>
    </header>
  );
}

export default function Linear() {
  return (
    <div>
      {/*  */}
      <Navbar />
      <main>
        <section className="relative h-screen bg-gradient-to-br from-background to-accent/40 pt-10">
          <PageContainer>
            <Hero />
          </PageContainer>
        </section>
        {/* <section className="pt-10 relative h-screen">
          <PageContainer>
            <div className="LayoutContent_root__ZBUya">
              <Typography
                as="h1"
                variant="6xl/semibold"
                className="tracking-tighter font-[490]"
              >
                shadcn ui styles
              </Typography>
              <div
                className="Spacer_root__uoSvA"
                style={{ height: "24px" }}
              ></div>
              <div>
                <Typography
                  as="h2"
                  variant="2xl/semibold"
                  className="tracking-tight text-foreground/70 max-w-2xl"
                >
                  Discover the best shadcn ui kits and styles for modern web
                  interfaces.
                </Typography>
              </div>

              <div
                className="Spacer_root__uoSvA"
                style={{ height: "40px" }}
              ></div>
              <div className="flex items-center gap-2" style={{ gap: "16px" }}>
                <div
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "translateY(0%)",
                  }}
                >
                  <Button size={"lg"}>Start building</Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button size={"lg"} variant={"ghost"}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/30 inline-flex items-center gap-1">
                      Introducing Customer Requests{" "}
                      <svg
                        className="text-foreground/50"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center pb-20 pt-10">
                <div className="p-2 border rounded-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[20px_20px_50px_rgba(255,255,255,0.02)] ">
                  <div className="relative w-[60vw] h-[30vw] rounded-xl overflow-hidden border">
                    <Image
                      src="/images/og-image.png"
                      alt="Showcased Screenshot"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center pb-20">
                <div
                  className="relative w-[60vw] h-[30vw] transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out
        shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden border border-gray-800"
                  style={{
                    transform:
                      "scale(1.4) rotateY(-25deg) rotateX(-45deg) translateZ(4.5rem)",
                    transformOrigin: "-70% 100%",
                    transformStyle: "preserve-3d",
                    boxShadow: "1rem 1rem 2rem rgba(0,0,0,0.25)",
                    transition: "0.6s ease transform",
                  }}
                >
                  <Image
                    src="/images/og-image.png"
                    alt="Showcased Screenshot"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </PageContainer>
        </section> */}
        <section className="bg-gradient-to-b from-background via-accent/30 to-background py-32">
          <PageContainer>
            <div className="">
              <div>
                <div className="grid grid-cols-1 items-end gap-x-6 gap-y-6 sm:gap-y-10 xl:grid-cols-2 xl:gap-x-8">
                  <Typography
                    as="h2"
                    variant="6xl/semibold"
                    className="max-w-xl font-[490] tracking-tighter"
                    // style={{
                    //   fontWeight: 490,
                    // }}
                  >
                    Made for modern product teams
                  </Typography>
                  <Typography
                    as="p"
                    variant="md/normal"
                    className="text-muted-foreground"
                    // className="font-[490]"
                    // style={{
                    //   fontWeight: 490,
                    // }}
                  >
                    Linear is shaped by the practices and principles that
                    distinguish world-className product teams from the rest:
                    relentless focus, fast execution, and a commitment to the
                    quality of craft.{" "}
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-foreground"
                    >
                      Make the switch <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>
            <div
              className="Spacer_root__uoSvA"
              style={{ height: "48px" }}
            ></div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
              {[
                {
                  src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
                  alt: "",
                  title: "Purpose-built for product development",
                },
                {
                  src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
                  alt: "",
                  title: "Designed to move fast",
                },
                {
                  src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
                  alt: "",
                  title: "Crafted with perfection",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative rounded-lg bg-background p-5 ring-1 ring-border"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-card ">
                    <img
                      src={card.src}
                      alt={card.alt}
                      width="960"
                      height="914"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center py-4">
                    <div className="ml-4 flex-auto">
                      <div className="font-medium">{card.title}</div>
                    </div>
                    {/* <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-primary ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50">
                      View
                    </div> */}
                    <Button
                      size={"icon-sm"}
                      variant={"outline"}
                      className="rounded-full"
                    >
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              {/* <img
                            alt=""
                            data-nosnippet="true"
                            data-loaded="true"
                            loading="lazy"
                            width="960"
                            height="914"
                            decoding="async"
                            className="Image_root__UkRqc"
                            src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                            style={{ color: "transparent" }}
                          /> */}
              <div className="Carousel_content__G17d_ utils_hideScrollbars__TzPqp">
                <div className="Carousel_inner__L4Uvf">
                  <div className="Carousel_item__k73Fv">
                    <div></div>
                  </div>
                  {/* Repeat for other Carousel items */}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="relative py-32">
          <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div>
          <PageContainer>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 ">
              <div className="col-span-1 md:col-span-2 xl:col-span-4">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 text-sm">
                      <span className="size-3 rounded-sm bg-green-500"></span>
                      <span>Project and long-term planning</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                    <Typography
                      as={"h2"}
                      variant="5xl/semibold"
                      className="font-[490] tracking-tighter"
                    >
                      Set the product direction
                    </Typography>
                  </div>
                  <Typography as={"p"} variant="lg/medium" className="max-w-lg">
                    <span className="inline-block">
                      Align your team around a unified product timeline.{" "}
                      <span className="text-muted-foreground">
                        {" "}
                        Plan, manage, and track all product initiatives with
                        Linear’s visual planning tools. Set the product
                        direction
                      </span>
                    </span>
                  </Typography>

                  <div className="h-96 w-full"></div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 xl:col-span-2">
                <div className="flex flex-col gap-2">
                  <Typography
                    as="h3"
                    variant="2xl/semibold"
                    className="max-w-xl font-[490] tracking-tighter"
                  >
                    Manage projects end-to-end
                  </Typography>
                  <Typography
                    as="p"
                    variant="lg/normal"
                    className="text-muted-foreground"
                  >
                    Consolidate specs, milestones, tasks, and other
                    documentation in one centralized location.
                  </Typography>
                </div>

                <div className="w-full py-4"></div>
                <div className="relative">
                  <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-br from-transparent via-background/90 via-50% to-background"></div>

                  <div className="rounded-2xl border p-2">
                    <div
                      className="rounded-xl border border-gray-600/50 px-5 py-7"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        isolation: "isolate",
                        // --gradientBorder-size: 1px,
                        // --gradientBorder-gradient: linear-gradient(to bottom right, hsla(0, 0%, 100%, .17), transparent);
                        background:
                          "linear-gradient(134deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .02), hsla(0, 0%, 100%, 0) 40%)",
                        // border-radius: 10px;
                      }}
                    >
                      <Typography
                        as="h2"
                        variant="xl/medium"
                        className="max-w-2xl tracking-tight"
                      >
                        Project Overview
                      </Typography>
                      <div
                        className="Spacer_root__uoSvA"
                        style={{
                          height: "22px",
                        }}
                      ></div>
                      <dl className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                          <dt className="text-sm text-muted-foreground">
                            Properties
                          </dt>
                          <dd className="ProjectOverview_dd__d658U">
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-1">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="#F2C94C"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M10.7519 6.0284L8.25194 4.57006C8.1741 4.52466 8.08705 4.50195 8 4.50195V11.3442C8.08705 11.3442 8.1741 11.3215 8.25194 11.2761L10.7519 9.81781C10.9055 9.7282 11 9.56375 11 9.38592V6.46029C11 6.28245 10.9055 6.118 10.7519 6.0284Z"></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.75581 1.21343C8.28876 0.931461 7.71124 0.93146 7.24419 1.21343L2.74419 3.93024C2.28337 4.20846 2 4.71907 2 5.27123V10.7327C2 11.2848 2.28337 11.7954 2.74419 12.0737L7.24419 14.7905C7.71124 15.0724 8.28876 15.0724 8.75581 14.7905L13.2558 12.0737C13.7166 11.7954 14 11.2848 14 10.7327V5.27123C14 4.71907 13.7166 4.20846 13.2558 3.93024L8.75581 1.21343ZM12.5 5.27123L8 2.55442L3.5 5.27123L3.5 10.7327L8 13.4495L12.5 10.7327L12.5 5.27123Z"
                                  ></path>
                                </svg>
                                <span className="text-sm">In Progress</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <svg
                                  className=""
                                  // style="--icon-color:#9c9da1"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="#9c9da1"
                                  role="img"
                                  focusable="false"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M10.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 10c2.338 0 3.6.475 3.972 1.424a.43.43 0 0 1 .028.157.419.419 0 0 1-.419.419H4.419A.419.419 0 0 1 4 11.581a.43.43 0 0 1 .028-.157C4.399 10.474 5.662 10 8 10Z"></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1 5.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C3.28 1 4.12 1 5.8 1h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C15 3.28 15 4.12 15 5.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C12.72 15 11.88 15 10.2 15H5.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C1 12.72 1 11.88 1 10.2V5.8Zm4.8-3.3h4.4c.865 0 1.423.001 1.848.036.408.033.559.09.633.127a1.5 1.5 0 0 1 .655.656c.038.074.095.225.128.633.035.425.036.983.036 1.848v4.4c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036H5.8c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848V5.8c0-.865.001-1.423.036-1.848.033-.408.09-.559.127-.633a1.5 1.5 0 0 1 .656-.656c.074-.037.225-.094.633-.127C4.377 2.5 4.935 2.5 5.8 2.5Z"
                                  ></path>
                                </svg>
                                <span className="text-sm">ENG</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                  {[
                                    {
                                      avatar:
                                        "https://webassets.linear.app/images/ornj730p/production/62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2",
                                      name: "Karri",
                                      avatarAlt: "Avatar of Karri",
                                    },
                                    {
                                      avatar:
                                        "https://webassets.linear.app/images/ornj730p/production/74717706c51f3c14ebe2851e0076def007ebafdd-1000x1000.png?w=72&amp;q=95&amp;auto=format&amp;dpr=2",
                                      name: "Paco",
                                      avatarAlt: "Avatar of Paco",
                                    },
                                    {
                                      avatar:
                                        "https://webassets.linear.app/images/ornj730p/production/e71a8d13b2d26a3a53303810550d00b23cb87ce5-200x200.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2",
                                      name: "Erin",
                                      avatarAlt: "Avatar of Erin",
                                    },
                                    {
                                      avatar:
                                        "https://webassets.linear.app/images/ornj730p/production/f45112e8aeed10023708772eb88872fa97b4291c-200x200.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2",
                                      name: "Raissa",
                                      avatarAlt: "Avatar of Raissa",
                                    },
                                  ].map(({ avatar, name, avatarAlt }, idx) => (
                                    <div
                                      key={name}
                                      className={cn("", {
                                        "": idx === 0,
                                        "-ml-1": idx !== 0,
                                      })}
                                    >
                                      <div className="overflow-hidden rounded-full border">
                                        <img
                                          src={avatar}
                                          width="18"
                                          height="18"
                                          alt={avatarAlt}
                                          className="rounded-full"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </dd>
                        </div>
                        <div className="flex items-center gap-4">
                          <dt className="text-sm text-muted-foreground">
                            Resources
                          </dt>
                          <dd>
                            <div className="flex items-center gap-1">
                              <div className="flex items-center gap-1 rounded-md bg-accent p-1">
                                <svg
                                  className="color-override"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  role="img"
                                  focusable="false"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.33334 15C5.95218 15 6.54567 14.7541 6.98326 14.3166C7.42085 13.879 7.66668 13.2855 7.66668 12.6666V10.3333H5.33334C4.7145 10.3333 4.12101 10.5791 3.68342 11.0167C3.24583 11.4543 3 12.0478 3 12.6666C3 13.2855 3.24583 13.879 3.68342 14.3166C4.12101 14.7541 4.7145 15 5.33334 15Z"
                                    fill="#0ACF83"
                                  ></path>
                                  <path
                                    d="M3 8.00004C3 7.3812 3.24583 6.78771 3.68342 6.35012C4.12101 5.91254 4.7145 5.6667 5.33334 5.6667H7.66668V10.3333H5.33334C4.7145 10.3333 4.12101 10.0875 3.68342 9.64996C3.24583 9.21238 3 8.61888 3 8.00004Z"
                                    fill="#A259FF"
                                  ></path>
                                  <path
                                    d="M3 3.33334C3 2.71481 3.24558 2.1216 3.68277 1.68406C4.11997 1.24653 4.71299 1.00048 5.33152 1H7.66486V5.66668L5.33334 5.6667C4.7145 5.6667 4.12101 5.42085 3.68342 4.98326C3.24583 4.54567 3 3.95218 3 3.33334Z"
                                    fill="#F24E1E"
                                  ></path>
                                  <path
                                    d="M7.66681 1H10.0001C10.619 1 11.2125 1.24583 11.6501 1.68342C12.0877 2.12101 12.3335 2.7145 12.3335 3.33334C12.3335 3.95218 12.0877 4.54567 11.6501 4.98326C11.2125 5.42085 10.619 5.66668 10.0001 5.66668L7.66668 5.6667L7.66681 1Z"
                                    fill="#FF7262"
                                  ></path>
                                  <path
                                    d="M12.3335 8.00004C12.3335 8.61888 12.0877 9.21238 11.6501 9.64996C11.2125 10.0875 10.619 10.3334 10.0001 10.3334C9.38131 10.3334 8.78781 10.0875 8.35023 9.64996C7.91264 9.21238 7.66681 8.61888 7.66681 8.00004C7.66681 7.3812 7.91264 6.78771 8.35023 6.35012C8.78781 5.91254 9.38131 5.66668 10.0001 5.66668C10.619 5.66668 11.2125 5.91254 11.6501 6.35012C12.0877 6.78771 12.3335 7.3812 12.3335 8.00004Z"
                                    fill="#1ABCFE"
                                  ></path>
                                </svg>
                                <span className="text-sm">Exploration</span>
                              </div>
                              <div className="flex items-center gap-1 rounded-md bg-accent p-1">
                                <svg
                                  className=""
                                  // style="--icon-color:#68CC58"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="#68CC58"
                                  role="img"
                                  focusable="false"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <svg>
                                    <path d="M14.2994 14.0165C14.918 13.8192 15.1804 13.0923 14.8677 12.5151L8.9336 1.56073C8.52859 0.813089 7.47141 0.813091 7.0664 1.56073L1.1323 12.5151C0.819613 13.0923 1.08197 13.8192 1.70057 14.0165C1.8343 14.0592 1.9683 14.1004 2.10257 14.1403C5.96173 15.2866 10.0383 15.2866 13.8974 14.1403C14.0317 14.1004 14.1657 14.0592 14.2994 14.0165ZM10.467 7.80774C10.2381 8.15661 9.95257 8.54009 9.56836 8.81897C9.56836 8.81897 8.51122 7.81904 8.06836 7.81901C7.56836 7.81897 6.06836 8.81901 6.06836 8.81901C6.06836 8.81901 5.70485 8.36728 5.44099 7.97759L8 3.25367L10.467 7.80774Z"></path>
                                  </svg>
                                </svg>
                                <span className="text-sm">User interviews</span>
                              </div>
                            </div>
                          </dd>
                        </div>
                        <div className="flex gap-4">
                          <dt className="text-sm text-muted-foreground">
                            Milestones
                          </dt>
                          <dd className="ProjectOverview_dd__d658U">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                  className="text-primary"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
                                    fill="var(--color-brand-bg)"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="text-sm">
                                  Design Review{" "}
                                  <span className="text-muted-foreground">
                                    100%
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                  className="text-primary"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
                                    fill="var(--color-brand-bg)"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="text-sm">
                                  Internal Alpha{" "}
                                  <span className="text-muted-foreground">
                                    100% of 10
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                  className="text-[#F2C94C]"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="text-sm">
                                  GA{" "}
                                  <span className="text-muted-foreground">
                                    25% of 53
                                  </span>
                                </span>
                              </div>
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </PageContainer>
        </section>
      </main>
    </div>

    // <section className="Hero_sectionHero__p6F6H"><div className="LayoutContent_root__ZBUya"><h1 className="sc-4d01e803-0 fzOPwG hide-mobile typography_h1__b6szR"><span className="utils_visuallyHidden__DJ_eB">Linear is a purpose-built tool for planning and building products</span><span aria-hidden="true"><span style="display:block" className="sc-4d01e803-0 hVeRNp"><span data-br=":R226mpuud6kq:" data-brr="1" style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance"><span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">Linear</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">is</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">a</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">purpose-built</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">tool</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">for</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">planning</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">and</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">building</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">products</span></span><script>self.__wrap_n!=1&&self.__wrap_b(":R226mpuud6kq:",1)</script></span></span></h1><h1 className="sc-4d01e803-0 dfVmsx show-mobile typography_h1__b6szR"><span className="utils_visuallyHidden__DJ_eB">Plan and build your product</span><span aria-hidden="true"><span className="sc-4d01e803-0 hVeRNp"><span data-br=":R246mpuud6kq:" data-brr="1" style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance"><span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">Plan</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">and</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">build</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">your</span> <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: translateY(0%);">product</span></span><script>self.__wrap_n!=1&&self.__wrap_b(":R246mpuud6kq:",1)</script></span></span></h1><div className="Spacer_root__uoSvA" style="--height:24px"></div><div className="hide-mobile" style="opacity: 1; filter: blur(0px); transform: translateY(0%);"><h2 className="sc-4d01e803-0 gwjVuC Hero_heroSubtitle__ugVER"><span data-br=":R286mpuud6kq:" data-brr="1" style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance">Meet the system for modern software development. Streamline issues, projects, and product roadmaps.</span><script>self.__wrap_n!=1&&self.__wrap_b(":R286mpuud6kq:",1)</script></h2></div><div className="show-mobile" style="opacity: 1; filter: blur(0px); transform: translateY(0%);"><div className="Flex_root__DOQCW Flex_center__qqy7h"><h2 className="sc-4d01e803-0 dnUneR Hero_heroSubtitle__ugVER"><span data-br=":R2a6mpuud6kq:" data-brr="1" style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance">Linear is a purpose-built tool for modern product development. Streamline issues, projects, and product roadmaps.</span><script>self.__wrap_n!=1&&self.__wrap_b(":R2a6mpuud6kq:",1)</script></h2></div></div><div className="Spacer_root__uoSvA" style="--height:40px"></div><div className="hide-mobile"><div className="Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:16px"><div style="opacity: 1; filter: blur(0px); transform: translateY(0%);"><a type="button" data-hide="logged-in" className="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-default__6r2_r Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/signup">Start building</a><a type="button" data-show="logged-in" className="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-default__6r2_r Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/login">Start building</a></div><div style="opacity: 1; filter: blur(0px); transform: translateY(0%);"><a type="button" className="Button_root__Stmhv Button_variant-ghost__a06I_ Button_size-default__6r2_r Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="https://linear.app/customer-requests"><span style="padding:0" className="sc-4d01e803-0 btLGTM">Introducing Customer Requests</span><svg className="" style="--icon-color:var(--color-text-quaternary)" width="16" height="16" viewBox="0 0 16 16" fill="var(--color-text-quaternary)" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path></svg></a></div></div></div></div></section>
  );
}

"use client";

import { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Check, CheckCircle2 } from "lucide-react";

function Container({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-6 xl:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Landing1() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* <UICustomizer /> */}
      <header className="flex h-full w-full justify-between bg-background">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <div>
              <Typography
                as="h6"
                variant="xl/medium"
                className="text-foreground"
              >
                <span className="">ACME</span>
                <span className="ml-1 font-medium text-primary">INC</span>
              </Typography>
            </div>
            <div>
              <nav className="hidden space-x-8 md:block">
                <a href="#" className="text-muted-foreground">
                  Home
                </a>
                <a href="#" className="text-muted-foreground">
                  About
                </a>
                <a href="#" className="text-muted-foreground">
                  Services
                </a>
                <a href="#" className="text-muted-foreground">
                  Contact
                </a>
                <Button
                  variant="default"
                  // size="lg"
                  // className="text-base"
                  asChild
                >
                  <a href="#">Get Started</a>
                </Button>
              </nav>
            </div>
          </div>
        </Container>
      </header>
      <div className="flex h-full min-h-screen w-full flex-col gap-y-4 py-24 lg:px-32">
        <Container className="relative w-full">
          <>
            <div className="relative flex flex-col gap-y-8">
              {/* <GradientBackground /> */}

              <Typography
                variant="6xl/semibold"
                className="max-w-4xl leading-tight text-foreground"
              >
                Client Acquisition Marketing to Take Your Law Firm to the Next
                Level
              </Typography>
              <Typography variant="2xl/normal" className="max-w-4xl">
                <strong>Result driven marketing.</strong> ACME is a
                next-generation marketing and technology company.
              </Typography>
              <div className="flex gap-4">
                <Button variant="default" size="lg">
                  Get Started
                </Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-4 overflow-hidden rounded-lg sm:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: "SEO",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
                    icon: "https://cdn.shadcn.com/assets/icons/seo.svg",
                  },
                  {
                    title: "PPC",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
                    icon: "https://cdn.shadcn.com/assets/icons/ppc.svg",
                  },
                  {
                    title: "Social Media",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
                    icon: "https://cdn.shadcn.com/assets/icons/social-media.svg",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      "flex flex-col gap-y-4 rounded-lg p-4 lg:p-9",
                      "border bg-gradient-to-b from-muted/40 to-background"
                    )}
                  >
                    <div className="size-fit rounded-lg p-1 shadow lg:p-2">
                      <CheckCircle2 className="size-6 fill-primary text-white lg:size-7" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <h3 className="text-xl font-medium capitalize">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        </Container>
      </div>
      <div className="w-full bg-muted/40 py-28">
        <Container>
          <div className="page-padding">
            <div className="padding-vertical padding-xhuge">
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <div className="flex flex-col gap-2">
                  <Typography variant="md/semibold" className="text-primary">
                    ACME Works for You
                  </Typography>
                  <Typography
                    variant="5xl/semibold"
                    className="max-w-4xl leading-tight text-foreground"
                  >
                    How ACME makes increasing profit uncomplicated
                  </Typography>
                </div>
                <Typography
                  variant="xl/normal"
                  className="max-w-5xl text-foreground"
                >
                  Looking to take your business to the next level? Look no
                  further than ACME. Our suite of powerful tools is designed to
                  help you generate more leads, improve your conversion rates,
                  and turn those visitors into customers.
                </Typography>

                <div className="margin-top margin-medium">
                  <div className="button-row button-row-center is-reverse-mobile-landscape"></div>
                </div>
              </div>
            </div>
            <div className="container-small"></div>
          </div>
        </Container>
      </div>
      <div className="w-full bg-background py-28">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-muted/40 p-8 pt-14 text-center">
            <Typography
              variant="lg/normal"
              className="max-w-5xl text-muted-foreground"
            >
              Join 250+ companies already growing with ACME
            </Typography>

            <div className="margin-top margin-medium">
              <div className="flex flex-wrap justify-center gap-14">
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/66a29adac36c93cdb2737e37_allveteran.webp"
                    loading="lazy"
                    alt="Company logo"
                    className="h-20 w-36 object-contain"
                  />
                </div>
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/66a29ae83ff8af1f55dfd03c_allconsumer.svg"
                    loading="lazy"
                    alt="Company logo"
                    className="h-20 w-36 object-contain"
                  />
                </div>
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/66a29b1a225206942bc568fa_benefits.webp"
                    loading="lazy"
                    alt="Company logo"
                    className="h-20 w-36 object-contain"
                  />
                </div>
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview.png"
                    loading="lazy"
                    alt="Company logo"
                    sizes="106.5078125px"
                    srcSet="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview-p-500.png 500w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview-p-800.png 800w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview.png 912w"
                    className="h-20 w-36 object-contain"
                  />
                </div>
                <div className="logo01_wrapper logo1-2_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website.png"
                    loading="lazy"
                    sizes="94.453125px"
                    srcSet="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-500.png 500w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-800.png 800w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-1080.png 1080w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-1600.png 1600w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-2000.png 2000w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website.png 2143w"
                    alt="Company logo"
                    className="h-20 w-36 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="container-small"></div>
          </div>
        </Container>
      </div>
      <div className="w-full bg-background py-28">
        <Container>
          <section className="cta_2_homepage">
            <div className="page-padding">
              <div className="container-large">
                <div className="padding-vertical padding-xhuge">
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <div className="flex flex-col gap-8">
                      <div className="margin-bottom margin-small">
                        <Typography
                          variant="5xl/semibold"
                          className="max-w-4xl leading-tight text-foreground"
                        >
                          Join Hundreds of Firms Growing with ACME
                        </Typography>
                      </div>
                      <div className="flex flex-col gap-6">
                        {[
                          "Build a Consistent Qualified Pipeline",
                          "Save Time and Resources",
                          "Receive Data-Driven Insights",
                        ].map((t) => (
                          <div key={t} className="flex items-center gap-3">
                            <div>
                              {/* <path fillRule="evenodd" clipRule="evenodd" d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z" fill="#3F46FF"></path> */}
                              <Check className="size-5 text-primary" />
                            </div>
                            <div className="cta02_item-text-wrapper">
                              <div className="text-size-medium">{t}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2">
                        <Button className="button w-inline-block" asChild>
                          <a href="#">Get started</a>
                        </Button>
                      </div>
                    </div>
                    <div
                      data-w-id="1c32879c-6cb8-4ee2-e242-2bb855b45498"
                      // style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                      className="cta02_image-wrapper"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, 768px"
                        srcSet="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-2000.jpg 2000w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-2600.jpg 2600w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-3200.jpg 3200w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash.jpg 5418w"
                        alt="MacBook mockup"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <div className="w-full bg-primary/5 py-28 dark:bg-muted/40">
        <Container>
          <div>
            <div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Typography variant="md/semibold" className="text-primary">
                    We&apos;re ready when you are.
                  </Typography>
                  <Typography
                    variant="5xl/semibold"
                    className="max-w-4xl leading-tight text-foreground"
                  >
                    Ready to Take your Marketing to New Heights?
                  </Typography>
                </div>
                <Typography
                  variant="lg/normal"
                  className="max-w-5xl text-muted-foreground"
                >
                  Learn more below or simply set up a meeting to get started.
                </Typography>

                <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "ACME Leads",
                      description:
                        "Our bread and butter is lead generation, with millions of leads captured.",
                    },
                    {
                      title: "ACME Tech",
                      description:
                        "Cutting-edge software and strategies to maximize your conversion rates and take your business to the next level.",
                    },
                    {
                      title: "ACME Offers",
                      description:
                        "Turn would-be-lost leads into revenue for your business, over and over again.",
                    },
                    {
                      title: "Schedule a Meeting",
                      description:
                        "Meet with us for a Free Strategy Call. Well help tailor a plan to meet your needs.",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="flex flex-col gap-4 rounded-xl border bg-background p-5 md:p-8"
                    >
                      <div className="flex flex-col">
                        <div className="mb-8 md:mb-16">
                          <div className="size-fit rounded bg-indigo-100 p-2 dark:border dark:bg-muted/40">
                            <img
                              src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6408c23ae7c9a77ac359fc23_L.svg"
                              loading="lazy"
                              alt="Stylized Letter L"
                              className="size-12"
                            />
                          </div>
                        </div>
                        <Typography as="h5" variant="2xl/medium" className="">
                          {c.title}
                        </Typography>
                        <Typography
                          as="p"
                          variant="lg/normal"
                          className="mt-4 text-muted-foreground"
                        >
                          {c.description}
                        </Typography>
                      </div>
                      <div>
                        <div className="grid w-full items-center gap-4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="container-small"></div>
          </div>
        </Container>
      </div>

      <div>
        <footer className="pb-8">
          <div>
            <Container>
              <>
                <div className="mb-16 mt-36 rounded-lg bg-muted/40 p-16">
                  <div className="flex flex-col gap-5 text-center">
                    <div>
                      <Typography
                        as="h3"
                        variant="4xl/semibold"
                        className="text-primary-600"
                      >
                        Get more customers with&nbsp;ACME.
                      </Typography>
                    </div>
                    <Typography as="p" variant="lg/normal" className="">
                      Join the many firms already growing with ACME.
                    </Typography>
                    <div className="mt-4">
                      <Button>Get Started</Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-14">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                      <a href="#" className="">
                        <Typography
                          as="h6"
                          variant="xl/medium"
                          className="text-foreground"
                        >
                          <span className="">ACME</span>
                          <span className="ml-1 font-medium text-primary">
                            INC
                          </span>
                        </Typography>
                        {/* <div tabIndex={0} role="button" className="size-24">
                          <img
                            src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/63462a28ab79234b65c5a678_ampry_site_logo_dark.svg"
                            loading="lazy"
                            role="button"
                            alt="ACME logo"
                            className="uui-styleguide_logotype-2"
                          />
                        </div> */}
                      </a>
                      <div className="flex gap-8 font-medium">
                        <a href="#">
                          <div>Home</div>
                        </a>
                        <a href="#">
                          <div>Log In</div>
                        </a>
                        <a href="#">
                          <div>Blog</div>
                        </a>
                        <a href="#">
                          <div>Help</div>
                        </a>
                        <a href="#">
                          <div>Solutions</div>
                        </a>
                      </div>
                      <div className="flex gap-6 text-muted-foreground">
                        <a
                          aria-label="Visit our Facebook page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="Visit our Instagram Page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="Visit our X Page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="Visit our LinkedIn page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex w-full justify-center pb-4 pt-10 text-center text-sm text-muted-foreground">
                    <div className="flex gap-6">
                      <div>© 2024 &nbsp;All Rights Reserved</div>
                    </div>
                  </div>
                </div>
              </>
            </Container>
          </div>
        </footer>
      </div>
    </div>
  );
}

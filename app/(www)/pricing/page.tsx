import { PageContainer } from "@/components/common/page-container";
import { PageSubTitle, PageTitle } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return <PricingExamples />;
}

const pricingsData = [
  // {
  //   plan: "Basic",
  //   description: "Best for teams.",
  //   price: "FREE",
  //   features: [
  //     "access to limited styles",
  //     "basic block examples",
  //     "access to limited examples",
  //   ],
  //   excludedFeatures: [
  //     "Full access to all styles",
  //     "Full access to all blocks",
  //   ],
  // },
  {
    plan: "Professional",
    description: "Best for growing teams and businesses.",
    price: "$39",
    features: [
      "Full access to all styles",
      "Full access to all blocks",
      "Full access to all themes",
      "Full access to all components",
      "Full access to all palettes",
    ],
    excludedFeatures: [],
  },
];

function PricingExamples() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-accent to-background py-20">
      <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div>
      <div className="flex flex-col gap-6">
        <div className="grid gap-6 lg:gap-16">
          <PageContainer className="flex flex-col items-center gap-4">
            <PageTitle>Pricing</PageTitle>
            <PageSubTitle>Simple Pricing for Premium shacn styles</PageSubTitle>
          </PageContainer>
          {/*  */}
          {/*  */}
          <PageContainer className="relative">
            <div className="mx-auto grid max-w-3xl grid-cols-1 place-content-center place-items-center justify-center gap-6 lg:grid-cols-1 lg:gap-8">
              {pricingsData.map((p, index) => (
                <div
                  key={p.plan}
                  className={cn(
                    "relative isolate z-10 rounded-xl p-4 md:p-8",
                    "border bg-card",
                    {
                      // "col-span-2": p.plan !== "Basic",
                    },
                    {
                      // "bg-card": p.plan !== "Basic",
                    }
                  )}
                >
                  <Typography
                    as="h3"
                    variant="xl/medium"
                    className="tracking-tight"
                  >
                    {p.plan}
                  </Typography>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {p.description}
                  </div>

                  {/* {index === 0 ? (
                    <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-neutral-800">
                      Most popular
                    </span>
                  ) : null} */}

                  <div className="mt-5">
                    <span className="text-5xl font-bold text-foreground">
                      {p.price}
                    </span>
                    {p.plan !== "Basic" ? (
                      <span className="ms-3 text-gray-500 dark:text-neutral-500">
                        /one time payment
                      </span>
                    ) : (
                      <span className="ms-3 text-gray-500 dark:text-neutral-500">
                        current
                      </span>
                    )}
                  </div>

                  <div className="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-0">
                    <ul className="space-y-2 text-sm sm:text-base">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-md bg-primary/15 text-primary">
                            <svg
                              className="size-3.5 shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-2 space-y-2 text-sm sm:text-base">
                      {p.excludedFeatures.map((f, idx) => (
                        <li key={f + idx} className="flex gap-x-3">
                          <span className="flex size-5 items-center justify-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                            <svg
                              className="size-3.5 shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </span>
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div className="col-span-2 flex justify-end">
                      {/* <button
                              type="button"
                              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            >
                              Start free trial
                            </button> */}
                      {p.plan !== "Basic" ? (
                        <Button size="lg" className="w-full">
                          <span>Upgrade</span>
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          variant={"outline"}
                          className="w-full"
                          disabled
                        >
                          <span>
                            Current plan
                            {/* Upgrade to Professional plan to
                                  unlock all features. */}
                          </span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PageContainer>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="not-prose mx-auto max-w-5xl p-6 sm:p-8">
  <div className="flex flex-col gap-6">
    <h3 className="inline-block text-4xl ">
      <span
        style={{
          verticalAlign: "top",
          textDecoration: "inherit",
          textWrap: "balance",
        }}
      >
        Simple Pricing for Powerful Form Handling
      </span>
    </h3>
    <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-1">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-14">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-neutral-200 lg:text-4xl">
              Solo, agency or team? We’ve got you covered.
            </h2>
          </div>

          <div className="relative xl:mx-auto">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {pricingsData.map((p, index) => (
                <div key={p.plan}>
                  <div
                    className={cn(
                      "relative z-10 rounded-xl border bg-card p-4 md:p-10"
                    )}
                  >
                    <Typography
                      as="h3"
                      variant="xl/medium"
                      className="tracking-tight"
                    >
                      {p.plan}
                    </Typography>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {p.description}
                    </div>

                    {index === 1 ? (
                      <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-neutral-800">
                        Most popular
                      </span>
                    ) : null}

                    <div className="mt-5">
                      <span className="text-6xl font-bold text-foreground">
                        {p.price}
                      </span>
                      {p.plan !== "Basic" ? (
                        <span className="ms-3 text-gray-500 dark:text-neutral-500">
                          one time payment
                        </span>
                      ) : (
                        <span className="ms-3 text-gray-500 dark:text-neutral-500">
                          current
                        </span>
                      )}
                    </div>

                    <div className="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-0">
                      <ul className="space-y-2 text-sm sm:text-base">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-x-3">
                            <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                              <svg
                                className="size-3.5 shrink-0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-2 space-y-2 text-sm sm:text-base">
                        {p.excludedFeatures.map((f, idx) => (
                          <li key={f + idx} className="flex gap-x-3">
                            <span className="flex size-5 items-center justify-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                              <svg
                                className="size-3.5 shrink-0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </span>
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                      <div className="col-span-2 flex justify-end">
                        {p.plan !== "Basic" ? (
                          <Button size="lg" className="w-full">
                            <span>Upgrade</span>
                          </Button>
                        ) : (
                          <Button
                            size="lg"
                            variant={"outline"}
                            className="w-full"
                            disabled
                          >
                            <span>Current plan</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <div className="relative z-10 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 md:p-10">
                  <h3 className="text-xl font-bold text-foreground">
                    Professional
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-neutral-500">
                    Everything a small team needs.
                  </div>

                  <div className="mt-5">
                    <span className="text-6xl font-bold text-foreground">
                      $18
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      .00
                    </span>
                    <span className="ms-3 text-gray-500 dark:text-neutral-500">
                      USD / monthly
                    </span>
                  </div>

                  <div className="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0">
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Up to 10 people</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Collect data</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">
                          Code extensibility
                        </span>
                      </li>
                    </ul>

                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex gap-x-3">
                        <span className="flex size-5 items-center justify-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Custom reports</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="flex size-5 items-center justify-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Product support</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="flex size-5 items-center justify-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Cancel anytime.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        No card required.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative z-10 rounded-xl border bg-white p-5 shadow-xl shadow-gray-200 dark:border-neutral-800 dark:bg-neutral-800/50 dark:shadow-gray-900/20 md:p-10">
                  <h3 className="text-xl font-bold text-foreground">Teams</h3>
                  <div className="text-foreground-secondary text-sm">
                    For growing businesses.
                  </div>
                  <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-neutral-800">
                    Most popular
                  </span>

                  <div className="mt-5">
                    <span className="text-6xl font-bold text-foreground">
                      $36
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      .99
                    </span>
                    <span className="text-foreground-subtle ms-3">
                      USD / monthly
                    </span>
                  </div>

                  <div className="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0">
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Up to 10 people</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Collect data</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">
                          Code extensibility
                        </span>
                      </li>
                    </ul>

                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Custom reports</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">Product support</span>
                      </li>

                      <li className="flex gap-x-3">
                        <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="size-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-foreground">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div className="col-span-2 flex w-full justify-center">
                      <Button size="lg" className="w-full">
                        <span>Start free trial</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute end-0 top-0 hidden translate-x-16 translate-y-16 md:block">
              <svg
                className="h-auto w-16 text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute bottom-0 start-0 hidden -translate-x-16 translate-y-16 md:block">
              <svg
                className="h-auto w-56 text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="mt-7 text-center">
            <p className="text-xs text-gray-400">
              Prices in USD. Taxes may apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}

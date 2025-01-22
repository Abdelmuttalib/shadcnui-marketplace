import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Cuboid } from "lucide-react";
import React, { useState } from "react";

export default function DDPage() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <DD />
    </div>
  );
}

export function M() {
  return (
    <div
      className="w-60 h-56 overflow-hidden bg-overlay-on-surface-background ml-20 shadow-md rounded-lg mt-2 border dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full block m-0 mb-44"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-dropdown-account"
      style={{
        transform: "translate(-24px, 58px);",
      }}
      data-popper-placement="bottom-end"
    >
      <div className="py-3 px-5 bg-background/60 rounded-lg m-0.5">
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Signed in as
        </p>
        <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
          james@site.com
        </p>
      </div>
      <div className="p-1 space-y-0.5 bg-overlay-on-surface-background">
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-foreground hover:bg-zinc-700/50"
          href="#"
        >
          <svg
            className="shrink-0 size-4 text-foreground-subtle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          Newsletter
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-foreground hover:bg-zinc-700/50"
          href="#"
        >
          <svg
            className="shrink-0 size-4 text-foreground-subtle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          Purchases
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-foreground hover:bg-zinc-700/50"
          href="#"
        >
          <svg
            className="shrink-0 size-4 text-foreground-subtle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M12 12v9"></path>
            <path d="m8 17 4 4 4-4"></path>
          </svg>
          Downloads
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-foreground hover:bg-zinc-700/50"
          href="#"
        >
          <svg
            className="shrink-0 size-4 text-foreground-subtle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          Team Account
        </a>
      </div>
    </div>
  );
}

export function DD() {
  const [preview, setPreview] = useState(true);
  const [breakpoint, setBreakpoint] = useState("lg");

  const breakpoints = [
    {
      label: "sm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-smartphone"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
    {
      label: "md",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-tablet"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
          <line x1="12" x2="12.01" y1="18" y2="18"></line>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
    {
      label: "lg",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
  ];

  return (
    <>
      <div className="mt-16 md:mt-32 pt-10" id="examples">
        <div className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0">
          <div className="space-y-2">
            <Typography as="h2" variant="display-sm/medium">
              {/* Landing Pages */}
              Examples <Badge variant="neutral">Coming Soon</Badge>
            </Typography>
            {/* <Typography
              as="h2"
              variant="md/regular"
              className="text-foreground-secondary"
            >
              landing page examples
            </Typography> */}
          </div>
        </div>
        <div className="mb-6 space-y-2 rounded-2xl border bg-gray-50 dark:bg-overlay-on-surface-background p-1">
          <div className="flex justify-between overflow-x-auto px-1 pt-1">
            <div className="flex items-center gap-2">
              <div className="hidden gap-0.5 rounded-md border-[0.5px] bg-gray-100 p-0.5 lg:flex dark:bg-gray-950/50 outline-none">
                <Button
                  variant={preview ? "outline" : "ghost"}
                  onClick={() => setPreview(true)}
                  size="sm"
                  iconLeft={
                    <Cuboid />
                    // <svg
                    //   xmlns="http://www.w3.org/2000/svg"
                    //   width="24"
                    //   height="24"
                    //   viewBox="0 0 24 24"
                    //   fill="none"
                    //   stroke="currentColor"
                    //   stroke-width="2"
                    //   stroke-linecap="round"
                    //   stroke-linejoin="round"
                    //   className="lucide lucide-code flex-shrink-0 size-[1.125rem]"
                    // >
                    //   <polyline points="16 18 22 12 16 6"></polyline>
                    //   <polyline points="8 6 2 12 8 18"></polyline>
                    // </svg>
                  }
                >
                  Preview
                </Button>
                <Button
                  variant={!preview ? "outline" : "outline"}
                  onClick={() => setPreview(false)}
                  size="sm"
                  iconLeft={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-code flex-shrink-0 size-[1.125rem]"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  }
                  disabled
                  iconRight={<Badge variant="neutral">Coming Soon</Badge>}
                >
                  Code
                </Button>
              </div>
              {/* <div
                role="radiogroup"
                aria-required="false"
                dir="ltr"
                className="hidden gap-0.5 rounded-md border-[0.5px] bg-gray-100 p-0.5 lg:flex dark:bg-gray-950/50 outline-none"
                tabIndex={0}
              >
                {breakpoints.map((bp) => (
                  <IconButton
                    key={bp.label}
                    variant={breakpoint === bp.label ? "outline" : "ghost"}
                    size="xs"
                    onClick={() => setBreakpoint(bp.label)}
                  >
                    {bp.icon}
                  </IconButton>
                ))}
              </div>
              <Separator orientation="vertical" className="h-6" /> */}
              {/* <IconLink
                href="/examples/forms/login1"
                variant="secondary"
                size="sm"
                newTab
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-maximize m-auto size-3.5"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                  <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                </svg>
              </IconLink>
              <Separator orientation="vertical" className="h-6" /> */}

              {/* <Button
                variant="secondary"
                size="sm"
                iconLeft={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-code flex-shrink-0 size-[1.125rem]"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                }
              >
                Code
              </Button> */}
            </div>
            <div className="hidden items-center gap-0.5 lg:flex">
              {/* <IconLink
                href="https://twitter.com/intent/tweet?text=Check%20out%20these%20stunning%20Forms%20blocks%20built%20with%20Tailus%20UI%20React!%0A%0A%F0%9F%94%B9%20100%25%20customizable%0A%F0%9F%94%B9%20Modern%20and%20trendy%0A%F0%9F%94%B9%20Open%20Source%0A%0A@tailus_ui%20%20ui.tailus.io/examples/forms"
                size="xs"
                variant="secondary"
                newTab
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto size-3.5"
                >
                  <path
                    d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </IconLink> */}
              {/* <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20these%20stunning%20Forms%20blocks%20built%20with%20Tailus%20UI%20React!%0A%0A%F0%9F%94%B9%20100%25%20customizable%0A%F0%9F%94%B9%20Modern%20and%20trendy%0A%F0%9F%94%B9%20Open%20Source%0A%0A@tailus_ui%20%20ui.tailus.io/examples/forms"
                className="group flex justify-center gap-1.5 items-center rounded-[--btn-radius] outline-2 outline-offset-2 focus-visible:outline outline-primary-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:hover:brightness-100 dark:disabled:bg-gray-500/10 dark:disabled:[background-image:none] dark:disabled:text-gray-700 dark:disabled:shadow-none dark:disabled:border-none text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 size-8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="share on x"
                data-state="closed"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto size-3.5"
                >
                  <path
                    d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a> */}
              {/* <div
                data-orientation="vertical"
                aria-orientation="vertical"
                role="separator"
                className="bg-foreground-subtle border-r w-0.5 h-4 mx-2"
              ></div> */}
              {/* <Separator className="mx-2 h-6" orientation="vertical" />
              <IconButton variant="secondary" size="xs" disabled>
                <Copy />
              </IconButton> */}
              {/* <button
                className="group flex justify-center gap-1.5 items-center rounded-[--btn-radius] outline-2 outline-offset-2 focus-visible:outline outline-primary-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:hover:brightness-100 dark:disabled:bg-gray-500/10 dark:disabled:[background-image:none] dark:disabled:text-gray-700 dark:disabled:shadow-none dark:disabled:border-none text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 size-8"
                aria-label="copy code"
                data-state="closed"
              ></button> */}
            </div>
          </div>
          <div
            className="flex h-full w-full overflow-hidden gap-2"
            // style="display:flex;flex-direction:row;height:100%;overflow:hidden;width:100%"
          >
            {/* drag/separator */}
            {/* <div
              className="relative w-1 before:absolute before:inset-0 before:m-auto before:h-12 before:w-0.5 before:rounded-full before:bg-gray-300 before:transition-[height,background] hover:before:h-14 hover:before:bg-gray-400 focus:before:bg-gray-400 dark:before:bg-gray-600 dark:hover:before:bg-gray-500 dark:focus:before:bg-gray-400"
              role="separator"
              tabIndex={0}
            ></div> */}

            {preview ? (
              <div
                className="h-fit rounded-lg overflow-hidden border dark:shadow dark:shadow-gray-950 w-full"
                // style="flex: 30 1 0px; overflow: hidden;"
              >
                <iframe
                  loading="lazy"
                  title="Login Example 1"
                  className="block h-full min-h-[45rem] w-full"
                  // src="https://nextjs.org"
                  src="/examples/landing-1"
                  id="block-login1"
                ></iframe>
              </div>
            ) : (
              <div
                className="flex overflow-hidden rounded-lg w-full"
                // style="flex: 70 1 0px; overflow: hidden;"
              >
                <div className="w-full relative rounded-lg backdrop-blur-xl">
                  <div
                    data-radix-scroll-area-viewport=""
                    className="w-full overflow-auto"
                  >
                    <div className="min-w-full">
                      {/* <Code code={exampleCode} /> */}
                      {/* tabIndex={0} */}
                      {/* className="h-max text-sm p-4 w-full language-tsx" */}
                    </div>
                    {/* <Code code={exampleCode} /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <a
          className="transition text-sm text-gray-950 hover:text-gray-800 dark:text-white dark:hover:text-gray-200 underline font-normal decoration-gray-950/25 dark:decoration-white/25 flex items-center gap-2"
          href="/examples/forms"
        >
          More examples
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right size-3 opacity-50"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a> */}
      </div>
    </>
  );
}

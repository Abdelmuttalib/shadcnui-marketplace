import type { ClassValue } from "clsx";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: ClassValue;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-screen-2xl px-2 md:px-4", className)}>
      {children}
    </div>
  );
}

export default function Templates() {
  return (
    <div>
      <h1>Templates</h1>
      <H />
    </div>
  );
}

function H() {
  return (
    <div className="bg-base-25 relative -mt-[5.75rem] overflow-hidden pt-12 dark:bg-card md:pt-[5.75rem]">
      <Container>
        <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/public/plus/img/beams-templates-header.png')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block"></div>
        <div className="max-w-container mx-auto px-4 pt-4 sm:px-6 lg:flex lg:px-8">
          <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
            <h1 className="text-base/7 font-semibold text-primary">
              By the makers of Tailwind CSS
            </h1>

            <Typography
              as="p"
              variant="5xl/bold"
              className="mt-4 tracking-tight text-foreground"
            >
              Modern website templates, crafted with shadcn ui and Tailwind CSS.
            </Typography>
            <div className="mt-4 flex flex-wrap gap-6">
              <div className="text-foreground-secondary flex items-center text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-6 w-6 text-foreground"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  ></line>
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  ></line>
                </svg>
                {/* <svg
                  className="size-8 flex-none stroke-current text-foreground-subtle"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="13"
                    ry="5"
                    transform="rotate(60 16 16)"
                  ></ellipse>
                  <ellipse
                    rx="13"
                    ry="5"
                    transform="matrix(-.5 .86603 .86603 .5 16 16)"
                  ></ellipse>
                  <circle cx="16" cy="16" r="2"></circle>
                </svg> */}
                <span className="ml-2.5">shadcn ui</span>
              </div>
              <div className="text-foreground-secondary flex items-center text-sm font-medium">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 36 36"
                  className="mt-2 inline-flex h-6 w-6 items-center justify-center"
                  fill="none"
                >
                  <path
                    d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                    className="fill-sky-400"
                  ></path>
                </svg>

                <span className="ml-2.5">Tailwind CSS</span>
              </div>
            </div>
            <p className="text-foreground-secondary mt-4 text-base/7">
              Visually-stunning, easy to customize site templates built with
              React and Next.js. The perfect starting point for your next
              project and the ultimate resource for learning how experts build
              real websites with Tailwind CSS.
            </p>
            <div className="mt-8 flex gap-4">
              <ButtonLink href="#browse">Browse templates</ButtonLink>
              <ButtonLink href="/all-access" variant="outline">
                Get <span className="hidden sm:inline">everything</span> with
                all-access{" "}
                <span aria-hidden="true" className="text-foreground sm:inline">
                  →
                </span>
              </ButtonLink>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="mt-6 flex">
              <div className="relative shrink-0 p-4">
                <div className="relative z-10 overflow-hidden rounded-sm shadow-xl ring-1 ring-slate-900/5">
                  <img
                    className="h-[404px] w-[336px]"
                    src="https://tailwindui.com/plus/img/headers/templates/salient.png"
                  />
                </div>
                <div className="z-0">
                  <div className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="-mb-px flex h-[2px] w-80 -scale-x-100">
                      <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-14 shrink-0 p-4">
                <div className="overflow-hidden rounded-sm shadow-xl ring-1 ring-slate-900/5">
                  <img
                    className="h-[404px] w-[336px]"
                    src="https://tailwindui.com/plus/img/headers/templates/keynote.png"
                  />
                </div>
                <div>
                  <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -bottom-12 -top-20 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute right-10 top-[calc(100%-1px)] -mb-px flex h-8 items-start overflow-hidden">
                    <div className="-mt-px flex h-[2px] w-80 -scale-x-100">
                      <div className="blur-xs w-full flex-none [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 p-4">
                <div className="overflow-hidden rounded-sm shadow-xl ring-1 ring-slate-900/5">
                  <img
                    className="h-[404px] w-[336px]"
                    src="https://tailwindui.com/plus/img/headers/templates/primer.png"
                  />
                </div>
                <div>
                  <div className="absolute -left-12 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 sm:z-auto">
          <div className="max-w-container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
            <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="flex">
                <div className="p-0.5">
                  <svg
                    className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]"
                    viewBox="0 0 40 40"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                      className="fill-sky-50 stroke-sky-500"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M17.25 33.25h-8.5a2 2 0 01-2-2V8.75a2 2 0 012-2h22.5a2 2 0 012 2v1m-4 3h-18.5"
                      className="stroke-sky-500/40"
                    ></path>
                    <path
                      d="M31.25 12.75h-8.5a2 2 0 00-2 2v16.5a2 2 0 002 2h8.5a2 2 0 002-2v-16.5a2 2 0 00-2-2z"
                      className="fill-white stroke-sky-500"
                    ></path>
                    <path d="M26.75 30.25h.5" className="stroke-sky-500"></path>
                  </svg>
                </div>
                <div className="ml-6">
                  <h2 className="text-sm/6 font-semibold text-foreground">
                    Built with modern technologies
                  </h2>
                  <p className="text-foreground-secondary mt-2 text-sm/6">
                    Each template is a well-structured Next.js project, giving
                    you a codebase that’s productive and enjoyable to work in.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="p-0.5">
                  <svg
                    className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]"
                    viewBox="0 0 40 40"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                      className="fill-sky-50 stroke-sky-500"
                    ></path>
                    <path
                      d="M24.847 33.25L19.82 20.113c-.324-.846.543-1.656 1.351-1.261L33.25 24.75l-6.426 2-1.977 6.5z"
                      className="fill-white stroke-sky-500"
                    ></path>
                    <path
                      d="M33.25 20.25V9.75a3 3 0 00-3-3H9.75a3 3 0 00-3 3v20.5a3 3 0 003 3h10.5"
                      className="stroke-sky-500/40"
                    ></path>
                    <path
                      d="M11.75 11.75v16.5"
                      className="stroke-sky-500"
                    ></path>
                  </svg>
                </div>
                <div className="ml-6">
                  <h2 className="text-sm/6 font-semibold text-foreground">
                    Easy to customize
                  </h2>
                  <p className="text-foreground-secondary mt-2 text-sm/6">
                    Everything is styled with utility classNamees, just open the
                    markup in your editor and change whatever you want.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="p-0.5">
                  <svg
                    className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]"
                    viewBox="0 0 40 40"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                      className="fill-sky-50 stroke-sky-500"
                    ></path>
                    <path
                      d="M31.817 26a13.194 13.194 0 001.433-6c0-7.318-5.932-13.25-13.25-13.25S6.75 12.682 6.75 20c0 2.16.517 4.199 1.433 6"
                      className="stroke-sky-500/40"
                    ></path>
                    <path
                      d="M15.75 18a4.25 4.25 0 108.5 0 4.25 4.25 0 00-8.5 0z"
                      className="fill-white stroke-sky-500"
                    ></path>
                    <path
                      d="M28.982 29.74c-.994-2.29-4.638-3.99-8.982-3.99-4.344 0-7.989 1.7-8.982 3.99A13.202 13.202 0 0020 33.25c3.466 0 6.62-1.33 8.982-3.51z"
                      className="fill-white stroke-sky-500"
                    ></path>
                  </svg>
                </div>
                <div className="ml-6">
                  <h2 className="text-sm/6 font-semibold text-foreground">
                    Built by experts
                  </h2>
                  <p className="text-foreground-secondary mt-2 text-sm/6">
                    All of the code follows Tailwind CSS best practices, because
                    it’s written by the same team who created and maintain the
                    framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
      </Container>
    </div>
  );
}

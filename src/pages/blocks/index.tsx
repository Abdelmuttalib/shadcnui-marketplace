import { ScreenContainer } from "@/components/container";
import { Button, ButtonLink } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRightIcon, BookmarkIcon, MailIcon, Timer } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { applicationUIData } from "@/config";
import Badge from "@/components/ui/badge";
import { IconButton } from "@/components/ui/icon-button";
import {
  DataTableDemo,
  DropdownMenuDemo,
  NotificationsCard,
  WaitlistForm,
} from "@/components/demo";

export default function Blocks() {
  return (
    <div>
      <H />
    </div>
  );
}

export function H() {
  return (
    <>
      <div className="relative -mt-[5.75rem] overflow-hidden pt-12 md:pt-[5.75rem] bg-base-25/50">
        <ScreenContainer>
          <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/publichttps://tailwindui.com/plus/img/avatar-1.jpg')] bg-[length:1000px_700px] bg-[position:calc(50%_+_190px)_-50px] bg-no-repeat lg:block"></div>
          <div className="max-w-container mx-auto px-4 pt-4 sm:px-6 flex flex-col lg:flex-row lg:px-8">
            <div className="relative z-20 mx-auto max-w-[40rem] pt-16 pb-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pt-20 lg:pr-4 lg:pb-24">
              <h1 className="text-base/7 font-semibold text-primary">
                Powered by shadcn ui
              </h1>

              <Typography
                as="p"
                variant="display-lg/bold"
                className="mt-4 text-foreground tracking-tight"
              >
                {/* Beautiful UI components, crafted with shadcn ui and Tailwind
                CSS. */}
                shadcn ui <span className="italic">styles</span>
              </Typography>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center text-sm font-medium text-foreground-secondary">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></line>
                    <line
                      x1="192"
                      y1="40"
                      x2="40"
                      y2="192"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></line>
                  </svg>
                  {/* <svg
                  className="size-8 flex-none stroke-current text-foreground-subtle"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                <div className="flex items-center text-sm font-medium text-foreground-secondary">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 36 36"
                    className="h-6 w-6 inline-flex items-center justify-center mt-2"
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

              <p className="mt-4 text-base/7 text-foreground-secondary">
                {/* Over 500+ professionally designed, fully responsive, expertly
                crafted component examples you can drop into your Tailwind
                projects and customize to your heart’s content. */}
                Style Your Way, Redefining shadcn UI for Custom Interfaces
              </p>
              <div className="mt-8 flex gap-4">
                <WaitlistForm />
                {/* <ButtonLink
                  href="/preview"
                  iconRight={<ArrowRightIcon className="w-4 h-4" />}
                >
                  Live preview
                </ButtonLink>
                <ButtonLink
                  href="/documentation"
                  variant="ghost"
                  iconRight={<ArrowRightIcon className="w-4 h-4" />}
                >
                  Documentation
                </ButtonLink> */}
              </div>
            </div>
            <div className="relative z-10 mt-12 select-none lg:flex">
              <div className="z-20 flex flex-col">
                <div className="relative p-4">
                  <div className="absolute top-8 right-0 bottom-0 left-11 bg-slate-900/[0.03]"></div>
                  <div className="pointer-events-auto relative z-10 w-full rounded-lg bg-overlay-on-surface-background text-[0.8125rem]/5 text-foreground-secondary ring-1 shadow-xl shadow-black/5 ring-slate-700/10">
                    <div>
                      <div className="flex items-center px-3.5 py-2.5 text-foreground-secondary">
                        <svg
                          className="mr-2 size-5 stroke-foreground-subtle"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        Search projects...
                      </div>
                      <div className="border-t border-slate-400/20 px-3.5 py-3">
                        <div className="mb-1.5 text-[0.6875rem] font-semibold text-foreground-subtle">
                          Recent searches
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 size-5 flex-none stroke-foreground-subtle"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          Tailwind Labs / Website Redesign
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 size-5 flex-none stroke-foreground-subtle"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          Laravel LLC / Conference Branding
                        </div>
                      </div>
                      <div className="border-t border-slate-400/20 px-3.5 py-3">
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 size-5 flex-none stroke-foreground-subtle"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                          Add new file...
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 size-5 flex-none stroke-foreground-subtle"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                          </svg>
                          Add new folder...
                        </div>
                        <div className="flex items-center rounded-md p-1.5 bg-primary text-white">
                          <svg
                            className="mr-2.5 size-5 flex-none stroke-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                          </svg>
                          Add hashtag...
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 size-5 flex-none stroke-foreground-subtle"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                          </svg>
                          Add label...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-end gap-4 p-2 md:p-4">
                  <div className="relative">
                    <DropdownMenuDemo />
                  </div>
                  <div className="relative">
                    <Switch id="accept" />
                  </div>
                  <div className="relative">
                    <Button
                      variant="outline"
                      className="shadow-xs"
                      iconLeft={
                        <svg className="mr-2.5 size-5 flex-none fill-foreground-subtle">
                          <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                        </svg>
                      }
                    >
                      Bookmark
                    </Button>

                    {/* <div className="pointer-events-auto relative inline-flex rounded-md bg-background text-[0.8125rem]/5 font-medium text-foreground-secondary ring-1 shadow-xs ring-slate-700/10 hover:bg-overlay-on-surface-background hover:text-foreground">
                      <div className="flex px-3 py-2">
                        <svg className="mr-2.5 size-5 flex-none fill-foreground-subtle">
                          <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                        </svg>
                        Bookmark
                      </div>
                      <div className="border-l border-slate-400/20 px-2.5 py-2">
                        12k
                      </div>
                    </div> */}
                    <div className="z-0">
                      <div className="absolute -top-12 right-0 -bottom-8 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                      <div className="absolute -top-12 -bottom-8 left-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    </div>
                  </div>
                </div>
                <div className="relative ml-6 flex items-center justify-end">
                  <div className="relative p-4">
                    <DataTableDemo />
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-8">
                <div className="relative md:p-4">
                  <div className="absolute inset-0 z-20"></div>
                  {/* <div className="w-full h-full z-10 absolute"></div> */}
                  <NotificationsCard />
                </div>
                <div className="relative md:p-4 mt-4 pb-4">
                  <NotificationAlert />
                  {/* <div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-overlay-on-surface-background text-[0.8125rem]/5 text-foreground ring-1 shadow-xl shadow-black/5 ring-slate-700/10">
                    <div className="flex items-center p-4">
                      <img
                        src="https://tailwindui.com/plus/img/avatar-1.jpg"
                        alt=""
                        className="size-10 flex-none rounded-full"
                      />
                      <div className="ml-4 flex-auto">
                        <div className="font-medium">Leonard Krasner</div>
                        <div className="mt-1 text-foreground-secondary">
                          @leonardkrasner
                        </div>
                      </div>
                      <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-foreground-secondary ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50">
                        View
                      </div>
                    </div>
                    <div className="flex items-center p-4">
                      <img
                        src="https://tailwindui.com/plus/img/avatar-1.jpg"
                        alt=""
                        className="size-10 flex-none rounded-full"
                      />
                      <div className="ml-4 flex-auto">
                        <div className="font-medium">Floyd Miles</div>
                        <div className="mt-1 text-foreground-secondary">
                          @floydmiles
                        </div>
                      </div>
                      <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-foreground-secondary ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50">
                        View
                      </div>
                    </div>
                    <div className="p-4">
                      <Button variant="secondary" className="w-full shadow-xs">
                        View all
                      </Button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative z-20 sm:z-auto">
            <div className="max-w-container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
              <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                <div className="flex">
                  <div className="p-0.5">
                    <svg
                      className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-indigo-50 stroke-indigo-500"
                      ></path>
                      <path
                        d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
                        className="stroke-indigo-500/50"
                      ></path>
                      <path
                        d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
                        className="stroke-indigo-500"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm/6 font-semibold text-foreground">
                      500+ Components
                    </h2>
                    <p className="mt-2 text-sm/6 text-foreground-secondary">
                      Beautifully designed, expertly crafted components that
                      follow all accessibility best practices and are easy to
                      customize.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <svg
                      className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-indigo-50 stroke-indigo-500"
                      ></path>
                      <path
                        d="M22.25 11.75l-4.5 16.5"
                        className="stroke-indigo-500/50"
                      ></path>
                      <path
                        d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5"
                        className="stroke-indigo-500"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm/6 font-semibold text-foreground">
                      shadcn ui & Tailwind CSS
                    </h2>
                    <p className="mt-2 text-sm/6 text-foreground-secondary">
                      Interactive examples for React and Next.js powered by
                      shadcn ui, and Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <svg
                      className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-indigo-50 stroke-indigo-500"
                      ></path>
                      <path
                        d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5"
                        className="stroke-indigo-500/50"
                      ></path>
                      <path
                        d="M31.5 8.5l-23 23"
                        className="stroke-indigo-500"
                      ></path>
                      <path
                        d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5"
                        className="stroke-indigo-500"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm/6 font-semibold text-foreground">
                      Fully Responsive
                    </h2>
                    <p className="mt-2 text-sm/6 text-foreground-secondary">
                      Every example is fully responsive and carefully designed
                      and implemented to look great at any screen size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
        </ScreenContainer>
      </div>
    </>
  );
}

function ShowcaseCard({
  title,
  description,
  image,
  href,
  componentCount,
  pro = false,
}: {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  componentCount: number;
  pro?: boolean;
}) {
  return (
    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-base-25/50 before:opacity-0 dark:before:bg-overlay-on-surface-background hover:before:opacity-100">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-overlay-on-surface-background ring-1 ring-border">
        <img
          // "https://tailwindui.com/plus/img/category-thumbnails/application-ui/stacked.png"
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <h4 className="mt-4 text-sm font-medium text-foreground group-hover:text-primary">
        <a href="https://tailwindui.com/components/application-ui/application-shells/stacked">
          <span className="absolute -inset-2.5 z-10"></span>
          <span className="relative">
            {/* Stacked Layouts */}
            {title}

            {/* {pro && (
              <Badge variant="blue" className="ml-2">
                Pro
              </Badge>
            )} */}
          </span>
        </a>
      </h4>
      <p className="relative mt-1.5 text-xs font-medium text-foreground-subtle">
        {/* 9 components */}
        {componentCount} blocks
      </p>
      {pro && (
        <p className="pointer-events-none absolute top-1.5 right-1.5 z-10">
          <Badge variant="blue" className="ml-2">
            Pro
          </Badge>
        </p>
      )}

      {/* <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
          <span className="sr-only">
            PNG previews only, upgrade to get the code.
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <path
              d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </p> */}
    </div>
  );
}

function ShowcaseSection({
  title,
  cards,
}: {
  title: string;
  cards: {
    title: string;
    description: string;
    href: string;
    image: {
      src: string;
      alt: string;
    };
    componentCount: number;
  }[];
}) {
  return (
    <section
      id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
      className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
    >
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
        {cards.map((card, index) => (
          <li key={card.title + index}>
            <ShowcaseCommingSoonCard {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ComponentShowcaseCard({
  title,
  description,
  image,
  href,
  componentCount,
  pro = false,
  component,
}: {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  componentCount: number;
  pro?: boolean;
  component: React.ReactNode;
}) {
  return (
    <div
      data-dark="true"
      className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg bg-overlay-on-surface-background shadow-sm ring-1 ring-border"
    >
      <div className="relative shrink-0 bg-background/80 h-52 overflow-hidden">
        {/* bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat */}
        <div className="pl-10 pt-10 overflow-hidden">{component}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-overlay-on-surface-background to-100%"></div>
      </div>
      <div className="p-4">
        {/* <h3
          data-dark="true"
          className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-foreground-subtle"
        >
          Engagement
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-foreground">
          Become a thought leader
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-foreground-secondary">
          RadiantAI automatically writes LinkedIn posts that relate current
          events to B2B sales, helping you build a reputation as a thought
          leader.
        </p> */}
        <h4 className="font-medium text-lg/5 tracking-tight text-foreground">
          {/* <a href={href}> */}
          <span className="absolute -inset-2.5 z-10"></span>
          <span className="relative inline-flex items-center gap-1">
            {title}
            {/* {pro && (
              <Badge variant="blue" className="ml-2">
                Pro
              </Badge>
            )} */}
            {/* <ArrowRightIcon className="hidden group-hover:block size-4 -rotate-45 text-foreground-subtle" /> */}
          </span>
          {/* </a> */}
        </h4>
        <p className="relative mt-1.5 text-sm font-medium text-foreground-subtle">
          9 Blocks
          {/* {componentCount} blocks */}
        </p>
        {pro && (
          <p className="pointer-events-none absolute top-1.5 right-1.5 z-10">
            <Badge variant="blue" className="ml-2">
              Pro
            </Badge>
          </p>
        )}
      </div>
    </div>
  );
}

function ShowcaseCommingSoonCard({
  title,
  description,
  image,
  href,
  componentCount,
  pro = false,
  componentPreview,
}: {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  componentCount: number;
  pro?: boolean;
  componentPreview?: React.ReactNode;
}) {
  return (
    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-base-25/50 before:opacity-0 dark:before:bg-overlay-on-surface-background hover:before:opacity-100">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-overlay-on-surface-background ring-1 ring-border">
        <img
          // "https://tailwindui.com/plus/img/category-thumbnails/application-ui/stacked.png"
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <h4 className="mt-4 text-sm font-medium text-foreground group-hover:text-primary">
        <a href="https://tailwindui.com/components/application-ui/application-shells/stacked">
          <span className="absolute -inset-2.5 z-10"></span>
          <span className="relative">
            {/* Stacked Layouts */}
            {title}

            {/* {pro && (
              <Badge variant="blue" className="ml-2">
                Pro
              </Badge>
            )} */}
          </span>
        </a>
      </h4>
      <p className="relative mt-1.5 text-xs font-medium text-foreground-subtle">
        {/* 9 components */}
        {componentCount} blocks
      </p>
      {pro && (
        <p className="pointer-events-none absolute top-1.5 right-1.5 z-10">
          <Badge variant="blue" className="ml-2">
            Pro
          </Badge>
        </p>
      )}

      {/* <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
          <span className="sr-only">
            PNG previews only, upgrade to get the code.
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <path
              d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </p> */}
    </div>
  );
}

function ShowcaseCommingSoonSection({
  title,
  components,
}: {
  title: string;
  components: {
    title: string;
    description: string;
    href: string;
    image: {
      src: string;
      alt: string;
    };
    component: React.ReactNode;
    componentCount: number;
  }[];
}) {
  return (
    <section
      id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
      className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-6"
    >
      {/* <h3 className="text-base font-semibold text-foreground">{title}</h3> */}
      <ul className="relative col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 p-3">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-background/70 border to-background z-20 rounded-2xl w-full">
          <div className="w-full h-full flex p-5 md:p-0 mt-32 md:mt-0 md:items-center md:justify-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Timer />
                <h2 className="font-medium">Coming soon</h2>
              </div>
              <p className="mt-3 text-sm text-foreground-secondary">
                We are working hard to bring you this styles. Stay tuned!
              </p>
            </div>
          </div>
        </div>
        {components.map((component) => (
          <li key={component.title}>
            <ComponentShowcaseCard {...component} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function NotificationAlert() {
  return (
    <div
      className="max-w-xs bg-overlay-on-surface-background border rounded-xl shadow-lg"
      role="alert"
      tabIndex={-1}
      aria-labelledby="hs-toast-stack-toggle-label"
    >
      <div className="flex p-4">
        <div className="shrink-0">
          <svg
            className="size-5 text-foreground-subtle mt-1"
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
        </div>
        <div className="ms-4">
          <h3
            id="hs-toast-stack-toggle-label"
            className="text-foreground font-semibold"
          >
            App notifications
          </h3>
          <div className="mt-1 text-sm text-foreground-subtle">
            enable notifications to receive updates from the app.
          </div>
          <div className="mt-4">
            <div className="flex gap-x-2">
              <Button size="xs" variant="secondary">
                Don&apos;t allow
              </Button>
              <Button size="xs">Allow</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <IconButton variant="destructive-outline">
        <BookmarkIcon />
      </IconButton>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <IconButton variant="secondary">
        <MailIcon />
      </IconButton>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}

function BadgesDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="neutral">Default</Badge>
      <Badge variant="green">Default</Badge>
      <Badge variant="blue">Default</Badge>
      <Badge variant="red">Default</Badge>
      <Badge variant="yellow">Default</Badge>
    </div>
  );
}

export const applicationUIComponentsData = [
  {
    title: "Application Shells",
    components: [
      {
        title: "Buttons",
        description: "Buttons are used to perform an action.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 8,
        component: <ButtonsDemo />,
      },

      {
        title: "Data Table",
        description: "Display tabular data.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 1,
        component: <DataTableDemo />,
      },
      {
        title: "Badges",
        description: "Badges are used to highlight an item's status.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 8,
        component: <BadgesDemo />,
      },
      {
        title: "Alert",
        description:
          "Alerts are used to communicate a state that affects the entire system.",
        href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
          alt: "Data Table",
        },
        componentCount: 1,
        component: <NotificationAlert />,
      },
    ],
  },
];

export function ApplicationUI() {
  return (
    <section id="product-application-ui" className="scroll-mt-28">
      <ScreenContainer>
        <h2 className="text-xl font-bold text-foreground">
          shadcn ui Application UI Styles
        </h2>
        <p className="mt-3 text-sm/7 text-foreground-secondary">
          {/* Form layouts, tables, modal dialogs — everything you need to build
          beautiful responsive web applications. */}
          Button styles, tables, badges and everything of shadcn ui components
          with multiple styles to choose from.
        </p>
        <div className="mt-4">
          {applicationUIComponentsData.map((section) => (
            <ShowcaseCommingSoonSection
              key={section.title}
              title={section.title}
              components={section.components}
            />
          ))}
          {/* {applicationUIData.map((section) => (
            <ShowcaseSection title={section.title} cards={section.cards} />
          ))} */}
        </div>
      </ScreenContainer>
    </section>
  );
}

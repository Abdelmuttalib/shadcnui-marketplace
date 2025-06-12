import Link from "next/link";
import { useTheme } from "next-themes";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { Code, exampleCode } from "@/components/views/docs/code";
import { cn } from "@/utils/cn";

export default function DD() {
  return (
    <div>
      {/* <Sidebar /> */}
      <DocLayout>
        {/* <Code /> */}
        <iframe
          src="https://afaqq.vercel.app"
          className="hide-scrollbar light min-h-[48rem] w-full overflow-hidden rounded-lg border"
        ></iframe>
        <h1>API Documentation</h1>
        <p className="lead">
          Use the Protocol API to access contacts, conversations, group
          messages, and more and seamlessly integrate your product into the
          workflows of dozens of devoted Protocol users.
        </p>
        <div className="not-prose mb-16 mt-6 flex gap-3">
          <Link
            className="dark:bg-primary-400/10 dark:text-primary-400 dark:ring-ring-400/20 dark:hover:bg-primary-400/10 dark:hover:text-primary-300 dark:hover:ring-ring-300 inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white transition hover:bg-zinc-700 dark:ring-1 dark:ring-inset"
            href="/quickstart"
          >
            Quickstart
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="-mr-1 mt-0.5 h-5 w-5"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
              ></path>
            </svg>
          </Link>
          <Link
            className="hover:bg-zinc-900/2.5 inline-flex justify-center gap-0.5 overflow-hidden rounded-full px-3 py-1 text-sm font-medium text-zinc-700 ring-1 ring-inset ring-zinc-900/10 transition hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white"
            href="/sdks"
          >
            Explore SDKs
          </Link>
        </div>
        <h2 className="scroll-mt-24" id="getting-started">
          Getting started
        </h2>
        <p className="lead">
          To get started, create a new application in your{" "}
          <Link href="#">developer settings</Link>, then read about how to make
          requests for the resources you need to access using our HTTP APIs or
          dedicated client SDKs. When your integration is ready to go live,
          publish it to our <Link href="#">integrations directory</Link> to
          reach the Protocol community.
        </p>
        <div className="not-prose">
          <Link
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium transition"
            href="/sdks"
          >
            Get your API key
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="relative top-px -mr-1 mt-0.5 h-5 w-5"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="my-16 xl:max-w-none">
          <h2 className="scroll-mt-24" id="guides">
            <Link
              className="group text-inherit no-underline hover:text-inherit"
              href="#guides"
            >
              <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
                <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
                  >
                    <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"></path>
                  </svg>
                </div>
              </div>
              Guides
            </Link>
          </h2>
          <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Authentication
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Learn how to authenticate your API requests.
              </p>
              <p className="mt-4">
                <Link
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium transition"
                  href="/authentication"
                >
                  Read more
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                    ></path>
                  </svg>
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Pagination
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Understand how to work with paginated responses.
              </p>
              <p className="mt-4">
                <Link
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium transition"
                  href="/pagination"
                >
                  Read more
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                    ></path>
                  </svg>
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Errors
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Read about the different types of errors returned by the API.
              </p>
              <p className="mt-4">
                <Link
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium transition"
                  href="/errors"
                >
                  Read more
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                    ></path>
                  </svg>
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Webhooks
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Learn how to programmatically configure webhooks for your app.
              </p>
              <p className="mt-4">
                <Link
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium transition"
                  href="/webhooks"
                >
                  Read more
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                    ></path>
                  </svg>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="my-16 xl:max-w-none">
          <h2 className="scroll-mt-24" id="resources">
            <Link
              className="group text-inherit no-underline hover:text-inherit"
              href="#resources"
            >
              <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
                <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
                  >
                    <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"></path>
                  </svg>
                </div>
              </div>
              Resources
            </Link>
          </h2>
          <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
            <C
              title={"Contacts"}
              href="/contacts"
              description="Learn about the contact model and how to create,
                    retrieve, update, delete, and list contacts."
            />

            <C
              title="Conversations"
              description="Learn about the conversation model and how to create, retrieve, update, delete, and list conversations."
              href="#"
            />
            <C
              title="Messages"
              description="Learn about the message model and how to create, retrieve, update, delete, and list messages."
              href="#"
            />
            <C
              title="Groups"
              description="Learn about the group model and how to create, retrieve, update, delete, and list groups."
              href="#"
            />
          </div>
        </div>
      </DocLayout>
    </div>
  );
}

function C({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="hover:shadow-overlay-on-surface-background group relative flex overflow-hidden rounded-2xl bg-card transition-shadow hover:shadow-md">
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className="dark:fill-white/1 dark:stroke-white/2.5 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          >
            <defs>
              <pattern
                id=":r8:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#:r8:)"
            ></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-card opacity-0 transition duration-300 group-hover:opacity-100"
          // style="mask-image: radial-gradient(180px at 0px 0px, white, transparent);"
          style={{
            maskImage: "radial-gradient(180px at 0px 0px, white, transparent);",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          // style="mask-image: radial-gradient(180px at 0px 0px, white, transparent);"
          style={{
            maskImage: "radial-gradient(180px at 0px 0px, white, transparent);",
          }}
        >
          <svg
            aria-hidden="true"
            className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:stroke-white/10"
          >
            <defs>
              <pattern
                id=":r9:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#:r9:)"
            ></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className="ring-zinc-900/7.5 absolute inset-0 rounded-2xl ring-1 ring-inset group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <div className="dark:bg-white/7.5 dark:group-hover:bg-primary-300/10 dark:group-hover:ring-ring-400 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:ring-white/15">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="dark:group-hover:fill-primary-300/10 dark:group-hover:stroke-primary-400 h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400"
          >
            <path
              strokeWidth="0"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
            ></path>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
            ></path>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            ></path>
          </svg>
        </div>
        <h3 className="mt-4 text-sm font-semibold leading-7 text-foreground">
          <Link href={href}>
            <span className="absolute inset-0 rounded-2xl"></span>
            {title}
          </Link>
        </h3>
        <p className="text-foreground-secondary mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div data-headlessui-portal="">
      <button
        type="button"
        data-headlessui-focus-guard="true"
        aria-hidden="true"
        className="fixed left-0 top-0 -m-1 h-0 w-px overflow-hidden whitespace-nowrap border-none p-0"
        style={{
          clip: "rect(0px, 0px, 0px, 0px)",
        }}
        // style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
      ></button>
      <div>
        <div
          className="fixed inset-0 z-50 lg:hidden"
          id="headlessui-dialog-:r48:"
          role="dialog"
          tabIndex={-1}
          aria-modal="true"
          data-headlessui-state="open"
          data-open=""
        >
          <div
            className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/40"
            aria-hidden="true"
            data-headlessui-state="open"
            data-open=""
          ></div>
          <div
            id="headlessui-dialog-panel-:r4f:"
            data-headlessui-state="open"
            data-open=""
          >
            <div
              className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-white px-4 transition data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
              // style="--bg-opacity-light: 0.5; --bg-opacity-dark: 0.2;"
            >
              <div className="bg-zinc-900/7.5 dark:bg-white/7.5 absolute inset-x-0 top-full h-px transition"></div>
              <div className="hidden lg:block lg:max-w-md lg:flex-auto">
                <button
                  type="button"
                  className="ui-not-focus-visible:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
                    ></path>
                  </svg>
                  Find something...
                  <kbd className="text-2xs ml-auto text-zinc-400 dark:text-zinc-500">
                    <kbd className="font-sans">Ctrl </kbd>
                    <kbd className="font-sans">K</kbd>
                  </kbd>
                </button>
                <div
                  className="fixed left-0 top-0 -m-1 h-0 w-px overflow-hidden whitespace-nowrap border-none p-0"
                  style={{
                    clip: "rect(0px, 0px, 0px, 0px)",
                  }}
                  // style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
                ></div>
              </div>
              <div className="flex items-center gap-5 lg:hidden">
                <button
                  type="button"
                  className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                  aria-label="Toggle navigation"
                >
                  <svg
                    viewBox="0 0 10 9"
                    fill="none"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="w-2.5 stroke-zinc-900 dark:stroke-white"
                  >
                    <path d="m1.5 1 7 7M8.5 1l-7 7"></path>
                  </svg>
                </button>
                <Link aria-label="Home" href="/">
                  <svg viewBox="0 0 99 24" aria-hidden="true" className="h-6">
                    <path
                      className="fill-emerald-400"
                      d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
                    ></path>
                    <path
                      className="fill-zinc-900 dark:fill-white"
                      d="M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-5">
                <nav className="hidden md:block">
                  <ul role="list" className="flex items-center gap-8">
                    <li>
                      <Link
                        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/"
                      >
                        API
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="#"
                      >
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="#"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
                <div className="flex gap-4">
                  <div className="contents lg:hidden">
                    <button
                      type="button"
                      className="ui-not-focus-visible:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                      aria-label="Find something..."
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="h-5 w-5 stroke-zinc-900 dark:stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className="fixed left-0 top-0 -m-1 hidden h-0 w-px overflow-hidden whitespace-nowrap border-none p-0"
                      style={{
                        clip: "rect(0px, 0px, 0px, 0px)",
                      }}
                      // style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
                    ></div>
                  </div>
                  <button
                    type="button"
                    className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                    aria-label="Switch to light theme"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 stroke-zinc-900 dark:hidden"
                    >
                      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                      <path
                        strokeLinecap="round"
                        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="hidden h-5 w-5 stroke-white dark:block"
                    >
                      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="hidden min-[416px]:contents">
                  <Link
                    className="inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300"
                    href="#"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
            <div className="ring-zinc-900/7.5 fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 duration-500 ease-in-out data-[closed]:-translate-x-full dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10">
              <nav>
                <ul role="list">
                  <li className="md:hidden">
                    <Link
                      className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href="/"
                    >
                      API
                    </Link>
                  </li>
                  <li className="md:hidden">
                    <Link
                      className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href="#"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="md:hidden">
                    <Link
                      className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href="#"
                    >
                      Support
                    </Link>
                  </li>
                  <li className="relative mt-6 md:mt-0">
                    <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Guides
                    </h2>
                    <div className="relative mt-3 pl-2">
                      <div className="bg-zinc-800/2.5 dark:bg-white/2.5 absolute inset-x-0 top-0 h-[64px] rounded-lg will-change-transform"></div>
                      <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                      <div className="absolute left-2 top-1 h-6 w-px bg-emerald-500"></div>
                      <ul role="list" className="border-l border-transparent">
                        <li className="relative">
                          <Link
                            aria-current="page"
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                            href="/"
                          >
                            <span className="truncate">Introduction</span>
                          </Link>
                          <ul role="list">
                            <li>
                              <Link
                                className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/#guides"
                              >
                                <span className="truncate">Guides</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/#resources"
                              >
                                <span className="truncate">Resources</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/quickstart"
                          >
                            <span className="truncate">Quickstart</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/sdks"
                          >
                            <span className="truncate">SDKs</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/authentication"
                          >
                            <span className="truncate">Authentication</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/pagination"
                          >
                            <span className="truncate">Pagination</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/errors"
                          >
                            <span className="truncate">Errors</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/webhooks"
                          >
                            <span className="truncate">Webhooks</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative mt-6">
                    <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Resources
                    </h2>
                    <div className="relative mt-3 pl-2">
                      <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                      <ul role="list" className="border-l border-transparent">
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/contacts"
                          >
                            <span className="truncate">Contacts</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/conversations"
                          >
                            <span className="truncate">Conversations</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/messages"
                          >
                            <span className="truncate">Messages</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/groups"
                          >
                            <span className="truncate">Groups</span>
                          </Link>
                        </li>
                        <li className="relative">
                          <Link
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href="/attachments"
                          >
                            <span className="truncate">Attachments</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
                    <Link
                      className="inline-flex w-full justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400"
                      href="#"
                    >
                      Sign in
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-headlessui-focus-guard="true"
        aria-hidden="true"
        className="fixed left-0 top-0 -m-1 h-0 w-px overflow-hidden whitespace-nowrap border-none p-0"
        style={{
          clip: "rect(0px, 0px, 0px, 0px)",
        }}

        // style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
      ></button>
    </div>
  );
}

function DocLayout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  const navLinks = [
    {
      label: "API",
      href: "#",
    },
    {
      label: "Documentation",
      href: "#",
    },
    {
      label: "Support",
      href: "#",
    },
  ];
  const docNavLinks = [
    {
      section: "Guides",
      links: [
        {
          label: "Introduction",
          href: "#",
          subLinks: [
            {
              label: "Guides",
              href: "#",
            },
            {
              label: "Resources",
              href: "#",
            },
          ],
        },
        {
          label: "Quickstart",
          href: "#",
          subLinks: [],
        },
        {
          label: "SDKs",
          href: "#",
          subLinks: [],
        },
        {
          label: "Authentication",
          href: "#",
          subLinks: [],
        },
        {
          label: "Pagination",
          href: "#",
          subLinks: [],
        },
        {
          label: "Errors",
          href: "#",
          subLinks: [],
        },
        {
          label: "Webhooks",
          href: "#",
          subLinks: [],
        },
      ],
    },
    {
      section: "Resources",
      links: [
        {
          label: "Contacts",
          href: "#",
          subLinks: [],
        },
        {
          label: "Conversations",
          href: "#",
          subLinks: [],
        },
        {
          label: "Messages",
          href: "#",
          subLinks: [],
        },
        {
          label: "Groups",
          href: "#",
          subLinks: [],
        },
        {
          label: "Attachments",
          href: "#",
          subLinks: [],
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="h-full lg:ml-72">
        <header className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link aria-label="Home" href="/">
                <svg viewBox="0 0 99 24" aria-hidden="true" className="h-6">
                  <path
                    className="fill-primary-400"
                    d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
                  ></path>
                  <path
                    className="fill-zinc-900 dark:fill-white"
                    d="M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z"
                  ></path>
                </svg>
              </Link>
            </div>
            <div
              className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-zinc-900/[var(--bg-opacity-dark)] dark:backdrop-blur sm:px-6 lg:left-72 lg:left-72 lg:z-30 lg:px-8 xl:left-80 xl:left-80"
              // style="--bg-opacity-light: 0.5; --bg-opacity-dark: 0.2;"
            >
              <div className="bg-zinc-900/7.5 dark:bg-white/7.5 absolute inset-x-0 top-full h-px transition"></div>
              {/* <div className="hidden lg:block lg:max-w-md lg:flex-auto">
                <button
                  type="button"
                  className="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none lg:flex dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
                    ></path>
                  </svg>
                  Find something...
                  <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
                    <kbd className="font-sans">Ctrl </kbd>
                    <kbd className="font-sans">K</kbd>
                  </kbd>
                </button>
              </div> */}
              <div className="flex items-center gap-5 lg:hidden">
                <button
                  type="button"
                  className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                  aria-label="Toggle navigation"
                >
                  <svg
                    viewBox="0 0 10 9"
                    fill="none"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="w-2.5 stroke-zinc-900 dark:stroke-white"
                  >
                    <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
                  </svg>
                </button>
                <Link aria-label="Home" href="/">
                  <svg viewBox="0 0 99 24" aria-hidden="true" className="h-6">
                    <path
                      className="fill-primary-400"
                      d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
                    ></path>
                    <path
                      className="fill-zinc-900 dark:fill-white"
                      d="M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-5">
                <nav className="hidden md:block">
                  <ul role="list" className="flex items-center gap-8">
                    {navLinks.map((navLink) => (
                      <li key={navLink.label}>
                        <Link
                          className="text-foreground-secondary text-sm leading-5 transition  hover:text-foreground"
                          href={navLink.href}
                        >
                          {navLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
                <div className="flex gap-4">
                  <div className="contents lg:hidden">
                    <button
                      type="button"
                      className="ui-not-focus-visible:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                      aria-label="Find something..."
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="h-5 w-5 stroke-zinc-900 dark:stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                    aria-label="Switch to light theme"
                    onClick={toggleTheme}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 stroke-zinc-900 dark:hidden"
                    >
                      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                      <path
                        strokeLinecap="round"
                        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="hidden h-5 w-5 stroke-white dark:block"
                    >
                      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="hidden min-[416px]:contents">
                  <Link
                    className="dark:bg-primary-400/10 dark:text-primary-400 dark:ring-ring-400/20 dark:hover:bg-primary-400/10 dark:hover:text-primary-300 dark:hover:ring-ring-300 inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white transition hover:bg-zinc-700 dark:ring-1 dark:ring-inset"
                    href="#"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
            <nav className="hidden lg:mt-10 lg:block">
              <ul role="list">
                {navLinks.map((navLink) => (
                  <li className="md:hidden" key={navLink.href}>
                    <Link
                      className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href={navLink.href}
                    >
                      {navLink.label}
                    </Link>
                  </li>
                ))}

                {docNavLinks.map((nav) => (
                  <li key={nav.section} className="relative mt-6 md:mt-0">
                    <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
                      {nav.section}
                    </h2>
                    <div className="relative mt-3 pl-2">
                      <div
                        className="bg-zinc-800/2.5 dark:bg-white/2.5 absolute inset-x-0 top-0 will-change-transform"
                        // style="height: 96px; top: 0px; opacity: 1; border-radius: 8px; transform: none; transform-origin: 50% 50% 0px;"

                        style={{
                          height: "96px",
                          top: 0,
                          opacity: 1,
                          borderRadius: "8px",
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      ></div>
                      <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                      <div
                        className="bg-primary-500 absolute left-2 h-6 w-px"
                        // style="top: 4px; opacity: 1;"
                        style={{
                          top: "4px",
                          opacity: 1,
                        }}
                      ></div>
                      <ul role="list" className="border-l border-transparent">
                        {nav.links.map((link, index) => (
                          <li className="relative" key={link.label + index}>
                            <Link
                              aria-current="page"
                              className="text-foreground-subtle flex justify-between gap-2 py-2 pl-4 pr-3 text-sm transition hover:text-foreground"
                              //  bg-card
                              href={link.href}
                            >
                              <span className="truncate">{link.label}</span>
                            </Link>
                            {link.subLinks
                              ? link.subLinks.map((subLink, index) => (
                                  <ul
                                    role="list"
                                    //  style="opacity: 1;"
                                    style={{
                                      opacity: 1,
                                    }}
                                    key={subLink.href + index}
                                  >
                                    <li>
                                      <Link
                                        className="text-foreground-subtle flex justify-between gap-2 py-1.5 pl-7 pr-3 text-sm transition"
                                        href={subLink.href}
                                      >
                                        <span className="truncate">
                                          {subLink.label}
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                ))
                              : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}

                <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
                  <Link
                    className="dark:bg-primary-500 dark:hover:bg-primary-400 inline-flex w-full justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white transition hover:bg-zinc-700 dark:text-white"
                    href="#"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">
            <article className="flex h-full flex-col pb-10 pt-16">
              <div className="prose dark:prose-invert flex-auto lg:mx-auto lg:max-w-screen-xl [html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-3xl">
                <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                  <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
                      <svg
                        aria-hidden="true"
                        className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:stroke-white/5"
                      >
                        <defs>
                          <pattern
                            id=":S1:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="-12"
                            y="4"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          strokeWidth="0"
                          fill="url(#:S1:)"
                        ></rect>
                        <svg x="-12" y="4" className="overflow-visible">
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="288"
                            y="168"
                          ></rect>
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="144"
                            y="56"
                          ></rect>
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="504"
                            y="168"
                          ></rect>
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="720"
                            y="336"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                    <svg
                      viewBox="0 0 1113 440"
                      aria-hidden="true"
                      className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
                    >
                      <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
                    </svg>
                  </div>
                </div>
                {children}
              </div>
            </article>
          </main>
          <footer className="mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-7xl">
            <div className="flex">
              <div className="ml-auto flex flex-col items-end gap-3">
                <Link
                  className="inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                  aria-label="Next: Quickstart"
                  href="/quickstart"
                >
                  Next
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="-mr-1 mt-0.5 h-5 w-5"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                    ></path>
                  </svg>
                </Link>
                <Link
                  tabIndex={-1}
                  aria-hidden="true"
                  className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                  href="/quickstart"
                >
                  Quickstart
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                © Copyright 2025. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link className="group" href="#">
                  <span className="sr-only">Follow us on X</span>
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
                  >
                    <path d="M11.1527 8.92804L16.2525 3H15.044L10.6159 8.14724L7.07919 3H3L8.34821 10.7835L3 17H4.20855L8.88474 11.5643L12.6198 17H16.699L11.1524 8.92804H11.1527ZM9.49748 10.8521L8.95559 10.077L4.644 3.90978H6.50026L9.97976 8.88696L10.5216 9.66202L15.0446 16.1316H13.1883L9.49748 10.8524V10.8521Z"></path>
                  </svg>
                </Link>
                <Link className="group" href="#">
                  <span className="sr-only">Follow us on GitHub</span>
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
                    ></path>
                  </svg>
                </Link>
                <Link className="group" href="#">
                  <span className="sr-only">Join our Discord server</span>
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
                  >
                    <path d="M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

// <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
//                       <div className="pointer-events-none">
//                         <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
//                           <svg
//                             aria-hidden="true"
//                             className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
//                           >
//                             <defs>
//                               <pattern
//                                 id=":rc:"
//                                 width="72"
//                                 height="56"
//                                 patternUnits="userSpaceOnUse"
//                                 x="50%"
//                                 y="32"
//                               >
//                                 <path d="M.5 56V.5H72" fill="none"></path>
//                               </pattern>
//                             </defs>
//                             <rect
//                               width="100%"
//                               height="100%"
//                               strokeWidth="0"
//                               fill="url(#:rc:)"
//                             ></rect>
//                             <svg x="50%" y="32" className="overflow-visible">
//                               <rect
//                                 strokeWidth="0"
//                                 width="73"
//                                 height="57"
//                                 x="0"
//                                 y="112"
//                               ></rect>
//                               <rect
//                                 strokeWidth="0"
//                                 width="73"
//                                 height="57"
//                                 x="72"
//                                 y="224"
//                               ></rect>
//                             </svg>
//                           </svg>
//                         </div>
//                         <div
//                           className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
//                           style={{
//                             maskImage:
//                               "radial-gradient(180px at 0px 0px, white, transparent);",
//                           }}
//                         ></div>
//                         <div
//                           className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
//                           style={{
//                             maskImage:
//                               "radial-gradient(180px at 0px 0px, white, transparent);",
//                           }}
//                         >
//                           <svg
//                             aria-hidden="true"
//                             className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
//                           >
//                             <defs>
//                               <pattern
//                                 id=":rd:"
//                                 width="72"
//                                 height="56"
//                                 patternUnits="userSpaceOnUse"
//                                 x="50%"
//                                 y="32"
//                               >
//                                 <path d="M.5 56V.5H72" fill="none"></path>
//                               </pattern>
//                             </defs>
//                             <rect
//                               width="100%"
//                               height="100%"
//                               strokeWidth="0"
//                               fill="url(#:rd:)"
//                             ></rect>
//                             <svg x="50%" y="32" className="overflow-visible">
//                               <rect
//                                 strokeWidth="0"
//                                 width="73"
//                                 height="57"
//                                 x="0"
//                                 y="112"
//                               ></rect>
//                               <rect
//                                 strokeWidth="0"
//                                 width="73"
//                                 height="57"
//                                 x="72"
//                                 y="224"
//                               ></rect>
//                             </svg>
//                           </svg>
//                         </div>
//                       </div>
//                       <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
//                       <div className="relative rounded-2xl px-4 pb-4 pt-16">
//                         <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-primary-300/10 dark:group-hover:ring-ring-400">
//                           <svg
//                             viewBox="0 0 20 20"
//                             aria-hidden="true"
//                             className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-primary-300/10 dark:group-hover:stroke-primary-400"
//                           >
//                             <path
//                               fill="none"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
//                             ></path>
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
//                             ></path>
//                           </svg>
//                         </div>
//                         <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
//                           <Link href="/messages">
//                             <span className="absolute inset-0 rounded-2xl"></span>
//                             Messages
//                           </Link>
//                         </h3>
//                         <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
//                           Learn about the message model and how to create,
//                           retrieve, update, delete, and list messages.
//                         </p>
//                       </div>
//                     </div>

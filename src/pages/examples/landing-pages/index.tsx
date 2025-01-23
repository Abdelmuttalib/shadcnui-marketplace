import React from "react";
import { Typography } from "@/components/ui/typography";
import { ScreenContainer } from "@/components/container";
import { UICustomizer } from "@/components/ui-customizer";
import { examplesRegistry } from "@/config/data";
import {
  ComponentShowcaseCard,
  ExamplesLayout,
  FeaturesExamples,
} from "@/components/views/examples";
import { GradientBackground } from "@/components/gradient";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export function Menu() {
  return (
    <div className="hs-dropdown  relative  [--auto-close:inside] inline-flex">
      <button
        id="hs-dropdown-preview-navbar"
        type="button"
        className="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs rounded-full text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
        aria-haspopup
        aria-expanded="false"
        aria-label="Dropdown"
      >
        <span className="">
          <svg
            className=" size-4 shrink-0"
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
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </span>

        <span className="absolute -top-0.5 -end-0.5">
          <span className="relative flex">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 dark:bg-red-600 opacity-75"></span>
            <span className="relative inline-flex size-2 bg-red-500 rounded-full"></span>
            <span className="sr-only">Notification</span>
          </span>
        </span>
      </button>

      <div
        className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full md:w-[450px] transition-[opacity,margin] duration opacity-0 hidden z-30 overflow-hidden border bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-preview-navbar"
      >
        <div className="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b">
          <nav
            className="flex  gap-x-1"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              type="button"
              className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
              id="hs-pmn-item-pro"
              aria-selected="false"
              data-hs-tab="#hs-pmn-pro"
              aria-controls="hs-pmn-pro"
              role="tab"
            >
              Pro
            </button>
            <button
              type="button"
              className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active "
              id="hs-pmn-item-free"
              aria-selected="true"
              data-hs-tab="#hs-pmn-free"
              aria-controls="hs-pmn-free"
              role="tab"
            >
              Free
            </button>
          </nav>
        </div>

        <div
          id="hs-pmn-pro"
          className="hidden"
          role="tabpanel"
          aria-labelledby="hs-pmn-item-pro"
        >
          <div className="p-3 flex flex-wrap justify-between items-center gap-3">
            <span className="block font-semibold text-sm text-foreground">
              Templates (12)
            </span>

            <div className="ms-auto">
              <a
                className="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                href="#"
              >
                Purchase
                <svg
                  className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="p-3 max-h-[25rem] overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img1.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img1.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Dashboard
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img21.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img21.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Shop
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img16.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img16.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Chat
                </p>

                <div className="absolute -top-px end-[3px]">
                  <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                    +4
                  </span>
                </div>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img26.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img26.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Inbox
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img8.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img8.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Payment
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img4.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img4.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  E-Commerce
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img14.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img14.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Calendars
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img18.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img18.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Workspace
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img9.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img9.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Analytics
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img10.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img10.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Project
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img11.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img11.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  SaaS
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews/img12.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/demo-previews-dark/img12.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Files
                </p>
              </a>
            </div>
          </div>

          <div className="p-3 flex flex-wrap justify-center items-center gap-0.5">
            <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Main page
                <svg
                  className="shrink-0 size-3.5"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Templates (12)
                <svg
                  className="shrink-0 size-3.5"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          id="hs-pmn-free"
          className=""
          role="tabpanel"
          aria-labelledby="hs-pmn-item-free"
        >
          <div className="p-3 flex flex-wrap justify-between items-center gap-3">
            <span className="block font-semibold text-sm text-foreground">
              Templates (5)
            </span>

            <div className="ms-auto">
              <a
                className="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                href="#"
              >
                Free download
                <svg
                  className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="p-3 max-h-[25rem] overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews/img1.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews-dark/img1.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Agency
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 bg-gray-100 dark:bg-neutral-700 transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews/img3.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews-dark/img3.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Personal
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews/img7.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews-dark/img7.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Admin
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews/img2.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews-dark/img2.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  Creative Agency
                </p>
              </a>

              <a
                className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                href="#"
              >
                <img
                  className="dark:hidden w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews/img4.jpg"
                  alt="Main Page"
                />
                <img
                  className="hidden dark:block w-28 rounded-lg shadow"
                  src="../../assets/img/template-previews-dark/img4.jpg"
                  alt="Main Page"
                />

                <p className="text-sm text-gray-800 dark:text-neutral-400">
                  AI Prompt
                </p>
              </a>
            </div>
          </div>

          <div className="p-3 flex flex-wrap justify-center items-center gap-0.5">
            <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Main page
                <svg
                  className="shrink-0 size-3.5"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Templates (5)
                <svg
                  className="shrink-0 size-3.5"
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
                  <path
                    className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                    d="M5 12h14"
                  ></path>
                  <path
                    className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                    d="m12 5 7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage1() {
  return <ExamplesShowcaseDemo />;
}

const pricingsData = [
  {
    plan: "Professional",
    description: "Best for teams.",
    price: 18,
    features: [
      "10,000 form submissions",
      "Unlimited endpoints",
      "Unlimited Form Generations",
    ],
    excludedFeatures: ["CRM Integrations (Beta)", "Slack Support"],
  },
  {
    plan: "Teams",
    description: "Best for growing teams and businesses.",
    price: 36,
    features: [
      "10,000 form submissions",
      "Unlimited endpoints",
      "Unlimited Form Generations",
      "Unlimited Webhooks",
      "Unlimited Form Generations",
    ],
    excludedFeatures: [],
  },
];

function PricingExamples() {
  return (
    <div className="mx-auto max-w-5xl p-6 sm:p-8 not-prose">
      <div className="flex flex-col gap-6">
        {/* <Code code={exampleCode} /> */}
        <h3 className="text-4xl inline-block ">
          <span
            // style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance"
            style={{
              verticalAlign: "top",
              textDecoration: "inherit",
              textWrap: "balance",
            }}
          >
            Simple Pricing for Powerful Form Handling
          </span>
          {/* <script>self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.__wrap_b=(e,t,r)=>{let n=(r=r||document.querySelector(`[data-br="${e}"]`)).parentElement,o=e=>r.style.maxWidth=e+"px";r.style.maxWidth="";let a=n.clientWidth,l=n.clientHeight,i=a/2-.25,s=a+.5,u;if(a){for(o(i),i=Math.max(r.scrollWidth,i);i+1<s;)o(u=Math.round((i+s)/2)),n.clientHeight===l?s=u:i=u;o(s*t+a*(1-t))}r.__wrap_o||"undefined"!=typeof ResizeObserver&&(r.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+r.dataset.brr,r)})).observe(n)};self.__wrap_n!=1&&self.__wrap_b(":Rbjt9ja:",1)</script></h3><h4 className="text-2xl font-light opacity-70"><span data-br=":Rjjt9ja:" data-brr="1" style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance">Choose the plan that fits your needs</span><script>self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.__wrap_b=(e,t,r)=>{let n=(r=r||document.querySelector(`[data-br="${e}"]`)).parentElement,o=e=>r.style.maxWidth=e+"px";r.style.maxWidth="";let a=n.clientWidth,l=n.clientHeight,i=a/2-.25,s=a+.5,u;if(a){for(o(i),i=Math.max(r.scrollWidth,i);i+1<s;)o(u=Math.round((i+s)/2)),n.clientHeight===l?s=u:i=u;o(s*t+a*(1-t))}r.__wrap_o||"undefined"!=typeof ResizeObserver&&(r.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+r.dataset.brr,r)})).observe(n)};self.__wrap_n!=1&&self.__wrap_b(":Rjjt9ja:",1)</script> */}
        </h3>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-1">
          <div className="overflow-hidden">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
                  Solo, agency or team? We’ve got you covered.
                </h2>
              </div>

              {/*  xl:w-10/12 */}
              <div className="relative xl:mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {pricingsData.map((p, index) => (
                    <div key={p.plan}>
                      <div
                        className={cn(
                          "p-4 relative z-10 bg-overlay-on-surface-background border rounded-xl md:p-10",
                          {
                            // "first:pt-0 last:pb-0": index === 0,
                          }
                        )}
                      >
                        <h3 className="text-xl font-semibold text-foreground">
                          {p.plan}
                        </h3>
                        <div className="text-sm text-foreground-subtle">
                          {p.description}
                        </div>

                        {index === 1 ? (
                          <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-neutral-800">
                            Most popular
                          </span>
                        ) : null}

                        <div className="mt-5">
                          <span className="text-6xl font-bold text-foreground">
                            ${p.price}
                          </span>
                          <span className="text-lg font-bold text-foreground">
                            .00
                          </span>
                          <span className="ms-3 text-gray-500 dark:text-neutral-500">
                            USD / monthly
                          </span>
                        </div>

                        <div className="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                          <ul className="space-y-2 text-sm sm:text-base">
                            {p.features.map((f) => (
                              <li key={f} className="flex gap-x-3">
                                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                <span className="text-muted-foreground">
                                  {f}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                          <div className="flex justify-end col-span-2">
                            {/* <button
                              type="button"
                              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            >
                              Start free trial
                            </button> */}
                            <Button size="lg" className="w-full">
                              <span>Start free trial</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div>
                    <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800">
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

                      <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                        <ul className="space-y-2 text-sm sm:text-base">
                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Up to 10 people
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Collect data
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                            <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Custom reports
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Product support
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-800/50 dark:border-neutral-800 dark:shadow-gray-900/20">
                      <h3 className="text-xl font-bold text-foreground">
                        Teams
                      </h3>
                      <div className="text-sm text-foreground-secondary">
                        For growing businesses.
                      </div>
                      <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-neutral-800">
                        Most popular
                      </span>

                      <div className="mt-5">
                        <span className="text-6xl font-bold text-foreground">
                          $36
                        </span>
                        <span className="text-lg font-bold text-foreground">
                          .99
                        </span>
                        <span className="ms-3 text-foreground-subtle">
                          USD / monthly
                        </span>
                      </div>

                      <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                        <ul className="space-y-2 text-sm sm:text-base">
                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Up to 10 people
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Collect data
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Custom reports
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-foreground">
                              Product support
                            </span>
                          </li>

                          <li className="flex gap-x-3">
                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                              <svg
                                className="shrink-0 size-3.5"
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
                        <div className="flex col-span-2 w-full justify-center">
                          <Button size="lg" className="w-full">
                            <span>Start free trial</span>
                          </Button>
                          {/* <button
                            type="button"
                            className="w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Start free trial
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-16">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
                  <svg
                    className="w-56 h-auto text-cyan-500"
                    width="347"
                    height="188"
                    viewBox="0 0 347 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                      stroke="currentColor"
                      stroke-width="7"
                      stroke-linecap="round"
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
    </div>
  );
}

export function ExamplesShowcaseDemo() {
  return (
    <div className="mt-16 md:mt-32 pt-10" id="features">
      <ScreenContainer>
        <div>
          <PricingExamples />
          <UICustomizer />
          <div className="relative flex flex-col items-center justify-center text-center gap-4">
            <GradientBackground />
            <Typography variant="display-lg/medium" className="tracking-tight">
              Examples & Templates
            </Typography>
            <Typography
              variant="xl/regular"
              className="text-foreground-secondary max-w-3xl"
            >
              Discover a wide range of examples and templates to help you
              quickly build your next project.
            </Typography>
          </div>
          <LandingPageExamples />
          <FeaturesExamples />
        </div>
        {/* <SuggestedComponentsSection /> */}
      </ScreenContainer>
    </div>
  );
}

function LandingPageExamples() {
  const examples = examplesRegistry["landing-pages"];
  return (
    <div>
      {examples.map((example, index) => (
        <ExamplesLayout
          key={index}
          title={example.title}
          description={example.description}
          href={example.href}
          code={example.code}
          codePath={example.codePath}
          // className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0"
        />
      ))}
    </div>
  );
}

const suggestedComponentsData = [
  {
    title: "Features Sections",
    description: "Features Sections are used to showcase features.",
    href: "/examples/landing-page",
    examplesCount: 4,
  },
];

function SuggestedComponentsSection() {
  return (
    <div className="lg:mt-72 mb-24">
      <div className="space-y-2">
        <Typography as="h2" variant="display-xs/medium">
          {/* Landing Pages */}
          Explore more examples
        </Typography>
        {/* <Typography
          as="h2"
          variant="md/regular"
          className="text-foreground-secondary"
        >
          description
        </Typography> */}
      </div>
      <div>
        <section
          // id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
          className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-6"
        >
          {/* <h3 className="text-base font-semibold text-foreground">{title}</h3> */}
          <ul className="relative col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {suggestedComponentsData.map((component, index) => (
              <li key={component.title + index}>
                <ComponentShowcaseCard {...component} />
              </li>
            ))}
            {/* {suggestedComponentsData.map((section) => (
              <ShowcaseCommingSoonSection
                key={section.title}
                title={section.title}
                // components={section.components}
              />
            ))} */}
          </ul>
        </section>
      </div>
    </div>
  );
}

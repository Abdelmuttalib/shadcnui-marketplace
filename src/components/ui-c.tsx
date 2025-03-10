import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/utils/cn";

export default function UIPage() {
  return (
    <div className="bg-accent-hover grid h-full min-h-[100svh] w-full place-items-center gap-5">
      <div className="flex w-full max-w-7xl flex-col gap-y-10 py-56">
        <SimpleCard />
        <PricingCard />
        <Pricing />
        <BlogCard post={posts[0]} />
        {/* <ClassicCard /> */}
        <div className="grid w-full grid-cols-2">
          <CookieSettingsCard />
          <SignInCard />
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.id + i} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SimpleCard() {
  const [selectedSize, setSelectedSize] = useState("xs");

  function onSelectSize(size: string) {
    setSelectedSize(size);
  }

  return (
    <div className="relative flex max-w-[39rem] flex-col overflow-hidden rounded bg-background leading-none shadow sm:flex-row">
      {/* max-w-[223px] */}
      <div className="relative h-full max-h-96 w-full sm:max-w-48 lg:max-h-full">
        <img
          src="https://images.unsplash.com/photo-1613428792678-087d5d14238b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
          alt=""
          className="h-full max-h-96 w-full object-cover lg:max-h-full lg:object-contain"
        />
      </div>
      <div className="w-full space-y-6 p-6">
        <div className="flex flex-col gap-y-4">
          <div className="relative flex items-center justify-between">
            <h2 className="inline-flex text-lg font-semibold text-foreground">
              Classic Utility Jacket
            </h2>
            <p className="text-lg font-semibold text-foreground">$110.00</p>
          </div>
          <div>
            {/* <p className="text-sm text-muted-foreground font-medium">
              In stock
            </p> */}
            <Badge variant="default">In stock</Badge>
          </div>
        </div>

        <div className="flex gap-2">
          {["xs", "s", "m", "l", "xl"].map((size, i) => (
            <Button
              key={size + i + 2}
              variant={size === selectedSize ? "default" : "ghost"}
              className={cn("uppercase text-muted-foreground ", {
                "font-medium text-white": size === selectedSize,
              })}
              onClick={() => onSelectSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        {/* divider */}
        <div>
          <hr className="border-border-light" />
        </div>
        {/* actions */}
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button variant="default" className="sm:px-5">
              Buy now
            </Button>
            <Button variant="outline" className="sm:px-5">
              Add to bag
            </Button>
          </div>
          <div>
            <Button variant="outline">
              <svg
                width="20"
                height="20"
                color="rgba(209, 213, 219, 1)"
                // style="transform: translate3d(0px, 0px, 0px) scale(0.9999, 1); transform-origin: 10.025px 10.8039px;"
                transform=""
                transform-origin="51.5151510134519% 100% 0"
                // transformOrigin="50% 50% 0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  fill="currentColor"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            Free shipping on all continental US orders.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ClassicCard() {
  return (
    <div className="bg-layer relative flex max-w-[39rem] overflow-hidden rounded leading-none shadow">
      {/* max-w-[223px] */}
      <div className="relative h-full max-w-48 bg-red-400">
        <img
          src="https://images.unsplash.com/photo-1686994676784-9629223f4e0e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full space-y-6 p-6">
        <div className="flex flex-col gap-y-4">
          <div className="relative flex items-center justify-between">
            <h2 className="text-foreround inline-flex text-lg font-semibold">
              Classic Utility Jacket
            </h2>
            <p className="text-lg font-semibold text-gray-400">$110.00</p>
          </div>
          <div>
            <p className="text-foreground-light text-sm font-medium">
              In stock
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          {["xs", "s", "m", "l", "xl"].map((size, i) => (
            <Button
              key={size + i}
              variant={size === "xs" ? "default" : "outline"}
              className={cn("rounded-none uppercase disabled:opacity-50", {
                "font-medium": size === "xs",
              })}
              disabled={size === "l"}
            >
              {size}
            </Button>
          ))}
        </div>
        {/* divider */}
        <div>
          <hr className="border-border-light" />
        </div>
        {/* actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Button
              variant="default"
              size="lg"
              className="rounded-none px-8 uppercase"
            >
              Buy now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-8 uppercase"
            >
              Add to bag
            </Button>
          </div>
          <div>
            <Button
              variant="ghost"
              className="text-foreground-lighter rounded-none"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                // style="transform: translate3d(0px, 0px, 0px) scale(0.9999, 1); transform-origin: 10.025px 10.8039px;"
                transform=""
                transform-origin="51.5151510134519% 100% 0"
                // transformOrigin="50% 50% 0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  fill="currentColor"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <p className="text-foreground-light text-sm">
            Free shipping on all continental US orders.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsCard() {
  return (
    <div className="bg-layer relative flex max-w-lg overflow-hidden rounded leading-none shadow">
      {/* max-w-[223px] */}

      <div className="w-full space-y-6 p-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-foreround inline-flex text-lg font-semibold">
            Cookie Settings
          </h2>
          <p className="text-foreground-light text-sm font-medium">
            Manage your cookie settings here.
          </p>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold text-foreground">
              Strictly Necessary
            </h1>
            <p className="text-foreground-lighter text-sm">
              These cookies are essential in order to use the website and use
              its features.
            </p>
          </div>
          <div>
            <Switch id="strictly-necessary" checked />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-medium text-foreground">
              Functional Cookies
            </h1>
            <p className="text-foreground-lighter text-sm">
              These cookies allow the website to provide personalized
              functionality.
            </p>
          </div>
          <div>
            <Switch id="funcional-cookies" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-medium text-foreground">
              Performance Cookies
            </h1>
            <p className="text-foreground-lighter text-sm">
              These cookies help to improve the performance of the website.
            </p>
          </div>
          <div>
            <Switch id="performance-cookies" />
          </div>
        </div>

        {/* divider */}
        <div>
          <hr className="border-border-light" />
        </div>

        <div className="flex w-full">
          <Button className="w-full">Save Preferences</Button>
        </div>
      </div>
    </div>
  );
}

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export function SignInCard() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex w-full max-w-lg flex-col justify-center rounded-lg border bg-background p-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-foreground">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-foreground"
              >
                Email address
              </label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="email address"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-foreground"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="" className="font-semibold text-primary">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="password"
                />
              </div>
            </div>

            <div>
              <Button className="w-full">Sign in</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a href="#" className="font-semibold leading-6 text-primary">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    date: "Feb 12, 2020",
    datetime: "2020-03-16",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export function BlogSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From the blog
          </h2>
          <p className="text-foreground-light mt-2 text-lg leading-8">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>

                <Badge
                  variant={
                    post.id === 1
                      ? "default"
                      : post.id === 2
                      ? "default"
                      : "default"
                  }
                >
                  {post.category.title}
                </Badge>
              </div>
              <div className="group relative">
                <h3 className="group-hover:text-foreground-light mt-3 text-lg font-semibold leading-6 text-foreground">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="text-foreground-light mt-5 line-clamp-3 text-sm leading-6">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-foreground-light">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogCard({
  post,
  className,
}: {
  post: (typeof posts)[number];
  className?: string;
}) {
  return (
    <article
      key={post.id}
      className={cn(
        "flex h-fit max-w-xl flex-col items-start justify-between rounded-lg border bg-card p-6 shadow",
        className
      )}
    >
      <div className="flex w-full items-center justify-between gap-x-4 text-xs">
        <time dateTime={post.datetime} className="text-foreground-subtle">
          {post.date}
        </time>

        <Badge
          variant={
            post.id === 1 ? "default" : post.id === 2 ? "default" : "default"
          }
        >
          {post.category.title}
        </Badge>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground">
          <span className="absolute inset-0" />
          {post.title}
        </h3>
        <p className="text-foreground-secondary mt-5 line-clamp-3 text-sm leading-6">
          {post.description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={post.author.imageUrl}
          alt={post.author.name}
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-foreground">{post.author.name}</p>
          <p className="text-foreground-lighter">{post.author.role}</p>
        </div>
      </div>
    </article>
  );
}

import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="text-foreground-light mt-6 text-lg leading-8">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Lifetime membership
            </h3>
            <p className="text-foreground-light mt-6 text-base leading-7">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="text-primary-600 flex-none text-sm font-semibold leading-6">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="text-foreground-light mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="text-primary-600 h-6 w-5 flex-none"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-foreground-light text-base font-semibold">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    $349
                  </span>
                  <span className="text-foreground-light text-sm font-semibold leading-6 tracking-wide">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 mt-10 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Get access
                </a>
                <p className="text-foreground-light mt-6 text-xs leading-5">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricingCard() {
  return (
    <div className="bg-layer mx-auto max-w-2xl rounded ring-1 ring-border lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          Lifetime membership
        </h3>
        <p className="text-foreground-light mt-6 text-base leading-7">
          Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet
          indis perferendis blanditiis repellendus etur quidem assumenda.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="text-primary-600 flex-none text-sm font-semibold leading-6">
            What’s included
          </h4>
          <div className="h-px flex-auto bg-border" />
        </div>
        <ul
          role="list"
          className="text-foregroung-lighter mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon
                aria-hidden="true"
                className="text-primary-600 h-6 w-5 flex-none"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="bg-accent-hover/30 rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-foreground-light text-base font-semibold">
              Pay once, own it forever
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-foreground">
                $349
              </span>
              <span className="text-foreground-light text-sm font-semibold leading-6 tracking-wide">
                USD
              </span>
            </p>
            {/* className="mt-10 mb-2 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" */}
            <Button className="w-full">Get access</Button>
            <p className="text-foreground-light mt-6 text-xs leading-5">
              Invoices and receipts available for easy company reimbursement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

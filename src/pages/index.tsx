import * as React from "react";

import { Button, ButtonLink, ButtonProps } from "@/components/ui/button";
import { Bookmark, CheckCheckIcon } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { GradientBackground } from "@/components/gradient";
import Container from "@/components/container";
import { IconButton } from "@/components/ui/icon-button";

import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/24/solid";

export function SuccessBadge() {
  return (
    <>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-emerald-200 to-emerald-50">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-200">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-b from-emerald-500 to-emerald-300">
            <CheckIcon className="w-4 text-white" />
          </div>
        </div>
      </div>
      {/* <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-b from-emerald-200 to-emerald-50">
    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-200">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-emerald-500 to-emerald-300">
        <CheckIcon className="w-16 text-white" />
      </div>
    </div>
  </div> */}
    </>
  );
}
// #030101, opacity 100%
// #0300d6

// hsl(100, 9%, 93%)
// #edefec
// rgb(237, 239, 236)

import { useForm, SubmitHandler } from "react-hook-form";

import { z } from "zod";

const waitlistFormSchema = z.object({
  email: z.string().email(),
});

type FormSchema = z.infer<typeof waitlistFormSchema>;

export function Hero() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(formData: FormSchema) {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you, You are on the list");
        setSuccess(true);
        reset();
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title> shadcn ui Marketplace</title>
        <meta
          name="description"
          content="A marketplace for shadcn ui kits and styles. Discover premium shadcn ui styles and ui designs for your web applications."
        />

        <meta property="og:title" content="shadcn ui Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for shadcn ui kits and styles. Discover premium shadcn ui styles and ui designs for your web applications."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="shadcn ui, shadcn ui Marketplace, UI Kits, UI Styles, shadcn ui Components, Web Design, Frontend UI, shadcn ui styles, shadcn ui kits, shadcn ui, shadcn ui Marketplace, Frontend UI, Design System, TailwindCSS, CSS, HTML, JavaScript, TypeScript"
        />
      </Head>
      <div className="relative flex flex-col min-h-[100svh] overflow-x-hidden pb-24 pt-36">
        <Container className="relative isolate">
          {/* <div
          aria-hidden="true"
          className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:pb-32 dark:opacity-20"
        >
          <div className="h-57 bg-gradient-to-br from-primary to-purple-400  dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-brand-400 to-brand-300  dark:to-brand-600"></div>
        </div> */}
          {/* <GradientBackground /> */}
          <div className="relative grid grid-cols-1 gap-y-20 place-content-center place-items-center z-50">
            <div className="relative max-w-xl text-center">
              <div className="mx-auto space-y-8">
                <Typography
                  as="h1"
                  variant="display-lg/medium"
                  className="text-left sm:text-center"
                >
                  shadcn-ui components kits/styles
                </Typography>

                <Typography
                  as="p"
                  variant="base/regular"
                  className="mx-auto w-full max-w-4xl text-foreground-light text-left sm:text-center"
                >
                  A marketplace for shadcn-ui components kits/styles. Create
                  beautiful and consistent web applications with a Design System
                  that provides a collection of components, styles, and
                  guidelines. Powered by shadcn-ui components.
                </Typography>
                {/* coming soon */}
                <div className="flex flex-col items-center flex-wrap gap-x-4 gap-y-4">
                  <div className="space-y-4 w-full sm:max-w-xs mx-auto">
                    <div>
                      {/*  */}
                      <div>
                        {!success ? (
                          <form
                            // @ts-ignore
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-y-4"
                          >
                            <div>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", {
                                  required: true,
                                })}
                                disabled={isSubmitting}
                                // @ts-ignore
                                size="lg"
                              />
                            </div>
                            <Button
                              type="submit"
                              isLoading={isSubmitting}
                              disabled={isSubmitting || success}
                              size="lg"
                            >
                              Join waitlist
                            </Button>
                          </form>
                        ) : (
                          <div>
                            <p className="text-foreground-light text-sm">
                              {message}
                            </p>
                          </div>
                        )}
                        {!success && message && (
                          <div className="mt-2">
                            <p className="text-foreground-light text-sm">
                              {message}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    {/*
                  <span className="dark:opacity-70 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    Coming soon...
                  </span> */}

                    <div className="flex items-start sm:items-center justify-center gap-2">
                      <ThemeSwitcher variant="outline" />
                      <ThemeColorSelect />
                    </div>
                  </div>
                  {/* <div>
                  <ButtonLink
                    href="https://github.com/Abdelmuttalib/shadcnui-marketplace"
                    variant="ghost"
                    target="_blank"
                    iconLeft={<GitHubLogoIcon className="w-5" />}
                    size="sm"
                  >
                    GitHub
                  </ButtonLink>
                </div> */}

                  {/* email input to register or waitlist */}
                  {/* <div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <ComponentShowcase className="h-96 w-full max-w-md">
                <GrayColors />
              </ComponentShowcase>
              <ComponentShowcase>
                <div className="flex flex-wrap gap-4">
                  {buttonVariants.map((variant) => {
                    return (
                      <div className="space-x-7" key={variant}>
                        {buttonSizes.reverse().map((size) => (
                          <Button
                            key={size}
                            variant={variant}
                            size={size}
                            className="capitalize"
                          >
                            {variant?.replace("-", " ")}
                          </Button>
                        ))}
                        {/* {["xs", "sm", "default", "lg"].reverse().map((size) => (
                      <Button key={size} variant={variant} size={size}>
                        Button
                      </Button>
                    ))} */}
                      </div>
                    );
                  })}
                </div>
              </ComponentShowcase>
              <ComponentShowcase>
                <div className="flex flex-wrap gap-4">
                  {buttonVariants.map((variant) => {
                    return (
                      <div className="space-x-7" key={variant}>
                        {buttonSizes.reverse().map((size) => (
                          <IconButton key={size} variant={variant} size={size}>
                            <Bookmark className="w-[22px]" />
                          </IconButton>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </ComponentShowcase>

              <ComponentShowcase className="h-[39rem]  w-full max-w-lg">
                <NotificationsCard />
              </ComponentShowcase>
              <ComponentShowcase className="h-96 w-96">
                <BlogCard post={posts[0]} />
              </ComponentShowcase>
              <ComponentShowcase className="h-96 w-96">
                <DataTable columns={columns} data={payments} />
              </ComponentShowcase>
              <ComponentShowcase className="h-[25rem] w-full max-w-2xl">
                <SimpleCard />
              </ComponentShowcase>
              <ComponentShowcase className="h-96 w-full max-w-md">
                <div className="-mt-2 p-2 bg-layer h-fit rounded-3xl lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-accent-hover/30 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-foreground-light">
                        Pay once, own it forever
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-foreground">
                          $349
                        </span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-foreground-light">
                          USD
                        </span>
                      </p>
                      {/* className="mt-10 mb-2 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" */}
                      <Button fullWidth>Get access</Button>
                      <p className="mt-6 text-xs leading-5 text-foreground-light">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>
              <ComponentShowcase className="h-[30.5rem] w-full max-w-sm">
                <SignInCard />
              </ComponentShowcase>
              <ComponentShowcase className="h-[27.5rem] w-full max-w-7xl">
                <PricingCard />
              </ComponentShowcase>
              {/* <ComponentsPreview2 /> */}

              {/* <ComponentsPreview /> */}
            </div>
            <div className="mt-96 space-y-4">
              {/* <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Sign up for the waitlist
            </h3> */}

              <Typography as="h2" variant="xl/medium" className="">
                Going beyond{" "}
                <span className="bg-layer-3 px-1.5 py-0.5 rounded border">
                  Default
                </span>{" "}
                and{" "}
                <span className="bg-layer-3 px-1.5 py-0.5 rounded border">
                  New York
                </span>
              </Typography>

              <div className="flex items-center gap-x-1.5">
                <CheckBadgeIcon className="w-5 text-foreground-500/80" />
                <Typography
                  as="p"
                  variant="md/regular"
                  className="whitespace-nowrap text-foreground-light"
                >
                  Powered by{" "}
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    className="text-primary font-medium"
                  >
                    shadcn-ui
                  </a>{" "}
                  components
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

function ComponentShowcase({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 row-span-3", className)}>
      <div>
        <div
          className={cn(
            "relative border rounded-2xl bg-layer-2 w-96 h-72 overflow-hidden",
            className
          )}
        >
          {/* <GradientBackground /> */}
          <div
            className="absolute left-6 top-6 transform-gpu overflow-hidden opacity-30 blur-lg"
            aria-hidden="true"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-[#9089fc]" />
          </div>
          {/* <div></div> */}
          <div className="absolute w-full h-full left-12 top-12 m-auto p-3 bg-background rounded-xl shadow-2xl border">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export const payments: Payment[] = [
  {
    id: "728e",
    amount: 100,
    status: "pending",
    email: "m@mail.com",
  },
  {
    id: "489e",
    amount: 125,
    status: "processing",
    email: "john@gmail.com",
  },
  {
    id: "2f9e",
    amount: 175,
    status: "success",
    email: "doe@gmail.com",
  },
];

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

function getPaymentStatusBadgeColor(status: string) {
  switch (status) {
    case "pending":
      return "primary";
    case "processing":
      return "blue";
    case "success":
      return "green";
    case "failed":
      return "red";
    default:
      return "white";
  }
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ cell }) => {
      return (
        <Badge
          variant={getPaymentStatusBadgeColor(
            cell.getValue() as unknown as string
          )}
        >
          <>{cell.getValue()}</>
        </Badge>
      );
    },
  },
  // {
  //   accessorKey: "amount",
  //   header: "Amount",
  // },
];

function ComponentsPreview2() {
  return (
    <div className="flex flex-col gap-y-10 rounded w-full">
      <SimpleCard />
      <div className="flex flex-wrap gap-4">
        {buttonVariants.map((variant) => {
          return (
            <div className="space-x-7" key={variant}>
              {buttonSizes.reverse().map((size) => (
                <Button key={size} variant={variant} size={size}>
                  Button
                </Button>
              ))}
              {/* {["xs", "sm", "default", "lg"].reverse().map((size) => (
                      <Button key={size} variant={variant} size={size}>
                        Button
                      </Button>
                    ))} */}
            </div>
          );
        })}
      </div>
      <GrayColors className="border" />
      <div className="flex flex-wrap w-full gap-6">
        <NotificationsCard />
        <DataTable columns={columns} data={payments} />
        <div className="-mt-2 p-2 bg-layer h-fit rounded-3xl lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-accent-hover/30 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-foreground-light">
                Pay once, own it forever
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  $349
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-foreground-light">
                  USD
                </span>
              </p>
              {/* className="mt-10 mb-2 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" */}
              <Button fullWidth>Get access</Button>
              <p className="mt-6 text-xs leading-5 text-foreground-light">
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BlogCard post={posts[0]} className="w-full h-fit" />
          <SignInCard />
        </div>
      </div>

      <PricingCard />
      {/* <Pricing /> */}
      {/* <ClassicCard /> */}

      {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard post={post} />
        ))}
      </div> */}
    </div>
  );
}

function NotificationsCard() {
  return (
    <div className="w-full max-w-lg shadow rounded-lg p-6 bg-layer space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-foreground sm:text-2xl">
          Notifications{" "}
        </h3>
        {/* <p>
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
            {notifications.length} notifications
          </span>
        </p> */}
        <div>
          <Button
            size="xs"
            variant="secondary"
            leftIcon={<CheckCheckIcon className="w-4" />}
          >
            Mark all as read
          </Button>
        </div>
      </div>
      <div>
        <NotificationsTabs />
      </div>
    </div>
  );
}

import { Tab } from "@headlessui/react";

const notifications = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    message: "liked your post",
    date: new Date(),
    time: "2 minutes ago",
    type: "following",
    isRead: false,
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    message: "commented on your photo",
    date: new Date(),
    time: "10 minutes ago",
    type: "archive",
    isRead: true,
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jaden Clark",
    message: "shared your post",
    date: new Date(),
    time: "5 hours ago",
    type: "archive",
    isRead: false,
  },

  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Chris Lee",
    message: "invited you to ProjectX",
    date: new Date(),
    time: "1 week ago",
    type: "invites",
    isRead: true,
  },
];

const NotificationsTabs = () => {
  const notificationsData = {
    All: notifications,
    Following: notifications?.filter(
      (notification) => notification.type === "following"
    ),
    Invites: notifications?.filter(
      (notification) => notification.type === "invites"
    ),
    Archive: notifications?.filter(
      (notification) => notification.type === "archive"
    ),
  };

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex bg-accent-hover/50 border w-full p-1.5 py-1 rounded">
          {Object.keys(notificationsData).map((notificationLabel) => (
            <Tab
              key={notificationLabel}
              as="button"
              className={({ selected }) =>
                cn(
                  "capitalize w-full px-5 whitespace-nowrap py-2 rounded text-sm font-medium leading-5 sm:py-2",
                  "focus:outline-none",
                  selected
                    ? "text-primary-600 dark:text-foreground bg-background shadow"
                    : "text-foreground-lighter"
                )
              }
            >
              {notificationLabel.toLocaleLowerCase()} {/* @ts-ignore */}
              <span className="bg-accent-hover/50 px-1.5 py-0.5 ml-0.5 rounded border text-xs font-medium">
                {/* @ts-ignore */}
                {notificationsData[notificationLabel].length}
              </span>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <div>
            {Object.values(notificationsData).map((notifications, idx) => (
              <Tab.Panel key={idx} className="py-3 focus:outline-none">
                <div className="w-full divide-y divide-border">
                  {notifications?.map((notification) => (
                    <Notification
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

function Notification({
  notification,
}: {
  notification: (typeof notifications)[number];
}) {
  return (
    <div
      key={notification.id}
      className={cn(
        "relative flex w-full gap-4 px-4 py-2 hover:bg-primary-100/20 focus:bg-primary-100/30 sm:py-5",
        "hover:bg-accent-hover/50",
        {
          "bg-accent-hover/50": !notification.isRead,
        }
      )}
    >
      {/* not read notification indicator  */}
      {!notification.isRead && (
        <div className="absolute top-3 right-4 h-2.5 w-2.5 rounded-full bg-primary dark:bg-primary-400"></div>
      )}
      <div className="h-fit w-fit">
        <div className="relative">
          <img
            src={notification.avatar}
            alt="avatar"
            className="w-12 h-10 rounded-full block"
          />
          {/* online indicator  */}
          {notification.id % 2 === 0 && (
            <div className="absolute -top-0.5 -right-0.5 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-[3px]">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="font-medium text-sm">
          {notification.name}
          <span className="font-normal ml-1 text-foreground-light">
            {notification.message}
          </span>
        </p>

        {notification.id === 4 && (
          <div className="flex gap-2">
            <Button size="xs" variant="outline">
              Decline
            </Button>
            <Button size="xs">Accept</Button>
          </div>
        )}
        <div className="flex w-full justify-between">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
            <RenderAfterMount>
              {formatDateDayTime(notification.date)}
            </RenderAfterMount>
          </p>
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}

function RenderAfterMount({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();

  return mounted ? children : null;
}

const buttonVariants = [
  "primary",
  "primary-outline",
  "outline",
  "secondary",
  "ghost",
  "dark",
  "destructive",
  "destructive-outline",
] as ButtonProps["variant"][];

const buttonSizes = [
  // "xs", "sm",
  "default",
  //  "lg"
] as ButtonProps["size"][];

function GrayColors({ className }: { className?: string }) {
  return (
    <div className="flex flex-wrap gap-4">
      <div
        className={cn(
          "flex flex-wrap overflow-hidden rounded gap-2",
          className
        )}
      >
        {["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
          .reverse()
          .map((gray) => {
            const color = `bg-primary-${gray}`;

            return (
              <div key={color} className="flex flex-col text-xs items-center">
                {gray}
                <div
                  className="size-10 rounded-lg"
                  style={{
                    backgroundColor: `hsl(var(--color-primary-${gray}))`,
                  }}
                ></div>
              </div>
            );
          })}
      </div>

      <div
        className={cn(
          "flex flex-wrap overflow-hidden rounded gap-2",
          className
        )}
      >
        {[
          "50",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "650",
          "700",
          "750",
          "800",
          "850",
        ]
          .reverse()
          .map((gray) => {
            const color = `bg-gray-${gray}`;

            return (
              <div key={color} className="flex flex-col text-xs items-center">
                {gray}
                <div
                  className="size-10 rounded-lg"
                  style={{
                    backgroundColor: `hsl(var(--color-gray-${gray}))`,
                  }}
                ></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function ComponentsPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="grid grid-cols-1 gap-10">
      <div>
        {/* <Typography as="h2" variant="display-md/semibold">
          Components Preview
        </Typography> */}
        <div className="space-y-6">
          <section className="space-y-6">
            <div className="flex overflow-hidden rounded">
              {[
                "50",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "650",
                "700",
                "750",
                "800",
                "850",
              ].map((gray) => {
                const color = `bg-gray-${gray}`;

                return (
                  <div
                    key={color}
                    className="h-10 w-20"
                    style={{
                      backgroundColor: `hsl(var(--color-gray-${gray}))`,
                    }}
                  ></div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {buttonVariants.map((variant) => {
                return (
                  <div className="space-x-7" key={variant}>
                    {buttonSizes.reverse().map((size) => (
                      <Button key={size} variant={variant} size={size}>
                        Button
                      </Button>
                    ))}
                    {/* {["xs", "sm", "default", "lg"].reverse().map((size) => (
                      <Button key={size} variant={variant} size={size}>
                        Button
                      </Button>
                    ))} */}
                  </div>
                );
              })}
            </div>
          </section>
          <section className="space-y-6">
            {/* Icon Button */}
            <div className="flex flex-wrap gap-4">
              {buttonVariants.map((variant) => {
                return (
                  <div className="space-x-7" key={variant}>
                    {buttonSizes.reverse().map((size) => (
                      <IconButton key={size} variant={variant} size={size}>
                        <Bookmark className="w-[22px]" />
                      </IconButton>
                    ))}
                  </div>
                );
              })}
            </div>
          </section>
          <section className="space-y-6">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>
          {/* <section className="space-y-6">
            <Badge color="green">Badge</Badge>
            <Badge color="yellow">Badge</Badge>
            <Badge color="red">Badge</Badge>
            <Badge color="blue">Badge</Badge>
            <Badge color="gray">Badge</Badge>
            <Badge color="white">Badge</Badge>
            <Badge color="dark-gray">Badge</Badge>
          </section> */}
          <section>
            <BadgesExamples />
          </section>
          <section className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-10">
            <div className="max-w-56">
              <Input placeholder="email address" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="accept-terms"></Checkbox>
              <Label htmlFor="accept-terms">Accept Terms and Conditions</Label>
            </div>
          </section>
          <section>
            <div className="max-w-96 -ml-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </section>
          <section className="flex flex-col sm:flex-row gap-4">
            <div>
              <CustomDialog
                open={open}
                onClose={() => {
                  setOpen(false);
                }}
                triggerButton={
                  <Button
                    className="whitespace-nowrap"
                    onClick={() => setOpen(true)}
                  >
                    Open Dialog
                  </Button>
                }
                title="Dialog Title"
                description="Dialog Description"
              >
                <div>
                  <form className="space-y-3">
                    <div>
                      <Input placeholder="email address" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="airplane-mode" />
                      <Label htmlFor="airplane-mode" className="font-normal">
                        Accept Terms and Conditions
                      </Label>
                    </div>
                  </form>

                  <div className="flex justify-end mt-4 gap-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setOpen(false)}
                      size="sm"
                    >
                      Close
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => setOpen(false)}
                      size="sm"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </CustomDialog>
            </div>
            <div className="p-4 rounded border space-y-3 w-full max-w-lg">
              <Skeleton className="h-6 w-full max-w-xs" />
              <Skeleton className="h-6 w-full max-w-44" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function BadgesExamples() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Badge
        </span>
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          Badge
        </span>
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
          Badge
        </span>
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Badge
        </span>
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Badge
        </span>
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
          Badge
        </span>
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
          Badge
        </span>
        <span className="dark:opacity-70 inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
          Badge
        </span>
      </div>
      {/* <div className="flex gap-x-2">
        <Badge variant="green">Badge</Badge>
        <Badge variant="yellow">Badge</Badge>
        <Badge variant="red">Badge</Badge>
        <Badge variant="blue">Badge</Badge>
        <Badge variant="gray">Badge</Badge>
        <Badge variant="white">Badge</Badge>
        <Badge variant="dark-gray">Badge</Badge>
      </div> */}
    </div>
  );
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Badge from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import CustomDialog from "@/components/ui/animated-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import ThemeSwitcher, { ThemeColorSelect } from "@/components/theme-select";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Head from "next/head";
import {
  BlogCard,
  posts,
  Pricing,
  PricingCard,
  SignInCard,
  SimpleCard,
} from "../components/ui-c";
import { cn } from "@/utils/cn";
import { formatDate, formatDateDayTime } from "@/utils/date";
import Link from "next/link";
import { DataTable } from "@/components/ui/data-table-2";
import { useMounted } from "@/hooks/use-mounted";

export default function Home() {
  return (
    <>
      <Head>
        <title> shadcn-ui Marketplace</title>
        <meta
          name="description"
          content="A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        <meta property="og:title" content="shadcn-ui Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="shadcn-ui, marketplace, components, design system, tailwindcss, nextjs"
        />
      </Head>
      <main className="mb-40 space-y-40">
        <Hero />
      </main>
      {/* <main
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen items-center justify-between p-24 ${inter.className}`}
      >
        <div className="w-full h-full flex flex-col justify-center">
          <div>
            <h1 className="text-6xl font-semibold">
              A marketplace for shadcn-ui components kits
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              voluptates, atque, quas quod, nemo quidem dolorum quibusdam
              voluptatum quia quae ipsam. Quisquam, quos. Quisquam, quos.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div>
            <Button>Button</Button>
          </div>
        </div>
      </main> */}
    </>
  );
}

export function DesignSystemGuide() {
  const text = "The quick brown fox jumps over the lazy dog.";

  return (
    <div className="container mx-auto my-10 space-y-10 p-8">
      <Typography
        as="h1"
        variant="display-lg/semibold"
        className="mb-40 max-w-xl capitalize"
      >
        Design System Guide
      </Typography>

      <div className="mx-auto max-w-3xl space-y-16">
        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Introduction
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Building beautiful and consistent web applications requires a
            well-structured design system. In this guide, I will delve into the
            design system implemented in a Next.js application using Tailwind
            CSS and CSS variables. The design system focuses on defining colors,
            typography, spacing, and other key elements to ensure a cohesive and
            visually appealing user interface.
          </Typography>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Color Palette
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            The color palette serves as the foundation for the visual identity
            of the application. Here, we define primary, secondary, and accent
            colors using HSL values. Tailwind CSS utilities are leveraged to
            create variations of these colors for different use cases.
          </Typography>
          {/* Include the color palette code snippet */}
          <pre>
            <code>{`/* Colors */
:root {
  --color-white: 0 0% 100%;
  --color-black: 0 0% 0%;

  /* primary */
  --color-primary-50: 240 33.3% 97.6%; /* #F7F7FB */
  --color-primary-100: 240 95% 92.2%; /* #D8D8FE */
  --color-primary-200: 240 94.9% 84.7%; /* #B3B3FD */
  --color-primary-300: 240 89.2% 74.5%; /* #8484F8 */
  --color-primary-400: 240 89.5% 70%; /* #6E6EF7 */
  --color-primary-500: 240 87.3% 60%; /* #4040F2 #4f46e5 */
  --color-primary-600: 240 63.2% 51%; /* #3333D1  #4f46e5 */
  --color-primary-700: 240 68.9% 44.1%; /* #2323BE */
  --color-primary-800: 240 72.1% 33.7%; /* #181894 */
  --color-primary-900: 240 73.2% 19%; /* #0D0D54 */

  --color-primary: var(--color-primary-500);
  --color-primary-hover: var(--color-primary-400);
  --color-primary-active: var(--color-primary-600);
  --color-primary-disabled: var(--color-primary-300);

  /* gray */
  --color-gray: 211.2 10% 49.2%;
  --color-gray-50: 0 0% 98%;
  --color-gray-100: 0 0% 94.5%;
  --color-gray-200: 210 10.5% 92.5%;
  --color-gray-300: 210 10.8% 85.5%;
  --color-gray-400: 211.8 10.8% 69.2%;
  --color-gray-500: 211.2 10% 49.2%;
  --color-gray-600: 219 40% 21%;
  --color-gray-650: 219 40% 18%;
  --color-gray-700: 219 40% 15%;
  --color-gray-750: 219 40% 12%;
  --color-gray-800: 219 40% 9%;
  --color-gray-850: 219 40% 6%;
  --color-gray-900: 219 40% 3%;
  --color-gray-950: 219 40% 0%;

  /* red */
  --color-red: 7 100% 61.4%; /* #FF513A */
  --color-red-50: 25.3 100% 96.3%; /* #FFF4EC */
  --color-red-100: 25.5 100% 92.2%; /* #FFE8D7 */
  --color-red-200: 21.3 100% 84.5%; /* #FFCCB0 */
  --color-red-300: 16.6 100% 76.7%; /* #FFA988 */
  --color-red-400: 11.8 100% 71%; /* #FF886B */
  --color-red-500: 7 100% 61.4%; /* #FF513A */
  --color-red-600: 2 71.1% 51.2%; /* #DB302A */
  --color-red-700: 357.7 72.6% 41.6%; /* #B71D23 */
  --color-red-800: 352.6 78.2% 32.4%; /* #931222 */
  --color-red-900: 348.1 83.5% 26.1%; /* #7A0B21 */

  /* green */
  --color-green: 116.4 52.6% 49.6%; /* #44C13C */
  --color-green-50: 96 100% 97.1%; /* #F6FFF0 */
  --color-green-100: 97.1 81% 91.8%; /* #E6FBD9 */
  --color-green-200: 101.5 82.9% 83.9%; /* #C9F8B4 */
  --color-green-300: 106.5 72.1% 73.3%; /* #A0EC8A */
  --color-green-400: 111.4 59.6% 63.1%; /* #79D969 */
  --color-green-500: 116.4 52.6% 49.6%; /* #44C13C */
  --color-green-600: 121.5 58.7% 40.8%; /* #2BA52E */
  --color-green-700: 126.1 64.3% 32.9%; /* #1E8A29 */
  --color-green-800: 131.1 71.7% 20.8%; /* #0F5B1D */
  --color-green-900: 136.4 79.7% 13.5%; /* #073E16 */

  /* yellow */
  --color-yellow: 48 100% 52.9%; /* #FFCF0F */
  --color-yellow-50: 56.8 100% 96.3%; /* #FFFEEC */
  --color-yellow-100: 52.5 100% 90.6%; /* #FFF9CF */
  --color-yellow-200: 51.3 100% 81.2%; /* #FFF19F */
  --color-yellow-300: 50.4 100% 71.8%; /* #FFE86F */
  --color-yellow-400: 49 100% 64.7%; /* #FFDE4B */
  --color-yellow-500: 48 100% 52.9%; /* #FFCF0F */
  --color-yellow-600: 46.8 91.3% 44.9%; /* #DBAD0A */
  --color-yellow-700: 45.7 92.6% 37.3%; /* #B78D07 */
  --color-yellow-800: 44.5 95.2% 24.7%; /* #7B5C03 */
  --color-yellow-900: 42.6 92.7% 16.1%; /* #4F3903 */

  --color-info: var(--color-primary-500);
  --color-info-light: var(--color-primary-400);
  --color-info-dark: var(--color-primary-600);

  --color-success: var(--color-green-500);
  --color-success-light: var(--color-green-400);
  --color-success-dark: var(--color-green-600);

  --color-error: var(--color-red-500);
  --color-error-light: var(--color-red-400);
  --color-error-dark: var(--color-red-600);

  --color-danger: var(--color-red-500);
  --color-danger-light: var(--color-red-400);
  --color-danger-dark: var(--color-red-600);

  --color-warning: var(--color-yellow-500);
  --color-warning-light: var(--color-yellow-400);
  --color-warning-dark: var(--color-yellow-600);
}`}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Typography
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Typography plays a crucial role in conveying information
            effectively. We define font families, sizes, weights, and line
            heights to establish a harmonious text hierarchy.
          </Typography>
          {/* Include the typography code snippet */}
          <pre>
            <code>{`:root {
  /* Typography */

  --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;

  --font-general-sans: 'General Sans', -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;

  --font-plus-jakarta: 'Plus Jakarta', -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;

  --font-onest: 'Onest', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;

  --font-xs: 0.75rem; /* 12px */
  --font-sm: 0.875rem; /* 14px */
  --font-base: 1rem; /* 16px */
  --font-md: 1rem; /* 16px */
  --font-lg: 1.125rem; /* 18px */
  --font-xl: 1.25rem; /* 20px */

  /* display */
  --font-display-xs: 1.5rem; /* 24px */
  --font-display-sm: 1.875rem; /* 30px */
  --font-display-md: 2.25rem; /* 36px */
  --font-display-lg: 3rem; /* 48px */
  --font-display-xl: 3.75rem; /* 60px */
  --font-display-2xl: 4.5rem; /* 72px */

  /* Line Height */
  --line-height-xs: 1.125rem; /* 18px */
  --line-height-sm: 1.25rem; /* 20px */
  --line-height-base: 1.5rem; /* 24px */
  --line-height-md: 1.5rem; /* 24px */
  --line-height-lg: 1.75rem; /* 28px */
  --line-height-xl: 1.875rem; /* 30px */

  --line-height-display-xs: 2rem; /* 32px */
  --line-height-display-sm: 2.375rem; /* 38px */
  --line-height-display-md: 2.75rem; /* 44px */
  --line-height-display-lg: 3.75rem; /* 60px */
  --line-height-display-xl: 4.5rem; /* 72px */
  --line-height-display-2xl: 5.625rem; /* 90px */

  /* Font Weight */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}`}</code>
          </pre>
          <Typography as="h3" variant="xl/medium">
            Typography Component
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            In order to ensure consistent typography across our application,
            I&apos;ve implemented a robust Typography component. This component
            serves as a pivotal tool in our development process, promoting both
            consistency and flexibility in managing typography styles.
            Here&apos;s how I&apos;ve strategically incorporated it into our
            system:
          </Typography>

          <Typography
            as="h4"
            variant="base/regular"
            className="text-foreground"
          >
            {" "}
            - Consistency for a Unified Look and Feel
          </Typography>

          <Typography
            as="h4"
            variant="base/regular"
            className="text-foreground"
          >
            {" "}
            - Flexible Variant System
          </Typography>

          <Typography
            as="h4"
            variant="base/regular"
            className="text-foreground"
          >
            {" "}
            - Direct Integration with Design System
          </Typography>

          <Typography
            as="h4"
            variant="base/regular"
            className="text-foreground"
          >
            {" "}
            - Improved Readability and Maintenance
          </Typography>

          <Typography
            as="h4"
            variant="base/regular"
            className="text-foreground"
          >
            {" "}
            - Adherence to Design System Standards
          </Typography>

          <pre>
            <code>{`
  /* example */

  import { type VariantProps, cva } from 'className-variance-authority';

  import cn from '@/lib/cn';

  type FontSize =
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | 'display-xs'
    | 'display-sm'
    | 'display-md'
    | 'display-lg'
    | 'display-xl'
    | 'display-2xl';

  type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

  // extend type of props to include html attributes for the element
  export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
      VariantProps<typeof typographyVariants> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | ...
    variant: 'FontSize/FontWeight';
  }

  const typographyVariants = cva('font-normal leading-normal', {
    variants: {
      variant: {
        // xs
        'xs/regular': 'text-xs font-regular leading-xs',
        'xs/medium': 'text-xs font-medium leading-xs',
        'xs/semibold': 'text-xs font-semibold leading-xs',
        'xs/bold': 'text-xs font-bold leading-xs',

        // sm
        'sm/regular': 'text-sm font-regular leading-sm',
        'sm/medium': 'text-sm font-medium leading-sm',
        'sm/semibold': 'text-sm font-semibold leading-sm',
        'sm/bold': 'text-sm font-bold leading-sm',

        // base
        'base/regular': 'text-base font-regular leading-base',
        'base/medium': 'text-base font-medium leading-base',
        'base/semibold': 'text-base font-semibold leading-base',
        'base/bold': 'text-base font-bold leading-base',

        // md
        'md/regular': 'text-md font-regular leading-md',
        'md/medium': 'text-md font-medium leading-md',
        'md/semibold': 'text-md font-semibold leading-md',
        'md/bold': 'text-md font-bold leading-md',

        // lg
        'lg/regular': 'text-lg font-regular leading-lg',
        'lg/medium': 'text-lg font-medium leading-lg',
        'lg/semibold': 'text-lg font-semibold leading-lg',
        'lg/bold': 'text-lg font-bold leading-lg',

      },
    },
    defaultVariants: {
      variant: 'md/regular',
    },
  });

  export default function Typography({
    as,
    variant,
    className,
    ...props
  }: TypographyProps) {
    const Comp = as;

    return (
      <Comp
        className={cn('text-balance', typographyVariants({ variant }), className)}
        {...props}
      />
    );
  }

  export { Typography, typographyVariants };


}`}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Spacing and Layout
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Consistent spacing and layout contribute to a visually appealing and
            user-friendly interface. We define spacing variables for margins,
            padding, and layout dimensions to maintain a balanced design system.
          </Typography>
          {/* Include the spacing and layout code snippet */}
          <pre>
            <code>{`/* Spacing and Layout */
:root {
  --gap-1: 0.25rem;
  --gap-2: 0.5rem;
  --gap-3: 0.75rem;
  --gap-4: 1rem;
  --gap-5: 1.5rem;
  --gap-6: 2rem;
  --gap-7: 3rem;
  --section-gap: 6rem 0 7.5rem;
}`}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Borders
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            The border-related variables define border radii and colors,
            providing consistent styling for elements.
          </Typography>
          <div className="space-y-5">
            <div className="flex justify-evenly">
              <div className="flex h-20 w-20 items-center justify-center rounded border-2 border-border">
                base
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-sm border-2 border-border">
                sm
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-md border-2 border-border">
                md
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-border">
                lg
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-border">
                xl
              </div>
            </div>
          </div>
          <pre>
            <code>
              {`/* Borders */

--border-radius: 0.5rem;
--border-radius-sm: 0.25rem;
--border-radius-md: 0.5rem;
--border-radius-lg: 0.75rem;
--border-radius-xl: 1rem;
`}
            </code>
          </pre>

          <div className="flex justify-evenly">
            <div className="flex h-20 w-20 items-center justify-center rounded border-2 border-border">
              base
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded border-2 border-border-light">
              light
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded border-2 border-border-lighter">
              lighter
            </div>
          </div>

          <pre>
            <code>
              {`/* Borders color */
--color-border: var(--color-gray-200);
--color-border-light: var(--color-gray-100);
--color-border-lighter: var(--color-gray-50);
--color-border-hover: var(--color-gray-300);
--color-border-light-hover: var(--color-gray-200);
--color-border-lighter-hover: var(--color-gray-100);`}
            </code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Shadows
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Shadow variables define different shadow effects to be applied to
            elements, providing depth and visual hierarchy.
          </Typography>

          <div className="flex justify-evenly">
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer shadow-sm"></div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer shadow-md"></div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer shadow-lg"></div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer shadow-xl"></div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer shadow-2xl"></div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer shadow-inner"></div>
          </div>
          <pre>
            <code>
              {`--shadow-sm: 0px 4px 8px rgba(0, 0, 0, 0.04);
--shadow-md: 0px 8px 16px rgba(0, 0, 0, 0.08);
--shadow-lg: 0px 16px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0px 24px 32px rgba(0, 0, 0, 0.16);
--shadow-2xl: 0px 32px 40px rgba(0, 0, 0, 0.2);
--shadow-inner: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
--shadow-none: none;`}
            </code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Layers
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Layer variables define different layers for UI elements, helping to
            establish visual hierarchy and elevation.
          </Typography>
          <div className="flex justify-evenly">
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer">
              1
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer-2">
              2
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer-3">
              3
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded bg-layer-4">
              4
            </div>
          </div>
          <pre>
            <code>
              {`--layer-1: var(--color-white);
--layer-2: var(--color-gray-50);
--layer-3: var(--color-gray-100);
--layer-4: var(--color-gray-200);

.dark {
  --layer-1: var(--color-gray-750);
  --layer-2: var(--color-gray-750);
  --layer-3: var(--color-gray-700);
  --layer-4: var(--color-gray-600);
}`}
            </code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Dark Mode
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Dark mode enhances user experience, and we provide a set of
            variables to adapt the design system for dark mode. Colors, text,
            and background properties are adjusted to ensure readability and
            visual appeal in low-light environments.
          </Typography>
          {/* Include the dark mode code snippet */}
          <pre>
            <code>{`.dark {
  /* ... (dark mode variables) ... */
--background: var(--color-gray-800);
--foreground: var(--color-gray-200);
...
}`}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Dynamic Theme Primary Color
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            The dynamic theme primary color allows for customization of the
            primary color scheme. Below are examples of different theme options
            with their respective primary color variables.
          </Typography>
          {/* Include the dark mode code snippet */}
          <pre>
            <code>{`.dark {
  /* themes.css */
  .theme-default {
    --color-primary-50: 240 33.3% 97.6%; /* #F7F7FB */
    --color-primary-100: 240 95% 92.2%; /* #D8D8FE */
    --color-primary-200: 240 94.9% 84.7%; /* #B3B3FD */
    --color-primary-300: 240 89.2% 74.5%; /* #8484F8 */
    --color-primary-400: 240 89.5% 70%; /* #6E6EF7 */
    --color-primary-500: 240 87.3% 60%; /* #4040F2 #4f46e5 */
    --color-primary-600: 240 63.2% 51%; /* #3333D1  #4f46e5 */
    --color-primary-700: 240 68.9% 44.1%; /* #2323BE */
    --color-primary-800: 240 72.1% 33.7%; /* #181894 */
    --color-primary-900: 240 73.2% 19%; /* #0D0D54 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .dark .theme-default {
    --color-primary-50: 240 33.3% 97.6%; /* #F7F7FB */
    --color-primary-100: 240 95% 92.2%; /* #D8D8FE */
    --color-primary-200: 240 94.9% 84.7%; /* #B3B3FD */
    --color-primary-300: 240 89.2% 74.5%; /* #8484F8 */
    --color-primary-400: 240 89.5% 70%; /* #6E6EF7 */
    --color-primary-500: 240 87.3% 60%; /* #4040F2 #4f46e5 */
    --color-primary-600: 240 63.2% 51%; /* #3333D1  #4f46e5 */
    --color-primary-700: 240 68.9% 44.1%; /* #2323BE */
    --color-primary-800: 240 72.1% 33.7%; /* #181894 */
    --color-primary-900: 240 73.2% 19%; /* #0D0D54 */

    --color-primary: var(--color-primary-400);
    --color-primary-hover: var(--color-primary-300);
    --color-primary-active: var(--color-primary-500);
    --color-primary-disabled: var(--color-primary-300);
  }

  .theme-emerald {
    --color-primary-50: 151.8 81% 95.9%; /* #ecfdf5 */
    --color-primary-100: 149.3 80.4% 90%; /* #d1fae5 */
    --color-primary-200: 152.4 76% 80.4%; /* #a7f3d0 */
    --color-primary-300: 156.2 71.6% 66.9%; /* #6ee7b7 */
    --color-primary-400: 158.1 64.4% 51.6%; /* #34d399 */
    --color-primary-500: 160.1 84.1% 39.4%; /* #10b981 */
    --color-primary-600: 161.4 93.5% 30.4%; /* #059669 */
    --color-primary-700: 162.9 93.5% 24.3%; /* #047857 */
    --color-primary-800: 163.1 88.1% 19.8%; /* #065f46 */
    --color-primary-900: 164.2 85.7% 16.5%; /* #064e3b */
    --color-primary-950: 165.7 91.3% 9%; /* #022c22 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .dark .theme-emerald {
    --color-primary-50: 151.8 81% 95.9%; /* #ecfdf5 */
    --color-primary-100: 149.3 80.4% 90%; /* #d1fae5 */
    --color-primary-200: 152.4 76% 80.4%; /* #a7f3d0 */
    --color-primary-300: 156.2 71.6% 66.9%; /* #6ee7b7 */
    --color-primary-400: 158.1 64.4% 51.6%; /* #34d399 */
    --color-primary-500: 160.1 84.1% 39.4%; /* #10b981 */
    --color-primary-600: 161.4 93.5% 30.4%; /* #059669 */
    --color-primary-700: 162.9 93.5% 24.3%; /* #047857 */
    --color-primary-800: 163.1 88.1% 19.8%; /* #065f46 */
    --color-primary-900: 164.2 85.7% 16.5%; /* #064e3b */
    --color-primary-950: 165.7 91.3% 9%; /* #022c22 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .theme-indigo {
    --color-primary-50: 225.9 100% 96.7%; /* #eef2ff */
    --color-primary-100: 226.5 100% 93.9%; /* #e0e7ff */
    --color-primary-200: 228 96.5% 88.8%; /* #c7d2fe */
    --color-primary-300: 229.7 93.5% 81.8%; /* #a5b4fc */
    --color-primary-400: 234.5 89.5% 73.9%; /* #818cf8 */
    --color-primary-500: 238.7 83.5% 66.7%; /* #6366f1 */
    --color-primary-600: 243.4 75.4% 58.6%; /* #4f46e5 */
    --color-primary-700: 244.5 57.9% 50.6%; /* #4338ca */
    --color-primary-800: 243.7 54.5% 41.4%; /* #3730a3 */
    --color-primary-900: 242.2 47.4% 34.3%; /* #312e81 */
    --color-primary-950: 243.8 47.1% 20%; /* #1e1b4b */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .dark .theme-indigo {
    --color-primary-50: 225.9 100% 96.7%; /* #eef2ff */
    --color-primary-100: 226.5 100% 93.9%; /* #e0e7ff */
    --color-primary-200: 228 96.5% 88.8%; /* #c7d2fe */
    --color-primary-300: 229.7 93.5% 81.8%; /* #a5b4fc */
    --color-primary-400: 234.5 89.5% 73.9%; /* #818cf8 */
    --color-primary-500: 238.7 83.5% 66.7%; /* #6366f1 */
    --color-primary-600: 243.4 75.4% 58.6%; /* #4f46e5 */
    --color-primary-700: 244.5 57.9% 50.6%; /* #4338ca */
    --color-primary-800: 243.7 54.5% 41.4%; /* #3730a3 */
    --color-primary-900: 242.2 47.4% 34.3%; /* #312e81 */
    --color-primary-950: 243.8 47.1% 20%; /* #1e1b4b */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .theme-rose {
    --color-primary-50: 355.7 100% 97.3%; /* #fff1f2 */
    --color-primary-100: 355.6 100% 94.7%; /* #ffe4e6 */
    --color-primary-200: 352.7 96.1% 90%; /* #fecdd3 */
    --color-primary-300: 352.6 95.7% 81.8%; /* #fda4af */
    --color-primary-400: 351.3 94.5% 71.4%; /* #fb7185 */
    --color-primary-500: 349.7 89.2% 60.2%; /* #f43f5e */
    --color-primary-600: 346.8 77.2% 49.8%; /* #e11d48 */
    --color-primary-700: 345.3 82.7% 40.8%; /* #be123c */
    --color-primary-800: 343.4 79.7% 34.7%; /* #9f1239 */
    --color-primary-900: 341.5 75.5% 30.4%; /* #881337 */
    --color-primary-950: 343.1 87.7% 15.9%; /* #4c0519 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .dark .theme-rose {
    --color-primary-50: 355.7 100% 97.3%; /* #fff1f2 */
    --color-primary-100: 355.6 100% 94.7%; /* #ffe4e6 */
    --color-primary-200: 352.7 96.1% 90%; /* #fecdd3 */
    --color-primary-300: 352.6 95.7% 81.8%; /* #fda4af */
    --color-primary-400: 351.3 94.5% 71.4%; /* #fb7185 */
    --color-primary-500: 349.7 89.2% 60.2%; /* #f43f5e */
    --color-primary-600: 346.8 77.2% 49.8%; /* #e11d48 */
    --color-primary-700: 345.3 82.7% 40.8%; /* #be123c */
    --color-primary-800: 343.4 79.7% 34.7%; /* #9f1239 */
    --color-primary-900: 341.5 75.5% 30.4%; /* #881337 */
    --color-primary-950: 343.1 87.7% 15.9%; /* #4c0519 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .theme-blue {
    --color-primary-50: 225.7 100% 95.9%; /* #eaefff */
    --color-primary-100: 226.8 100% 92%; /* #d6dfff */
    --color-primary-200: 226.7 100% 84.1%; /* #aec0ff */
    --color-primary-300: 226.7 100% 76.1%; /* #85a0ff */
    --color-primary-400: 226.7 100% 68.2%; /* #5d81ff */
    --color-primary-500: 226.7 100% 60.2%; /* #3461ff */
    --color-primary-600: 226.7 65.9% 48.2%; /* #2a4ecc */
    --color-primary-700: 226.7 66.3% 36.1%; /* #1f3a99 */
    --color-primary-800: 226.7 65.9% 24.1%; /* #152766 */
    --color-primary-900: 226.8 67.2% 12%; /* #0a1333 */
    --color-primary-950: 228 66.7% 5.9%; /* #050919 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .dark .theme-blue {
    --color-primary-50: 225.7 100% 95.9%; /* #eaefff */
    --color-primary-100: 226.8 100% 92%; /* #d6dfff */
    --color-primary-200: 226.7 100% 84.1%; /* #aec0ff */
    --color-primary-300: 226.7 100% 76.1%; /* #85a0ff */
    --color-primary-400: 226.7 100% 68.2%; /* #5d81ff */
    --color-primary-500: 226.7 100% 60.2%; /* #3461ff */
    --color-primary-600: 226.7 65.9% 48.2%; /* #2a4ecc */
    --color-primary-700: 226.7 66.3% 36.1%; /* #1f3a99 */
    --color-primary-800: 226.7 65.9% 24.1%; /* #152766 */
    --color-primary-900: 226.8 67.2% 12%; /* #0a1333 */
    --color-primary-950: 228 66.7% 5.9%; /* #050919 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .theme-orange {
    --color-primary-50: 33.3 100% 96.5%; /* #fff7ed */
    --color-primary-100: 34.3 100% 91.8%; /* #ffedd5 */
    --color-primary-200: 32.1 97.7% 83.1%; /* #fed7aa */
    --color-primary-300: 30.7 97.2% 72.4%; /* #fdba74 */
    --color-primary-400: 27 96% 61%; /* #fb923c */
    --color-primary-500: 24.6 95% 53.1%; /* #f97316 */
    --color-primary-600: 20.5 90.2% 48.2%; /* #ea580c */
    --color-primary-700: 17.5 88.3% 40.4%; /* #c2410c */
    --color-primary-800: 15 79.1% 33.7%; /* #9a3412 */
    --color-primary-900: 15.3 74.6% 27.8%; /* #7c2d12 */
    --color-primary-950: 13 81.1% 14.5%; /* #431407 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

  .dark .theme-orange {
    --color-primary-50: 33.3 100% 96.5%; /* #fff7ed */
    --color-primary-100: 34.3 100% 91.8%; /* #ffedd5 */
    --color-primary-200: 32.1 97.7% 83.1%; /* #fed7aa */
    --color-primary-300: 30.7 97.2% 72.4%; /* #fdba74 */
    --color-primary-400: 27 96% 61%; /* #fb923c */
    --color-primary-500: 24.6 95% 53.1%; /* #f97316 */
    --color-primary-600: 20.5 90.2% 48.2%; /* #ea580c */
    --color-primary-700: 17.5 88.3% 40.4%; /* #c2410c */
    --color-primary-800: 15 79.1% 33.7%; /* #9a3412 */
    --color-primary-900: 15.3 74.6% 27.8%; /* #7c2d12 */
    --color-primary-950: 13 81.1% 14.5%; /* #431407 */

    --color-primary: var(--color-primary-500);
    --color-primary-hover: var(--color-primary-400);
    --color-primary-active: var(--color-primary-600);
    --color-primary-disabled: var(--color-primary-300);
  }

...
}`}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Text Colors
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            The text colors of the interface define the color scheme for text
            elements. Here are the key text color variables used in the design
            system.
          </Typography>
          <div>
            <Typography
              as="p"
              variant="lg/medium"
              className="text-foreground-light"
            >
              The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography
              as="p"
              variant="lg/medium"
              className="text-foreground-muted"
            >
              The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography
              as="p"
              variant="lg/medium"
              className="text-foreground-lighter"
            >
              The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography
              as="p"
              variant="lg/medium"
              className="text-foreground-muted-light"
            >
              The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography
              as="p"
              variant="lg/medium"
              className="text-foreground-muted-dark"
            >
              The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography
              as="p"
              variant="lg/medium"
              className="text-foreground-muted-darker"
            >
              The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
          {/* Include the dark mode code snippet */}
          <pre>
            <code>{`
  /* Background/Foregound */
  --background: var(--color-white);
  --foreground: var(--color-gray-800);
  --background-muted: var(--color-gray-100);

  /* Text */
  --color-text-light: var(--color-gray-600);
  --color-text-lighter: var(--color-gray-500);

  --color-text-muted: var(--color-gray-500);
  --color-text-muted-light: var(--color-gray-400);
  --color-text-muted-dark: var(--color-gray-300);
  --color-text-muted-darker: var(--color-gray-200);
...
`}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Transitions
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Consistent animation transitions can enhance the overall user
            experience. The design system provides the following transition
            variables for defining the duration of animations.
          </Typography>
          {/* Include the dark mode code snippet */}
          <pre>
            <code>{`--transition-short: 0.15s;
--transition-long: 0.3s;
`}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Color Theory and Gray Colors
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            Color theory plays a crucial role in UI/UX design, influencing the
            overall look and feel of an application. In this design system, the
            gray color palette has been thoughtfully selected to ensure a
            harmonious and visually pleasing user interface.
          </Typography>
          <Typography as="p" variant="base/regular" className="text-foreground">
            The shades of gray are chosen based on HSL (Hue, Saturation,
            Lightness) values, providing a balanced and subtle appearance. These
            shades are carefully crafted to enhance readability and user
            experience across various elements in the application.
          </Typography>

          <div className="flex h-80 overflow-hidden rounded">
            {[
              "50",
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "650",
              "700",
              "750",
              "800",
              "850",
            ].map((gray) => {
              const color = `bg-gray-${gray}`;

              return (
                <div
                  key={color}
                  className="h-full w-20"
                  style={{
                    backgroundColor: `hsl(var(--color-gray-${gray}))`,
                  }}
                ></div>
              );
            })}
          </div>

          <Typography as="p" variant="base/regular" className="text-foreground">
            In dark mode, the primary color has been adjusted to reduce contrast
            and enhance visual comfort. This thoughtful modification aims to
            provide a seamless experience for users in low-light environments.
            For example, the primary color in dark mode is adjusted to be less
            saturated and lighter to reduce contrast and enhance visual comfort.
          </Typography>

          <pre>
            <code>{`:root {
  --color-primary: var(--color-primary-500);
  --color-primary-hover: var(--color-primary-400);
  --color-primary-active: var(--color-primary-600);
  --color-primary-disabled: var(--color-primary-300);
}

.dark {
  --color-primary: var(--color-primary-400);
  --color-primary-hover: var(--color-primary-300);
  --color-primary-active: var(--color-primary-500);
  --color-primary-disabled: var(--color-primary-300);
}
            `}</code>
          </pre>
        </section>

        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Buttons
          </Typography>

          {/* Buttons */}
          <div className="flex flex-col gap-y-4">
            {buttonVariants.map((variant) => {
              return (
                <div className="space-x-7" key={variant}>
                  {buttonSizes.reverse().map((size) => (
                    <Button key={size} variant={variant} size={size}>
                      Button
                    </Button>
                  ))}
                </div>
              );
            })}
          </div>

          {/* <div>
            <p className='text-xl font-bold text-foreground'>Foreground</p>
            <p className='text-xl font-bold text-foreground-light'>
              Foreground Light
            </p>
            <p className='text-xl font-bold text-foreground-lighter'>
              Foreground Lighter
            </p>
            <p className='text-xl font-bold text-foreground-muted'>
              Foreground Muted
            </p>
            <p className='text-xl font-bold text-foreground-muted-light'>
              Foreground Muted Light
            </p>
            <p className='text-xl font-bold text-foreground-muted-dark'>
              Foreground Muted Dark
            </p>
            <p className='text-xl font-bold text-foreground-muted-darker'>
              Foreground Muted Darker
            </p>
          </div> */}
        </section>
        <section className="space-y-6">
          <Typography as="h2" variant="display-xs/medium">
            Icon Buttons
          </Typography>

          {/* Icon Button */}
          <div className="flex flex-col gap-y-4">
            {buttonVariants.map((variant) => {
              return (
                <div className="space-x-7" key={variant}>
                  {buttonSizes.reverse().map((size) => (
                    <IconButton key={size} variant={variant} size={size}>
                      <Bookmark className="w-[22px]" />
                    </IconButton>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

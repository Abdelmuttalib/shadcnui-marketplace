"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ArrowRightIcon,
  BookmarkIcon,
  CheckCheckIcon,
  CheckIcon,
  Cloud,
  LogOut,
  Mail,
  MailIcon,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import React from "react";
import CustomDialog from "@/components/ui/animated-dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem> */}
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem> */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem> */}
        {/* <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem> */}
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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

export function CustomDialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <CustomDialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      triggerButton={
        <Button
          className="whitespace-nowrap"
          onClick={() => setOpen(true)}
          variant="outline"
          size="sm"
        >
          Edit
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
          <Button variant="outline" onClick={() => setOpen(false)} size="sm">
            Close
          </Button>

          <Button variant="default" onClick={() => setOpen(false)} size="sm">
            Submit
          </Button>
        </div>
      </div>
    </CustomDialog>
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
import { formatDateDayTime } from "@/utils/date";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/utils/cn";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { DataTable } from "./ui/data-table";
import { ScreenContainer } from "./container";
import { Typography } from "./ui/typography";

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
        // variant={getPaymentStatusBadgeColor(
        //   cell.getValue() as unknown as string
        // )}
        >
          <>{cell.getValue() as React.ReactNode}</>
        </Badge>
      );
    },
  },
  {
    accessorKey: " ",
    header: "",
    cell: ({}) => {
      return (
        <div className="flex items-center gap-x-2">
          <CustomDialogDemo />

          <Button variant="destructive-outline" size="sm">
            Delete
          </Button>
        </div>
      );
    },
  },
];

export function DataTableDemo() {
  return <DataTable columns={columns} data={payments} />;
}

export function NotificationsCard() {
  return (
    <div className="w-full max-w-lg shadow rounded-lg p-4 md:p-6 bg-card border space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-foreground sm:text-2xl">
          Notifications{" "}
        </h3>

        <div className="hidden sm:block">
          <Button size="sm" variant="secondary">
            <CheckCheckIcon className="w-4" />
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
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="w-full justify-start overflow-hidden">
          {Object.keys(notificationsData).map((notificationLabel) => (
            <TabsTrigger
              key={notificationLabel}
              value={notificationLabel}
              className="capitalize w-full"
            >
              {notificationLabel.toLocaleLowerCase()}{" "}
              <span className="bg-accent-hover/50 px-1 py-0.5 ml-2 rounded border text-xs font-medium">
                {
                  notificationsData[
                    notificationLabel as keyof typeof notificationsData
                  ]?.length
                }
                {/* @ts-ignore */}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.keys(notificationsData).map((nLabel, idx) => (
          <TabsContent
            key={idx}
            className="py-3 focus:outline-none"
            value={nLabel}
          >
            <div className="w-full divide-y divide-border">
              {notificationsData[nLabel as keyof typeof notificationsData]?.map(
                (notification) => (
                  <Notification
                    key={notification.id}
                    notification={notification}
                  />
                )
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
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
        "relative flex w-full gap-4 px-4 py-4 hover:bg-primary-100/20 focus:bg-primary-100/30 sm:py-5",
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
          <span className="font-normal ml-1 text-foreground">
            {notification.message}
          </span>
        </p>

        {notification.id === 4 && (
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Decline
            </Button>
            <Button size="sm">Accept</Button>
          </div>
        )}
        <div className="flex w-full justify-between">
          <p className="text-xs font-medium text-foreground-subtle">
            <RenderAfterMount>
              {formatDateDayTime(notification.date)}
            </RenderAfterMount>
          </p>
          <p className="text-xs font-medium text-foreground-subtle">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export function NotificationAlert() {
  return (
    <div
      className="max-w-xs bg-card border rounded-xl shadow-lg"
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
              <Button size="sm" variant="secondary">
                Don&apos;t allow
              </Button>
              <Button size="sm">Allow</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderAfterMount({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();

  return mounted ? children : null;
}

export function ButtonsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button size={"icon"} variant="destructive-outline">
        <BookmarkIcon />
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button size={"icon"} variant="secondary">
        <MailIcon />
      </Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}

export function BadgesDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      {/* <Badge variant="neutral">Default</Badge>
      <Badge variant="green">Default</Badge>
      <Badge variant="blue">Default</Badge>
      <Badge variant="red">Default</Badge>
      <Badge variant="yellow">Default</Badge> */}
    </div>
  );
}

import { useForm } from "react-hook-form";

import { z } from "zod";
import { UICustomizer2 } from "./ui-customizer";
import { Switch } from "./ui/switch";

const waitlistFormSchema = z.object({
  email: z.string().email(),
});

type FormSchema = z.infer<typeof waitlistFormSchema>;

export function WaitlistForm() {
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
    <div>
      {!success ? (
        <form
          // @ts-ignore
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-2"
        >
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
              })}
              className="bg-card"
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" disabled={isSubmitting || success}>
            Join waitlist
          </Button>
        </form>
      ) : (
        <div>
          <Badge variant={"secondary"} className="mt-2">
            {message}
          </Badge>
        </div>
      )}
      {!success && message && (
        <Badge variant={"secondary"} className="mt-2">
          {message}
        </Badge>
      )}
    </div>
  );
}

export function DemoShowcase() {
  return (
    <>
      <div className="relative -mt-[5.75rem] overflow-hidden pt-12 md:pt-[5.75rem] bg-base-25/50 dark:bg-background">
        <ScreenContainer>
          <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/publichttps://tailwindui.com/plus/img/avatar-1.jpg')] bg-[length:1000px_700px] bg-[position:calc(50%_+_190px)_-50px] bg-no-repeat lg:block"></div>
          <div className="max-w-container mx-auto px-4 pt-4 sm:px-6 flex flex-col lg:flex-row lg:px-8">
            <div className="relative z-20 mx-auto max-w-[40rem] pt-16 pb-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pt-20 lg:pr-4 lg:pb-24">
              <h1 className="text-base/7 font-semibold text-primary">
                Powered by shadcn ui
              </h1>

              <Typography
                as="p"
                variant="5xl/bold"
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
              <div className="mt-8 flex flex-col gap-4">
                <WaitlistForm />
                <div className="space-y-2">
                  <UICustomizer2 />

                  <ButtonLink
                    href="#examples"
                    className="text-foreground-secondary"
                    variant="outline"
                    size="sm"
                  >
                    <ArrowRightIcon className="rotate-45" />
                    examples
                  </ButtonLink>
                </div>
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
                  <div className="pointer-events-auto relative z-10 w-full rounded-lg bg-card text-[0.8125rem]/5 text-foreground-secondary ring-1 shadow-xl shadow-black/5 ring-slate-700/10">
                    <div>
                      <div className="flex items-center px-3.5 py-2.5 text-foreground-secondary">
                        <svg
                          className="mr-2 size-5 stroke-foreground-subtle"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                    <Button variant="outline" className="shadow-xs">
                      <svg className="mr-2.5 size-5 flex-none fill-foreground-subtle">
                        <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                      </svg>
                      Bookmark
                    </Button>

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
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
        </ScreenContainer>
      </div>
    </>
  );
}

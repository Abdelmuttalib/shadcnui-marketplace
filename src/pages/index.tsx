import * as React from "react";

import { Button, ButtonLink, ButtonProps } from "@/components/ui/button";
import {
  ArrowRightIcon,
  Bookmark,
  BookmarkIcon,
  CheckCheckIcon,
  MailIcon,
  Timer,
} from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { GradientBackground } from "@/components/gradient";
import Container, { ScreenContainer } from "@/components/container";
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

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

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
              className="bg-overlay-on-surface-background"
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" disabled={isSubmitting || success}>
            Join waitlist
          </Button>
        </form>
      ) : (
        <div>
          <Badge variant={"blue"} className="mt-2">
            {message}
          </Badge>
        </div>
      )}
      {!success && message && (
        <Badge variant={"red"} className="mt-2">
          {message}
        </Badge>
      )}
    </div>
  );
}

const Showcase = () => {
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
    <div className=" relative mx-auto grid w-full grid-cols-1 lg:grid-cols-6 px-4 sm:px-6 lg:px-8 gap-16">
      <div className="col-span-2">
        <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-bold tracking-tight text-foreground sm:text-7xl xl:max-w-[43.5rem]">
          shadcn ui styles
        </h1>
        <p className="col-start-1 row-start-3 mt-2 max-w-lg text-lg text-muted-foreground">
          Style Your Way, Redefining shadcn UI for Custom Interfaces
        </p>
        <div className="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col items-center flex-wrap gap-x-4 gap-y-4">
            <div className="space-y-4 w-full">
              <div>
                {/*  */}
                <div>
                  {!success ? (
                    <form
                      // @ts-ignore
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...register("email", {
                            required: true,
                          })}
                          disabled={isSubmitting}
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting || success}
                        size="lg"
                      >
                        Join waitlist
                      </Button>
                    </form>
                  ) : (
                    <div>
                      <p className="text-foreground-light text-sm">{message}</p>
                    </div>
                  )}
                  {!success && message && (
                    <div className="mt-2">
                      <p className="text-foreground-light text-sm">{message}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-x-4">
                <div>
                  <Badge variant="neutral" className="py-1">
                    <CheckBadgeIcon className="w-5 text-foreground-subtle mr-1" />{" "}
                    Powered by shadcn ui
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <ThemeSwitcher variant="outline" />
                <ThemeColorSelect />
              </div>
            </div>
            <div className="mt-14 flex gap-4">
              <BlogCard post={posts[0]} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="flex flex-wrap gap-8">
          <div className="overflow-hidden h-fit">
            <div className="border divide-y divide-slate-400/20 rounded-lg">
              <SimpleCard />

              <div className="p-4">
                <Button className="w-full" variant="outline">
                  View All
                </Button>
              </div>
            </div>
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-4 w-full">
                <DropdownMenuDemo />

                <div className="w-fit">
                  <Switch id="airplane-mode" />
                </div>
              </div>
              <div className="">
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
            </div>
            <div className=" flex flex-wrap px-1 py-4 gap-4">
              <Badge variant="green">Success</Badge>
              <Badge variant="yellow">Warning</Badge>
              <Badge variant="red">Failed</Badge>
              <Badge variant="blue">Processing</Badge>
              <Badge variant="neutral">Pending</Badge>
            </div>

            <DataTable columns={columns} data={payments} />
          </div>
          <div className="flex flex-col gap-4 items-center justify-end">
            <div className="flex flex-wrap gap-2">
              <Button>Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive-outline">Destructive Outline</Button>
              <IconButton>
                <BookmarkIcon />
              </IconButton>

              <IconButton variant="outline">
                <BookmarkIcon />
              </IconButton>
              <IconButton variant="destructive">
                <BookmarkIcon />
              </IconButton>
            </div>
            <NotificationsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const waitlistFormSchema = z.object({
  email: z.string().email(),
});

type FormSchema = z.infer<typeof waitlistFormSchema>;

export function Hero() {
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
      <div className="relative flex flex-col pb-24 pt-36">
        {/* <div className="relative max-h-96 overflow-auto m-6 rounded border">
          <Code
            code={exampleCode}
            initial={<>{'console.log("Rendered on server")'}</>}
          />
        </div> */}
        {/* <Showcase /> */}
        <ApplicationUI />
      </div>
    </>
  );
}

function CustomDialogDemo() {
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
          size="xs"
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

          <Button variant="destructive-outline" size="xs">
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
    <div className="w-full max-w-lg shadow rounded-lg p-4 md:p-6 bg-overlay-on-surface-background border space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-foreground sm:text-2xl">
          Notifications{" "}
        </h3>

        <div className="hidden sm:block">
          <Button
            size="xs"
            variant="secondary"
            iconLeft={<CheckCheckIcon className="w-4" />}
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
            <Button size="xs" variant="outline">
              Decline
            </Button>
            <Button size="xs">Accept</Button>
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

function RenderAfterMount({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();

  return mounted ? children : null;
}

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "destructive",
  "destructive-outline",
  "ghost",
  "link",
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
            <div></div>
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, exampleCode, highlightCode } from "@/components/views/docs/code";
import { DD } from "./dd";
import { UICustomizer, UICustomizer2 } from "@/components/ui-customizer";

function H() {
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
              <div className="mt-8 flex flex-col gap-4">
                <WaitlistForm />
                <div className="space-y-2">
                  <UICustomizer2 />

                  <ButtonLink
                    href="#examples"
                    className="text-foreground-secondary"
                    variant="outline"
                    size="xs"
                    iconRight={<ArrowRightIcon className="rotate-45" />}
                  >
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
        {components.map((component, index) => (
          <li key={component.title + index}>
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

export default function Home() {
  return (
    <>
      <Head>
        <title> shadcn-ui Marketplace</title>
        <meta
          name="description"
          content="shadcn ui styles, A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        <meta property="og:title" content="shadcn-ui Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="shadcn,ui, shadcn ui style, shadcn ui components, design system, design, components, ui kit, ui components, ui kits, react, react ui kit, react ui components, react components, component library, component kit, component ui kit, component ui components, components library, components kit, design system components, design system kit, design system ui kit, design system ui components, design systems, design ui kits, design ui components, ui design kits, ui design components, ui design systems, ui ui kits, ui ui components, open source, open source components, open source design systems, open source ui kits, open source ui components, shadcn ui, shadcn ui style, shadcn ui components, shadcn design system, shadcn design ui kits, shadcn design ui components, shadcn ui new york, shadcn ui design, shadcn ui styles, new york, new york style, new york components, new york design system, new york ui kits, new york ui components"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="mb-40 space-y-40 flex-grow">
          {/* <Hero /> */}
          <H />
          <ScreenContainer>
            <DD />
          </ScreenContainer>
          <ApplicationUI />
        </main>
        <footer className="mt-auto pt-8 pb-6 border-t border-border">
          <Container className="relative">
            {/* <div className=" flex flex-wrap px-1 py-4 gap-4 -ml-56">
              <Badge variant="green">Success</Badge>
              <Badge variant="yellow">Warning</Badge>
              <Badge variant="red">Failed</Badge>
              <Badge variant="blue">Processing</Badge>
              <Badge variant="neutral">Pending</Badge>
            </div> */}
            {/* <DropdownMenuDemo /> */}
            <div className="relative text-center">
              <h3 className="text-foreground-secondary to-black h-fit">
                shadcn ui styles, beyond Default and New York
              </h3>
            </div>
          </Container>
        </footer>
      </div>
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
            <div className="flex h-20 w-20 items-center justify-center rounded bg-overlay-on-surface-background">
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

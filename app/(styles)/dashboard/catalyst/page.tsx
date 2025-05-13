"use client";

import { toast } from "sonner";

import { AvatarDemo, SelectDemo } from "@/components/showcase";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/catalyst/ui/avatar";
import { Badge } from "@/registry/catalyst/ui/badge";
import { DataTable } from "@/registry/catalyst/ui/data-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/catalyst/ui/select";
import { Typography } from "@/registry/catalyst/ui/typography";

const data = {
  overview: [
    {
      title: "Total revenue",
      value: "$2.6M",
      trend: "up",
      percentage: "+4.5%",
      lastUpdate: "from last week",
    },
    {
      title: "Average order value",
      value: "$455",
      trend: "down",
      percentage: "-0.5%",
      lastUpdate: "from last week",
    },
    {
      title: "Tickets sold",
      value: "5,888",
      trend: "up",
      percentage: "+4.5%",
      lastUpdate: "from last week",
    },
    {
      title: "Page views",
      value: "823,067",
      trend: "up",
      percentage: "+21.2%",
      lastUpdate: "from last week",
    },
  ],

  recentOrders: [
    {
      orderId: "3000",
      date: "May 9, 2024",
      customer: "Leslie Alexander",
      event: {
        name: "Bear Hug: Live in Concert",
        image: "/events/bear-hug-thumb.jpg",
      },
      amount: "US$80.00",
    },
    {
      orderId: "3001",
      date: "May 5, 2024",
      customer: "Michael Foster",
      event: {
        name: "Six Fingers — DJ Set",
        image: "/events/six-fingers-thumb.jpg",
      },
      amount: "US$299.00",
    },
    {
      orderId: "3002",
      date: "Apr 28, 2024",
      customer: "Dries Vincent",
      event: {
        name: "We All Look The Same",
        image: "/events/we-all-look-the-same-thumb.jpg",
      },
      amount: "US$150.00",
    },
    {
      orderId: "3003",
      date: "Apr 23, 2024",
      customer: "Lindsay Walton",
      event: {
        name: "Bear Hug: Live in Concert",
        image: "/events/bear-hug-thumb.jpg",
      },
      amount: "US$80.00",
    },
    {
      orderId: "3004",
      date: "Apr 18, 2024",
      customer: "Courtney Henry",
      event: {
        name: "Viking People",
        image: "/events/viking-people-thumb.jpg",
      },
      amount: "US$114.99",
    },
    {
      orderId: "3005",
      date: "Apr 14, 2024",
      customer: "Tom Cook",
      event: {
        name: "Six Fingers — DJ Set",
        image: "/events/six-fingers-thumb.jpg",
      },
      amount: "US$299.00",
    },
    {
      orderId: "3006",
      date: "Apr 10, 2024",
      customer: "Whitney Francis",
      event: {
        name: "We All Look The Same",
        image: "/events/we-all-look-the-same-thumb.jpg",
      },
      amount: "US$150.00",
    },
    {
      orderId: "3007",
      date: "Apr 6, 2024",
      customer: "Leonard Krasner",
      event: {
        name: "Bear Hug: Live in Concert",
        image: "/events/bear-hug-thumb.jpg",
      },
      amount: "US$80.00",
    },
    {
      orderId: "3008",
      date: "Apr 3, 2024",
      customer: "Floyd Miles",
      event: {
        name: "Bear Hug: Live in Concert",
        image: "/events/bear-hug-thumb.jpg",
      },
      amount: "US$80.00",
    },
    {
      orderId: "3009",
      date: "Mar 29, 2024",
      customer: "Emily Selman",
      event: {
        name: "Viking People",
        image: "/events/viking-people-thumb.jpg",
      },
      amount: "US$114.99",
    },
  ],
};

const columns = [
  {
    accessorKey: "orderId",
    header: "Order number",
  },
  {
    accessorKey: "date",
    header: "Purchase date",
    // @ts-expect-error - types
    cell: ({ cell }) => (
      <p className="text-sm text-catalyst-muted-foreground">
        {cell.getValue() as string}
      </p>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "event",
    header: "Event",
    // @ts-expect-error - types
    cell: ({ cell }) => (
      <div className="flex items-center gap-2">
        <Avatar className="size-6">
          <AvatarImage
            src={`https://avatar.vercel.sh/${cell.getValue().name}.png`}
            alt="@shadcn"
            // src="https://github.com/shadcn.png"
            // alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm">{cell.getValue().name as string}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      <div>
        <Typography as="h1" variant="lg/semibold" className="">
          Good afternoon
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Typography as="h1" variant="md/medium" className="">
            Overview
          </Typography>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last week" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="last-week">Last week</SelectItem>
                  <SelectItem value="last-month">Last month</SelectItem>
                  <SelectItem value="last-year">Last year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.overview.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 border-t border-t-catalyst-input py-6"
            >
              <div className="flex-1">
                <Typography as="h2" variant="md/normal">
                  {item.title}
                </Typography>
              </div>
              <div className="flex-1">
                <Typography as="p" variant="2xl/semibold">
                  {item.value}
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  className={cn("rounded-sm px-1.5", {
                    "bg-lime-400/20 text-lime-700 dark:bg-lime-400/10 dark:text-lime-300":
                      item.trend === "up",
                    "bg-pink-400/15 text-pink-700 dark:bg-pink-400/10 dark:text-pink-400":
                      item.trend === "down",
                  })}
                >
                  {item.percentage}
                </Badge>
                <p className="text-sm text-catalyst-muted-foreground">
                  {item.lastUpdate}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-4">
          <Typography as="h2" variant="md/medium">
            Recent orders
          </Typography>
          <div>
            <DataTable columns={columns} data={data.recentOrders} />
          </div>
        </div>
      </div>
    </div>
  );
}

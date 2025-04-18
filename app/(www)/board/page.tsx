import { BellIcon, InboxIcon, PlusIcon, Search } from "lucide-react";
import React from "react";

import { PageContainer } from "@/components/common/page-container";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

import { TaskCard } from "./components/task-card";
import { tasks } from "./data";

export default function BoardPage() {
  const statuses = [
    {
      title: "backlog",
      icon: Icons.backlog,
    },
    {
      title: "todo",
      icon: Icons.todo,
    },
    {
      title: "in progress",
      icon: Icons.inProgress,
    },
    {
      title: "done",
      icon: Icons.done,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* <div>
        <PageContainer size={"full"} className="border-b">
          <div className="flex items-center justify-between py-2">
            <div className="flex space-x-2">
              <Button variant="outline" size={"sm"}>
                <AllTasksIcon />
                All tasks
              </Button>
              <Button variant="outline" size={"sm"}>
                <ActiveIcon />
                Active
              </Button>
              <Button variant="outline" size={"sm"}>
                <BacklogIcon />
                Backlog
              </Button>
              <Button variant="outline" size={"icon-sm"}>
                <NewViewIcon />
              </Button>
            </div>
            <div>
              <Button variant="outline" size={"icon-sm"}>
                <NotificationBellIcon />
              </Button>
            </div>
          </div>
        </PageContainer>
      </div> */}
      <div>
        <PageContainer size={"full"} className="">
          <div className="flex items-center justify-between py-6">
            <div>
              <Typography
                as={"h1"}
                variant="3xl/semibold"
                className="capitalize tracking-tighter"
              >
                Board
              </Typography>
              <Typography
                as={"p"}
                variant="md/normal"
                className="max-w-4xl text-muted-foreground"
              >
                Manage your tasks and projects with ease.
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              {/* <div>
                <div>
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="md:w-[100px] lg:w-[300px]"
                  />
                </div>
              </div> */}
              <div className="flex gap-2">
                <div>
                  <Button variant="outline" size={"icon"}>
                    <BellIcon />
                  </Button>
                </div>
                <div>
                  <Button variant="outline" size={"icon"}>
                    <InboxIcon />
                  </Button>
                </div>
              </div>
              <div>
                <Button>
                  <PlusIcon />
                  New Task
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
      <div className="pb-4">
        <PageContainer size={"full"} className="h-full">
          <div className="flex items-center justify-between">
            <div>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="backlog">Backlog</TabsTrigger>
                  <TabsTrigger value="todo">Todo</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="done">Done</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex gap-2">
              <div className="flex space-x-2">
                <Button variant="outline" size={"sm"} className="">
                  <Icons.filter />
                  Filter
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-4 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="h-8 pl-8 md:w-[100px] lg:w-[300px]"
                />
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
      <div className="h-full">
        <PageContainer
          size={"full"}
          className="flex space-x-4 overflow-x-auto bg-accent/50 py-4 dark:bg-inherit"
        >
          {statuses.map((status) => {
            return (
              <div key={status.title} className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <status.icon />
                    <h2 className="text-sm font-medium capitalize">
                      {status.title}
                    </h2>
                    <Badge variant="secondary" className="rounded px-1.5">
                      {
                        tasks.filter((task) => task.status === status.title)
                          .length
                      }
                    </Badge>
                  </div>
                  <Button variant="ghost" size={"icon-sm"}>
                    <Icons.ellipsis />
                  </Button>
                </div>
                <div className="space-y-4">
                  {tasks
                    .filter((task) => task.status === status.title)
                    .map((task) => (
                      // <TaskCardDialog key={task.id} task={task} />
                      <TaskCard key={task.id} task={task} />
                    ))}
                </div>
              </div>
            );
          })}
        </PageContainer>
      </div>
    </div>
  );
}

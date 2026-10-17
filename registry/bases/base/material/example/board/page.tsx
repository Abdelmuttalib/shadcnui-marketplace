import {
  AudioWaveform,
  BellIcon,
  BookOpen,
  Bot,
  Calendar,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Inbox,
  InboxIcon,
  PieChart,
  PlusIcon,
  Search,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import React from "react";

import { PageContainer } from "@/components/common/page-container";
import { Icons } from "@/components/icons";
import { Badge } from "@/registry/material/ui/badge";
import { Button } from "@/registry/material/ui/button";
import { Input } from "@/registry/material/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/material/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/registry/material/ui/tabs";
import { Typography } from "@/registry/material/ui/typography";

import { NavMain } from "./components/nav-main";
import { NavProjects } from "./components/nav-projects";
import { NavUser } from "./components/nav-user";
import { TaskCard } from "./components/task-card";
import { TeamSwitcher } from "./components/team-switcher";
import { tasks } from "./data";

export function BoardPage() {
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

  const boardLinks = [
    {
      label: "Board",
    },
    {
      label: "Team",
    },
    {
      label: "Calendar",
    },
    {
      label: "Reports",
    },
  ];

  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  // This is sample data.
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  };

  return (
    <div className="relative isolate flex min-h-screen w-full">
      <SidebarProvider>
        <Sidebar className="absolute left-0 top-0">
          <SidebarHeader>
            <TeamSwitcher teams={data.teams} />
          </SidebarHeader>
          <SidebarContent>
            <NavMain items={data.navMain} />
            {/* <NavProjects projects={data.projects} /> */}
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {boardLinks.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        data-active={item.label === "Home"}
                      >
                        <a href={"#"}>
                          {/* <item.icon /> */}
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter>
            <NavUser user={data.user} />
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <div>
            <SidebarTrigger />
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
                <div className="flex items-center justify-between pb-6">
                  <div>
                    <Typography
                      as={"h1"}
                      variant="3xl/medium"
                      className="capitalize tracking-tight"
                    >
                      Board
                    </Typography>
                    <Typography
                      as={"p"}
                      variant="md/normal"
                      className="max-w-4xl text-material-muted-foreground"
                    >
                      Manage your tasks and projects with ease.
                    </Typography>
                  </div>
                  <div className="flex items-center gap-2">
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
            <div className="border-b border-material-border pb-4">
              <PageContainer size={"full"} className="h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <Tabs defaultValue="all">
                      <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="backlog">Backlog</TabsTrigger>
                        <TabsTrigger value="todo">Todo</TabsTrigger>
                        <TabsTrigger value="in-progress">
                          In Progress
                        </TabsTrigger>
                        <TabsTrigger value="done">Done</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-[18px] size-4 -translate-y-1/2 text-material-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="h-9 pl-8 md:w-[100px] lg:w-[300px]"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size={"sm"} className="">
                        <Icons.filter />
                        Filter
                      </Button>
                    </div>
                  </div>
                </div>
              </PageContainer>
            </div>
            <div>
              <PageContainer
                size={"full"}
                className="flex h-full space-x-4 overflow-x-auto py-4"
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
                          <Badge
                            variant="secondary"
                            className="rounded-material-sm px-1.5"
                          >
                            {
                              tasks.filter(
                                (task) => task.status === status.title
                              ).length
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
        </div>
      </SidebarProvider>
    </div>
  );
}

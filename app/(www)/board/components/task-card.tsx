import { IconProps } from "@radix-ui/react-icons/dist/types";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import React from "react";

import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import {
  Task,
  TASK_LABELS,
  TASK_PRIORITIES,
  TASK_STATUSES,
  TaskLabel,
  TaskPriority,
  tasks,
  TaskStatus,
} from "../data";

function TaskPriorityIcon({
  priority,
  ...props
}: { priority: TaskPriority } & IconProps) {
  switch (priority) {
    case "urgent":
      return <Icons.urgentPriority {...props} />;
    case "high":
      return <Icons.highPriority {...props} />;
    case "medium":
      return <Icons.mediumPriority {...props} />;
    case "low":
      return <Icons.lowPriority {...props} />;
  }
}

function TaskLabelIcon({ label }: { label: Task["label"] }) {
  switch (label) {
    case "bug":
      return <span className="block size-1.5 rounded-sm bg-red-400"></span>;
    case "improvement":
      return <span className="block size-1.5 rounded-sm bg-green-400"></span>;
    case "feature":
      return <span className="block size-1.5 rounded-sm bg-blue-400"></span>;
    case "design":
      return <span className="block size-1.5 rounded-sm bg-purple-400"></span>;
  }
}

export function TaskCard({ task }: { task: Task }) {
  const { id, title, assignee, priority, label } = task;

  return (
    <Card className="group relative shadow-sm transition-shadow hover:shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          {/* Task ID */}
          <span className="text-xs text-muted-foreground">INI-{id}</span>

          {/* Progress Circle */}
          <div className="relative size-5 text-muted-foreground">
            {assignee ? (
              <>
                <Avatar className="size-5">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${assignee}`}
                    alt={`${assignee} avatar`}
                  />
                  <AvatarFallback>
                    {assignee.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {/* <img
                src="https://public.linear.app/c84e4f2c-9bd7-4546-b5bb-e1ba74b8bcae/ba8b8e27-8fff-4118-bf02-f11565b2643d"
                alt={`Avatar of ${assignee}`}
                className="size-5 rounded-full"
              /> */}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 inline-block size-2 rounded-full border bg-green-500"
                ></span>
              </>
            ) : (
              <Icons.userPlaceholder />
            )}
          </div>
        </div>

        {/* Task Title */}
        <h3 className="mt-2 text-sm text-foreground">{title}</h3>

        {/* Assignee Avatar */}
        {/* <div className="mt-2 flex items-center space-x-2">
        <img
          src="https://public.linear.app/c84e4f2c-9bd7-4546-b5bb-e1ba74b8bcae/ba8b8e27-8fff-4118-bf02-f11565b2643d"
          alt={`Avatar of ${assignee}`}
          className="h-6 w-6 rounded-full"
        />
        <span className="text-sm text-muted-foreground">{assignee}</span>
      </div> */}

        {/* Priority Indicator */}
        <div className="mt-2 flex items-center space-x-1.5">
          <div
            className={cn(
              "flex w-fit items-center rounded border p-0.5 text-muted-foreground",
              {
                "text-orange-600": priority === "urgent",
                "text-amber-500": priority === "high",
                "text-blue-500": priority === "medium",
                "text-green-600": priority === "low",
              }
            )}
          >
            <TaskPriorityIcon priority={priority} />
          </div>
          <div
            className={cn(
              "flex w-fit items-center gap-1.5 rounded border p-0.5 px-1.5 text-muted-foreground",
              {
                "border-red-400/15 bg-red-400/10": label === "bug",
                "border-green-400/15 bg-green-400/10": label === "improvement",
                "border-blue-400/15 bg-blue-400/10": label === "feature",
                "border-purple-400/15 bg-purple-400/10": label === "design",
              }
            )}
          >
            <TaskLabelIcon label={label} />
            <span className="text-xs font-medium text-muted-foreground">
              {label}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TaskCardDialog({ task }: { task: Task }) {
  const {
    id,
    title,
    assignee,
    priority,
    label,
    description,
    status,
    comments,
  } = task;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <TaskCard task={task} />
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="size-11/12 overflow-auto md:max-w-6xl md:p-10">
        <DialogHeader>
          <DialogTitle>Task Details</DialogTitle>
          {/* <DialogDescription>
          tasks description
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex w-full gap-8 py-4">
          <div className="col-span-1 grid w-full gap-8 md:col-span-3">
            <div className="grid gap-6">
              <Label htmlFor="task" className="sr-only">
                task title
              </Label>

              <Textarea
                id="task"
                placeholder="task title"
                className="w-full resize-none border-transparent px-0 text-lg focus-visible:outline-none focus-visible:ring-0 md:text-lg"
                inputMode="text"
              />

              <Label htmlFor="description" className="sr-only">
                task description
              </Label>

              <Textarea
                id="description"
                placeholder="description title"
                className="w-full resize-none border-transparent px-0 focus-visible:outline-none focus-visible:ring-0"
                inputMode="text"
              />
            </div>
            <Separator className="my-2" />

            <div className="items-center gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex w-full items-center justify-between gap-4">
                    <h5 className="text-sm text-foreground">Comments</h5>
                    <Button variant="ghost" size={"icon-sm"}>
                      <Icons.ellipsis />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 pb-8">
                  {[...comments, ...comments].map((comment) => (
                    <div
                      key={comment.id}
                      className="grid gap-4 rounded-md border border-b bg-muted p-4"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="size-6">
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <h6 className="text-xs font-medium text-foreground">
                            {comment.user}
                          </h6>
                        </div>

                        <span className="text-xs font-medium text-muted-foreground">
                          {formatDistanceToNow(comment.date)}
                        </span>
                      </div>

                      <div className="px-0.5 text-sm text-foreground">
                        {comment.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {/*  */}
            <div>
              <TaskStatusSelect status={status} />
            </div>
            <div>
              <TaskLabelSelect label={label} />
            </div>
            <div>
              <TaskPrioritySelect priority={priority} />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function TaskStatusIcon({
  status,
  ...props
}: {
  status: TaskStatus;
} & IconProps) {
  switch (status) {
    case "backlog":
      return <Icons.backlog {...props} />;
    case "todo":
      return <Icons.todo {...props} />;
    case "in progress":
      return <Icons.inProgress {...props} />;
    case "done":
      return <Icons.done {...props} />;
  }
}

export function TaskStatusSelect({ status }: { status: TaskStatus }) {
  return (
    <Select defaultValue={status}>
      <SelectTrigger className="inline-flex capitalize">
        <SelectValue
          placeholder="task status"
          className="inline-flex items-center gap-2 capitalize"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {TASK_STATUSES.map((_status) => (
            <SelectItem value={_status} key={_status} className="capitalize">
              <TaskStatusIcon status={_status} className="inline" />
              <span className="ml-2">{_status}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// function TaskLabelIcon({
//   label,
//   ...props
// }: {
//   label: TaskStatus;
// } & IconProps) {
//   switch (label) {
//     case "":
//       return <BacklogIcon {...props} />;
//     case "todo":
//       return <TodoIcon {...props} />;
//     case "in progress":
//       return <InProgressIcon {...props} />;
//     case "done":
//       return <DoneIcon {...props} />;
//   }
// }

export function TaskLabelSelect({ label }: { label: TaskLabel }) {
  return (
    <Select defaultValue={label}>
      <SelectTrigger className="inline-flex capitalize">
        <SelectValue
          placeholder="task label"
          className="inline-flex items-center gap-2 capitalize"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {TASK_LABELS.map((_label) => (
            <SelectItem value={_label} key={_label} className="capitalize">
              <span className="-mt-2 inline-flex items-center justify-center">
                <TaskLabelIcon label={_label} />
              </span>
              <span className="ml-2">{_label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function TaskPrioritySelect({ priority }: { priority: TaskPriority }) {
  return (
    <Select defaultValue={priority}>
      <SelectTrigger className="inline-flex capitalize">
        <SelectValue
          placeholder="task priority"
          className="inline-flex items-center gap-2 capitalize"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {TASK_PRIORITIES.map((_taskPriority) => (
            <SelectItem
              value={_taskPriority}
              key={_taskPriority}
              className="capitalize"
            >
              <TaskPriorityIcon priority={_taskPriority} className="inline" />
              <span className="ml-2">{_taskPriority}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

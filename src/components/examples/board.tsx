import { CheckCircle2, Circle, CircleDashed, Radius } from "lucide-react";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  resetServerContext,
} from "react-beautiful-dnd";

import { useMounted } from "@/hooks/use-mounted";

import Badge from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";

type Status = "backlog" | "todo" | "in progress" | "done";

interface TTask {
  id: string;
  title: string;
  description: string;
  assigneeName: string;
  assigneeAvatarUrl: string;
  status: Status;
  orderIndex: number;
}

const initialTasks: TTask[] = [
  {
    id: "1",
    title: "Implement user authentication",
    description:
      "Create a user authentication system using Firebase Authentication.",
    assigneeName: "John Doe",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "todo",
    orderIndex: 0,
  },
  {
    id: "2",
    title: "Design landing page",
    description: "Design a landing page for the website using Figma or Sketch.",
    assigneeName: "Jane Smith",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "todo",
    orderIndex: 1,
  },
  {
    id: "3",
    title: "Setup Redux store",
    description: "Setup Redux store for managing state in the application.",
    assigneeName: "John Doe",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    status: "in progress",
    orderIndex: 0,
  },
  {
    id: "4",
    title: "Implement task board UI",
    description: "Implement the task board UI using React and Tailwind CSS.",
    assigneeName: "Jane Smith",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    status: "in progress",
    orderIndex: 1,
  },
  {
    id: "5",
    title: "Add unit tests",
    description: "Add unit tests for the application using Jest and Enzyme.",
    assigneeName: "John Doe",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    status: "done",
    orderIndex: 0,
  },
  {
    id: "6",
    title: "Deploy application to AWS",
    description: "Deploy the application to AWS using EC2 and S3.",
    assigneeName: "Jane Smith",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    status: "done",
    orderIndex: 1,
  },
  {
    id: "7",
    title: "Test the application",
    description: "Add unit tests for the application using Jest and Enzyme.",
    assigneeName: "John Doe",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    status: "backlog",
    orderIndex: 0,
  },
  {
    id: "8",
    title: "Prepare for deployment",
    description: "Deploy the application to AWS using EC2 and S3.",
    assigneeName: "Jane Smith",
    assigneeAvatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    status: "backlog",
    orderIndex: 1,
  },
];

export function Board() {
  resetServerContext();

  const [tasks, setTasks] = useState<TTask[]>(
    initialTasks.sort((a, b) => a.orderIndex - b.orderIndex)
  );
  // .sort((a, b) => a.orderIndex - b.orderIndex)
  const statuses = ["backlog", "todo", "in progress", "done"];

  function handleOnDragEnd(result: DropResult) {
    const { source, destination, draggableId: taskId } = result;

    if (!destination) return;

    // If the draggable is dropped outside of a droppable
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const sourceStatus = source.droppableId;
    const destinationStatus = destination.droppableId;

    // Find the task being dragged
    const draggedTask = tasks.find((task) => task.id.toString() === taskId);

    if (!draggedTask) return;

    // Remove the dragged task from the tasks array
    const tasksWithoutDragged = tasks.filter(
      (task) => task.id.toString() !== taskId
    );

    // Insert the dragged task at the appropriate index in the destination column
    const updatedTasks = [...tasksWithoutDragged];
    const destinationTasks = updatedTasks.filter(
      (task) => task.status === destinationStatus
    );
    const sourceTasks = updatedTasks.filter(
      (task) => task.status === sourceStatus
    );
    const otherTasks = updatedTasks.filter(
      (task) =>
        task.status !== destinationStatus && task.status !== sourceStatus
    );

    if (destinationTasks.length === 0) {
      setTasks([
        ...sourceTasks,
        {
          ...draggedTask,
          status: destinationStatus as Status,
          orderIndex: destination.index || 0,
        },
        ...otherTasks,
      ]);
      return;
    }

    // If the task is dropped in the same column/status
    if (sourceStatus === destinationStatus) {
      destinationTasks.splice(destination.index, 0, {
        ...draggedTask,
        orderIndex: destination.index,
      });

      // Update the order indices for tasks in the same column
      destinationTasks
        .filter((task) => task.status === destinationStatus)
        .forEach((task, index) => {
          task.orderIndex = index;
        });

      setTasks([...destinationTasks, ...otherTasks]);

      return;
    }
    // if the task is dropped in a different column/status
    else if (sourceStatus !== destinationStatus) {
      const finalDestinationTasks: TTask[] = [];

      destinationTasks.forEach((task, index) => {
        if (index === destination.index) {
          finalDestinationTasks.push({
            ...draggedTask,
            status: destinationStatus as Status,
            orderIndex: destination.index,
          });
          finalDestinationTasks.push({
            ...task,
            orderIndex: destination.index + 1,
          });
        } else if (index !== destination.index) {
          finalDestinationTasks.push({
            ...task,
            orderIndex: index > destination.index ? index + 1 : index,
          });
        }
      });

      // if the task is dropped at the end of the column
      if (destinationTasks.length === destination.index) {
        finalDestinationTasks.push({
          ...draggedTask,
          status: destinationStatus as Status,
          orderIndex: destination.index,
        });
      }

      setTasks([...sourceTasks, ...finalDestinationTasks, ...otherTasks]);
      return;
    }
  }

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <>
      <div className="flex justify-center">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="flex flex-col md:flex-row gap-5 w-full h-full bg-background px-5 py-4">
            {/* Column/Status */}
            {statuses.map((status) => {
              const tasksByStatus = tasks.filter(
                (task) => task.status === status
              );
              return (
                <div
                  key={status}
                  className="w-full h-full min-h-screen flex flex-col gap-y-3 bg-background"
                >
                  {/* <XCircle className='w-8 h-8 text-red-500 dark:text-red-400' /> */}
                  {/* <Circle className='w-8 h-8 text-gray-500 dark:text-gray-400' />

                  <Radius className='w-8 h-8 text-blue-500 dark:text-blue-400' />
                  <CheckCircle2 className='w-8 h-8 text-green-500 dark:text-green-400' /> */}
                  <div className="inline-flex px-3 items-center gap-x-2">
                    {status === "backlog" && (
                      <CircleDashed className="w-[18px] h-[18px] text-foreground-light" />
                    )}
                    {status === "todo" && (
                      <Circle className="w-[18px] h-[18px] text-foreground-light" />
                    )}
                    {status === "in progress" && (
                      <Radius className="w-[18px] h-[18px] text-foreground-light" />
                    )}
                    {status === "done" && (
                      <CheckCircle2 className="w-[18px] h-[18px] text-foreground-light" />
                    )}
                    <Typography
                      as="h3"
                      variant="sm/medium"
                      className="capitalize"
                    >
                      {status}
                      <Badge
                        color="white"
                        className="text-xs border border-border text-current p-1 px-1.5 ml-4 dark:bg-layer"
                      >
                        {tasksByStatus.length}
                      </Badge>
                    </Typography>
                  </div>

                  <Droppable droppableId={status}>
                    {(provided, snapshot) => (
                      <div
                        className={`space-y-3 h-full min-h-full flex-1 rounded bg-background ${
                          snapshot.isDraggingOver
                            ? "bg-layer-3/50 dark:bg-gray-hover/50"
                            : ""
                        }`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {/* Tasks */}
                        {tasksByStatus.map((task, index) => (
                          <Draggable
                            key={task.id.toString()}
                            draggableId={task.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className="border border-border rounded p-4 py-3 flex flex-col gap-y-2 bg-layer"
                              >
                                <div className="inline-flex items-center justify-between">
                                  <Typography
                                    as="span"
                                    variant="xs/medium"
                                    className="capitalize text-foreground-muted-light dark:text-foreground-lighter"
                                  >
                                    CYB-246
                                  </Typography>
                                  <Typography
                                    as="span"
                                    variant="xs/medium"
                                    className="capitalize text-foreground-muted-light dark:text-foreground-lighter"
                                  >
                                    Mar 15
                                  </Typography>
                                </div>
                                <Typography
                                  as="h3"
                                  variant="sm/regular"
                                  className="capitalize text-foreground"
                                >
                                  {task.title}
                                </Typography>
                                {/* <Typography
                                  as='p'
                                  variant='sm/medium'
                                  className='capitalize text-foreground-lighter'
                                >
                                  {task.description}
                                </Typography> */}
                                <div className="flex justify-between items-center gap-2 mt-2">
                                  <Badge
                                    color={
                                      task.status === "done"
                                        ? "green"
                                        : task.status === "in progress"
                                        ? "yellow"
                                        : task.status === "todo"
                                        ? "blue"
                                        : "gray"
                                    }
                                    className="capitalize border text-xs px-2 py-0.5"
                                  >
                                    {task.status}
                                  </Badge>
                                  <div className="flex items-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      className="w-6 h-6 rounded-full mr-2 object-cover"
                                      src={task.assigneeAvatarUrl}
                                      alt="Assignee avatar"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

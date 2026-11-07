export const TASK_STATUSES = ["backlog", "todo", "in progress", "done"];
export const TASK_PRIORITIES = ["urgent", "high", "medium", "low"];
export const TASK_LABELS = ["feature", "bug", "improvement", "design"];

export type TaskPriority = (typeof TASK_PRIORITIES)[number];
export type TaskStatus = (typeof TASK_STATUSES)[number];
export type TaskLabel = (typeof TASK_LABELS)[number];

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  assignee: string;
  priority: TaskPriority;
  label: TaskLabel;
  description: string;
  comments: Comment[];
};

export type Comment = {
  id: number;
  date: string;
  user: string;
  text: string;
};

export const tasks = [
  {
    id: 1,
    title: "Implement user authentication",
    status: "backlog",
    assignee: "John Doe",
    priority: "high",
    label: "feature",
    description:
      "Add OAuth2 and JWT-based authentication for secure user login.",
    comments: [
      {
        id: 1,
        date: "2023-10-01T09:00:00",
        user: "Jane Smith",
        text: "We should also consider adding social login options.",
      },
      {
        id: 2,
        date: "2023-10-02T14:30:00",
        user: "John Doe",
        text: "Agreed. I'll look into integrating Google and Facebook login.",
      },
    ],
  },
  {
    id: 2,
    title: "Design dashboard UI",
    status: "todo",
    assignee: "Jane Smith",
    priority: "medium",
    label: "design",
    description:
      "Create a modern and responsive dashboard layout for the admin panel.",
    comments: [
      {
        id: 1,
        date: "2023-10-03T11:15:00",
        user: "Alice Johnson",
        text: "Let's use a dark theme for better readability.",
      },
    ],
  },
  {
    id: 3,
    title: "Fix API bugs",
    status: "in progress",
    assignee: "",
    priority: "urgent",
    label: "bug",
    description:
      "Resolve issues with the API returning 500 errors for invalid requests.",
    comments: [
      {
        id: 1,
        date: "2023-10-04T16:45:00",
        user: "Bob Brown",
        text: "This is critical for the release. Let's prioritize it.",
      },
    ],
  },
  {
    id: 4,
    title: "Deploy to production",
    status: "done",
    assignee: "Bob Brown",
    priority: "high",
    label: "feature",
    description:
      "Deploy the latest version of the application to the production server.",
    comments: [],
  },
  {
    id: 5,
    title: "Optimize database queries",
    status: "backlog",
    assignee: "John Doe",
    priority: "medium",
    label: "improvement",
    description: "Improve the performance of slow database queries.",
    comments: [
      {
        id: 1,
        date: "2023-10-05T10:00:00",
        user: "Alice Johnson",
        text: "We should also add indexing to the tables.",
      },
    ],
  },
  {
    id: 6,
    title: "Add user profile page",
    status: "todo",
    assignee: "Jane Smith",
    priority: "low",
    label: "feature",
    description: "Create a page where users can view and edit their profiles.",
    comments: [],
  },
  {
    id: 7,
    title: "Fix mobile responsiveness",
    status: "in progress",
    assignee: "Alice Johnson",
    priority: "high",
    label: "bug",
    description:
      "Ensure the application is fully responsive on mobile devices.",
    comments: [
      {
        id: 1,
        date: "2023-10-06T13:20:00",
        user: "Jane Smith",
        text: "The navbar is breaking on smaller screens.",
      },
    ],
  },
  {
    id: 8,
    title: "Set up CI/CD pipeline",
    status: "done",
    assignee: "Bob Brown",
    priority: "medium",
    label: "improvement",
    description:
      "Automate the build and deployment process using GitHub Actions.",
    comments: [],
  },
  {
    id: 9,
    title: "Write unit tests",
    status: "backlog",
    assignee: "",
    priority: "low",
    label: "improvement",
    description:
      "Add unit tests for critical components to improve code quality.",
    comments: [
      {
        id: 1,
        date: "2023-10-07T15:10:00",
        user: "Alice Johnson",
        text: "Let's use Jest for testing.",
      },
    ],
  },
  {
    id: 10,
    title: "Create onboarding tutorial",
    status: "todo",
    assignee: "Jane Smith",
    priority: "medium",
    label: "feature",
    description: "Develop a step-by-step tutorial for new users.",
    comments: [],
  },
  {
    id: 11,
    title: "Fix login page styling",
    status: "in progress",
    assignee: "Alice Johnson",
    priority: "low",
    label: "bug",
    description:
      "Adjust the styling of the login page to match the design system.",
    comments: [
      {
        id: 1,
        date: "2023-10-08T12:00:00",
        user: "John Doe",
        text: "The button alignment is off.",
      },
    ],
  },
  {
    id: 12,
    title: "Add dark mode",
    status: "done",
    assignee: "Bob Brown",
    priority: "medium",
    label: "feature",
    description: "Implement a dark mode theme for the application.",
    comments: [],
  },
  {
    id: 13,
    title: "Refactor API endpoints",
    status: "backlog",
    assignee: "John Doe",
    priority: "high",
    label: "improvement",
    description: "Restructure the API to follow RESTful best practices.",
    comments: [
      {
        id: 1,
        date: "2023-10-09T17:30:00",
        user: "Alice Johnson",
        text: "We should also version the API.",
      },
    ],
  },
  {
    id: 14,
    title: "Update documentation",
    status: "todo",
    assignee: "Jane Smith",
    priority: "low",
    label: "improvement",
    description: "Update the project documentation to reflect recent changes.",
    comments: [],
  },
  {
    id: 15,
    title: "Add search functionality",
    status: "in progress",
    assignee: "Alice Johnson",
    priority: "high",
    label: "feature",
    description: "Implement a global search feature for the application.",
    comments: [
      {
        id: 1,
        date: "2023-10-10T10:45:00",
        user: "Bob Brown",
        text: "We should include fuzzy search for better results.",
      },
    ],
  },
];

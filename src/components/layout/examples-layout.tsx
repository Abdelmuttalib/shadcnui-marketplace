import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Chat } from "@/components/examples/chat";
import { Board } from "../examples/board";

export function ExamplesLayout({ children }: { children: React.ReactNode }) {
  const examples = [
    {
      id: 1,
      label: "Board",
      path: "/dashboard/board",
      component: <Board />,
    },
    {
      id: 2,
      label: "Chat",
      path: "/dashboard/chat",
      component: <Chat />,
    },
    // {
    //   id: 3,
    //   label: "Settings",
    //   path: "/dashboard/settings",
    //   component: <div>Settings</div>,
    // },
    // {
    //   id: 4,
    //   label: "Design System",
    //   path: "/dashboard/design-system",
    //   component: <div>Design System</div>,
    // },
  ];

  const [currentExampleId, setCurrentExampleId] = useState(examples[0].id);

  const componentMap = {
    1: <Board />,
    2: <Chat />,
    // 3: <div>Settings</div>,
    // 4: <div>Design System</div>,
  };

  return (
    <div className="w-full h-full">
      <div className="w-full max-w-[95rem] px-4 py-16 mx-auto flex flex-col gap-y-10 lg:px-8">
        <div>
          <h1 className="text-6xl font-semibold text-primary">InSpect 2.0</h1>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-2">
            {examples.map((example) => (
              <Button
                key={example.label}
                onClick={() => setCurrentExampleId(example.id)}
                variant={
                  example.id === currentExampleId ? "primary-outline" : "ghost"
                }
              >
                {example.label}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-y-4 border p-4 rounded bg-accent-hover">
            {/* <div className="relative isolate">
              <GradientBackground />
            </div> */}
            {/* <div className="z-10">{children}</div> */}
            {/* @ts-ignore */}
            <div>{componentMap[currentExampleId]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

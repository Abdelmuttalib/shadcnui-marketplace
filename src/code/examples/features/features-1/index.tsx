// Auto-generated file for: features/features-1/page.tsx
const exampleCode = `
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const featuresData = [
  {
    feature: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
  },
  {
    feature: "PPC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
  },
  {
    feature: "Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
  },
];

export default function Features1() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 rounded-lg gap-4 p-6">
        {featuresData.map((item) => (
          <div
            key={item.feature}
            className={cn(
              "flex flex-col gap-y-4 p-4 lg:p-9 rounded-lg",
              "bg-gradient-to-b to-background from-muted/40 border"
            )}
          >
            <div className="p-2 rounded-lg shadow size-fit bg-gradient-to-b to-background from-muted/40 border">
              <CheckCircle2 className="size-6 lg:size-7 text-white fill-indigo-700" />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="text-xl font-medium capitalize">{item.feature}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

`;

export default exampleCode;

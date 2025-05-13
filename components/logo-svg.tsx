import { cn } from "@/lib/utils";

export function LogoSvg({ className, ...props }: any) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-background text-foreground", className)}
      {...props}
    >
      <rect x="30" y="50" width="140" height="140" fill="currentColor"></rect>
      <circle
        cx="100"
        cy="50"
        r="35"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
      ></circle>
      <line
        x1="55"
        y1="150"
        x2="130"
        y2="80"
        stroke="currentColor"
        strokeWidth="12"
        className="stroke-background dark:stroke-black"
      ></line>
      <line
        x1="90"
        y1="165"
        x2="138"
        y2="120"
        stroke="currentColor"
        strokeWidth="12"
        className="stroke-background dark:stroke-black"
      ></line>
    </svg>
  );
}

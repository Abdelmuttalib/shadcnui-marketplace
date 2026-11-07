import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-dvh pt-(--landing-topbar-height)">
      <div className="relative flex min-h-[calc(100dvh-var(--landing-topbar-height))] flex-col items-center justify-center space-y-4 px-6 text-center">
        <h1 className="font-mono text-7xl font-light">404</h1>
        <p className="font-mono text-base">This page could not be found.</p>
        <div className="pt-4">
          <Button render={<Link href="/">Back to Home</Link>} />
        </div>
      </div>
    </div>
  );
}

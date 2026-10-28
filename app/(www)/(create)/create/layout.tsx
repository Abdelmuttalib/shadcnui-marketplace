import { Suspense } from "react";

import { CreateSkeleton } from "../components/create-skeleton";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* HistoryProvider reads useSearchParams(), which opts this subtree out
          of prerendering up to this boundary. The fallback is what paints on
          first load, so it must be the page placeholder, not empty. */}
      <Suspense fallback={<CreateSkeleton />}>
        <>{children}</>
      </Suspense>
    </>
  );
}

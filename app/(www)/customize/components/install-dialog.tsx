"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Only visible when user clicks "Create Project". Rendered client-only to
// avoid a useId hydration mismatch on the Base UI dialog trigger. The loading
// placeholder mirrors the trigger button exactly so there is no layout shift.
export const InstallDialog = dynamic(
  () =>
    import("@/app/(www)/customize/components/project-form").then(
      (m) => m.ProjectForm
    ),
  {
    ssr: false,
    loading: () => (
      <Button disabled aria-hidden>
        Get Code
      </Button>
    ),
  }
);

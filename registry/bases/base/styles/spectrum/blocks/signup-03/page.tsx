"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { SignupForm } from "@/registry/bases/base/styles/spectrum/blocks/signup-03/components/signup-form";

export default function SignupPage() {
  return (
    <div className="bg-spectrum-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-spectrum-primary text-spectrum-primary-foreground flex size-6 items-center justify-center rounded-md">
            <IconPlaceholder
              lucide="GalleryVerticalEndIcon"
              tabler="IconLayoutRows"
              hugeicons="LayoutBottomIcon"
              phosphor="RowsIcon"
              remixicon="RiGalleryLine"
              className="size-4"
            />
          </div>
          Acme Inc.
        </a>
        <SignupForm />
      </div>
    </div>
  );
}

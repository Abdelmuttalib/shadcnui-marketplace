"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { LoginForm } from "@/registry/bases/base/styles/snow/blocks/login-03/components/login-form";

export default function LoginPage() {
  return (
    <div className="bg-snow-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-snow-primary text-snow-primary-foreground rounded-snow-md flex size-6 items-center justify-center">
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
        <LoginForm />
      </div>
    </div>
  );
}

"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { SignupForm } from "@/registry/bases/base/styles/neon/blocks/signup-02/components/signup-form";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-neon-primary text-neon-primary-foreground flex size-6 items-center justify-center rounded-md">
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
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-neon-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

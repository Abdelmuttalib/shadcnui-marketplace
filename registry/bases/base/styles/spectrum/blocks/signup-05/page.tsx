import { SignupForm } from "@/registry/bases/base/styles/spectrum/blocks/signup-05/components/signup-form";

export default function SignupPage() {
  return (
    <div className="bg-spectrum-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}

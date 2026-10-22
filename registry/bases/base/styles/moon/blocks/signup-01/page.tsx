import { SignupForm } from "@/registry/bases/base/styles/default-v4/blocks/signup-01/components/signup-form";

export default function Page() {
  return (
    <div className="min-h-svh flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}

import { SignupForm } from "@/registry/bases/base/styles/default-v4/blocks/signup-05/components/signup-form";

export default function SignupPage() {
  return (
    <div className="bg-background min-h-svh flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}

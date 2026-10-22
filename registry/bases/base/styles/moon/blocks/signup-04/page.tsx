import { SignupForm } from "@/registry/bases/base/styles/default-v4/blocks/signup-04/components/signup-form";

export default function SignupPage() {
  return (
    <div className="bg-muted min-h-svh flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  );
}

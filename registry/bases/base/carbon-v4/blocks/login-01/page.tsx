import { LoginForm } from "@/registry/bases/base/carbon-v4/blocks/login-01/components/login-form";

export default function Page() {
  return (
    <div className="min-h-svh flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

import { LoginForm } from "@/registry/bases/base/carbon-v4/blocks/login-05/components/login-form";

export default function LoginPage() {
  return (
    <div className="bg-background min-h-svh flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

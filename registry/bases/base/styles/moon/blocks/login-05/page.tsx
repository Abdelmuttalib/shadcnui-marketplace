import { LoginForm } from "@/registry/bases/base/styles/moon/blocks/login-05/components/login-form";

export default function LoginPage() {
  return (
    <div className="bg-moon-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

import { LoginForm } from "@/registry/bases/base/styles/neon/blocks/login-04/components/login-form";

export default function LoginPage() {
  return (
    <div className="bg-neon-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}

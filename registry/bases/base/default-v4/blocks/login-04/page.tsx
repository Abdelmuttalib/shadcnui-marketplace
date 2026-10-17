import { LoginForm } from "@/registry/bases/base/default-v4/blocks/login-04/components/login-form";

export default function LoginPage() {
  return (
    <div className="bg-muted min-h-svh flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}

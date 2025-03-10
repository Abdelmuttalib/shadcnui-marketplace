import { ButtonLink } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <>
      <main className="flex h-full min-h-[100svh] items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-2xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="text-foreground-secondary mt-6 text-base leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            {/* ’ */}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonLink href="/">Go back home</ButtonLink>
          </div>
        </div>
      </main>
    </>
  );
}

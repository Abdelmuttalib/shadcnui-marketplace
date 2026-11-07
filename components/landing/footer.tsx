import Link from "next/link";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

const footerLinks = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/community" },
  { label: "Changelog", href: "/changelog" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 px-5 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
          {footerLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="group text-foreground/50 hover:text-foreground/80 inline-flex items-center gap-1 font-mono text-[11px] transition-colors"
              >
                {link.label}
              </Link>
              {i < footerLinks.length - 1 && (
                <span className="text-foreground/10 mx-1 text-[10px] select-none">
                  /
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="flex w-full shrink-0 items-center justify-between sm:w-auto sm:gap-4">
          <span className="text-foreground/50 font-mono text-[10px]">
            © {new Date().getFullYear()} Better Auth Inc.
          </span>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-foreground/10 hidden select-none sm:inline">
              ·
            </span>
            <Link
              href="https://x.com/better_auth"
              aria-label="Twitter/X"
              className="text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              <Icons.XIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="https://github.com/better-auth"
              aria-label="GitHub"
              className="text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              <Icons.gitHub className="h-3.5 w-3.5" />
            </Link>
            <div className="text-foreground/15 flex h-4 w-4 items-center justify-center select-none">
              |
            </div>
            <div className="-ml-4 sm:-ml-5">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

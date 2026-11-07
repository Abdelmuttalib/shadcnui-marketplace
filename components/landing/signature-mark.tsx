import Link from "next/link";
import { Icons } from "@/components/icons";
import { ThemeToggle, ThemeToggleHeadless } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site-config";

export function SignatureMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="text-foreground/50 flex items-center justify-between gap-3 font-mono text-[11px] select-none">
      {compact ? (
        <span className="text-[10px]">
          © {new Date().getFullYear()} {siteConfig.name}.
          {/* Better Auth Inc. */}
        </span>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            href="/community"
            className="hover:text-foreground/80 transition-colors"
          >
            Community
          </Link>
        </div>
      )}
      <div className="flex items-center gap-3">
        <a
          href={siteConfig.twitterUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter/X"
          className="text-foreground/50 hover:text-foreground/80 transition-colors"
        >
          <Icons.XIcon className="h-3.5 w-3.5" />
        </a>
        <a
          href={siteConfig.githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-foreground/50 hover:text-foreground/80 transition-colors"
        >
          <Icons.gitHub className="h-3.5 w-3.5" />
        </a>
        <div className="flex items-center">
          <span className="bg-foreground/15 mr-1 h-3 w-px" />
          <div className="-mx-2">
            <ThemeToggleHeadless />
          </div>
        </div>
      </div>
    </div>
  );
}

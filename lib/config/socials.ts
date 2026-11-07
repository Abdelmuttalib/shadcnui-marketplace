import { siteConfig } from "@/config/site-config";
import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type SocialLink = {
  key: "github" | "x";
  label: string;
  href: string;
  icon: IconSvgElement;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    href: siteConfig.githubLink,
    icon: GithubIcon,
  },
  {
    key: "x",
    label: "X",
    href: siteConfig.twitterUrl,
    icon: NewTwitterIcon,
  },
];

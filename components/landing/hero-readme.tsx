"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { ContributorInfo } from "@/lib/community-stats";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import {
  DatabaseSection,
  IntegrationsSection,
  PluginEcosystem,
  ServerClientTabs,
  SocialProvidersSection,
} from "./framework-sections";
import { TrustedBy } from "./trusted-by";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stylesDataList, useStyleStore } from "@/hooks/use-style-store";
import { getStyleVariablesPrefix } from "@/registry/styles-components";
import { ThemePaletteSelect } from "../common/theme-palette-select";
import { Button } from "../ui/button";

const mcpCommands = [
  { name: "Cursor", command: "npx auth mcp --cursor" },
  { name: "Claude Code", command: "npx auth mcp --claude-code" },
  { name: "Open Code", command: "npx auth mcp --open-code" },
  { name: "Manual", command: "npx auth mcp --manual" },
];

const aiPromptText = `Set up authentication in my project using Better Auth (better-auth npm package).

1. Install better-auth. If I already have a database configured in this project, use that — don't set up a new one.

2. Create lib/auth.ts — call betterAuth() with:
   - My existing database connection (or a new SQLite/Postgres setup if none exists)
   - emailAndPassword enabled
   - Any social providers if I have OAuth credentials in my env

3. Create lib/auth-client.ts — use the correct framework import:
   - React/Next.js: "better-auth/react"
   - Vue: "better-auth/vue"
   - Svelte: "better-auth/svelte"
   - Vanilla: "better-auth/client"

4. Add the API route handler for my framework (e.g. app/api/auth/[...all]/route.ts for Next.js App Router).

5. Add BETTER_AUTH_SECRET to my .env if it doesn't exist (generate a 32+ char secret).

6. Run npx auth migrate to apply database migrations.

Refer to better-auth.com/docs for exact API and plugin syntax.`;

function CredentialFields() {
  const emailText = "user@email.com";
  const passwordDots = "••••••••";
  const [emailDisplay, setEmailDisplay] = useState(emailText);
  const [passwordDisplay, setPasswordDisplay] = useState(passwordDots);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isTypingRef = useRef(false);

  const startTyping = useCallback(() => {
    if (isTypingRef.current) return;
    isTypingRef.current = true;
    setIsTyping(true);

    // Clear previous timeouts
    for (const t of timeoutsRef.current) clearTimeout(t);
    timeoutsRef.current = [];

    // Reset to empty
    setEmailDisplay("");
    setPasswordDisplay("");

    // Type email character by character
    for (let i = 0; i <= emailText.length; i++) {
      const t = setTimeout(() => {
        setEmailDisplay(emailText.slice(0, i));
      }, i * 60);
      timeoutsRef.current.push(t);
    }

    // Type password dots after email finishes
    const passwordStart = (emailText.length + 2) * 60;
    for (let i = 0; i <= passwordDots.length; i++) {
      const t = setTimeout(
        () => {
          setPasswordDisplay(passwordDots.slice(0, i));
          if (i === passwordDots.length) {
            isTypingRef.current = false;
            setIsTyping(false);
          }
        },
        passwordStart + i * 50
      );
      timeoutsRef.current.push(t);
    }
  }, []);

  useEffect(() => {
    return () => {
      for (const t of timeoutsRef.current) clearTimeout(t);
    };
  }, []);

  return (
    <div className="mt-3 flex items-center gap-1.5" onMouseEnter={startTyping}>
      <div className="border-foreground/8 bg-foreground/2 flex h-5 min-w-0 flex-1 items-center border px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 24 24"
          className="text-foreground/45 dark:text-foreground/30 mr-1.5 shrink-0"
        >
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
          />
        </svg>
        <span className="text-foreground/50 dark:text-foreground/35 truncate font-mono text-[9px]">
          {emailDisplay}
          {isTyping && emailDisplay.length < emailText.length && (
            <span className="bg-foreground/50 ml-px inline-block h-2.5 w-px animate-[blink_0.8s_step-end_infinite] align-middle" />
          )}
        </span>
      </div>
      <div className="border-foreground/8 bg-foreground/2 flex h-5 min-w-0 flex-1 items-center border px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 24 24"
          className="text-foreground/45 dark:text-foreground/30 mr-1.5 shrink-0"
        >
          <path
            fill="currentColor"
            d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"
          />
        </svg>
        <span className="text-foreground/50 dark:text-foreground/35 font-mono text-[9px] tracking-[0.1em]">
          {passwordDisplay}
          {isTyping &&
            emailDisplay.length >= emailText.length &&
            passwordDisplay.length < passwordDots.length && (
              <span className="bg-foreground/50 ml-px inline-block h-2.5 w-px animate-[blink_0.8s_step-end_infinite] align-middle" />
            )}
        </span>
      </div>
    </div>
  );
}

function InstallBlock() {
  const [mode, setMode] = useState<"cli" | "prompt" | "mcp" | "skills">("cli");
  const [copied, setCopied] = useState(false);
  const [pmOpen, setPmOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | "auto">("auto");
  const [overflow, setOverflow] = useState<"hidden" | "visible">("visible");

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setContentHeight(el.offsetHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    setOverflow("hidden");
  }, [mode]);

  useLayoutEffect(() => {
    if (pmOpen) {
      setOverflow("visible");
    }
  }, [pmOpen]);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setPmOpen(false);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border-foreground/[0.1] relative mb-6 rounded-md border">
      {/* Tabs */}
      <div className="border-foreground/[0.1] flex items-center border-b">
        <button
          onClick={() => {
            setMode("cli");
            setCopied(false);
            setPmOpen(false);
          }}
          className={cn(
            "relative px-4 py-2 text-[12px] transition-colors duration-150",
            mode === "cli"
              ? "text-neutral-800 dark:text-neutral-200"
              : "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-400"
          )}
        >
          CLI
          {mode === "cli" && (
            <div className="absolute right-4 bottom-0 left-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
          )}
        </button>
        <button
          onClick={() => {
            setMode("prompt");
            setCopied(false);
            setPmOpen(false);
          }}
          className={cn(
            "relative px-4 py-2 text-[12px] transition-colors duration-150",
            mode === "prompt"
              ? "text-neutral-800 dark:text-neutral-200"
              : "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-400"
          )}
        >
          Prompt
          {mode === "prompt" && (
            <div className="absolute right-4 bottom-0 left-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
          )}
        </button>
        <button
          onClick={() => {
            setMode("mcp");
            setCopied(false);
            setPmOpen(false);
          }}
          className={cn(
            "relative px-4 py-2 text-[12px] transition-colors duration-150",
            mode === "mcp"
              ? "text-neutral-800 dark:text-neutral-200"
              : "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-400"
          )}
        >
          MCP
          {mode === "mcp" && (
            <div className="absolute right-4 bottom-0 left-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
          )}
        </button>
        <button
          onClick={() => {
            setMode("skills");
            setCopied(false);
            setPmOpen(false);
          }}
          className={cn(
            "relative px-4 py-2 text-[12px] transition-colors duration-150",
            mode === "skills"
              ? "text-neutral-800 dark:text-neutral-200"
              : "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-400"
          )}
        >
          Skills
          {mode === "skills" && (
            <div className="absolute right-4 bottom-0 left-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
          )}
        </button>
      </div>

      {/* Content */}
      <motion.div
        animate={{ height: contentHeight }}
        initial={false}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onAnimationComplete={() => setOverflow("visible")}
        style={{ overflow }}
      >
        <div ref={contentRef}>
          <AnimatePresence mode="wait" initial={false}>
            <div>
              {mode === "cli" || mode === "skills" ? (
                <div className="flex items-center justify-between bg-neutral-100/50 px-4 py-3 dark:bg-[#050505]">
                  <code
                    className="text-[13px]"
                    style={{ fontFamily: "var(--font-geist-pixel-square)" }}
                  >
                    {mode === "skills" ? (
                      <>
                        <span className="text-purple-600/90 dark:text-purple-400/90">
                          npx
                        </span>{" "}
                        <span className="text-neutral-700 dark:text-neutral-300">
                          skills add better-auth/skills
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-purple-600/90 dark:text-purple-400/90">
                          npx
                        </span>{" "}
                        <span className="text-neutral-700 dark:text-neutral-300">
                          auth init
                        </span>
                      </>
                    )}
                  </code>
                  <div className="relative">
                    {mode === "skills" ? (
                      <button
                        onClick={() =>
                          copy("npx skills add better-auth/skills")
                        }
                        className="p-1 text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                        aria-label="Copy command"
                      >
                        {copied ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <button
                        onClick={() => copy("npx auth init")}
                        className="p-1 text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                        aria-label="Copy command"
                      >
                        {copied ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
                            />
                          </svg>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ) : mode === "mcp" ? (
                <div className="flex items-center justify-between bg-neutral-100/50 px-4 py-3 dark:bg-[#050505]">
                  <code
                    className="truncate text-[13px]"
                    style={{ fontFamily: "var(--font-geist-pixel-square)" }}
                  >
                    <span className="text-purple-600/90 dark:text-purple-400/90">
                      npx
                    </span>{" "}
                    <span className="text-neutral-700 dark:text-neutral-300">
                      auth mcp
                    </span>
                  </code>
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (copied) return;
                        setPmOpen(!pmOpen);
                      }}
                      className="p-1 text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                      aria-label="Add MCP"
                    >
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                        >
                          <path
                            fill="currentColor"
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                          />
                        </svg>
                      )}
                    </button>
                    {pmOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-40"
                          role="button"
                          tabIndex={-1}
                          aria-label="Close dropdown"
                          onClick={() => setPmOpen(false)}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") setPmOpen(false);
                          }}
                        />
                        <div className="absolute top-full right-0 z-50 mt-2 w-[160px] rounded-sm border border-neutral-200 bg-white shadow-2xl shadow-black/10 dark:border-white/[0.07] dark:bg-[#050505] dark:shadow-black/80">
                          {mcpCommands.map((mc, i) => (
                            <button
                              key={mc.name}
                              onClick={() => copy(mc.command)}
                              className={cn(
                                "flex w-full items-center gap-2.5 px-3 py-2 text-left text-[12px] text-neutral-500 transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/[0.05] dark:hover:text-white",
                                i < mcpCommands.length - 1 &&
                                  "border-b border-neutral-100 dark:border-white/[0.06]"
                              )}
                            >
                              <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                                {mc.name === "Cursor" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M11.503.131L1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"
                                    />
                                  </svg>
                                )}
                                {mc.name === "Claude Code" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="m6.96 15.2l.224-.992l.256-1.28l.208-1.024l.192-1.264l.112-.416l-.016-.032l-.08.016l-.96 1.312l-1.456 1.968l-1.152 1.216l-.272.112l-.48-.24l.048-.448l.272-.384l1.584-2.032l.96-1.264l.624-.72l-.016-.096h-.032l-4.224 2.752L2 12.48l-.336-.304l.048-.496l.16-.16l1.264-.88l3.152-1.76l.048-.16l-.048-.08h-.16L5.6 8.608L3.808 8.56l-1.552-.064l-1.52-.08l-.384-.08L0 7.856l.032-.24l.32-.208l.464.032l1.008.08l1.52.096l1.104.064l1.632.176h.256l.032-.112l-.08-.064l-.064-.064L4.64 6.56L2.944 5.44l-.896-.656l-.48-.336l-.24-.304l-.096-.672l.432-.48l.592.048l.144.032l.592.464l1.264.976L5.92 5.744l.24.192l.112-.064v-.048l-.112-.176l-.896-1.632l-.96-1.664l-.432-.688l-.112-.416a1.7 1.7 0 0 1-.064-.48l.496-.672L4.464 0l.672.096l.272.24l.416.944l.656 1.488l1.04 2.016l.304.608l.16.544l.064.176h.112v-.096l.08-1.152l.16-1.392l.16-1.792l.048-.512l.256-.608l.496-.32l.384.176l.32.464l-.048.288L9.84 2.4l-.384 1.936l-.24 1.312h.144l.16-.176l.656-.864l1.104-1.376l.48-.544l.576-.608l.368-.288h.688l.496.752l-.224.784l-.704.896l-.592.752l-.848 1.136l-.512.912l.048.064h.112l1.904-.416l1.04-.176l1.216-.208l.56.256l.064.256l-.224.544l-1.312.32l-1.536.304l-2.288.544l-.032.016l.032.048l1.024.096l.448.032h1.088l2.016.144l.528.352l.304.416l-.048.336l-.816.4l-1.088-.256l-2.56-.608l-.864-.208h-.128v.064l.736.72l1.328 1.2l1.68 1.552l.08.384l-.208.32l-.224-.032l-1.472-1.12l-.576-.496l-1.28-1.072h-.08v.112l.288.432l1.568 2.352l.08.72l-.112.224l-.416.144l-.432-.08l-.928-1.28l-.944-1.456l-.768-1.296l-.08.064l-.464 4.832l-.208.24l-.48.192l-.4-.304z"
                                    />
                                  </svg>
                                )}
                                {mc.name === "Open Code" && (
                                  <svg
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 32 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#oc)">
                                      <path
                                        d="M24 32H8V16H24V32Z"
                                        fill="currentColor"
                                        opacity="0.5"
                                      />
                                      <path
                                        d="M24 8H8V32H24V8ZM32 40H0V0H32V40Z"
                                        fill="currentColor"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="oc">
                                        <rect
                                          width="32"
                                          height="40"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                )}
                                {mc.name === "Manual" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 19h8M4 17l6-6l-6-6"
                                    />
                                  </svg>
                                )}
                              </span>
                              <span className="font-mono text-[11px]">
                                {mc.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-neutral-100/50 px-5 py-4 dark:bg-[#050505]">
                  <p className="text-[13px] leading-relaxed font-medium text-neutral-700 dark:text-neutral-200">
                    Set up authentication in my project using Better Auth.
                  </p>
                  <div className="relative mt-1.5">
                    <p className="line-clamp-2 text-[11px] leading-relaxed text-neutral-400 dark:text-neutral-500">
                      Install better-auth. If I already have a database
                      configured, use that. Create lib/auth.ts with{" "}
                      <code className="text-neutral-500 dark:text-neutral-400">
                        betterAuth()
                      </code>
                      , create auth-client.ts, add the route handler, run
                      migrations...
                    </p>
                    <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-6 bg-gradient-to-t from-neutral-100/50 to-transparent dark:from-[#050505]" />
                  </div>
                  <div className="border-foreground/[0.04] mt-3 flex items-center justify-between border-t pt-2">
                    <button
                      onClick={() => setPromptOpen(true)}
                      className="flex items-center gap-1 text-[11px] text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                      >
                        <path
                          fill="currentColor"
                          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
                        />
                      </svg>
                      View full prompt
                    </button>
                    <button
                      onClick={() => copy(aiPromptText)}
                      className="flex items-center gap-1.5 text-[11px] text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                    >
                      {copied ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                          >
                            <path
                              fill="currentColor"
                              d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                            />
                          </svg>
                          Copied
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                          >
                            <path
                              fill="currentColor"
                              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
                            />
                          </svg>
                          Copy prompt
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Prompt dialog */}
      <AnimatePresence>
        {promptOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center lg:left-[40%]"
            onClick={() => setPromptOpen(false)}
          >
            {/* Backdrop - only covers right/content side */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm dark:bg-black/70" />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-4 w-[calc(100%-2rem)] max-w-lg rounded-sm border border-neutral-200 bg-neutral-50 shadow-2xl dark:border-white/[0.06] dark:bg-[#0a0a0a]"
            >
              {/* Close */}
              <button
                onClick={() => setPromptOpen(false)}
                className="absolute top-3 right-3 z-10 text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="max-h-[60vh] overflow-y-auto px-5 py-5">
                <p className="font-mono text-[12px] leading-[1.9] whitespace-pre-line text-neutral-600 dark:text-neutral-400">
                  {aiPromptText}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-end border-t border-neutral-200 px-5 py-3 dark:border-white/[0.06]">
                <button
                  onClick={() => copy(aiPromptText)}
                  className="flex items-center gap-1.5 rounded-sm border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:border-white/[0.08] dark:text-neutral-400 dark:hover:bg-white/[0.04] dark:hover:text-neutral-200"
                >
                  {copied ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                        />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          fill="currentColor"
                          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
                        />
                      </svg>
                      Copy prompt
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const EMPTY_CONTRIBUTORS: ContributorInfo[] = [];

type CommunityHeroStats = {
  npmDownloads: number;
  npmWeeklyHistory: number[];
  githubStars: number;
  contributors: number;
};

/**
 * Below-the-fold media (contributor avatars, the demo video) never competes
 * with the initial load. Once the page has loaded, a fast connection fetches
 * it right away so it's ready before anyone scrolls to it; slow or
 * data-saver connections wait until it's close to the viewport.
 */
function useBelowFoldMedia() {
  const [state, setState] = useState({ loaded: false, prefetch: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onLoad = () => {
      const prefetch = !isSlowConnection();
      // Give the browser a beat after `load` before starting any fetches.
      timer = setTimeout(() => setState({ loaded: true, prefetch }), 300);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timer);
    };
  }, []);

  return state;
}

function isSlowConnection() {
  // Chromium only; Safari and Firefox don't expose the Network Information API.
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (connection?.saveData) return true;
  if (connection?.effectiveType) {
    return /^(slow-2g|2g|3g)$/.test(connection.effectiveType);
  }
  // Everywhere else, judge by how long this page took to load.
  const [navigation] = performance.getEntriesByType(
    "navigation"
  ) as PerformanceNavigationTiming[];
  return (navigation?.loadEventStart || performance.now()) > 4000;
}

function ContributorsSection({
  contributors = EMPTY_CONTRIBUTORS,
  contributorCount,
}: {
  contributors: ContributorInfo[];
  contributorCount: number;
}) {
  const wallRef = useRef<HTMLDivElement>(null);
  const [wallNearViewport, setWallNearViewport] = useState(false);
  const { loaded, prefetch } = useBelowFoldMedia();
  const showAvatars = prefetch || (loaded && wallNearViewport);

  // Hundreds of avatars scroll through the wall; the links always render,
  // but the avatar images are only mounted after the page has loaded: right
  // away on fast connections, or once the wall is about a screen away on
  // slow ones.
  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWallNearViewport(true);
          observer.disconnect();
        }
      },
      // About a screen ahead; the images themselves stay `loading="lazy"`.
      { rootMargin: "100% 0px" }
    );
    observer.observe(wall);
    return () => observer.disconnect();
  }, []);

  if (contributors.length === 0) return null;

  const colCount = 18;
  const columns = Array.from({ length: colCount }, (_, i) => {
    const perCol = Math.ceil(contributors.length / colCount);
    return contributors.slice(i * perCol, (i + 1) * perCol);
  });

  const speeds = [
    160, 190, 140, 176, 150, 184, 164, 144, 180, 156, 170, 136, 186, 152, 174,
    146, 182, 158,
  ];

  return (
    <div className="mt-10 pt-8">
      <div className="mb-2 flex items-center gap-4">
        <span className="text-foreground/90 dark:text-foreground/80 shrink-0 text-lg font-medium tracking-tight">
          Contributors
        </span>
        <div className="border-foreground/10 flex-1 border-t" />
      </div>
      <p className="text-foreground/50 dark:text-foreground/40 mb-5 text-[13px] leading-relaxed">
        Built by a community of{" "}
        <span className="text-foreground/70 dark:text-foreground/60 font-medium tabular-nums">
          {contributorCount}+
        </span>{" "}
        contributors.
      </p>

      {contributors.length > 0 && (
        <div
          ref={wallRef}
          className="relative h-[220px] overflow-hidden rounded-md"
          style={{
            perspective: "600px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
              backgroundSize: "12px 12px",
              opacity: 0.04,
            }}
          />
          <div
            className="relative grid h-full"
            style={{
              gridTemplateColumns: `repeat(${colCount}, 1fr)`,
              transform: "rotateX(18deg)",
              transformOrigin: "center center",
            }}
          >
            {columns.map((col, i) => (
              <div key={i} className="relative h-full overflow-hidden">
                <div
                  className="flex flex-col items-center gap-1"
                  style={{
                    animation: `vertical-marquee ${speeds[i]}s linear infinite`,
                  }}
                >
                  {[...col, ...col].map((c, j) => (
                    <a
                      key={`${c.login}-${j}`}
                      href={c.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={c.login}
                      aria-label={c.login}
                      className="group relative shrink-0"
                    >
                      {showAvatars ? (
                        // Eager once prefetching: Safari's native lazy-loading
                        // only starts right at the viewport, so avatars would
                        // still pop in one by one as the marquee scrolls. Low
                        // priority keeps them behind the demo video, and the
                        // tile background covers any that land a beat late.
                        <img
                          src={`${c.avatar_url}&s=64`}
                          alt={c.login}
                          width={32}
                          height={32}
                          loading={prefetch ? "eager" : "lazy"}
                          fetchPriority="low"
                          className="bg-foreground/10 relative rounded-sm opacity-50 grayscale transition-all duration-200 hover:z-10 hover:scale-125 hover:opacity-100 hover:grayscale-0"
                        />
                      ) : (
                        <span className="bg-foreground/5 block size-8 rounded-sm" />
                      )}
                      <div className="bg-foreground text-background pointer-events-none absolute -top-7 left-1/2 z-20 -translate-x-1/2 rounded-sm px-1.5 py-0.5 font-mono text-[8px] whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                        {c.login}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r to-transparent" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l to-transparent" />
        </div>
      )}
    </div>
  );
}

function formatCount(num: number | null | undefined): string {
  if (num == null) return "—";
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(num >= 10_000 ? 0 : 1)}k`;
  return num.toString();
}

function _NpmSparkline({ data: raw }: { data: number[] }) {
  // Drop the last bucket — it's the incomplete current week
  const data = raw.length > 2 ? raw.slice(0, -1) : raw;
  const w = 120;
  const h = 32;
  const pad = 1;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });
  const line = points.join(" ");
  const areaPath = `M${points[0]} ${points.map((p) => `L${p}`).join(" ")} L${w - pad},${h} L${pad},${h} Z`;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="ml-auto shrink-0"
    >
      <defs>
        <linearGradient id="npm-spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            className="[stop-color:theme(colors.emerald.500)]"
            stopOpacity="0.15"
          />
          <stop
            offset="100%"
            className="[stop-color:theme(colors.emerald.500)]"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#npm-spark-fill)" />
      <polyline
        points={line}
        fill="none"
        className="stroke-emerald-500/50"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReadmeFooter({ stats }: { stats: CommunityHeroStats }) {
  return (
    <div className="relative mt-10 overflow-hidden pt-8 pb-16">
      {/* Watermark logo */}
      <div
        className="pointer-events-none absolute top-1/2 -right-10 -translate-y-1/2 opacity-[0.03] select-none dark:opacity-[0.04]"
        aria-hidden="true"
      >
        <svg
          width="300"
          height="225"
          viewBox="0 0 60 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
            className="fill-foreground"
          />
        </svg>
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />

      {/* CTA */}
      <div className="relative space-y-6">
        {/* <p className="text-foreground/60 dark:text-foreground/50 text-center text-lg tracking-tight text-balance">
          Roll your own auth with confidence in minutes.
        </p> */}

        {/* <div className="flex items-center justify-center gap-2">
          {stats.npmDownloads > 0 && (
            <a
              href="https://www.npmjs.com/package/better-auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:bg-foreground/4 text-foreground/50 dark:text-foreground/50 flex items-center gap-1.5 rounded-sm px-2.5 transition-colors">
                <Icons.npm className="size-[11px] -translate-y-px" />
                <span className="font-mono text-xs">
                  {formatCount(stats.npmDownloads)} / week
                </span>
              </div>
            </a>
          )}
          {stats.githubStars > 0 && (
            <a
              href="https://github.com/better-auth/better-auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:bg-foreground/4 text-foreground/50 dark:text-foreground/50 flex items-center gap-1.5 rounded-sm px-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[11px] -translate-y-px"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="font-mono text-xs">
                  {formatCount(stats.githubStars)} stars
                </span>
              </div>
            </a>
          )}
        </div> */}

        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-1.5 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-100 transition-colors hover:opacity-90 sm:px-5 sm:text-sm dark:bg-neutral-100 dark:text-neutral-900"
          >
            Get Started
          </Link>
          <Link
            href="https://dash.better-auth.com/sign-in"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-600 transition-colors sm:px-5 sm:text-sm dark:text-neutral-300"
          >
            <span
              className="absolute inset-0 opacity-[0.04] transition-opacity group-hover:opacity-[0.08]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 4px,
                  currentColor 4px,
                  currentColor 5px
                )`,
              }}
            />
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute top-0 -right-[6px] -left-[6px] h-px transition-colors" />
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -right-[6px] bottom-0 -left-[6px] h-px transition-colors" />
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -top-[6px] -bottom-[6px] left-0 w-px transition-colors" />
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -top-[6px] right-0 -bottom-[6px] w-px transition-colors" />
            <span className="text-foreground/40 dark:text-foreground/50 absolute -right-[6px] -bottom-[6px] translate-x-1/2 translate-y-1/2 font-mono text-[8px] leading-none select-none">
              +
            </span>
            <span className="relative">Sign In </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Both theme variants are rendered so CSS picks the right one without a
 * hydration flash, but neither autoplays or preloads up front. Only the
 * visible variant is fetched, after the page has loaded: right away on fast
 * connections, or once it's about to scroll into view on slow ones.
 */
function DemoVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const { loaded, prefetch } = useBelowFoldMedia();

  // On fast connections, buffer the visible variant once the page has
  // loaded so it's already playing by the time it scrolls into view.
  useEffect(() => {
    if (!prefetch || !containerRef.current) return;
    for (const video of containerRef.current.querySelectorAll("video")) {
      if (video.offsetParent === null || !video.paused) continue;
      video.preload = "auto";
      // Safari won't resume a `preload="none"` video on its own.
      if (video.readyState === 0) video.load();
    }
  }, [prefetch, resolvedTheme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!loaded || !container) return;
    const videos = Array.from(container.querySelectorAll("video"));
    const observer = new IntersectionObserver(
      ([entry]) => {
        for (const video of videos) {
          const visible = video.offsetParent !== null;
          if (entry.isIntersecting && visible) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      // Only start playing when it's close: on slow connections that's
      // also when the (multi-MB) video starts downloading.
      { rootMargin: "200px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [loaded, resolvedTheme]);

  return (
    <div ref={containerRef}>
      {/* The poster is a CSS background rather than the `poster` attribute:
			    hidden <video>s still fetch their poster, but browsers skip
			    backgrounds on display:none elements, so only the active theme's
			    poster loads and it's there on first paint. */}
      <video
        src="/demo-dark.mp4"
        preload="none"
        loop
        muted
        playsInline
        className="-mt-[2px] hidden aspect-[2528/1440] h-auto w-full bg-[url(/demo-dark-poster.webp)] bg-cover dark:block"
      />
      <video
        src="/demo-light.mp4"
        preload="none"
        loop
        muted
        playsInline
        className="-mt-[2px] aspect-[2544/1440] h-auto w-full bg-[url(/demo-light-poster.webp)] bg-cover dark:hidden"
      />
    </div>
  );
}

export function HeroReadMe({
  contributors,
  stats,
}: {
  contributors: ContributorInfo[];
  stats: CommunityHeroStats;
}) {
  const { style, setStyle } = useStyleStore();

  function onStyleChange(e: any) {
    setStyle(e);
  }

  const defaultStyle = "carbon";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      className="flex w-full flex-col"
    >
      {/* Markdown content */}
      <div className="no-scrollbar flex-1 overflow-x-hidden">
        <div className="p-5 lg:px-8 lg:pt-20">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="no-scrollbar pb-0"
          >
            <h1 className="mb-4 flex items-center gap-3 font-mono text-sm text-neutral-900 sm:mb-5 sm:text-[15px] dark:text-neutral-100">
              README
              <span className="bg-foreground/15 h-px flex-1" />
            </h1>

            <p className="text-foreground/80 mb-6 text-sm leading-relaxed sm:mb-8 sm:text-[15px]">
              Explore multiple interpretations of{" "}
              <span className="text-foreground/90 dark:text-foreground/80 font-medium">
                shadcn/ui
              </span>
              , inspired by established design systems.
            </p>

            {/* Infrastructure */}
            <div className="relative mt-8 pt-6 pb-2">
              {/* Grain noise background — full bleed with fade edges */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 z-0"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100vw",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                }}
              >
                <div className="absolute inset-0 bg-neutral-200/20 dark:bg-black/30" />
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
                  <svg className="h-full w-full">
                    <filter id="infra-grain">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.85"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect
                      width="100%"
                      height="100%"
                      filter="url(#infra-grain)"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative z-10 mb-6">
                <div className="grid grid-cols-2 gap-4 xl:grid-cols-9">
                  <div className="xl:col-span-4">
                    <Select
                      defaultValue={style || defaultStyle}
                      onValueChange={onStyleChange}
                    >
                      <SelectTrigger
                        aria-label="Select style"
                        className={cn("w-full rounded-none")}
                      >
                        <SelectValue
                          placeholder="select a style"
                          className="text-muted-foreground"
                        >
                          <span className="text-muted-foreground">style:</span>{" "}
                          <span className="mr-2 font-medium capitalize">
                            {style || defaultStyle}
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className={"rounded-none"}>
                        <SelectGroup>
                          {stylesDataList.map((style) => {
                            const hoverBgColor = `hover:bg-${getStyleVariablesPrefix(
                              style.name
                            )}-primary`;
                            const hoverTextColor = `hover:text-${getStyleVariablesPrefix(
                              style.name
                            )}-primary-foreground`;

                            const focusBgColor = `focus:bg-${getStyleVariablesPrefix(
                              style.name
                            )}-primary`;
                            const focusTextColor = `focus:text-${getStyleVariablesPrefix(
                              style.name
                            )}-primary-foreground`;

                            return (
                              <SelectItem
                                value={style.name}
                                key={style.name}
                                className={`${hoverBgColor} ${hoverTextColor} ${focusBgColor} ${focusTextColor} rounded-none capitalize`}
                              >
                                {style.title}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="xl:col-span-4">
                    <ThemePaletteSelect />
                  </div>
                  <div className="xl:col-span-1">
                    <Button className="w-full rounded-none font-mono font-normal uppercase">
                      Get Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dashboard video */}
              <div className="border-foreground/8 relative z-10 overflow-hidden border">
                <div className="bg-foreground/2 border-foreground/6 flex items-center justify-between border-b px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-foreground/10 size-2 rounded-full" />
                      <span className="bg-foreground/10 size-2 rounded-full" />
                      <span className="bg-foreground/10 size-2 rounded-full" />
                    </div>
                    <span className="text-foreground/30 ml-2 font-mono text-[10px]">
                      dash.shadcnmarketplace.com
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    {["Overview", "Users", "Orgs", "Events"].map((tab, i) => (
                      <span
                        key={tab}
                        className={cn(
                          "font-mono text-[9px] tracking-wider uppercase",
                          i === 0 ? "text-foreground/50" : "text-foreground/20"
                        )}
                      >
                        {tab}
                      </span>
                    ))}
                  </div> */}
                </div>
                <div className="overflow-hidden" suppressHydrationWarning>
                  <iframe
                    src={`/example/${style || defaultStyle}/music`}
                    // className="h-full w-full"
                    className="-mt-[2px] aspect-[2528/1440] h-auto w-full bg-cover"
                  />
                  {/* <DemoVideo /> */}
                </div>
              </div>
            </div>

            {/* <ContributorsSection
              contributors={contributors}
              contributorCount={stats.contributors}
            /> */}

            <ReadmeFooter stats={stats} />
          </motion.article>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pointer-events-none relative z-[2] flex h-full w-full flex-col justify-center py-16"
    >
      <div>
        <h1 className="pt-3 text-2xl leading-tight tracking-tight text-balance text-neutral-800 sm:pt-4 md:text-3xl xl:text-4xl dark:text-neutral-200">
          shadcn/ui, reimagined across design systems.
        </h1>

        <p className="text-foreground/70 dark:text-foreground/60 pt-2 text-sm leading-relaxed">
          12 design systems. One familiar foundation.
        </p>

        {/* CTA Buttons */}
        <div className="pointer-events-auto flex flex-wrap items-center gap-2 pt-4 sm:gap-3 sm:pt-5">
          <Link
            href="/styles"
            className="inline-flex items-center gap-1.5 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-100 transition-colors hover:opacity-90 sm:px-5 sm:text-sm dark:bg-neutral-100 dark:text-neutral-900"
          >
            Explore Styles
          </Link>
          <Link
            href="/customize"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-600 transition-colors sm:px-5 sm:text-sm dark:text-neutral-300"
          >
            {/* Diagonal lines background */}
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
            {/* Top border */}
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute top-0 -right-[6px] -left-[6px] h-px transition-colors" />
            {/* Bottom border */}
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -right-[6px] bottom-0 -left-[6px] h-px transition-colors" />
            {/* Left border */}
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -top-[6px] -bottom-[6px] left-0 w-px transition-colors" />
            {/* Right border */}
            <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -top-[6px] right-0 -bottom-[6px] w-px transition-colors" />
            <span className="text-foreground/40 dark:text-foreground/50 absolute -right-[6px] -bottom-[6px] translate-x-1/2 translate-y-1/2 font-mono text-[8px] leading-none select-none">
              +
            </span>
            <span className="relative">Customize Your UI</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

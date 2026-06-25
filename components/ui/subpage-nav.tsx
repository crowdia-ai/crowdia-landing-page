"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

interface SubpageNavProps {
  theme: "dark" | "light";
  ctaLabel: string;
  ctaHref: string;
}

export function SubpageNav({ theme, ctaLabel, ctaHref }: SubpageNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const navBg = isDark
    ? "bg-zinc-950/70 border-zinc-800/60"
    : "bg-white/80 border-gray-100";
  const homeColor = isDark
    ? "text-white/60 hover:text-white"
    : "text-[#2E2E2E]/50 hover:text-[#2E2E2E]";
  const wordmarkColor = isDark ? "text-white" : "text-[#2E2E2E]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${navBg} backdrop-blur-md border-b`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Left: Home link */}
        <div className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1.5 ${homeColor} transition-colors min-h-[44px] min-w-[44px]`}
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="font-inter text-sm hidden md:inline">Home</span>
          </Link>
        </div>

        {/* Center: Logo + Wordmark */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <Image
                src="/crowdia-logo-icon-transparent.png"
                alt="CROWDIA Logo"
                fill
                className="object-contain"
                sizes="32px"
                priority
              />
            </div>
            <span
              className={`font-montserrat text-lg font-bold ${wordmarkColor} group-hover:text-magenta-500 transition-colors hidden sm:inline`}
              translate="no"
            >
              CROWDIA
            </span>
          </Link>
        </div>

        {/* Right: Scroll-triggered CTA */}
        <div className="flex items-center justify-end">
          <Link
            href={ctaHref}
            aria-hidden={!scrolled}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-magenta-500 text-white font-inter text-xs sm:text-sm font-semibold rounded-lg hover:bg-magenta-600"
            style={{
              opacity: scrolled ? 1 : 0,
              pointerEvents: scrolled ? "auto" : "none",
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            {ctaLabel}
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

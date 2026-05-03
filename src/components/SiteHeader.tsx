"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavKey = "home" | "about" | "blog" | "contact";

type SiteHeaderProps = {
  active?: NavKey;
};

function navLinkClass(key: NavKey, active?: NavKey) {
  const isActive = active === key;
  const base =
    "rounded-md px-2.5 py-1.5 text-[var(--header-fg)] transition-[background-color,box-shadow,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--header-fg)]";
  if (isActive) {
    return `${base} bg-[color-mix(in_srgb,var(--header-fg)_16%,transparent)] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-[color-mix(in_srgb,var(--header-fg)_28%,transparent)]`;
  }
  return `${base} hover:bg-[color-mix(in_srgb,var(--header-fg)_10%,transparent)] hover:underline`;
}

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="border-b bg-[var(--header-bg)] border-[var(--header-border)] px-4 py-2 flex items-center justify-between shadow-sm backdrop-blur">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[var(--header-fg)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--header-fg)]"
          aria-label="Jindu Kwentua, home"
        >
          <span className="text-[var(--color-brand-accent)]">&gt;</span>
          <span className="text-[var(--header-fg)]">Jindu</span>
          <span className="text-[var(--color-brand-accent)]"> Kwentua</span>
        </Link>
      </div>
      <nav className="flex items-center gap-1.5 text-base sm:gap-2" aria-label="Main">
        <Link href="/" className={navLinkClass("home", active)} aria-current={active === "home" ? "page" : undefined}>
          Home
        </Link>
        <Link
          href="/about"
          className={navLinkClass("about", active)}
          aria-current={active === "about" ? "page" : undefined}
        >
          About
        </Link>
        <Link href="/blog" className={navLinkClass("blog", active)} aria-current={active === "blog" ? "page" : undefined}>
          Blog
        </Link>
        <Link
          href="/contact"
          className={navLinkClass("contact", active)}
          aria-current={active === "contact" ? "page" : undefined}
        >
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}


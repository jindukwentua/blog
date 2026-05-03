"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavKey = "home" | "about" | "blog" | "contact";

type SiteHeaderProps = {
  active?: NavKey;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const linkClasses = (key: NavKey) =>
    `hover:underline text-[var(--header-fg)] ${active === key ? "font-semibold" : ""}`;

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
      <nav className="flex items-center gap-6 text-base">
        <Link href="/" className={linkClasses("home")}>
          Home
        </Link>
        <Link href="/about" className={linkClasses("about")}>
          About
        </Link>
        <Link href="/blog" className={linkClasses("blog")}>
          Blog
        </Link>
        <Link href="/contact" className={linkClasses("contact")}>
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}


"use client";

import Link from "next/link";

type NavKey = "home" | "about" | "blog";

type SiteHeaderProps = {
  active?: NavKey;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const linkClasses = (key: NavKey) =>
    `hover:underline text-white ${active === key ? "font-semibold" : ""}`;

  return (
    <header className="border-b border-gray-100 bg-[#1a237e] px-4 py-2 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white tracking-tight">
          <span className="text-[#42a5f5]">&gt;</span>
          <span className="text-white">Jindu</span>
          <span className="text-[#42a5f5]"> Kwentua</span>
        </span>
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
      </nav>
    </header>
  );
}


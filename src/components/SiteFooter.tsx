import { CONTACT_EMAIL, CONTACT_LINKEDIN_HREF } from "@/lib/contact";

type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer
      className={`border-t border-[var(--header-border)] bg-[var(--header-bg)] px-4 py-5 text-center text-[var(--header-fg)] text-sm ${className ?? ""}`}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
        <p className="m-0 text-[var(--header-fg)]/95">&copy; {new Date().getFullYear()} Jindu Kwentua. All rights reserved.</p>
        <nav
          className="flex items-center gap-1 text-[var(--header-fg)]/90"
          aria-label="Contact links"
        >
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded px-2 py-1 font-medium underline decoration-[var(--header-fg)]/40 underline-offset-2 hover:bg-[var(--header-fg)]/10 hover:decoration-[var(--header-fg)]"
          >
            Email
          </a>
          <span className="text-[var(--header-fg)]/35" aria-hidden>
            ·
          </span>
          <a
            href={CONTACT_LINKEDIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded px-2 py-1 font-medium underline decoration-[var(--header-fg)]/40 underline-offset-2 hover:bg-[var(--header-fg)]/10 hover:decoration-[var(--header-fg)]"
          >
            LinkedIn
          </a>
          <span className="text-[var(--header-fg)]/35" aria-hidden>
            ·
          </span>
          <a
            href="/contact"
            className="rounded px-2 py-1 font-medium underline decoration-[var(--header-fg)]/40 underline-offset-2 hover:bg-[var(--header-fg)]/10 hover:decoration-[var(--header-fg)]"
          >
            Contact page
          </a>
        </nav>
      </div>
    </footer>
  );
}

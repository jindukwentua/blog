import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/Button";
import { CONTACT_EMAIL, CONTACT_LINKEDIN_HREF, CONTACT_TWITTER_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact — Jindu Kwentua",
  description: "Email, LinkedIn, and Twitter for Jindu Kwentua.",
};

const cardShell: CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
  borderColor: "var(--border)",
  boxShadow: "0 10px 30px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
};

const channelRow: CSSProperties = {
  borderColor: "var(--accent-border)",
  color: "var(--accent)",
  background: "var(--surface-1)",
  boxShadow: "0 10px 22px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
};

const channels = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jindukwentua",
    href: CONTACT_LINKEDIN_HREF,
    external: true,
  },
  {
    label: "X (Twitter)",
    value: "@jxndu",
    href: CONTACT_TWITTER_HREF,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <SiteHeader active="contact" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 text-[var(--foreground)] sm:px-6">
        <section
          className="overflow-hidden rounded-xl border shadow-md"
          style={cardShell}
          aria-labelledby="contact-heading"
        >
          <div className="p-8 md:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--muted-2)]">Contact</p>
            <div className="mt-3 max-w-[3rem] border-t-2" style={{ borderColor: "var(--accent)" }} aria-hidden />
            <h1
              id="contact-heading"
              className="mt-6 text-2xl font-bold tracking-tight text-[var(--color-brand)] sm:text-3xl"
            >
              Get in touch
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
              Pick a channel; I respond to email first.
            </p>

            <ul className="mt-8 space-y-3">
              {channels.map(({ label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left shadow-sm transition will-change-transform hover:-translate-y-[1px]"
                    style={channelRow}
                  >
                    <span className="min-w-0">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--muted-2)]">
                        {label}
                      </span>
                      <span className="mt-1 block break-all text-[15px] font-semibold tracking-tight text-[var(--foreground)] group-hover:text-[var(--color-brand)] sm:break-normal">
                        {value}
                      </span>
                    </span>
                    <span
                      className="shrink-0 text-lg text-[var(--muted-2)] transition group-hover:text-[var(--accent)]"
                      aria-hidden
                    >
                      {external ? "↗" : "→"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-8">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary">
                Compose email
              </Button>
              <Button href={CONTACT_LINKEDIN_HREF} variant="secondary" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter className="mt-8" />
    </div>
  );
}

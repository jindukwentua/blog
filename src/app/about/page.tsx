"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL, CONTACT_LINKEDIN_HREF, CONTACT_TWITTER_HREF } from "@/lib/contact";

const roles = [
  "Data Scientist",
  "Data Engineer",
  "Analytics Engineer",
  "Cloud Analytics Specialist",
  "ML Engineer",
];

const skillPills = [
  "Scripting & ETL",
  "Data engineering",
  "Feature engineering",
  "Machine learning",
  "Python",
  "SQL",
  "DuckDB",
  "R",
  "Airflow",
  "Spark",
  "AWS",
  "GCP",
  "Tableau",
  "Power BI",
  "Metabase",
  "Git",
  "GitHub",
  "GitLab",
];

/** Two-column technical skills (labels + comma-separated tools), matching resume-style layout */
const technicalSkillGroups: { category: string; items: string }[] = [
  {
    category: "Data Engineering",
    items:
      "S3, Apache Spark, Databricks, Apache Airflow, dbt, Apache Kafka, Jupyter Notebooks and Presto",
  },
  {
    category: "Analytics & Business Intelligence",
    items:
      "Microsoft SQL Server Integration (SSIS) / Analysis (SSAS) / Reporting Services (SSRS), Microsoft Master Data Services (MDS), Microsoft Excel Pivot Table, Power BI, Apache Superset, Tableau",
  },
  {
    category: "Databases",
    items:
      "Microsoft SQL Server / Azure, Oracle, MySQL, Postgres, SQLite, Redis, Apache Druid, DuckDB",
  },
  {
    category: "Development",
    items:
      "Microsoft SQL Server Management Studio, Git, JIRA, Visual Studio Code, and Notion.",
  },
  {
    category: "Programming",
    items: "Python, SQL, T-SQL, PL/SQL, Unix Shell Script, HTML, and R",
  },
  {
    category: "Other",
    items:
      "Kubernetes, Docker, Microsoft Azure/AWS/GCP Cloud Platform, Microsoft Office Suite, Excel (BI Add-Ins), Enterprise Architect, Trello, GitLab, GitHub, Figma",
  },
];

const experiences = [
  {
    dates: "Sep 2024 – Present",
    title: "Data Engineer",
    org: "Sahara Group (Asharami Innovations)",
    description:
      "Architected and deployed Energy Advance, a product and decision system that analyzes customer payment behavior to generate credit limits and risk scores. Built scalable ETL pipelines and analytics to power customer insights, retention, and growth initiatives.",
  },
  {
    dates: "Jun 2023 – Sep 2024",
    title: "Senior Data Scientist",
    org: "Ecobank Nigeria",
    description:
      "Led customer lifetime value (CLV) modeling, segmentation, and campaign analytics across multiple banking products, enabling data-driven growth and targeting strategies.",
  },
  {
    dates: "Sep 2020 – Jun 2023",
    title: "Data Analyst",
    org: "OnePipe",
    description:
      "Owned customer analytics, reporting, and dashboarding for fintech partners, automating recurring reports where it mattered and supporting teams across the business with consistent, trustworthy data.",
  },
];

const educationItems = [
  {
    label: "Education",
    badge: "B.Sc",
    title: "Industrial Mathematics",
    subtitle: "University of Lagos",
    detail: "Undergraduate degree focused on applied mathematics and analytics foundations.",
  },
  {
    label: "Education",
    badge: "Diploma",
    title: "Diploma in Information Technology",
    subtitle: "Professional qualification",
    detail: "Formal training in core IT concepts and systems.",
  },
];

function TechnicalSkillsGrid() {
  return (
    <div className="space-y-5">
      {technicalSkillGroups.map(({ category, items }) => (
        <div
          key={category}
          className="grid grid-cols-1 gap-2 border-b pb-5 last:border-0 last:pb-0 sm:grid-cols-[minmax(8.5rem,11rem)_minmax(0,1fr)] sm:gap-x-8 sm:items-start"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="text-sm font-bold leading-snug sm:pt-0.5"
            style={{ color: "var(--accent)" }}
          >
            {category}:
          </div>
          <p className="text-sm leading-relaxed text-[var(--muted)]">{items}</p>
        </div>
      ))}
    </div>
  );
}

function AboutSectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="mb-8 rounded-xl p-8 md:p-10 shadow-md border"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        borderColor: "var(--border)",
        boxShadow:
          "0 10px 30px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
      aria-labelledby={id}
    >
      <h2
        id={id}
        className="text-lg font-bold tracking-tight"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </h2>
      <div className="mt-3 border-t-2" style={{ borderColor: "var(--accent)" }} aria-hidden />
      <div className="mt-6 text-[15px] leading-relaxed text-[var(--foreground)]">{children}</div>
    </section>
  );
}

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (typed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setTyped(roles[roleIndex].slice(0, typed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setTyped("");
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 800);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, typing, roleIndex]);

  return (
    <div className="about-page min-h-screen bg-[var(--background)] flex flex-col">
      <SiteHeader active="about" />

      <main className="mx-auto max-w-3xl flex-1 px-4 py-8 text-[var(--foreground)] sm:px-6">
        <section
          className="mb-8 overflow-hidden rounded-xl border shadow-md"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            borderColor: "var(--border)",
            boxShadow:
              "0 10px 30px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          aria-labelledby="about-intro-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
            <figure className="relative aspect-[4/3] w-full bg-[var(--surface-2)] sm:aspect-[3/2] lg:aspect-auto lg:h-full lg:min-h-[18rem]">
              <Image
                src="/jindu-portrait.png"
                alt="Jindu Kwentua, data scientist and engineer, in business attire at an office desk."
                fill
                priority
                className="object-cover object-[center_24%]"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </figure>

            <div className="flex flex-col justify-center border-t border-[var(--border)] p-8 md:p-10 lg:border-l lg:border-t-0">
              <p
                id="about-intro-heading"
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--muted-2)]"
              >
                Introduction
              </p>
              <div className="mt-3 max-w-[3rem] border-t-2" style={{ borderColor: "var(--accent)" }} aria-hidden />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed">
                <h1 className="text-2xl font-bold tracking-tight text-[var(--color-brand)] sm:text-3xl">
                  Jindu Kwentua
                </h1>
                <p>
                  Hi, I&apos;m <span className="font-semibold">Jindu Kwentua</span>. I am a&nbsp;
                  <span className="font-semibold text-[var(--color-brand)] transition-all duration-300 min-w-[11rem] inline-block sm:min-w-[12rem]">
                    {typed}
                    <span className="animate-pulse">|</span>
                  </span>
                </p>
                <p className="text-[var(--muted)]">
                  I help organizations turn data into measurable business value responsibly and at scale.
                  I&apos;ve worked across fintech, banking, and energy, delivering predictive models, customer
                  insights, and production data pipelines. My focus is simple: turn data into
                  business value.
                </p>
                <p className="text-[var(--muted)]">
                  <span className="font-semibold text-[var(--foreground)]">Entrepreneur</span>
                  <span>
                    {" "}
                    — Beyond my core roles, I enjoy building data-driven products and ventures, applying the
                    same principles I use in enterprise settings to create scalable solutions from the
                    ground up.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div>
          <AboutSectionCard id="key-skills-heading" title="Key Skills">
            <p className="mb-4 text-[var(--muted)]">
              Core tools and domains I work in day to day, from pipelines to models to dashboards.
            </p>
            <div className="flex flex-wrap gap-2">
              {skillPills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold shadow-sm transition hover:-translate-y-[1px]"
                  style={{
                    borderColor: "var(--accent-border)",
                    color: "var(--accent)",
                    background: "var(--surface-1)",
                    boxShadow:
                      "0 10px 22px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </AboutSectionCard>

          <AboutSectionCard id="technical-skills-heading" title="Technical Skills">
            <TechnicalSkillsGrid />
          </AboutSectionCard>

          <AboutSectionCard id="experience-heading" title="Experience">
            <div className="relative pl-1">
              <div
                className="absolute left-[11px] top-2 bottom-2 w-0.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden
              />
              <ul className="space-y-10">
                {experiences.map((job) => (
                  <li key={`${job.org}-${job.dates}`} className="relative pl-8">
                    <span
                      className="absolute left-0 top-0 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      {job.dates}
                    </span>
                    <div className="pt-9">
                      <h3 className="text-base font-bold" style={{ color: "var(--accent)" }}>
                        {job.title}
                      </h3>
                      <p className="text-sm italic text-[var(--muted-2)] mt-0.5">{job.org}</p>
                      <p className="mt-3 text-[var(--muted)]">{job.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AboutSectionCard>

          <AboutSectionCard id="education-heading" title="Education, Training, & Honors">
            <div className="relative pl-1">
              <div
                className="absolute left-[11px] top-2 bottom-2 w-0.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden
              />
              <ul className="space-y-10">
                {educationItems.map((item) => (
                  <li key={item.title} className="relative pl-8">
                    <p className="text-xs font-bold uppercase tracking-wide text-[var(--muted)] mb-1">
                      {item.label}
                    </p>
                    <span
                      className="absolute left-0 top-7 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      {item.badge}
                    </span>
                    <div className="pt-10">
                      <h3 className="text-base font-bold" style={{ color: "var(--accent)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm italic text-[var(--muted-2)] mt-0.5">{item.subtitle}</p>
                      <p className="mt-2 text-[var(--muted)]">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AboutSectionCard>

          <section
            className="about-bottom-panel mb-8 scroll-mt-24 overflow-hidden rounded-2xl border shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)]"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(145deg, var(--surface-1) 0%, color-mix(in srgb, var(--surface-2) 88%, var(--surface-1)) 48%, var(--surface-1) 100%)",
              boxShadow:
                "0 24px 60px -28px rgba(15, 23, 42, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.55)",
            }}
            aria-label="Personal interests and contact"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_17.5rem] xl:grid-cols-[minmax(0,1fr)_20rem]">
              <aside
                className="border-b border-[var(--border)] p-8 md:p-10 lg:border-b-0 lg:border-r"
                aria-labelledby="personal-interests-heading"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 hidden h-[4.5rem] w-1 shrink-0 rounded-full sm:block"
                    style={{
                      background: "linear-gradient(180deg, var(--color-brand), var(--color-brand-accent))",
                    }}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <h2
                      id="personal-interests-heading"
                      className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl"
                    >
                      Personal Interests
                    </h2>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
                      Outside the desk
                    </p>
                    <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
                      <p className="text-[var(--foreground)]">
                        As a husband and a family person, I try to use my skills to have a positive impact
                        and add value on the people and communities around me.
                      </p>
                      <p>
                        I enjoy staying active by exercising; playing football, running, and following
                        sports, and I value time with my family and friends. You can read more of my
                        thinking on{" "}
                        <Link
                          href="https://www.jindukwentua.com/blog"
                          className="font-semibold text-[var(--color-brand)] underline-offset-2 hover:underline"
                        >
                          the blog
                        </Link>
                        , connect on{" "}
                        <a
                          href={CONTACT_LINKEDIN_HREF}
                          className="font-semibold text-[var(--color-brand)] underline-offset-2 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                        , or reach out by{" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="font-semibold text-[var(--color-brand)] underline-offset-2 hover:underline"
                        >
                          email
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <div
                id="contact"
                role="region"
                aria-labelledby="contact-heading"
                className="relative flex flex-col gap-5 p-8 md:p-10"
                style={{
                  background:
                    "linear-gradient(160deg, color-mix(in srgb, var(--surface-2) 78%, transparent), color-mix(in srgb, var(--surface-1) 35%, var(--surface-2)))",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-y-8 left-0 hidden w-px lg:block"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, color-mix(in srgb, var(--color-brand-accent) 45%, transparent), transparent)",
                  }}
                  aria-hidden
                />
                <h2
                  id="contact-heading"
                  className="text-lg font-bold tracking-tight text-[var(--foreground)] sm:text-xl"
                >
                  Connect
                </h2>
                <nav aria-label="Social and email">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="group flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] px-3.5 py-3 shadow-sm transition hover:border-[var(--color-brand-accent)]/45 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-2)]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--surface-2)_90%,transparent)] text-[#EA4335]">
                          <svg className="h-[1.15rem] w-[1.15rem]" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M4 6h16v12H4z"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinejoin="round"
                            />
                            <path
                              d="m4 8 8 6 8-6"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="min-w-0 flex-1 text-left">
                          <span className="block text-sm font-semibold text-[var(--foreground)]">Email</span>
                          <span className="mt-0.5 block truncate text-xs text-[var(--muted-2)]">{CONTACT_EMAIL}</span>
                        </span>
                        <span className="shrink-0 text-sm text-[var(--muted-2)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" aria-hidden>
                          →
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={CONTACT_LINKEDIN_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] px-3.5 py-3 shadow-sm transition hover:border-[var(--color-brand-accent)]/45 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-2)]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--surface-2)_90%,transparent)] text-[#0A66C2]">
                          <svg
                            className="h-[1.15rem] w-[1.15rem]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.65"
                            aria-hidden
                          >
                            <path
                              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="6" cy="6" r="2.25" />
                            <path d="M6 10v8" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span className="min-w-0 flex-1 text-left">
                          <span className="block text-sm font-semibold text-[var(--foreground)]">LinkedIn</span>
                          <span className="mt-0.5 block truncate text-xs text-[var(--muted-2)]">in/jindukwentua</span>
                        </span>
                        <span className="shrink-0 text-sm text-[var(--muted-2)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" aria-hidden>
                          ↗
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={CONTACT_TWITTER_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] px-3.5 py-3 shadow-sm transition hover:border-[var(--color-brand-accent)]/45 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-2)]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--surface-2)_90%,transparent)] text-[var(--foreground)]">
                          <svg className="h-[1rem] w-[1rem]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </span>
                        <span className="min-w-0 flex-1 text-left">
                          <span className="block text-sm font-semibold text-[var(--foreground)]">X</span>
                          <span className="mt-0.5 block truncate text-xs text-[var(--muted-2)]">@jxndu</span>
                        </span>
                        <span className="shrink-0 text-sm text-[var(--muted-2)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" aria-hidden>
                          ↗
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-accent)] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-2)]"
                >
                  Contact page
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter className="mt-8" />
    </div>
  );
}

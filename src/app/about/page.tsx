"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";

/** Matches header/footer and primary links site-wide */
const ACCENT = "#1a237e";

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
          className="grid grid-cols-1 gap-2 border-b border-gray-200/90 pb-5 last:border-0 last:pb-0 sm:grid-cols-[minmax(8.5rem,11rem)_minmax(0,1fr)] sm:gap-x-8 sm:items-start"
        >
          <div
            className="text-sm font-bold leading-snug sm:pt-0.5"
            style={{ color: ACCENT }}
          >
            {category}:
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{items}</p>
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
      className="mb-8 rounded-xl bg-[#f5f5f5] p-8 md:p-10 shadow-md"
      aria-labelledby={id}
    >
      <h2
        id={id}
        className="text-lg font-bold tracking-tight"
        style={{ color: ACCENT }}
      >
        {title}
      </h2>
      <div className="mt-3 border-t-2" style={{ borderColor: ACCENT }} aria-hidden />
      <div className="mt-6 text-[15px] leading-relaxed text-gray-800">{children}</div>
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
    <div className="about-page min-h-screen bg-white flex flex-col font-sans">
      <SiteHeader active="about" />

      <main className="max-w-2xl mx-auto py-8 px-4 flex-1">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4 flex items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-md bg-white">
            <Image
              src="/profile.jpg"
              alt="Jindu Kwentua"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="max-w-xl mx-auto text-gray-800">
          <h1 className="text-2xl font-bold text-[var(--color-brand)] mb-2">Jindu Kwentua</h1>
          <p className="mb-4 text-[15px] leading-relaxed">
            Hi, I'm <span className="font-semibold">Jindu Kwentua</span>. I am a&nbsp;
            <span className="font-semibold text-[var(--color-brand)] transition-all duration-300 min-w-[180px] inline-block">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <p className="mb-8 text-[15px] leading-relaxed">
            I help organizations turn data into measurable business value responsibly and at scale.
            I’ve worked across fintech, banking, and energy, delivering predictive models, customer
            insights, and production-grade data pipelines. My focus is simple: turn data into
            business value.
          </p>

          <AboutSectionCard id="key-skills-heading" title="Key Skills">
            <p className="mb-4 text-gray-700">
              Core tools and domains I work in day to day — from pipelines to models to dashboards.
            </p>
            <div className="flex flex-wrap gap-2">
              {skillPills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium bg-white/80 shadow-sm"
                  style={{ borderColor: ACCENT, color: ACCENT }}
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
                style={{ backgroundColor: ACCENT }}
                aria-hidden
              />
              <ul className="space-y-10">
                {experiences.map((job) => (
                  <li key={`${job.org}-${job.dates}`} className="relative pl-8">
                    <span
                      className="absolute left-0 top-0 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {job.dates}
                    </span>
                    <div className="pt-9">
                      <h3 className="text-base font-bold" style={{ color: ACCENT }}>
                        {job.title}
                      </h3>
                      <p className="text-sm italic text-gray-600 mt-0.5">{job.org}</p>
                      <p className="mt-3 text-gray-800">{job.description}</p>
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
                style={{ backgroundColor: ACCENT }}
                aria-hidden
              />
              <ul className="space-y-10">
                {educationItems.map((item) => (
                  <li key={item.title} className="relative pl-8">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-1">
                      {item.label}
                    </p>
                    <span
                      className="absolute left-0 top-7 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {item.badge}
                    </span>
                    <div className="pt-10">
                      <h3 className="text-base font-bold" style={{ color: ACCENT }}>
                        {item.title}
                      </h3>
                      <p className="text-sm italic text-gray-600 mt-0.5">{item.subtitle}</p>
                      <p className="mt-2 text-gray-700">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AboutSectionCard>

          <aside
            className="mb-8 rounded-xl bg-[#f5f5f5] p-8 md:p-10 shadow-md"
            aria-labelledby="personal-interests-heading"
          >
            <h2
              id="personal-interests-heading"
              className="text-lg font-bold tracking-tight"
              style={{ color: ACCENT }}
            >
              Personal Interests
            </h2>
            <div className="mt-3 border-t-2" style={{ borderColor: ACCENT }} aria-hidden />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-gray-800">
              <p>
                As a husband and a family person, I try to use my skills to have a positive impact
                and add value on the people and communities around me.
              </p>
              <p>
                I enjoy staying active by exercising; playing football primarily and following
                sports, and I value time with my family and friends. You can read more of my
                thinking on{" "}
                <Link
                  href="https://www.jindukwentua.com/blog"
                  className="font-semibold underline-offset-2 hover:underline"
                  style={{ color: ACCENT }}
                >
                  the blog
                </Link>
                , connect on{" "}
                <a
                  href="https://www.linkedin.com/in/jindukwentua/"
                  className="font-semibold underline-offset-2 hover:underline"
                  style={{ color: ACCENT }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                , or reach out by{" "}
                <a
                  href="mailto:kwentuajindu@gmail.com"
                  className="font-semibold underline-offset-2 hover:underline"
                  style={{ color: ACCENT }}
                >
                  email
                </a>
                .
              </p>
            </div>
          </aside>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[var(--color-brand)] mb-2">Contact</h2>
            <div className="flex gap-6 items-center ml-2 mt-2">
              <a href="mailto:kwentuajindu@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#EA4335" />
                  <path d="M6 8l6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="6" y="8" width="12" height="8" rx="2" fill="#fff" />
                  <path d="M6 8l6 5 6-5" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jindukwentua/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2" />
                  <path d="M7.5 8.5v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="7.5" cy="6.5" r="1" fill="#fff" />
                  <path d="M10.5 11.5v4h2v-2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2h2v-4c0-1.1-.9-2-2-2s-2 .9-2 2z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://twitter.com/jxndu" title="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#1DA1F2" />
                  <path d="M19 7.5a6.5 6.5 0 01-1.89.52A3.28 3.28 0 0018.5 6a6.56 6.56 0 01-2.08.8A3.28 3.28 0 0012 9.5c0 .26.03.52.08.76A9.32 9.32 0 015 7.1a3.28 3.28 0 001.01 4.37c-.28-.01-.54-.08-.77-.2v.02c0 1.54 1.1 2.83 2.57 3.12-.27.07-.56.1-.85.04.24.75.93 1.3 1.75 1.32A6.6 6.6 0 015 17.5c.41 0 .81-.02 1.2-.07A9.29 9.29 0 0012 19c5.52 0 8.54-4.57 8.54-8.54 0-.13 0-.26-.01-.39A6.1 6.1 0 0021 8.5a6.36 6.36 0 01-1.82.5z" fill="#fff" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-100 bg-[var(--color-brand)] text-white text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Jindu Kwentua. All rights reserved.
      </footer>
    </div>
  );
}

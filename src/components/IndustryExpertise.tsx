function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
      <path d="M6 12h4M14 12h4M10 12h4M10 8h4M10 16h4" />
      <path d="M4 22h16" />
    </svg>
  );
}

function IconWorkflow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="2" y="7" width="7" height="10" rx="1" />
      <rect x="15" y="3" width="7" height="7" rx="1" />
      <rect x="15" y="14" width="7" height="7" rx="1" />
      <path d="M9 12h3M12 12v-5h3M12 12v5h3" />
    </svg>
  );
}

function IconChartLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 3 3 5-7" />
    </svg>
  );
}

function IconCloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

const items = [
  {
    title: "Banking & Finance, Fintech & Energy",
    description:
      "7+ years across banks, payment platforms, and energy; from CLV and segmentation to high-volume transactions and lending analytics.",
    Icon: IconBuilding,
  },
  {
    title: "Data Engineering at scale",
    description:
      "End-to-end ETL and orchestration, warehousing, reconciliation, and SQL tuning for reliable dashboards and production pipelines.",
    Icon: IconWorkflow,
  },
  {
    title: "ML, Stats & Experimentation",
    description:
      "Predictive models, clustering, forecasting, RFM, hypothesis testing, and A/B tests aligned to retention, campaigns, and revenue.",
    Icon: IconChartLine,
  },
  {
    title: "Cloud & Modern Data Stack",
    description:
      "AWS, Azure, GCP, DuckDB, Airflow, Spark, and CI/CD, with emphasis on performance, data quality, monitoring, and privacy.",
    Icon: IconCloud,
  },
] as const;

export function IndustryExpertise() {
  return (
    <section
      className="industry-expertise relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28"
      aria-labelledby="industry-expertise-heading"
    >
      <div className="industry-expertise__glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2
          id="industry-expertise-heading"
          className="text-center text-sm font-bold uppercase tracking-[0.2em] sm:text-base"
        >
          Industry expertise
        </h2>
        <div className="industry-expertise-intro mt-6 sm:mt-7">
          <dl className="industry-expertise-meta">
            <div>
              <dt>Background</dt>
              <dd>Industrial Mathematics & Economics</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>7+ years · Data science, analytics &amp; data engineering</dd>
            </div>
            <div>
              <dt>Sectors</dt>
              <dd>Fintech, Banking & Finance, energy</dd>
            </div>
          </dl>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-7">
          {items.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="industry-expertise-card flex flex-col items-center rounded-2xl px-6 py-9 text-center sm:rounded-3xl sm:px-7 sm:py-10"
            >
              <div className="industry-expertise-icon-well flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-snug">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

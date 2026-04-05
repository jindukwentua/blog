
import fs from "fs";
import path from "path";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/Button";

type PostMeta = {
  date: string;
  title: string;
  url: string;
};

function formatDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

const postsDirectory = path.join(process.cwd(), "src/app/blog");

async function getRecentPosts(limit = 3): Promise<PostMeta[]> {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const mod = await import(`@/app/blog/${slug}.mdx`);
      const { metadata } = mod as { metadata?: { title?: string; date?: string } };

      return {
        date: metadata?.date ?? "",
        title: metadata?.title ?? slug,
        url: `/blog/${slug}`,
      };
    })
  );

  return posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export default async function Home() {
  const recentPosts = await getRecentPosts();
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <SiteHeader active="home" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-[42%_58%] md:min-h-[calc(100vh-44px)]">
          {/* Left image column */}
          <aside className="relative min-h-[360px] bg-black md:sticky md:top-0 md:min-h-[calc(100vh-44px)]">
            <Image
              src="/f636b943-b928-46a6-bb06-6eddd572234c_2048x1280.jpg"
              alt="Nighttime city skyline with reflections on water."
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(900px 500px at 40% 30%, rgba(26,35,126,0.25) 0%, rgba(2,6,23,0.0) 55%), linear-gradient(180deg, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.35) 55%, rgba(2,6,23,0.85) 100%)",
              }}
              aria-hidden
            />
          </aside>

          {/* Right content column */}
          <section className="home-page px-4 py-10 sm:px-8 md:px-12">
            <div className="max-w-3xl">
              <div className="mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-brand)]">
                  Hi, I&apos;m Jindu Kwentua.
                </h1>
                  <p className="text-[var(--muted)] mt-4 leading-relaxed">
                  I am an enterpreneur, consultant and data professional. I work at the intersection of technology, data analytics, data science, and data engineering, helping businesses turn data into measurable business value.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button href="/blog" variant="primary">
                    Read my blog
                  </Button>
                  <Button href="/about" variant="secondary">
                    About me
                  </Button>
                </div>
              </div>

              <section>
                <h2 className="text-xs font-semibold tracking-[0.25em] text-[var(--muted-2)] uppercase mb-4">
                  Recent writing
                </h2>
                {recentPosts.length === 0 && (
                  <p className="text-[var(--muted-2)]">New posts coming soon.</p>
                )}
                <ul>
                  {recentPosts.map((post) => (
                    <li
                      key={post.url}
                      className="py-5 border-b last:border-0"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <a
                        href={post.url}
                        className="text-[var(--color-brand)] hover:underline text-lg font-semibold hover:text-[var(--color-brand-hover)]"
                      >
                        {post.title}
                      </a>
                      {post.date && (
                        <div className="text-[var(--muted-2)] text-sm mt-2">{formatDate(post.date)}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-[var(--header-border)] bg-[var(--header-bg)] text-[var(--header-fg)] text-center py-4">
        &copy; {new Date().getFullYear()} Jindu Kwentua. All rights reserved.
      </footer>
    </div>
  );
}

import fs from "fs";
import path from "path";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const postsDirectory = path.join(process.cwd(), "src/app/blog");

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

async function getAllPosts(): Promise<PostMeta[]> {
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

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogList() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <SiteHeader active="blog" />

      <main className="max-w-3xl mx-auto py-8 px-4 flex-1">
        <section className="mb-6">
          <h1 className="text-2xl font-bold mb-2 text-[var(--color-brand)]">Blog</h1>
          <p className="text-[var(--muted)]">
            All articles in one place &mdash; a mix of data, ML, and engineering topics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-brand)]">All articles</h2>
          {posts.length === 0 && <p>No blog posts found.</p>}
          <ul>
            {posts.map((post) => (
              <li key={`${post.date}-${post.title}`} className="mb-4">
                {post.url.startsWith("/blog/") ? (
                  <Link
                    href={post.url}
                    className="text-[var(--color-brand)] hover:underline text-base font-semibold hover:text-[var(--color-brand-hover)]"
                  >
                    {post.title}
                  </Link>
                ) : (
                  <span className="text-gray-700 text-base font-semibold">
                    {post.title}
                  </span>
                )}
                {post.date && (
                  <div className="text-[var(--muted-2)] text-sm mt-1">{formatDate(post.date)}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="border-t border-[var(--header-border)] bg-[var(--header-bg)] text-[var(--header-fg)] text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Jindu Kwentua. All rights reserved.
      </footer>
    </div>
  );
}

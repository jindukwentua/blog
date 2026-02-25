import fs from "fs";
import path from "path";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "src/app/blog");

type PostMeta = {
  date: string;
  title: string;
  url: string;
};

async function getMdxPosts(): Promise<PostMeta[]> {
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

  return posts;
}

const staticPosts: PostMeta[] = [
  {
    date: "2025-05-18",
    title: "Putting Scaffolding Around Vibe Coding to Build More Complex Apps",
    url: "#",
  },
  {
    date: "2025-03-16",
    title: "Why DuckDB is my first choice for data processing",
    url: "#",
  },
  {
    date: "2025-01-01",
    title: "AI probably won't replace me in 2025",
    url: "#",
  },
  {
    date: "2024-12-08",
    title: "The emerging impact of LLMs on my productivity",
    url: "#",
  },
  {
    date: "2023-10-19",
    title: "Thoughts and questions about the short term impact of LLMs on knowledge workers",
    url: "#",
  },
  {
    date: "2023-03-09",
    title: "Splink and the Open Source Dividend",
    url: "#",
  },
  {
    date: "2023-01-30",
    title: "SQL should be the default choice for data transformation logic",
    url: "#",
  },
  {
    date: "2023-01-09",
    title: "Why parquet files are my preferred API for bulk open data",
    url: "#",
  },
  {
    date: "2022-08-05",
    title: "Splink 3: Fast, accurate and scalable linkage in Python",
    url: "#",
  },
  {
    date: "2021-10-29",
    title: "The Thorniest Problem of Building an Analytical Platform",
    url: "#",
  },
  {
    date: "2020-11-17",
    title: "The Downfall of Command and Control Data Leadership",
    url: "#",
  },
  {
    date: "2020-12-22",
    title: "Demystifying Apache Arrow",
    url: "#",
  },
];

async function getAllPosts(): Promise<PostMeta[]> {
  const mdxPosts = await getMdxPosts();
  const all = [...mdxPosts, ...staticPosts];

  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogList() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <header className="border-b border-gray-100 bg-[#1a237e] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            <span className="text-[#42a5f5]">&gt;</span>
            <span className="text-white">Jindu</span>
            <span className="text-[#42a5f5]"> Kwentua</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-base">
          <a href="/" className="hover:underline text-white">
            Home
          </a>
          <a href="/about" className="hover:underline text-white">
            About
          </a>
          <a href="/blog" className="hover:underline text-white font-semibold">
            Blog
          </a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto py-8 px-4 flex-1">
        <section className="mb-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-700">Blog</h1>
          <p className="text-gray-600">
            All articles in one place &mdash; a mix of data, ML, and engineering topics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">All articles</h2>
          {posts.length === 0 && <p>No blog posts found.</p>}
          <ul>
            {posts.map((post) => (
              <li key={`${post.date}-${post.title}`} className="mb-2 flex gap-4">
                <span className="text-gray-400 w-28 inline-block">{post.date}</span>
                {post.url.startsWith("/blog/") ? (
                  <Link href={post.url} className="text-[#1a237e] hover:underline">
                    {post.title}
                  </Link>
                ) : (
                  <span className="text-gray-500">{post.title}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="border-t border-gray-100 bg-[#1a237e] text-white text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Jindu Kwentua. All rights reserved.
      </footer>
    </div>
  );
}

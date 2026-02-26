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
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <SiteHeader active="blog" />

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

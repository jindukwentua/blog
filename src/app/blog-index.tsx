import fs from "fs";
import path from "path";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "src/app/blog");

type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

async function getPosts(): Promise<PostMeta[]> {
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
        slug,
        title: metadata?.title ?? slug,
        date: metadata?.date ?? "",
      };
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogList() {
  const posts = await getPosts();

  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.length === 0 && <li>No blog posts found.</li>}
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-700 hover:underline text-lg font-semibold"
            >
              {post.title}
            </Link>
            {post.date && (
              <div className="text-gray-500 text-sm">{post.date}</div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'src/app/blog');

type PostMeta = {
  slug: string;
  title?: string;
  date?: string;
};

function getPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'));
  return fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents) as { data: Record<string, unknown> };
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        title: typeof data.title === 'string' ? data.title : undefined,
        date: typeof data.date === 'string' ? data.date : undefined,
      };
    })
    .sort((a, b) => ((a.date ?? '') < (b.date ?? '') ? 1 : -1));
}

export default function BlogList() {
  const posts = getPosts();
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
              {post.title ?? post.slug}
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

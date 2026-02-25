
import fs from "fs";
import path from "path";

type PostMeta = {
  date: string;
  title: string;
  url: string;
};

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
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100 bg-[#1a237e] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            <span className="text-[#42a5f5]">&gt;</span>
            <span className="text-white">Jindu</span>
            <span className="text-[#42a5f5]"> Kwentua</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-base">
          <a href="/" className="hover:underline text-white">Home</a>
          <a href="/about" className="hover:underline text-white">About</a>
          <a href="/blog" className="hover:underline text-white">Blog</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto py-8 px-4 flex-1">
        {/* Hero */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-2 text-[#1a237e]">
            Hi, I&apos;m Jindu Kwentua.
          </h1>
          <p className="text-gray-700 mb-4">
            I work at the intersection of data science, ML, and analytics
            engineering &mdash; helping teams turn messy data into reliable,
            production pipelines and useful models.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/blog"
              className="px-4 py-2 rounded-md bg-[#1a237e] text-white font-semibold hover:bg-[#283593]"
            >
              Read the blog
            </a>
            <a
              href="/about"
              className="px-4 py-2 rounded-md border border-gray-300 text-[#1a237e] font-semibold hover:bg-gray-50"
            >
              More about me
            </a>
          </div>
        </section>

        {/* Recent posts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Recent writing</h2>
          {recentPosts.length === 0 && (
            <p className="text-gray-500">New posts coming soon.</p>
          )}
          <ul>
            {recentPosts.map((post) => (
              <li key={post.url} className="mb-2 flex gap-4">
                <span className="text-gray-400 w-28 inline-block">{post.date}</span>
                <a href={post.url} className="text-[#1a237e] hover:underline">
                  {post.title}
                </a>
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

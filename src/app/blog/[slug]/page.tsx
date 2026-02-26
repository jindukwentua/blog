import fs from "fs";
import path from "path";
import type { MDXComponents } from "mdx/types";
import { SiteHeader } from "@/components/SiteHeader";

const postsDirectory = path.join(process.cwd(), "src/app/blog");

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"));

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const mod = await import(`@/app/blog/${slug}.mdx`);

  const Post = mod.default as (props: { components?: MDXComponents }) => JSX.Element;
  const { metadata } = mod as { metadata?: { title?: string; date?: string } };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <SiteHeader active="blog" />
      <main className="max-w-3xl mx-auto py-8 px-4 flex-1">
        {metadata?.title && (
          <h1 className="text-2xl font-bold mb-2">{metadata.title}</h1>
        )}
        {metadata?.date && (
          <div className="text-gray-500 text-sm mb-6">{metadata.date}</div>
        )}
        <article className="bg-white text-black rounded-lg border border-gray-200 shadow-sm p-8 prose">
          <Post />
        </article>
      </main>
      <footer className="border-t border-gray-100 bg-[#1a237e] text-white text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Jindu Kwentua. All rights reserved.
      </footer>
    </div>
  );
}


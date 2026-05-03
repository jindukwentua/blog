import fs from "fs";
import path from "path";
import type { ReactElement } from "react";
import type { MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  const mdxFile = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(mdxFile)) {
    notFound();
  }
  const mod = await import(`@/app/blog/${slug}.mdx`);

  const Post = mod.default as (props: { components?: MDXComponents }) => ReactElement;
  const { metadata } = mod as { metadata?: { title?: string; date?: string } };

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <SiteHeader active="blog" />
      <main className="max-w-3xl mx-auto py-8 px-4 flex-1">
        {metadata?.title && (
          <h1 className="text-2xl font-bold mb-2 text-[var(--color-brand)]">{metadata.title}</h1>
        )}
        {metadata?.date && (
          <div className="text-[var(--muted-2)] text-sm mb-6">{metadata.date}</div>
        )}
        <article className="rounded-lg border border-[var(--border)] shadow-sm p-8 prose bg-[var(--card)] text-[var(--foreground)]">
          <Post />
        </article>
      </main>
      <SiteFooter className="mt-8" />
    </div>
  );
}


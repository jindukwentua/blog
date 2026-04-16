import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const postsDirectory = path.join(process.cwd(), "src/app/blog");

type PostMetadata = {
  title?: string;
  date?: string;
  summary?: string;
};

async function getLatestPost() {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
  if (fileNames.length === 0) {
    return null;
  }

  const posts = (
    await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        try {
          const mod = await import(`@/app/blog/${slug}.mdx`);
          const { metadata } = mod as { metadata?: PostMetadata };
          return {
            slug,
            title: metadata?.title ?? slug,
            date: metadata?.date ?? "",
            summary: metadata?.summary ?? "",
          };
        } catch {
          console.warn(
            `[api/latest-post] Skipped "${slug}" (MDX module failed to load). Restart "next dev" if this post is new.`
          );
          return null;
        }
      })
    )
  ).filter(
    (p): p is { slug: string; title: string; date: string; summary: string } => p !== null
  );

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  const latest = posts[0];
  if (!latest) {
    return null;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  return {
    title: latest.title,
    url: `${baseUrl}/blog/${latest.slug}`,
    slug: latest.slug,
    publishedAt: latest.date,
    summary: latest.summary,
  };
}

export async function GET() {
  const post = await getLatestPost();
  return NextResponse.json({ post });
}


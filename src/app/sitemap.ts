import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { locales, localePath, type Locale } from "@/i18n/config";
import type { MetadataRoute } from "next";

function absolute(locale: Locale, path: string): string {
  const p = localePath(locale, path);
  return `${DATA.url}${p === "/" ? "" : p}`;
}

function languageAlternates(path: string): Record<string, string> {
  return Object.fromEntries(locales.map((locale) => [locale, absolute(locale, path)]));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const entries: MetadataRoute.Sitemap = [
    {
      url: absolute("en", "/"),
      priority: 1,
      alternates: { languages: languageAlternates("/") },
    },
    {
      url: absolute("en", "/blog"),
      priority: 0.8,
      alternates: { languages: languageAlternates("/blog") },
    },
  ];

  for (const post of posts) {
    const path = `/blog/${post.slug}`;
    entries.push({
      url: absolute("en", path),
      lastModified: new Date(post.metadata.publishedAt),
      alternates: { languages: languageAlternates(path) },
    });
  }

  return entries;
}

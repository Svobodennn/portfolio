import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const blogPosts = posts.map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  return [
    { url: DATA.url, priority: 1 },
    { url: `${DATA.url}/blog`, priority: 0.8 },
    ...blogPosts,
  ];
}

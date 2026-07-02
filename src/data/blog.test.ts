import { describe, expect, it } from "vitest";
import { getBlogPosts, getPost, markdownToHTML } from "@/data/blog";

describe("blog data layer", () => {
  it("returns null for an unknown slug instead of throwing", async () => {
    await expect(getPost("this-slug-does-not-exist")).resolves.toBeNull();
  });

  it("loads posts and filters out nulls", async () => {
    const posts = await getBlogPosts();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post !== null)).toBe(true);
    expect(posts.map((post) => post.slug)).toContain("hello-world");
  });

  it("renders markdown emphasis to HTML", async () => {
    const html = await markdownToHTML("**bold**");
    expect(html).toContain("<strong>");
  });
});

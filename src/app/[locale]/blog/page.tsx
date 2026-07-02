import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { getUI } from "@/data/resume";
import { isLocale, localePath } from "@/i18n/config";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const ui = getUI(params.locale);
  return { title: ui.blog, description: ui.blogDescription };
}

export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;
  if (!isLocale(locale)) {
    notFound();
  }
  const ui = getUI(locale);
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          {ui.blogHeading}
        </h1>
      </BlurFade>
      {posts
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
        )
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={localePath(locale, `/blog/${post.slug}`)}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}

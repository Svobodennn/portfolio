import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getResume } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { isLocale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export default function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  if (!isLocale(locale)) {
    notFound();
  }
  const data = getResume(locale);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.description,
    url: data.url,
    image: `${data.url}${data.avatarUrl}`,
    email: data.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bursa",
      addressCountry: "TR",
    },
    sameAs: [data.contact.social.GitHub.url, data.contact.social.LinkedIn.url],
    knowsAbout: data.skills,
    alumniOf: data.education.map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.school,
    })),
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {data.name}
              </h1>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                {data.contactButtonsFirstRow?.length > 0 && (
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    {data.contactButtonsFirstRow.map((link, idx) => (
                      <Link
                        href={link?.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex gap-2 px-2 py-1 text-[10px] items-center justify-center">
                          {link.icon}
                          {link.type}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                {data.contactButtonsSecondRow &&
                  data.contactButtonsSecondRow.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                      {data.contactButtonsSecondRow?.map((link, idx) => (
                        <Link
                          href={link?.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge
                            key={idx}
                            className="flex gap-2 px-2 py-1 text-[10px] items-center justify-center"
                          >
                            {link.icon}
                            {link.type}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
              </BlurFade>
            </div>
            <div className="relative size-28 shrink-0 overflow-hidden rounded-full border">
              <Image
                src={data.avatarUrl}
                alt={data.name}
                fill
                sizes="112px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{data.ui.about}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {data.summaryFirst}
          </Markdown>
          <hr className="my-4" />
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {data.summarySecond}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{data.ui.skills}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="toolchain">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{data.ui.toolchain}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-wrap gap-2">
              {data.toolchain.map((tool) => (
                <div
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.logo}
                    alt=""
                    width={16}
                    height={16}
                    className={cn("size-4", tool.invert && "dark:invert")}
                  />
                  {tool.name}
                </div>
              ))}
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <p className="text-sm text-muted-foreground">
              {data.ui.workflowIntro}
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {data.ui.workflowSteps.map((step, id) => (
                <div key={step} className="flex items-center gap-x-1.5">
                  <span className="rounded-full border bg-card px-3 py-1 text-xs font-medium">
                    {step}
                  </span>
                  {id < data.ui.workflowSteps.length - 1 && (
                    <ChevronRightIcon className="size-3 shrink-0 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {data.ui.workflowNotes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="text-foreground">—</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="tools">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">{data.ui.tools}</h2>
          </BlurFade>
          {(
            [
              { id: "infra", label: data.ui.toolCategories.infra },
              { id: "observability", label: data.ui.toolCategories.observability },
              { id: "ai", label: data.ui.toolCategories.ai },
              { id: "payments", label: data.ui.toolCategories.payments },
              { id: "dev", label: data.ui.toolCategories.dev },
              { id: "comms", label: data.ui.toolCategories.comms },
              { id: "api", label: data.ui.toolCategories.api },
            ] as const
          ).map((cat, catIdx) => {
            const items = data.tools.filter((tool) => tool.category === cat.id);
            if (items.length === 0) return null;
            return (
              <BlurFade key={cat.id} delay={BLUR_FADE_DELAY * (15 + catIdx)}>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground">
                    {cat.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tool) => (
                      <div
                        key={tool.name}
                        className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium"
                      >
                        {tool.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={tool.logo}
                            alt=""
                            width={16}
                            height={16}
                            className={cn("size-4", tool.invert && "dark:invert")}
                          />
                        ) : (
                          <span
                            className="size-2 rounded-full"
                            style={{ backgroundColor: tool.color }}
                          />
                        )}
                        {tool.name}
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{data.ui.workExperience}</h2>
          </BlurFade>
          {data.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{data.ui.education}</h2>
          </BlurFade>
          {data.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="certificates">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{data.ui.certificates}</h2>
          </BlurFade>
          {data.hackathons.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={project.title}
                logoUrl={project.image}
                altText={project.location}
                title={project.title}
                subtitle={project.description}
                period={project.dates}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{data.ui.projects}</h2>
          </BlurFade>
          {data.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
                bgColor={project.bgColor}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact" className="w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              {data.ui.openToWork}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {data.ui.ctaTitle}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
              {data.ui.ctaText}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <a
                href={`mailto:${data.contact.email}`}
                className={cn(buttonVariants({ variant: "default" }))}
              >
                {data.ui.emailMe}
              </a>
              <a
                href={data.resumeUrl}
                download
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {data.ui.downloadCv}
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}

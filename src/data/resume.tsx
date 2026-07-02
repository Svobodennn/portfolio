import { Icons } from "@/components/icons";
import { RESUME_TEXT } from "@/data/content";
import { defaultLocale, type Locale } from "@/i18n/config";
import { HomeIcon } from "lucide-react";

// Locale-independent structure: URLs, icons, logos, dates, tech, contact info.
// Translatable text lives in src/data/content.ts and is merged in by locale.
const base = {
  name: "Melih SARAÇ",
  initials: "MS",
  url: "https://melihsarac.com",
  location: "Bursa, TR",
  locationLink: "https://www.google.com/maps/place/bursa",
  resumeUrl: "/Melih_Sarac_CV.pdf",
  avatarUrl: "/me3.png",
  skills: [
    "PHP",
    "Laravel",
    "NodeJS",
    "Express",
    "RESTful API",
    "Websockets",
    "Webhooks",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "LLM Integration",
    "AI Chatbots",
    "Agentic AI",
    "Multi-agent Orchestration",
    "Prompt Engineering",
    "VueJS",
    "ReactJS",
    "JQuery",
    "SEO",
  ],
  toolchain: [
    { name: "Claude Code", logo: "/logos/claude.svg", invert: false },
    { name: "Codex", logo: "/logos/codex.svg", invert: false },
    { name: "Cursor", logo: "/logos/cursor.svg", invert: true },
    { name: "Antigravity", logo: "/logos/antigravity.svg", invert: false },
  ],
  tools: [
    { name: "Vercel", logo: "/logos/vercel.svg", invert: true, color: "#8b8b8b", category: "infra" },
    { name: "Hetzner", logo: "/logos/hetzner.svg", invert: false, color: "#D50C2D", category: "infra" },
    { name: "DigitalOcean", logo: "/logos/digitalocean.svg", invert: false, color: "#0080FF", category: "infra" },
    { name: "Laravel Forge", logo: "", invert: false, color: "#EF5A29", category: "infra" },
    { name: "Dokploy", logo: "", invert: false, color: "#7C3AED", category: "infra" },
    { name: "Caddy", logo: "/logos/caddy.svg", invert: false, color: "#1F88C0", category: "infra" },
    { name: "Cloudflare", logo: "/logos/cloudflare.svg", invert: false, color: "#F38020", category: "infra" },
    { name: "Sentry", logo: "/logos/sentry.svg", invert: false, color: "#362D59", category: "observability" },
    { name: "PostHog", logo: "/logos/posthog.svg", invert: true, color: "#000000", category: "observability" },
    { name: "Grafana", logo: "/logos/grafana.svg", invert: false, color: "#F46800", category: "observability" },
    { name: "Stripe", logo: "/logos/stripe.svg", invert: false, color: "#635BFF", category: "payments" },
    { name: "iyzico", logo: "", invert: false, color: "#1E64FF", category: "payments" },
    { name: "GitHub Actions", logo: "/logos/githubactions.svg", invert: false, color: "#2088FF", category: "dev" },
    { name: "Postman", logo: "/logos/postman.svg", invert: false, color: "#FF6C37", category: "dev" },
    { name: "Burp Suite", logo: "/logos/burpsuite.svg", invert: false, color: "#FF6633", category: "dev" },
    { name: "Slack", logo: "", invert: false, color: "#611F69", category: "comms" },
    { name: "Linear", logo: "/logos/linear.svg", invert: false, color: "#5E6AD2", category: "comms" },
    { name: "Jira", logo: "/logos/jira.svg", invert: false, color: "#0052CC", category: "comms" },
    { name: "Brevo", logo: "/logos/brevo.svg", invert: false, color: "#0B996E", category: "api" },
    { name: "OpenRouter", logo: "/logos/openrouter.svg", invert: false, color: "#94A3B8", category: "api" },
  ],
  contactButtonsFirstRow: [
    {
      type: "www.melihsarac.com",
      href: "/",
      icon: <Icons.cv className="size-3" />,
    },
    {
      type: "melih.sarac@hotmail.com",
      href: "mailto:melih.sarac@hotmail.com",
      icon: <Icons.email className="size-3" />,
    },
    {
      type: "+90 543 530 9065",
      href: "tel:+905435309065",
      icon: <Icons.phone className="size-3" />,
    },
    {
      type: "+48 451 648 224",
      href: "tel:+48451648224",
      icon: <Icons.phone className="size-3" />,
    },
  ],
  contactButtonsSecondRow: [
    {
      type: "Svobodennn",
      href: "https://github.com/Svobodennn",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "Melih SARAÇ",
      href: "https://www.linkedin.com/in/melihsarac/",
      icon: <Icons.linkedin className="size-3" />,
    },
  ],
  contact: {
    email: "melih.sarac@hotmail.com",
    tel: "+90 543 530 9065 | +48 451 648 224",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Svobodennn",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/melihsarac/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:melih.sarac@hotmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Turkticaret.Net",
      href: "https://turkticaret.net",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "Jan 2024",
      end: "Dec 2025",
    },
    {
      company: "Turkticaret.Net",
      href: "https://turkticaret.net",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "October 2022",
      end: "January 2023",
    },
    {
      company: "Turkticaret.Net",
      href: "https://turkticaret.net",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "June 2022",
      end: "August 2022",
    },
  ],
  education: [
    {
      school: "University of Lodz",
      href: "https://www.uni.lodz.pl/en/",
      logoUrl: "/logo_UL_white.png",
      start: "Feb 2023",
      end: "Jul 2023",
    },
    {
      school: "Bursa Uludağ University",
      href: "https://www.uludag.edu.tr",
      logoUrl: "/uu.svg",
      start: "2021",
      end: "2023",
    },
    {
      school: "MSÜ Kara Harp Okulu",
      href: "https://www.msu.edu.tr",
      logoUrl: "/msu_logo.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Arabamsende.com",
      href: "https://arabamsende.com",
      dates: "September 2025 - February 2026",
      active: true,
      technologies: [
        "Laravel",
        "VueJS",
        "Tailwind CSS",
        "Websocket",
        "PostgreSQL",
        "SEO",
        "Payment System",
        "Laravel Echo",
        "Laravel Octane",
        "Caddy & FrankenPHP",
        "Docker",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://arabamsende.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/arabamsende_logo.png",
      bgColor: "bg-[#FFCE37]",
    },
    {
      title: "Boostarea.net",
      href: "https://boostarea.net",
      dates: "Nov 2024 - May 2025",
      active: true,
      technologies: [
        "PHP",
        "JQuery",
        "Bootstrap 5",
        "Zend Framework",
        "Websocket",
        "MySQL",
        "SEO",
        "Payment System",
        "Devops",
      ],
      links: [
        {
          type: "Website",
          href: "https://boostarea.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/boostarea_logo.png",
      bgColor: "bg-[#0f172a]",
    },
  ],
  certificates: [
    { dates: "2025", image: "", links: [] },
    { dates: "2021", image: "", links: [] },
    { dates: "2020", image: "", links: [] },
  ],
};

export function getUI(locale: Locale) {
  return RESUME_TEXT[locale].ui;
}

export function getResume(locale: Locale) {
  const t = RESUME_TEXT[locale];
  return {
    ...base,
    description: t.description,
    seoDescription: t.seoDescription,
    summaryFirst: t.summaryFirst,
    summarySecond: t.summarySecond,
    navbar: [{ href: "/", icon: HomeIcon, label: t.ui.home }],
    work: base.work.map((entry, i) => ({ ...entry, ...t.work[i] })),
    education: base.education.map((entry, i) => ({ ...entry, ...t.education[i] })),
    projects: base.projects.map((entry, i) => ({ ...entry, ...t.projects[i] })),
    hackathons: base.certificates.map((entry, i) => ({
      ...entry,
      ...t.certificates[i],
    })),
    ui: t.ui,
  };
}

// Default-locale snapshot for locale-agnostic consumers (metadata base, sitemap,
// robots, OG image, RSS feed).
export const DATA = getResume(defaultLocale);

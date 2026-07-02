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
    "Debugging Tools",
  ],
  toolchain: [
    { name: "Claude Code", icon: <Icons.claudeCode className="size-3.5" /> },
    { name: "Codex", icon: <Icons.openai className="size-3.5" /> },
    { name: "Cursor", icon: <Icons.cursor className="size-3.5" /> },
    { name: "Antigravity", icon: <Icons.antigravity className="size-3.5" /> },
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

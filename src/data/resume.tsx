import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Phone } from "lucide-react";

export const DATA = {
  name: "Melih SARAÇ",
  initials: "MS",
  url: "https://melihsarac.com",
  location: "Bursa, TR",
  locationLink: "https://www.google.com/maps/place/bursa",
  description:
    "Backend Developer",
  summaryFirst:
    "I am an experienced backend developer with solid expertise in ***PHP and Laravel***, along with hands-on experience in ***database management***, ***RESTful API development***, and ***payment systems integration***. I have worked on various projects utilizing technologies like ***PHP***, ***Laravel***, ***NodeJS***. Additionally, I emphasize the use of ***SOLID principles*** and best practices to deliver high-quality, scalable, and secure solutions.",
  summarySecond: "In addition to my technical skills, I am passionate about art, dance, sports, music, photography, and motorcycles, all of which fuel my creativity and enhance my problem-solving abilities. I am currently focused on developing ***REST APIs*** using ***Laravel*** and am dedicated to teamwork, ensuring the successful completion of every project.",
    avatarUrl: "/me.png",
  skills: [
    "PHP",
    "Laravel",
    "RESTful APIs and Webhooks",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "Node.js",
    "JQuery",
    "LLM & AI Assistants",
    "Wordpress Plugins",
    "SEO",
    "Debugging Tools",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contactButtonsFirstRow: [
    {
      type: "CV",
      href: "/Melih SARAÇ - CV.pdf",
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
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Boostarea",
      href: "https://boostarea.net",
      badges: ['Part Time'],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/boostarea.png",
      start: "Nov 2024",
      end: "-",
      description:
        "Devops, Payment system, Saas, Zendframefork",
    },
    {
      company: "Turkticaret.Net",
      href: "https://turkticaret.net",
      badges: ['Full Time'],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "Jan 2024",
      end: "-",
      description:
        "I spearheaded operational efficiency by automating daily tasks, then boosted ***website traffic*** through ***SEO and speed optimization***. I implemented robust ***security measures***, particularly in ***payment processing***, and optimized ***server performance*** by ***query improvements***. Played a key role in implementing an ***AI Assistant*** to system to enhance customer experience",
    },
    {
      company: "Turkticaret.Net",
      badges: ['Workplace Training'],
      href: "https://turkticaret.net",
      location: "On-Site",
      title: "Intern",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "January 2021",
      end: "April 2021",
      description:
        "I improved myself further with ***HTML, CSS, JavaScript and JQeury***. I also handled the backend with ***PHP, SQL***. Additionally I learned fundamentals of ***Nodejs*** and frameworks like ***Laravel*** and ***Django***. I got familiar with content management systems and ***MVC structure***.",
    },
    {
      company: "Turkticaret.Net",
      href: "https://turkticaret.net",
      badges: ['Internship'],
      location: "On-Site",
      title: "Intern",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "January 2020",
      end: "April 2020",
      description:
        "I learned the technologies that make websites work, like ***HTML, CSS, JavaScript***. I learned and deployed a webiste using ***JQuery*** and ***PHP*** with ***MySQL database***",
    },
  ],
  education: [
    {
      school: "University of Lodz",
      href: "https://www.uni.lodz.pl/en/",
      degree: "Erasmus - Computer Science",
      logoUrl: "/logo_UL_white.png",
      start: "Feb 2023",
      end: "Jul 2023",
    },
    {
      school: "Bursa Uludağ University",
      href: "https://www.uludag.edu.tr",
      degree: "Associate's Degree of Computer Science (ACS) | CGPA 3.53/4.00",
      logoUrl: "/uu.svg",
      start: "2021",
      end: "2023",
    },
    {
      school: "MSÜ Kara Harp Okulu",
      href: "https://www.msu.edu.tr",
      degree: "Bachelor's Degree | Russian Prepatory",
      logoUrl: "/msu_logo.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    
    {
      title: " Language (English) - YDS",
      dates: "2022",
      location: "YDS",
      description:
        "B2 | 80/100",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Backend Web Development Path with Beginner Level PHP",
      dates: "2021",
      location: "Patika.Dev",
      description:
        "Patika.Dev",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Language (Russian) - MSÜ",
      dates: "2020",
      location: "MSÜ Kara Harp Okulu",
      description:
        "Certificate of Excellence in Russian Preparatory Course",
      icon: "public",
      image:
        "",
      links: [],
    }
  ],
} as const;

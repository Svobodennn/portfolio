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
    avatarUrl: "/me3.png",
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
    "SEO",
    "Debugging Tools",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contactButtonsFirstRow: [
    {
      type: "www.melihsarac.com",
      href: "www.melihsarac.com",
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
      company: "Turkticaret.Net",
      href: "https://turkticaret.net",
      badges: ['Full Time'],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "Jan 2024",
      end: "Current",
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
      start: "October 2022",
      end: "January 2023",
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
      start: "June 2022",
      end: "August 2022",
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
      title: "Boostarea.net",
      href: "https://boostarea.net",
      dates: "Nov 2024 - Current",
      active: true,
      description:
        "Boostarea.net is a service that provides boost services for online games. I took part in the development of the website.",
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
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/boostarea-carousel.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    
    {
      title: "IELTS Academic",
      dates: "2025",
      location: "British Council",
      description:
        "C1 | 7.5",
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

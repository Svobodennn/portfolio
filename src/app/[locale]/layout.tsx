import { LocaleSwitcher } from "@/components/locale-switcher";
import { MotionProvider } from "@/components/motion-provider";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getResume, getUI } from "@/data/resume";
import { isLocale, locales, localePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  tr: "tr_TR",
  pl: "pl_PL",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const data = getResume(locale);
  const ogImage = `/og?title=${encodeURIComponent(data.name)}`;

  return {
    metadataBase: new URL(data.url),
    title: {
      default: data.name,
      template: `%s | ${data.name}`,
    },
    description: data.seoDescription,
    keywords: [...data.skills, "Backend Developer", "Laravel", "Bursa", data.name],
    authors: [{ name: data.name, url: data.url }],
    creator: data.name,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: { en: "/", tr: "/tr", pl: "/pl" },
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      title: data.name,
      description: data.seoDescription,
      url: localePath(locale, "/"),
      siteName: data.name,
      locale: OG_LOCALE[locale],
      type: "website",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: data.name,
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!isLocale(params.locale)) {
    notFound();
  }
  const locale = params.locale;
  const ui = getUI(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-12 sm:pt-24 pb-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <TooltipProvider delayDuration={0}>
              <LocaleSwitcher locale={locale} />
              {children}
              <Navbar
                locale={locale}
                labels={{
                  home: ui.home,
                  theme: ui.theme,
                  downloadCv: ui.downloadCv,
                }}
              />
            </TooltipProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

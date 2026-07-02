"use client";

import { defaultLocale, locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }
  return pathname || "/";
}

function pathForLocale(pathname: string, target: Locale): string {
  const base = stripLocale(pathname);
  if (target === defaultLocale) {
    return base || "/";
  }
  return base === "/" ? `/${target}` : `/${target}${base}`;
}

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";

  return (
    <nav
      aria-label="Language"
      className="fixed right-4 top-4 z-40 flex items-center gap-0.5 rounded-full border bg-background/80 p-0.5 text-xs backdrop-blur print:hidden"
    >
      {locales.map((option) => (
        <Link
          key={option}
          href={pathForLocale(pathname, option)}
          aria-label={localeNames[option]}
          aria-current={option === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2 py-1 font-medium transition-colors",
            option === locale
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {localeNames[option]}
        </Link>
      ))}
    </nav>
  );
}

export const locales = ["en", "tr", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  tr: "TR",
  pl: "PL",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Build a locale-aware href. The default locale lives at the root (no prefix);
// other locales are prefixed, e.g. /tr, /tr/blog.
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return clean || "/";
  }
  return `/${locale}${clean}`;
}

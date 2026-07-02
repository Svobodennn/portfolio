import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // No locale prefix → serve the default locale internally while keeping the
  // URL clean (as-needed prefixing: EN at "/", others at "/tr", "/pl").
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Run on pages only: skip Next internals, the /og image route, and any file
  // with an extension (sitemap.xml, robots.txt, feed.xml, favicon.ico, images).
  matcher: ["/((?!_next|og|.*\\.).*)"],
};

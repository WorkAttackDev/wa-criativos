import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./lib/i18n";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: locales[0],
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:path*"],
  // matcher: ["/", `/:locale(${locales.join("|")})/:path*`],
};

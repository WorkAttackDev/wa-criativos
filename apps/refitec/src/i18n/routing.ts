import { defineRouting } from "next-intl/routing";
export const locales = ["pt", "en"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "pt",
});

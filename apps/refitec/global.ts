import { routing } from "@/i18n/routing";
import messagesPt from "./messages/pt.json";
import messagesEn from "./messages/en.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messagesPt & typeof messagesEn;
  }
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import AboutSection from "./about/components/AboutSection";
import ProductsSection from "./products/components/ProductsSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import InNumbersSection from "./sections/InNumbersSection";
// import TimelineSection from "./sections/TimelineSection";
import { routing } from "@/i18n/routing";
import { Locale } from "next-intl";
import CareerSection from "./career/components/CareerSection";
import NewsSection from "./news/components/NewsSection";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const HomePage = async ({ params }: PageProps<"/[locale]">) => {
  const { locale } = (await params) as { locale: Locale };
  const tc = await getTranslations("Contacts");

  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <InNumbersSection />
      {/* <TimelineSection /> */}
      <CareerSection />
      <NewsSection />
      <ContactSection
        title={tc("title")}
        locale={locale}
        mapKey={process.env.GOOGLE_MAPS_API_KEY || ""}
      />
    </main>
  );
};

export default HomePage;

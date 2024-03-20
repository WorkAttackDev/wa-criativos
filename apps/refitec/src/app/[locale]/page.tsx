import { useLocale, useTranslations } from "next-intl";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import InNumbersSection from "./sections/InNumbersSection";
import TimelineSection from "./sections/TimelineSection";

type Props = {};

const HomePage = (_: Props) => {
  const tc = useTranslations("Contacts");
  const locale = useLocale();
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <InNumbersSection />
      <TimelineSection />
      <ContactSection
        description={tc("description")}
        title={tc("title")}
        locale={locale}
        mapKey={process.env.GOOGLE_MAPS_API_KEY || ""}
      />
    </main>
  );
};

export default HomePage;

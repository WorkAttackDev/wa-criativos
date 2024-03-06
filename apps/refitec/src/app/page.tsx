import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import InNumbersSection from "./sections/InNumbersSection";
import TimelineSection from "./sections/TimelineSection";

type Props = {};

const HomePage = (_: Props) => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <InNumbersSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;

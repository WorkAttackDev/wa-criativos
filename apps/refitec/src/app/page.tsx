import AboutSection from "./sections/AboutSection";
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
    </main>
  );
};

export default HomePage;

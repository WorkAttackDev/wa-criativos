import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProductsSection from "./sections/ProductsSection";
import ProductionSection from "./sections/ProductionSection";
import WorkWithUs from "./sections/WorkWithUs";
import ContactSection from "./sections/ContactSection";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProductionSection />
      <WorkWithUs />
      <ContactSection />
    </main>
  );
};

export default HomePage;

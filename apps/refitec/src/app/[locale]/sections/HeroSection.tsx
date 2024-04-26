import { getImageProps } from "next/image";
import React from "react";
import BoxAnimation from "../components/BoxAnimation";
import { ArrowDownToDot } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {};

const HeroSection = (_: Props) => {
  const t = useTranslations("Hero");

  const {
    props: { src },
  } = getImageProps({
    alt: "Man smiling",
    fill: true,
    sizes: "100vw",
    quality: 100,
    src: "/imgs/bottling-line-sunflower-oil-bottles-vegetable-oil-production-plant-high.jpg",
  });

  return (
    <section
      className={`max-h relative bg-cover  bg-[center_bottom] text-white`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-foreground/40"></div>
      <div className="relative flex h-screen max-h-[60rem] min-h-[50rem] flex-col justify-center gap-16 py-32 my-container sm:max-h-[100rem]">
        <article
          className={`my-auto flex flex-col items-start justify-center gap-16`}
        >
          <BoxAnimation>
            <h3 className="w-full text-3xl  font-semibold uppercase drop-shadow lg:text-4xl">
              {t("welcome")}
            </h3>
          </BoxAnimation>
          <BoxAnimation delay={0.5}>
            <h1 className="w-full text-6xl font-bold !leading-tight drop-shadow md:max-w-6xl lg:text-7xl">
              {t("sloganPart1")}
              <br />
              {t("sloganPart2")}
            </h1>
          </BoxAnimation>
        </article>
        <ArrowDownToDot className="mx-auto size-14 text-current" />
      </div>
    </section>
  );
};

export default HeroSection;

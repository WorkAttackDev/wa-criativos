import { getImageProps } from "next/image";
import React from "react";
import BoxAnimation from "../components/BoxAnimation";
import { useTranslations } from "next-intl";

type Props = {};

const HeroSection = (_: Props) => {
  const {
    props: { src },
  } = getImageProps({
    alt: "Man smiling",
    fill: true,
    sizes: "100vw",
    src: "/imgs/man-smiling.jpg",
  });

  const t = useTranslations("Hero");

  return (
    <section
      className={`relative bg-cover  bg-[70%_top]`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-foreground/20"></div>
      <div
        className={`flex h-screen max-h-[60rem] min-h-[50rem] flex-col items-start justify-center gap-16 bg-cover bg-[center_top] text-white my-container   sm:max-h-[100rem]`}
      >
        <BoxAnimation>
          <h3 className=" relative w-full text-3xl  font-semibold uppercase drop-shadow lg:text-5xl">
            {t("welcome")}
          </h3>
        </BoxAnimation>
        <BoxAnimation delay={0.5}>
          <h1 className=" relative w-full text-6xl font-bold !leading-tight drop-shadow md:max-w-6xl lg:text-8xl">
            {t("sloganPart1")} <br /> {t("sloganPart2")}
          </h1>
        </BoxAnimation>
      </div>
    </section>
  );
};

export default HeroSection;

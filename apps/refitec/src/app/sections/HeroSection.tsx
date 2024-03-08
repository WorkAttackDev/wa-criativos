import { getImageProps } from "next/image";
import React from "react";
import BoxAnimation from "../components/BoxAnimation";
import { ArrowDownToDot } from "lucide-react";

type Props = {};

const HeroSection = (_: Props) => {
  const {
    props: { src },
  } = getImageProps({
    alt: "Man smiling",
    fill: true,
    sizes: "100vw",
    src: "/imgs/bottling-line-sunflower-oil-bottles-vegetable-oil-production-plant-high.jpeg",
  });

  return (
    <section
      className={`max-h relative bg-cover  bg-[center_top] text-white`}
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
              Bem-vindo à Refitec
            </h3>
          </BoxAnimation>
          <BoxAnimation delay={0.5}>
            <h1 className="w-full text-6xl font-bold !leading-tight drop-shadow md:max-w-6xl lg:text-7xl">
              Transformando o Futuro dos
              <br />
              Óleos Alimentares em Angola
            </h1>
          </BoxAnimation>
        </article>
        <ArrowDownToDot className="mx-auto size-14 text-current" />
      </div>
    </section>
  );
};

export default HeroSection;

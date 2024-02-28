import { getImageProps } from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  const {
    props: { src },
  } = getImageProps({
    alt: "Man smiling",
    fill: true,
    sizes: "100vw",
    src: "/imgs/man-smiling.jpg",
  });

  return (
    <section
      className={`bg-cover relative  bg-[center_top]`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="absolute inset-0 bg-foreground/20 pointer-events-none"></div>
      <div
        className={`my-container flex gap-16 flex-col justify-center items-start text-white min-h-[50rem] max-h-[100rem] h-screen bg-cover   bg-[center_top]`}
      >
        <h3 className="relative text-3xl drop-shadow  lg:text-5xl font-semibold uppercase w-full">
          Bem-vindo à HIGITEC
        </h3>
        <h1 className="relative text-6xl lg:text-8xl font-bold md:max-w-6xl !leading-tight w-full drop-shadow">
          O seu Parceiro de <br /> Excelência em Higiene
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

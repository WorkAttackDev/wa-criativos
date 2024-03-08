import React from "react";
import FeatherBgSection from "../components/FeatherBgSection";
import HeadingText from "../components/HeadingText";
import Image from "next/image";
import { linksObj } from "../links";
import SlideInUpAnimation from "../components/SlideInUpAnimation";
import FadeInAnimation from "../components/FadeInAnimation";
import SlideInUpZoomAnimation from "../components/SlideInUpZoomAnimation";

type Props = {};

const infos = [
  {
    title: "Missão",
    text: "Fornecer soluções de higiene e limpeza inovadoras, que excedam as expectativas dos nossos clientes a preços acessíveis.",
    imgSrc: "/imgs/machine.jpg",
  },
  {
    title: "Visão",
    text: "Aspiramos evoluir continuamente e sermos reconhecidos como o fornecedor líder de produtos de higiene e limpeza em Angola e arredores.",
    imgSrc: "/imgs/mother-change-diaper.jpg",
  },
  {
    title: "Valores",
    text: "Excelência e Qualidade: Produzindo produtos do mais alto padrão, explorando novas tendências e tecnologias, com produtos que contribuem para um planeta mais saudável.",
    imgSrc: "/imgs/worker-touching-tablet.jpg",
  },
];

const AboutSection = (_: Props) => {
  return (
    <FeatherBgSection
      className="grid gap-32"
      id={linksObj.whoWeAre.href.replace("#", "")}
    >
      <HeadingText size="lg" className="text-center">
        Empenhados em estabelecer padrões na produção de produtos de higiene e
        limpeza de elevada qualidade, com uma base enraizada na inovação,
        atendendo a diversos sectores e garantindo um ambiente saudável e seguro
        para todos.
      </HeadingText>
      <section className="grid grid-cols-1 justify-center justify-items-center gap-16 md:grid-cols-3">
        {infos.map(({ imgSrc, text, title }, i) => (
          <FadeInAnimation key={title} duration={0.5} delay={i * 0.5}>
            <article className="flex max-w-[40rem] flex-col gap-8 overflow-hidden text-justify">
              <SlideInUpZoomAnimation duration={2} delay={i * 0.5}>
                <Image
                  width={400}
                  height={200}
                  src={imgSrc}
                  alt={title}
                  className="aspect-[2] w-full object-cover duration-500 ease-out hover:!scale-110"
                />
              </SlideInUpZoomAnimation>
              <span className="grid w-full gap-4">
                <HeadingText size="sm" className="uppercase">
                  {title}
                </HeadingText>
                <p className="">{text}</p>
              </span>
            </article>
          </FadeInAnimation>
        ))}
      </section>
    </FeatherBgSection>
  );
};

export default AboutSection;

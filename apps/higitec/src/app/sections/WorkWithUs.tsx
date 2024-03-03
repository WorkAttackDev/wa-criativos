import { getImageProps } from "next/image";
import React from "react";
import HeadingText from "../components/HeadingText";
import WorkWithUsForm from "./WorkWithUsForm";
import { linksObj } from "../links";

type Props = {};

const WorkWithUs = (_: Props) => {
  const {
    props: { src },
  } = getImageProps({
    alt: "Meeting room with people working",
    fill: true,
    sizes: "80vw",
    src: "/imgs/meeting.jpg",
    quality: 70,
  });
  return (
    <section
      id={linksObj.workWithUs.href.replace("#", "")}
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/70 to-foreground/70 pointer-events-none" />
      <div className="my-container text-white gap-32 py-32 grid md:grid-cols-2">
        <span className="grid content-start gap-8 relative">
          <HeadingText className="text-inherit">
            Junte-se a nós/vaga
          </HeadingText>
          <p>
            Na HIGITEC acreditamos que um ambiente alegre e motivado é a base
            para uma sociedade saudável e próspera. Junte-se a nós na nossa
            jornada rumo à excelência para juntos construirmos um futuro mais
            limpo e seguro.
          </p>
        </span>
        <WorkWithUsForm />
      </div>
    </section>
  );
};

export default WorkWithUs;

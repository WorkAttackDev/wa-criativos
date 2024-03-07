import Image from "next/image";
import HeadingText from "../components/HeadingText";
import SlideInUpAnimation from "../components/SlideInUpAnimation";
import { linksObj } from "../links";

type Props = {};

const infos = [
  {
    title: "Missão",
    text: "Tornarmos uma força líder na indústria de óleos alimentares, fornecendo produtos que redefinem a excelência.",
    imgSrc: "/imgs/oil-bottles.png",
  },
  {
    title: "Visão",
    text: "Estabelecer uma referência de qualidade, sustentabilidade e satisfação do cliente. Nós nos esforçamos para ser uma força motriz no cenário culinário.",
    imgSrc: "/imgs/man-handling-machine.jpg",
  },
  {
    title: "Valores",
    text: "Mantemos os mais altos padrões no processamento, visando minimizar a nossa pegada ecológica e contribuir para um futuro sustentável.",
    imgSrc: "/imgs/worker-touching-tablet.jpg",
  },
];

const AboutSection = (_: Props) => {
  return (
    <section
      className="grid gap-32 py-32 my-container"
      id={linksObj.whoWeAre.href.replace("#", "")}
    >
      <header className="grid gap-16">
        <HeadingText variant="secondary" className="text-center">
          Quem nós somos
        </HeadingText>
        <HeadingText size="lg" className="text-center">
          Refitec, uma futura potência industrial angolana que irá revolucionar
          o processamento, embalagem e comercialização de óleos alimentares
        </HeadingText>
      </header>
      <section className="grid grid-cols-1 justify-center justify-items-center gap-16 md:grid-cols-3">
        {infos.map(({ imgSrc, text, title }, i) => (
          <SlideInUpAnimation key={title} delay={i * 0.5}>
            <article className="flex max-w-[40rem] flex-col gap-8 overflow-hidden text-justify">
              <figure className="group relative overflow-hidden">
                <Image
                  width={400}
                  height={250}
                  src={imgSrc}
                  alt={title}
                  className="aspect-[2/1.25] w-full object-cover duration-500 ease-out group-hover:scale-110"
                />
                <figcaption className="from-1% absolute inset-0 flex items-end justify-start bg-gradient-to-t from-foreground p-8">
                  <HeadingText variant="secondary">{title}</HeadingText>
                </figcaption>
              </figure>
              <p className="grid w-full gap-4">{text}</p>
            </article>
          </SlideInUpAnimation>
        ))}
      </section>
    </section>
  );
};

export default AboutSection;

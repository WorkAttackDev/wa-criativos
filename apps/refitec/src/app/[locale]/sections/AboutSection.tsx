import Image from "next/image";
import HeadingText from "../components/HeadingText";
import SlideInUpAnimation from "../components/SlideInUpAnimation";
import { linksObj } from "../links";
import { useTranslations } from "next-intl";

type Props = {};

const AboutSection = (_: Props) => {
  const t = useTranslations("About");

  const infos = [
    {
      title: t("mission"),
      text: t("missionText"),
      imgSrc:
        "/imgs/bottling-line-sunflower-oil-bottles-vegetable-oil-production-plant-high.jpg",
    },
    {
      title: t("vision"),
      text: t("visionText"),
      imgSrc: "/imgs/man-handling-machine.jpg",
    },
    {
      title: t("values"),
      text: t("valuesText"),
      imgSrc: "/imgs/worker-touching-tablet.jpg",
    },
  ];

  return (
    <section
      className="grid gap-32 py-32 my-container"
      id={linksObj.whoWeAre.href.replace("#", "")}
    >
      <header className="grid gap-16">
        <HeadingText variant="secondary" className="text-center">
          {t("title")}
        </HeadingText>
        <HeadingText size="lg" className="text-center">
          {t("description")}
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

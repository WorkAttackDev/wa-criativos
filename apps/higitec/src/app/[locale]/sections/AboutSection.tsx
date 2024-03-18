import Image from "next/image";
import FadeInAnimation from "../components/FadeInAnimation";
import FeatherBgSection from "../components/FeatherBgSection";
import HeadingText from "../components/HeadingText";
import SlideInUpZoomAnimation from "../components/SlideInUpZoomAnimation";
import { linksObj } from "../links";
import { useTranslations } from "next-intl";

type Props = {};
const AboutSection = (_: Props) => {
  const t = useTranslations("About");

  const infos = [
    {
      title: t("mission"),
      text: t("missionText"),
      imgSrc: "/imgs/machine.jpg",
    },
    {
      title: t("vision"),
      text: t("visionText"),
      imgSrc: "/imgs/female-scientist-working.jpeg",
    },
    {
      title: t("values"),
      text: t("valuesText"),
      imgSrc: "/imgs/worker-touching-tablet.jpg",
    },
  ];

  return (
    <FeatherBgSection
      className="grid gap-32"
      id={linksObj.whoWeAre.href.replace("#", "")}
    >
      <HeadingText size="lg" className="text-center">
        {t("about")}
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

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FadeInAnimation from "../components/FadeInAnimation";
import FeatherBgSection from "../components/FeatherBgSection";
import HeadingText from "../components/HeadingText";
import SlideInUpZoomAnimation from "../components/SlideInUpZoomAnimation";
import { linksObj } from "../links";

type Props = {};

const AboutDialog = ({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="group outline-none">{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl !rounded-none border-none p-0">
        {children}
      </DialogContent>
    </Dialog>
  );
};

const AboutSectionCard = ({
  title,
  text,
  imgSrc,
  hideImage,
}: {
  title: string;
  text: string;
  imgSrc: string;
  hideImage?: boolean;
}) => {
  return (
    <article className="flex max-w-[40rem] flex-col gap-8 overflow-hidden text-justify">
      <SlideInUpZoomAnimation
        duration={2}
        className={cn(hideImage && "hidden")}
        // delay={i * 0.5}>
      >
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
  );
};

const AboutSection = (_: Props) => {
  const t = useTranslations("About");

  const infos = [
    {
      title: t("mission"),
      text: t("missionText"),
      imgSrc: "/imgs/putting-soap-bar-in-plastic-bag.jpg",
    },
    {
      title: t("vision"),
      text: t("visionText"),
      imgSrc: "/imgs/machine.jpg",
    },
    {
      title: t("values"),
      text: t("valuesText"),
      imgSrc: "/imgs/worker-in-a-diaper-factory.jpg",
    },
  ];

  return (
    <FeatherBgSection
      className="grid items-center gap-x-10 gap-y-32 lg:grid-cols-2"
      id={linksObj.whoWeAre.href.replace("/#", "")}
    >
      <section className="grid justify-center justify-items-center gap-2">
        {infos.map(({ imgSrc, text, title }, i) => (
          <AboutDialog
            trigger={
              <FadeInAnimation
                key={title}
                duration={0.5}
                delay={i * 0.5}
                className="p-10 duration-300 ease-out group-hover:bg-white/50 group-hover:shadow group-focus:bg-white group-focus:shadow"
              >
                <AboutSectionCard
                  title={title}
                  text={text}
                  imgSrc={imgSrc}
                  hideImage
                />
              </FadeInAnimation>
            }
          >
            <article className="flex flex-col overflow-hidden text-justify">
              <SlideInUpZoomAnimation duration={1}>
                <Image
                  width={720}
                  height={720}
                  src={imgSrc}
                  alt={title}
                  quality={95}
                  className="aspect-[2] w-full object-cover duration-500 ease-out hover:!scale-110"
                />
              </SlideInUpZoomAnimation>
              <span className="grid w-full gap-4 p-8 sm:p-12">
                <HeadingText className="text-3xl">{title}</HeadingText>
                <p className="text-2xl/relaxed">{text}</p>
              </span>
            </article>
          </AboutDialog>
        ))}
      </section>
      <HeadingText size="lg" className="text-center max-lg:row-start-1">
        {t("about")}
      </HeadingText>
    </FeatherBgSection>
  );
};

export default AboutSection;

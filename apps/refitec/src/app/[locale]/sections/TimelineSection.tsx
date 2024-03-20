import { getImageProps } from "next/image";
import React from "react";
import HeadingText from "../components/HeadingText";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { linksObj } from "../links";
import { useTranslations } from "next-intl";

type Props = {};

type TimelineItemProps = {
  title: string;
  description: string;
  isFirst: boolean;
  reverse?: boolean;
};

const TimelineItem = ({
  title,
  description,
  isFirst,
  reverse,
}: TimelineItemProps) => (
  <div className="flex items-center gap-4">
    {!isFirst && (
      <span className="block h-[0.05rem] w-24 flex-shrink-0 bg-white"></span>
    )}
    <p className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-primary">
      {title}
    </p>

    <span className="block h-[0.05rem] w-24 flex-shrink-0 bg-white"></span>
    <span className="relative block h-4 w-4 flex-shrink-0 rounded-full bg-secondary">
      <span
        className={cn(
          "absolute  left-[50%] h-12 w-[0.05rem] translate-x-[-50%] bg-white",
          reverse ? "top-8" : "bottom-8",
        )}
      >
        <p
          className={cn(
            "absolute left-[50%] min-w-[30rem] translate-x-[-50%] text-center",
            reverse ? "top-full" : "bottom-full",
          )}
        >
          {description}
        </p>
      </span>
    </span>
  </div>
);

const TimelineSection = (props: Props) => {
  const t = useTranslations("Timeline");

  const {
    props: { src },
  } = getImageProps({
    src: "/imgs/milad-fakurian-seA-FPPXL-M-unsplash.jpg",
    alt: "purple and blue abstract waves illustration",
    fill: true,
    sizes: "100vw",
  });
  const infos = [
    {
      title: t("investmentDecision.title"),
      description: t("investmentDecision.description"),
    },
    {
      title: t("supplierSelection.title"),
      description: t("supplierSelection.description"),
    },
    {
      title: t("supplyContractsSigning.title"),
      description: t("supplyContractsSigning.description"),
    },
    {
      title: t("projectDevelopment.title"),
      description: t("projectDevelopment.description"),
    },
    {
      title: t("landAcquisition.title"),
      description: t("landAcquisition.description"),
    },
    {
      title: t("constructionStart.title"),
      description: t("constructionStart.description"),
    },
    {
      title: t("productionStart.title"),
      description: t("productionStart.description"),
    },
  ];

  return (
    <section
      className={`relative bg-cover bg-[center_top] text-white`}
      style={{ backgroundImage: `url(${src})` }}
      id={linksObj.timeline.href.replace("#", "")}
    >
      <div className="pointer-events-none absolute inset-0 bg-primary/60"></div>
      <section className="relative grid gap-32 py-32 my-container">
        <HeadingText variant="secondary" className="text-center">
          {t("title")}
        </HeadingText>
        <Carousel
          opts={{
            align: "start",
          }}
          className="grid w-full max-sm:mx-auto max-sm:w-[90%]"
        >
          <CarouselContent className="flex px-8 py-32">
            {infos.map(({ description, title }, i) => (
              <CarouselItem
                key={title}
                className="basis-auto last:basis-[35rem]"
              >
                <TimelineItem
                  title={title}
                  description={description}
                  isFirst={i === 0}
                  reverse={i % 2 === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </section>
  );
};

export default TimelineSection;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTranslations } from "next-intl/server";
import HeadingText from "../../components/HeadingText";
import { newsData } from "../data/newsData";
import NewsCard from "./NewsCard";
import { linksObj } from "../../links";

import { Suspense } from "react";

const NewsSection = async () => {
  const t = await getTranslations("News");

  return (
    <section
      id={linksObj.news.href.replace("#", "")}
      className="my-container grid gap-32 py-32"
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="grid w-full gap-10"
      >
        <header className="flex flex-wrap justify-between gap-4">
          <HeadingText variant="secondary" className="text-left">
            {t("title")}
          </HeadingText>
          <div className="relative flex w-fit items-center gap-4">
            <CarouselPrevious
              noStyle
              variant="default"
              className="relative rounded-md"
            />
            <CarouselNext
              noStyle
              variant="default"
              className="relative rounded-md"
            />
          </div>
        </header>
        <Suspense fallback={null}>
          <div className="grid mask-r-from-95% mask-l-from-95%">
            <CarouselContent className="-ml-8 py-2">
              {newsData.map((news) => (
                <CarouselItem
                  key={news.id}
                  className="basis-[28rem] pl-8 md:basis-[36rem]"
                >
                  <NewsCard news={news} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Suspense>
      </Carousel>
    </section>
  );
};

export default NewsSection;

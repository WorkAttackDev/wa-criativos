"use client";
import { Carousel, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import { MotionButton, MotionCarouselContent } from "@/lib/motion-index";
import { Variants } from "motion";
import Image from "next/image";
import { useQueryStates } from "nuqs";
import { useMemo } from "react";
import { brandsData, brandSearchParams } from "../data/data";

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: (_idx: number) => ({
    opacity: 1,
    y: 0,
  }),
};

export default function ProductCarousel() {
  const [brandParams] = useQueryStates(brandSearchParams);

  const activeBrand = useMemo(
    () => brandsData[brandParams.brand],
    [brandParams],
  );

  return (
    <Carousel
      opts={{
        align: "center",
        slidesToScroll: "auto",
      }}
      className="relative grid w-full gap-20"
    >
      <MotionCarouselContent
        key={activeBrand.name + "-products"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.5,
              staggerChildren: 0.1,
              when: "beforeChildren",
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="-ml-5 p-4"
      >
        {activeBrand.products.map((product) => (
          <CarouselItem
            key={product.alt}
            className="flex basis-1/2 items-center justify-center pl-5 sm:basis-1/3 lg:basis-1/4"
          >
            <MotionButton
              variants={buttonVariants}
              className="relative flex aspect-square items-center justify-center bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
            >
              <Image
                src={product.src}
                alt={product.alt}
                className="h-full w-full object-contain"
                placeholder="blur"
              />
            </MotionButton>
          </CarouselItem>
        ))}
      </MotionCarouselContent>
      <CarouselDots />
    </Carousel>
  );
}

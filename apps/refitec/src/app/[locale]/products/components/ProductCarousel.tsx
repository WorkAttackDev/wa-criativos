"use client";
import { Carousel, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import {
  MotionButton,
  MotionCarouselContent,
  MotionPicture,
} from "@/lib/motion-index";
import { cn } from "@/lib/utils";
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
      <div className="max-mdx:flex-col mdx:gap-32 flex items-center gap-10">
        <MotionPicture
          key={activeBrand.name + "-logo"}
          variants={{
            hidden: { opacity: 0, scale: 0, y: 100 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="aspect-square h-full w-full max-w-64 flex-2 transition-all duration-300"
        >
          <Image
            src={activeBrand.logo}
            alt={`${activeBrand.name} logo`}
            className={cn("aspect-square h-full w-full object-contain")}
          />
        </MotionPicture>
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
          className="-ml-5 flex-1 p-4"
        >
          {activeBrand.products.map((product) => (
            <CarouselItem
              key={product.alt}
              className="flex items-center justify-center pl-5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <MotionButton
                variants={buttonVariants}
                className="relative flex aspect-square items-center justify-center bg-white p-5 shadow-md"
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
      </div>
      <CarouselDots />
    </Carousel>
  );
}

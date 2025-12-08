"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { TranslatedTestimonialType } from "../data/testimonials";
import { cn } from "@/lib/utils";

const SlideItem = ({
  testimonial,
  index,
}: {
  testimonial: TranslatedTestimonialType;
  index: number;
}) => {
  const { api } = useCarousel();

  const currentIndex = api?.selectedScrollSnap() || 0;
  return (
    <CarouselItem className="basis-[30rem] pl-8 md:basis-[40rem]">
      <TestimonialCard
        className={cn(
          "h-full scale-80 justify-between transition-transform duration-500",
          currentIndex === index && "scale-110",
        )}
        testimonial={testimonial}
      />
    </CarouselItem>
  );
};

type TestimonialSliderProps = {
  className?: string;
  testimonials: TranslatedTestimonialType[];
};

const TestimonialSlider = ({
  testimonials,
  className,
}: TestimonialSliderProps) => {
  return (
    <Carousel
      opts={{ align: "center", loop: true }}
      className={cn("grid w-full gap-6", className)}
    >
      <div className="grid mask-r-from-95% mask-l-from-95%">
        <CarouselContent className="-ml-8 py-4">
          {testimonials.map((t, i) => (
            <SlideItem key={t.id} testimonial={t} index={i} />
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default TestimonialSlider;

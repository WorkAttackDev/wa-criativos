"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";

const TestimonialSlider = () => {
  return (
    <Carousel
      opts={{ align: "center", loop: true }}
      className="grid w-full gap-6"
    >
      <div className="grid mask-r-from-95% mask-l-from-95%">
        <CarouselContent className="-ml-8 py-2">
          {testimonials.map((t) => (
            <CarouselItem
              key={t.id}
              className="basis-[30rem] pl-8 md:basis-[40rem]"
            >
              <TestimonialCard
                className="h-full justify-between"
                testimonial={t}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default TestimonialSlider;

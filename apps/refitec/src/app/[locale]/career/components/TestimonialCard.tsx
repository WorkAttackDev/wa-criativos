"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { TranslatedTestimonialType } from "../data/testimonials";

const TestimonialCard = ({
  testimonial,
  className,
}: {
  testimonial: TranslatedTestimonialType;
  className?: string;
}) => {
  return (
    <article
      className={cn(
        "text-card bg-card/40 flex flex-col gap-5 p-5 shadow-sm backdrop-blur-lg",
        className,
      )}
    >
      <p className="line-clamp-5 leading-relaxed">
        &ldquo; {testimonial.quote} &rdquo;
      </p>
      <div className="flex items-center justify-between">
        <figure className="flex items-center gap-5">
          <Image
            src={testimonial.imgSrc}
            alt={testimonial.name}
            width={192}
            height={192}
            className="size-20 object-cover"
          />
          <figcaption className="grid">
            <h6 className="text-secondary text-2xl font-semibold">
              {testimonial.name}
            </h6>
            <p className="text-muted text-xl leading-tight">
              {testimonial.role}
            </p>
          </figcaption>
        </figure>
        <Quote className="text-muted size-16" strokeWidth={1} />
      </div>
    </article>
  );
};

export default TestimonialCard;

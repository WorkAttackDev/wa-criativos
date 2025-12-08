import HeadingText from "../../components/HeadingText";
import TestimonialSlider from "./TestimonialSlider";
import { testimonials, TranslatedTestimonialType } from "../data/testimonials";
import { getTranslations } from "next-intl/server";

const CareerInfo = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const t = await getTranslations("Career.testimonials");

  const translatedTestimonials: TranslatedTestimonialType[] = testimonials.map(
    (testimonial) => ({
      ...testimonial,
      role: t(testimonial.roleKey),
      quote: t(testimonial.quoteKey),
    }),
  );

  return (
    <div className="grid gap-10 text-white max-lg:justify-items-center">
      <HeadingText className="max-lg:text-center" variant="secondary">
        {title}
      </HeadingText>
      <p className="max-w-3xl leading-normal max-lg:text-center">
        {description}
      </p>
      <TestimonialSlider
        className="mt-4"
        testimonials={translatedTestimonials}
      />
    </div>
  );
};

export default CareerInfo;

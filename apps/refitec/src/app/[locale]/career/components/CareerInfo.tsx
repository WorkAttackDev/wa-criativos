import HeadingText from "../../components/HeadingText";
import TestimonialSlider from "./TestimonialSlider";

const CareerInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grid gap-10 text-white">
      <HeadingText variant="secondary">{title}</HeadingText>
      <p className="max-w-3xl leading-normal">{description}</p>
      <TestimonialSlider />
    </div>
  );
};

export default CareerInfo;

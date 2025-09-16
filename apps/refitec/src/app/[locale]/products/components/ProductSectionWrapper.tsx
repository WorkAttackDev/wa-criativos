"use client";

import { stagger } from "motion";
import { linksObj } from "../../links";
import { MotionSection } from "@/lib/motion-index";

type Props = {
  children: React.ReactNode;
};

const ProductSectionWrapper = ({ children }: Props) => {
  return (
    <MotionSection
      id={linksObj.products.href.replace("#", "")}
      className="my-container flex flex-col items-center gap-32 py-32"
      variants={{
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            ease: "easeIn",
            delayChildren: stagger(1),
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </MotionSection>
  );
};

export default ProductSectionWrapper;

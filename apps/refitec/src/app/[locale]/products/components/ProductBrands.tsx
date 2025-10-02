"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { brandSearchParams, brandsData } from "../data/data";
import { useQueryStates } from "nuqs";
import { useMemo } from "react";
import { MotionButton, MotionDiv } from "@/lib/motion-index";

const brands = Object.values(brandsData);

const motionVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type Props = {
  className?: string;
};

const ProductBrands = ({ className }: Props) => {
  const [brandParams, setBrandParams] = useQueryStates(brandSearchParams);

  const activeBrand = useMemo(
    () => brandsData[brandParams.brand],
    [brandParams],
  );

  return (
    <MotionDiv
      key={activeBrand.name + "-brands"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            when: "beforeChildren",
          },
        },
      }}
      className={cn(
        "flex shrink items-center justify-center gap-20",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {brands
        .filter((brand) => brand.name !== activeBrand.name)
        .map((brand) => (
          <MotionButton
            variants={motionVariants}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.1, ease: "easeIn" },
            }}
            key={`${brand.name}-${brand.id}`}
            onClick={() => setBrandParams({ brand: brand.id })}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-110",
            )}
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="aspect-square w-64"
            />
          </MotionButton>
        ))}
    </MotionDiv>
  );
};

export default ProductBrands;

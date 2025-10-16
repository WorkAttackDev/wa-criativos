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

  const activeBrandId = useMemo(() => brandParams.brand, [brandParams]);

  return (
    <MotionDiv
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
        "flex shrink items-center justify-center gap-5 sm:gap-10",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {brands.map((brand) => {
        const isActive = brand.id === activeBrandId;

        return (
          <MotionButton
            variants={motionVariants}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.05, ease: "linear" },
            }}
            key={`${brand.name}-${brand.id}`}
            onClick={() => setBrandParams({ brand: brand.id })}
            className={cn(
              `cursor-pointer rounded-lg p-5 px-10 transition-all duration-300 will-change-transform`,
              isActive ? "bg-muted/20" : "hover:bg-muted/10 hover:scale-95",
            )}
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              className={`aspect-square w-full max-w-36 object-contain lg:max-w-48`}
            />
          </MotionButton>
        );
      })}
    </MotionDiv>
  );
};

export default ProductBrands;

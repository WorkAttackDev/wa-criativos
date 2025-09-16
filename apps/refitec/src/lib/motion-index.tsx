"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import { CarouselContent } from "@/components/ui/carousel";

export const MotionArticle = m.article;
export const MotionDiv = m.div;
export const MotionImg = m.img;
export const MotionSection = m.section;
export const MotionPicture = m.picture;

export const MotionButton = m.button;

export const MotionCarouselContent = m.create(CarouselContent);

export const LazyMotionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};

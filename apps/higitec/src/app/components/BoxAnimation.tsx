"use client";
import { useEffect, useRef } from "react";
import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

const BoxAnimation = ({ children, delay }: Props) => {
  const [scope, animate] = useAnimate();
  //   const isInView = useInView(scope);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate(
      ":first-child",
      {
        opacity: [0, 1],
      },
      {
        duration: 1.3,
        ease: "easeInOut",
        delay,
      }
    );
    animate(
      "div",
      {
        scaleX: [0, 1, 1, 0],
        transformOrigin: ["0% 0%", "0% 0%", "100% 0%", "100% 0%"],
      },
      {
        duration: 1.3,
        ease: "easeInOut",
        delay,
      }
    );
  }, [animate]);

  return (
    <div ref={scope} className="relative">
      {children}
      <div
        ref={ref}
        className="-top-2 w-full scale-x-0 h-[120%] absolute inset-0 bg-white"
      />
    </div>
  );
};

export default BoxAnimation;

"use client";
import { ReactNode, useEffect, useRef } from "react";
import { useAnimate, useInView } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
};

const SlideInUpAnimation = ({ children, delay }: Props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (!isInView) return;

    const firstChild = scope.current.firstChild;
    if (!firstChild) return;

    animate(
      firstChild,
      {
        opacity: [0, 1, 1],
        y: [-1000, -100, 0],
        scale: [0.5, 0.5, 1],
      },
      {
        duration: 1,
        ease: "easeOut",
        delay,
      },
    );
  }, [animate, isInView, scope, delay]);

  return (
    <div ref={scope} className="relative overflow-hidden">
      {children}
    </div>
  );
};

export default SlideInUpAnimation;

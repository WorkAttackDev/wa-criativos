"use client";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

const BoxAnimation = ({ children, delay }: Props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
  });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstChild = scope.current.firstChild;
    if (!isInView || !divRef.current || !firstChild) return;
    animate(
      firstChild,
      {
        opacity: [0, 1],
      },
      {
        duration: 1.3,
        ease: "easeInOut",
        delay,
      },
    );
    animate(
      divRef.current,
      {
        scaleX: [0, 1, 1, 0],
        transformOrigin: ["0% 0%", "0% 0%", "100% 0%", "100% 0%"],
      },
      {
        duration: 1.3,
        ease: "easeInOut",
        delay,
      },
    );
  }, [animate, isInView, delay, divRef]);

  return (
    <div ref={scope} className="relative">
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child, {
              className: cn(child.props.className, "opacity-0"),
            } as React.HTMLAttributes<HTMLElement>)
          : child,
      )}
      <div
        ref={divRef}
        className="-top-2 w-full scale-x-0 h-[120%] absolute inset-0 bg-white"
      />
    </div>
  );
};

export default BoxAnimation;

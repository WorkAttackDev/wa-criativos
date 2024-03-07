"use client";
import { cn } from "@/lib/utils";
import { useAnimate, useInView } from "framer-motion";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const BoxAnimation: React.FC<Props> = ({ children, className, delay }) => {
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
    <div ref={scope} className={cn("relative", className)}>
      {Children.map(children, (child) =>
        isValidElement<React.HTMLAttributes<HTMLElement>>(child)
          ? cloneElement(child, {
              className: cn(child.props.className, "opacity-0"),
            })
          : child,
      )}
      <div
        ref={divRef}
        className="absolute inset-0 -top-2 h-[120%] w-full scale-x-0 bg-white"
      />
    </div>
  );
};

export default BoxAnimation;

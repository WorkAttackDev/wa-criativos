"use client";
import {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import { useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

const SlideInUpZoomAnimation = ({
  children,
  delay,
  duration = 1,
  className,
}: Props) => {
  const [scope, animate] = useAnimate();
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (!isInView) return;

    const firstChild = scope.current.firstChild;
    if (!firstChild || !divRef.current) return;

    animate(
      firstChild,
      {
        scale: [1.2, 1],
      },
      {
        duration: duration / 3,
        ease: "easeOut",
        delay,
      },
    );

    animate(
      divRef.current,
      {
        y: [0, 500],
      },
      {
        duration,
        ease: "easeOut",
        delay,
      },
    );
  }, [animate, isInView, scope, delay]);

  return (
    // escrever artigo sobre esse código
    <div ref={scope} className={cn("relative overflow-hidden", className)}>
      {Children.map(children, (child) =>
        isValidElement<React.HTMLAttributes<HTMLElement>>(child)
          ? cloneElement(child, {
              className: cn(child.props.className, "scale-150 "),
            })
          : child,
      )}
      <div
        ref={divRef}
        className="absolute inset-0 left-0 top-0 h-[120%] w-full  bg-white"
      />
    </div>
  );
};

export default SlideInUpZoomAnimation;

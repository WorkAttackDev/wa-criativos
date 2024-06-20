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

const FadeInAnimation = ({
  children,
  delay,
  duration = 1,
  className,
}: Props) => {
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
        opacity: [0, 1],
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
              className: cn(child.props.className, "opacity-0"),
            })
          : child,
      )}
    </div>
  );
};

export default FadeInAnimation;

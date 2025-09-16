"use client";
import {
  animate,
  DOMKeyframesDefinition,
  inView,
  stagger as staggerFn,
} from "motion";

import {
  Children,
  cloneElement,
  HtmlHTMLAttributes,
  isValidElement,
  ReactNode,
  useLayoutEffect,
  useRef,
} from "react";

type Props = {
  selector?: Element | Element[] | NodeListOf<Element> | string;
  stagger?: boolean;
  duration?: number;
  delay?: number;
  keyframes: DOMKeyframesDefinition;
};

export interface ElementProps extends HtmlHTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

export const MotionAnim = ({
  children,
  ...props
}: Props & { children: ReactNode }) => {
  const { selector, stagger = false, duration = 0.7, delay = 0 } = props || {};
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const _sel =
      typeof selector === "string"
        ? ref.current.querySelectorAll(selector)
        : selector || ref.current;

    animate(_sel, { opacity: 0 }, { duration: 0 });

    const stop = inView(
      ref.current,
      () => {
        animate(_sel, props.keyframes, {
          duration,
          delay: stagger ? staggerFn(delay) : delay,
          ease: "easeOut",
        });
        return () => stop();
      },
      { amount: 0.4 },
    );
    return () => stop();
  }, [ref]);

  return (
    <>
      {Children.map(children, (child) =>
        isValidElement<ElementProps>(child)
          ? cloneElement(child, { ref })
          : child,
      )}
    </>
  );
};

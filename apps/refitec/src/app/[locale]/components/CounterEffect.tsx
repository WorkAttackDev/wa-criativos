"use client";

import { animate, inView } from "motion";
import { useEffect, useRef } from "react";

type Props = {
  from: number;
  to: number;
  className?: string;
};

const CounterEffect: React.FC<Props> = ({ from, to, className }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const stop = inView(
      ref.current,
      () => {
        animate(from, to, {
          duration: 2,
          onUpdate(value) {
            if (!ref.current) return;
            ref.current.textContent = Number(value.toFixed(0)).toLocaleString(
              "de",
            );
          },
        });

        return () => stop();
      },
      { amount: 0.4 },
    );
    return () => stop();
  }, [from, to]);

  return (
    <b className={className} ref={ref}>
      {from}
    </b>
  );
};

export default CounterEffect;

"use client";

import { useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  from: number;
  to: number;
  className?: string;
};

const CounterEffect: React.FC<Props> = ({ from, to, className }) => {
  const [scope, animate] = useAnimate<HTMLParagraphElement>();
  const onceRef = useRef(false);
  const isInView = useInView(scope, {
    margin: "-10%",
  });

  useEffect(() => {
    if (isInView && !onceRef.current) {
      animate(from, to, {
        duration: 2,
        onUpdate(value) {
          scope.current.textContent = Number(value.toFixed(0)).toLocaleString(
            "de",
          );
        },
      });

      onceRef.current = true;
    }

    // return () => controls.stop();
  }, [scope, from, isInView, to]);

  return (
    <b className={className} ref={scope}>
      {from}
    </b>
  );
};

export default CounterEffect;

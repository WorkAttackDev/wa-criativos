"use client";

import { useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const CounterEffect = ({
  from,
  to,
  className,
}: {
  from: number;
  to: number;
  className?: string;
}) => {
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
          scope.current.textContent = value.toFixed(0);
        },
      });

      onceRef.current = true;
    }

    // return () => controls.stop();
  }, [scope, from, isInView, to]);

  return (
    <p className={className} ref={scope}>
      {from}
    </p>
  );
};

export default CounterEffect;

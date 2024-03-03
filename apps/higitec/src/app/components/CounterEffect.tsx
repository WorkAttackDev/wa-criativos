"use client";

import { useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const CounterEffect = (
  {
      from,
      to,
      className,
    }: {
      from: number;
      to: number;
      className?: string;
    }
) => {
    const [scope, animate] = useAnimate<HTMLParagraphElement>();
    const onceRef = useRef(false);
    const isInView = useInView(scope, {
      margin: "-10%",
    });
  
    useEffect(() => {
      const node = scope.current;
  
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
        autoplay: false,
      });
  
      if (isInView && !onceRef.current) {
        controls.play();
        onceRef.current = true;
      }

  
      return () => controls.stop();
    }, [scope, from, isInView, to]);
  
    return (
      <p className={className} ref={scope}>
        {from}
      </p>
    );
  };

export default CounterEffect;
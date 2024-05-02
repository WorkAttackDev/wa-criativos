import { useDeferredValue, useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const deferredScrollPosition = useDeferredValue(scrollPosition);
  const hasScrolled = useDeferredValue(scrollPosition > 0.03);

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollPercentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);

      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return { y: deferredScrollPosition, hasScrolled };
};

export default useScroll;

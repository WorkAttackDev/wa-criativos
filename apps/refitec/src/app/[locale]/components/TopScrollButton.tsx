"use client";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const TopScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > document.documentElement.scrollHeight * 0.4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    isVisible && (
      <Button
        size="icon"
        title="Voltar para o topo da página"
        onClick={() => window.scrollTo(0, 0)}
        className="fixed bottom-6 right-6 mdx:bottom-8 mdx:right-16 z-50"
        aria-label="Voltar para o topo da página"
      >
        <ChevronUp className="w-10 h-10 " strokeWidth={1.5} />
      </Button>
    )
  );
};

export default TopScrollButton;

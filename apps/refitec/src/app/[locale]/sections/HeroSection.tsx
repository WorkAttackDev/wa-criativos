"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { inView } from "motion";

type Props = {};

const HeroSection = (_: Props) => {
  const t = useTranslations("Hero");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isNowFullScreen = !!document.fullscreenElement;
      setIsFullScreen(isNowFullScreen);

      if (isNowFullScreen && videoRef.current) {
        videoRef.current.volume = 0.5;
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const stopInView = inView(
      section,
      () => {
        video.play();
        return () => {
          video.pause();
          video.currentTime = 0;
        };
      },
      { amount: 0.5 },
    );

    return () => {
      stopInView();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={
        "relative h-[70vh] max-h-[60rem] min-h-[40rem] text-white sm:h-[80vh] sm:max-h-[100rem] sm:min-h-[65rem]"
      }
    >
      <video
        ref={videoRef}
        autoPlay
        muted={!isFullScreen}
        loop
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src="/vids/refitec-intro-xl.webm" type="video/webm" />
        <source src="/vids/refitec-intro-xl.mp4" type="video/mp4" />
      </video>
      <div
        className={cn(
          "from-primary/60 to-foreground/80 absolute inset-0 bg-linear-to-tr transition-opacity duration-500",
          isFullScreen ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      ></div>
      <article
        className={cn(
          "my-container relative flex h-full flex-col justify-center gap-16 py-32",
          isFullScreen ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <article
          className={`my-auto flex flex-col items-start justify-center gap-16 pb-10`}
        >
          <h3 className="w-full text-2xl uppercase drop-shadow sm:text-3xl lg:text-4xl">
            {t("welcome")}
          </h3>
          <h1 className="w-full text-5xl !leading-tight font-bold text-balance drop-shadow sm:text-6xl lg:text-7xl">
            {t("slogan")}
          </h1>
          <Button
            variant="secondary"
            onClick={() => {
              videoRef.current?.play();
              videoRef.current?.requestFullscreen();
            }}
          >
            <Play className="mr-2" />
            {t("watchVideo")}
          </Button>
        </article>
      </article>
    </section>
  );
};

export default HeroSection;

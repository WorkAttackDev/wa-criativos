import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {};

const HeroSection = (_: Props) => {
  const t = useTranslations("Hero");

  return (
    <section
      className={
        "relative h-[70vh] max-h-[60rem] min-h-[40rem] text-white sm:h-[80vh] sm:max-h-[100rem] sm:min-h-[65rem]"
      }
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source
          src="/vids/6001136_Craft_Crafting_Beer_1280x720.mp4"
          type="video/mp4"
        />
      </video>
      <div className="from-primary/60 to-foreground/80 absolute inset-0 bg-linear-to-tr"></div>
      <article className="my-container relative flex h-full flex-col justify-center gap-16 py-32">
        <article
          className={`my-auto flex flex-col items-start justify-center gap-16 pb-10`}
        >
          <h3 className="w-full text-2xl uppercase drop-shadow sm:text-3xl lg:text-4xl">
            {t("welcome")}
          </h3>
          <h1 className="w-full text-5xl !leading-tight font-bold text-balance drop-shadow sm:text-6xl lg:text-7xl">
            {t("slogan")}
          </h1>
          <Button variant="secondary">
            <Play />
            {t("watchVideo")}
          </Button>
        </article>
      </article>
    </section>
  );
};

export default HeroSection;

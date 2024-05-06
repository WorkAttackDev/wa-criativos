import { useTranslations } from "next-intl";
import BoxAnimation from "../components/BoxAnimation";

type Props = {};

const HeroSection = (_: Props) => {
  const t = useTranslations("Hero");

  return (
    <section
      className={`relative h-[60vh] max-h-[50rem] min-h-[40rem] bg-cover bg-[center_40%] text-white sm:h-[80vh]  sm:max-h-[100rem] sm:min-h-[50rem]`}
      style={{
        backgroundImage: `url(/imgs/oil-bottles.jpg)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-foreground/40"></div>
      <div className="relative flex h-full  flex-col justify-center gap-16 py-32 my-container ">
        <article
          className={`my-auto flex flex-col items-start justify-center gap-16`}
        >
          <BoxAnimation>
            <h3 className="w-full text-3xl  font-semibold uppercase drop-shadow lg:text-4xl">
              {t("welcome")}
            </h3>
          </BoxAnimation>
          <BoxAnimation delay={0.5}>
            <h1 className="w-full text-6xl font-bold !leading-tight drop-shadow md:max-w-6xl lg:text-7xl">
              {t("sloganPart1")}
              <br />
              {t("sloganPart2")}
            </h1>
          </BoxAnimation>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;

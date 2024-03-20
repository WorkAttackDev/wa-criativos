import { cn } from "@/lib/utils";
import { getImageProps } from "next/image";
import HeadingText from "../components/HeadingText";
import { linksObj } from "../links";
import CounterEffect from "../components/CounterEffect";
import { useTranslations } from "next-intl";

const InNumbersSection = () => {
  const t = useTranslations("InNumbers");

  const {
    props: { src },
  } = getImageProps({
    alt: "Silos background image",
    fill: true,
    sizes: "100vw",
    src: "/imgs/silos.jpg",
    quality: 100,
  });

  const infos = [
    {
      value: 500_000,
      label: t("dailyProcessingCapacity"),
    },
    {
      value: 1_000_000,
      label: t("dailyPackagingCapacity"),
    },
    {
      value: 84_440,
      label: t("totalArea"),
    },
  ];

  return (
    <section
      className="relative grid gap-32 bg-cover bg-center py-32 my-container"
      style={{
        background: `url(${src})`,
      }}
      id={linksObj.inNumbers.href.replace("#", "")}
    >
      <div className="pointer-events-none absolute inset-0 bg-foreground/60"></div>
      <header className="relative grid justify-center gap-12 text-center">
        <HeadingText variant="secondary" className="text-center">
          {t("title")}
        </HeadingText>
        <p className="text-white">{t("description")}</p>
      </header>
      <ul className="relative flex flex-wrap items-center justify-center gap-16 text-white lg:gap-32">
        {infos.map(({ value, label }) => (
          <li
            key={label}
            className={cn("flex flex-col items-center justify-center gap-8")}
          >
            <CounterEffect className="text-8xl font-bold" from={0} to={value} />
            <p className="text-xl uppercase">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InNumbersSection;

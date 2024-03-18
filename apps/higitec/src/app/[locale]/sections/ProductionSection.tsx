import { cn } from "@/lib/utils";
import FeatherBgSection from "../components/FeatherBgSection";
import HeadingText from "../components/HeadingText";
import { linksObj } from "../links";
import CounterEffect from "../components/CounterEffect";
import { useTranslations } from "next-intl";

type Props = {};

const ProductionSection = (_: Props) => {
  const t = useTranslations("Production");
  const sizeMap = {
    sm: {
      width: 60,
      height: 60,
    },
    md: {
      width: 80,
      height: 80,
    },
  };

  const productionInfo: {
    title: string;
    unit?: string;
    description: string;
    iconSrc: string;
    size: "sm" | "md";
    value: number;
  }[] = [
    {
      title: t("mil"),
      unit: t("tons"),
      description: t("cleaningProducts"),
      iconSrc: "/imgs/production-icon-1.svg",
      size: "md",
      value: 120,
    },
    {
      title: t("mil"),
      unit: t("tons"),
      description: t("hygieneProducts"),
      iconSrc: "/imgs/production-icon-2.svg",
      size: "md",
      value: 20,
    },
    {
      title: t("mil"),
      unit: t("tons"),
      description: t("paper"),
      iconSrc: "/imgs/production-icon-3.svg",
      size: "md",
      value: 10,
    },
    {
      title: t("millions"),
      description: t("diapers"),
      iconSrc: "/imgs/production-icon-4.svg",
      size: "sm",
      value: 3,
    },
    {
      title: t("tons"),
      description: t("soap"),
      iconSrc: "/imgs/production-icon-5.svg",
      size: "sm",
      value: 6,
    },
  ];

  return (
    <FeatherBgSection
      className="grid gap-32 py-32"
      id={linksObj.production.href.replace("#", "")}
    >
      <HeadingText className="uppercase">{t("title")}</HeadingText>
      <ul className="flex flex-wrap items-center justify-start gap-x-16 gap-y-24 sm:justify-center">
        {productionInfo.map((info, i) => (
          <li
            key={info.iconSrc}
            className={cn(
              "grid grid-cols-[auto_auto] grid-rows-[auto_auto_auto] items-start gap-x-8 uppercase text-secondary",
            )}
          >
            <img
              className={cn(
                "row-span-full object-contain",
                info.size === "sm" ? "size-24" : "size-32",
              )}
              src={info.iconSrc}
              alt={info.title}
              width={sizeMap[info.size].width}
              height={sizeMap[info.size].height}
            />
            <h3 className="text-6xl font-bold">
              <CounterEffect from={0} to={info.value} className="inline" />{" "}
              {info.title}
            </h3>
            <p className="text-4xl font-bold">{info.unit}</p>
            <p>{info.description}</p>
          </li>
        ))}
      </ul>
    </FeatherBgSection>
  );
};

export default ProductionSection;

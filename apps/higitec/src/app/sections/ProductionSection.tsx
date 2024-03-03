import { cn } from "@/lib/utils";
import FeatherBgSection from "../components/FeatherBgSection";
import HeadingText from "../components/HeadingText";
import { linksObj } from "../links";
import CounterEffect from "../components/CounterEffect";

const productionInfo: {
  title: string;
  unit?: string;
  description: string;
  iconSrc: string;
  size: "sm" | "md";
  value: number;
}[] = [
  {
    title: "mil",
    unit: "toneladas",
    description: "De produtos de limpeza por ano",
    iconSrc: "/imgs/production-icon-1.svg",
    size: "md",
    value: 120,
  },
  {
    title: "mil",
    unit: "toneladas",
    description: "de produtos de higiene por ano",
    iconSrc: "/imgs/production-icon-2.svg",
    size: "md",
    value: 20,
  },
  {
    title: "mil",
    unit: "toneladas",
    description: "De papel diverso por ano",
    iconSrc: "/imgs/production-icon-3.svg",
    size: "md",
    value: 10,
  },
  {
    title: "milhões",
    description: "De fraldas por dia",
    iconSrc: "/imgs/production-icon-4.svg",
    size: "sm",
    value: 3,
  },
  {
    title: "toneladas",
    description: "De sabão e sabonetes por hora",
    iconSrc: "/imgs/production-icon-5.svg",
    size: "sm",
    value: 6,
  },
];

type Props = {};

const ProductionSection = (_: Props) => {
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

  return (
    <FeatherBgSection
      className="grid gap-32 py-32"
      id={linksObj.production.href.replace("#", "")}
    >
      <HeadingText className="uppercase">Produção</HeadingText>
      <ul className="flex flex-wrap justify-center items-center gap-x-16 gap-y-24">
        {productionInfo.map((info, i) => (
          <li
            key={info.iconSrc}
            className={cn(
              "grid gap-x-8 items-start text-secondary uppercase grid-cols-[auto_auto] grid-rows-[auto_auto_auto]",
              i % 2 === 0
                ? ""
                : "justify-items-end text-end sm:justify-items-start sm:text-start"
            )}
          >
            <img
              className={cn(
                "row-span-full object-contain",
                info.size === "sm" ? "size-24" : "size-32",
                i % 2 === 0 ? "" : "col-start-2 sm:col-start-auto"
              )}
              src={info.iconSrc}
              alt={info.title}
              width={sizeMap[info.size].width}
              height={sizeMap[info.size].height}
            />
            <h3 className="text-6xl font-bold">
              <CounterEffect from={0} to={info.value} className="inline" />{" "}
              {info.title}</h3>
            <p className="text-4xl font-bold">{info.unit}</p>
            <p>{info.description}</p>
          </li>
        ))}
      </ul>
    </FeatherBgSection>
  );
};

export default ProductionSection;

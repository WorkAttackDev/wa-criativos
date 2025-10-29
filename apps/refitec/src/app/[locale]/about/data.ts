import WhoWeAreImg from "@/assets/imgs/refitec-oils.jpg";
import SustainabilityImg from "@/assets/imgs/factory.jpeg";
import MissionImg from "@/assets/imgs/bottle-of-oil-and-soy-bean.jpg";
import MissionImg from "@/assets/imgs/bottle-of-oil-and-soy-bean.jpg";
import VisionImg from "@/assets/imgs/smiling-young-customer-holding-bottle-oil.jpg";
import ValuesImg from "@/assets/imgs/sustainability.jpg";

// export type AboutTFunction = ReturnType<typeof useTranslations<"About">>;

export const AboutInfo = [
  {
    items: undefined,
    titleKey: "whoWeAre",
    textKey: "whoWeAreText",
    img: WhoWeAreImg,
    type: "article",
  },
  {
    items: undefined,
    titleKey: "mission",
    textKey: "missionText",
    img: MissionImg,
    type: undefined,
  },
  {
    items: undefined,
    titleKey: "vision",
    textKey: "visionText",
    img: VisionImg,
    type: undefined,
  },
  {
    items: undefined,
    titleKey: "values",
    textKey: "valuesText",
    img: ValuesImg,
    type: undefined,
  },
  {
    titleKey: undefined,
    textKey: undefined,
    items: [
      {
        titleKey: "factory",
        textKey: "factoryText",
      },
      {
        titleKey: "sustainability",
        textKey: "sustainabilityText",
      },
    ],
    img: SustainabilityImg,
    type: "article-items",
  },
] as const;

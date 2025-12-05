import MissionImg from "@/assets/imgs/bottle-of-oil-and-soy-bean.jpg";
import FactoryTopImg from "@/assets/imgs/refitec-factory-top.jpg";
import FactoryImg from "@/assets/imgs/refitec-factory.jpg";
import OilsImg from "@/assets/imgs/refitec-oils.jpg";
import ValuesImg from "@/assets/imgs/sustainability.jpg";

export const AboutInfo = [
  {
    items: undefined,
    titleKey: "whoWeAre",
    textKey: "whoWeAreText",
    img: FactoryImg,
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
    img: OilsImg,
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
    img: FactoryTopImg,
    type: "article-items",
  },
] as const;

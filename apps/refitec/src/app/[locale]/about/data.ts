import MissionImg from "@/assets/imgs/bottling-line-sunflower-oil-bottles-vegetable-oil-production-plant-high.jpg";
import VisionImg from "@/assets/imgs/man-handling-machine.jpg";
import Worker1 from "@/assets/imgs/worker-1.jpg";
import ValuesImg from "@/assets/imgs/worker-touching-tablet.jpg";

// export type AboutTFunction = ReturnType<typeof useTranslations<"About">>;

export const AboutInfo = [
  {
    items: undefined,
    titleKey: "whoWeAre",
    textKey: "whoWeAreText",
    img: Worker1,
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
    img: Worker1,
    type: "article-items",
  },
] as const;

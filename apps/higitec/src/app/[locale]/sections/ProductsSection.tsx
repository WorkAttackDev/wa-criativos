import React from "react";
import HeadingText from "../components/HeadingText";
import Image from "next/image";
import { linksObj } from "../links";
import { useTranslations } from "next-intl";

type Props = {};

const ProductsSection = (_: Props) => {
  const t = useTranslations("Products");

  const categories = [
    {
      name: t("diaper"),
      brands: [
        { name: "Mimo", imgSrc: "/imgs/brand.png" },
        { name: "Naval", imgSrc: "/imgs/brand-1.png" },
        { name: "Noddy", imgSrc: "/imgs/brand-2.png" },
        { name: "Kido", imgSrc: "/imgs/brand-3.png" },
      ],
    },
    {
      name: t("soap"),
      brands: [
        { name: "Confiança", imgSrc: "/imgs/brand-4.png" },
        { name: "Sabom", imgSrc: "/imgs/brand-5.png" },
        { name: "Topic", imgSrc: "/imgs/brand-6.png" },
        { name: "Clara", imgSrc: "/imgs/brand-7.png" },
        { name: "Mosi & Mosi Active", imgSrc: "/imgs/brand-8.png" },
      ],
    },
  ];
  return (
    <section
      id={linksObj.ourBrands.href.replace("/#", "")}
      className="grid gap-32 bg-white py-32 my-container"
    >
      <span className="grid gap-8">
        <HeadingText className="uppercase">{t("title")}</HeadingText>
        <p>{t("description")}</p>
      </span>
      {categories.map((category) => (
        <section key={category.name} className="grid gap-4">
          <HeadingText className="uppercase" size="sm">
            {category.name}
          </HeadingText>
          <ul className="flex snap-x snap-mandatory gap-16 overflow-x-auto ">
            {category.brands.map((brand) => (
              <li
                key={brand.name}
                className="group relative flex-shrink-0 snap-start "
              >
                <Image
                  src={brand.imgSrc}
                  alt={brand.name}
                  width={250}
                  height={250}
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/30 text-3xl font-medium text-white opacity-0 backdrop-blur-sm duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100">
                  {brand.name}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};

export default ProductsSection;

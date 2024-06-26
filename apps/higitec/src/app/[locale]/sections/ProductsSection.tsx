import React from "react";
import HeadingText from "../components/HeadingText";
import Image from "next/image";
import { linksObj } from "../links";
import { useTranslations } from "next-intl";
import { MousePointerClick } from "lucide-react";
import ProductsSectionItems from "./ProductsSectionItems";

type Props = {};

const ProductsSection = (_: Props) => {
  const t = useTranslations("Products");

  const categories = [
    {
      name: t("diaper"),
      imgSrc: "/imgs/woman-manufacturing-diapers.jpg",
      brands: [
        { name: "Mimo", imgSrc: "/imgs/brand.jpg" },
        { name: "Naval", imgSrc: "/imgs/brand-1.jpg" },
        { name: "Noddy", imgSrc: "/imgs/brand-2.jpg" },
        { name: "Kido", imgSrc: "/imgs/brand-3.jpg" },
      ],
    },
    {
      name: t("washingSoap"),
      imgSrc: "/imgs/man-stacking-soap-bars.jpg",
      brands: [
        { name: "Confiança", imgSrc: "/imgs/brand-4.jpg" },
        { name: "Confiança", imgSrc: "/imgs/brand-9.jpg" },
        { name: "Sabom", imgSrc: "/imgs/brand-5.jpg" },
        { name: "Sabom", imgSrc: "/imgs/brand-10.jpg" },
        { name: "Sabom", imgSrc: "/imgs/brand-12.jpg" },
        { name: "Clara", imgSrc: "/imgs/brand-11.jpg" },
        { name: "Topic", imgSrc: "/imgs/brand-6.jpg" },
      ],
    },
    {
      name: t("soap"),
      imgSrc: "/imgs/woman-looking-to-soap-pack.jpg",
      brands: [
        {
          name: "Mossi & Mossi Active",
          imgSrc: "/imgs/brand-13.jpg",
          description: t("soupOneDescription"),
        },
        {
          name: "Mossi & Mossi Active",
          imgSrc: "/imgs/brand-14.jpg",
          description: t("soupTwoDescription"),
        },
        {
          name: "Mossi & Mossi Active",
          imgSrc: "/imgs/brand-7.jpg",
          description: t("soupThreeDescription"),
        },
        {
          name: "Mossi & Mossi Active",
          imgSrc: "/imgs/brand-8.jpg",
          description: t("soupFourDescription"),
        },
      ],
    },
  ];

  return (
    <section
      id={linksObj.ourBrands.href.replace("/#", "")}
      className="grid place-items-center gap-32 bg-white py-32 text-center my-container"
    >
      <span className="grid gap-8">
        <HeadingText className="uppercase">{t("title")}</HeadingText>
        <p>{t("description")}</p>
      </span>

      <ProductsSectionItems categories={categories} />
    </section>
  );
  // return (
  //   <section
  //     id={linksObj.ourBrands.href.replace("/#", "")}
  //     className="grid gap-32 bg-white py-32 my-container"
  //   >
  //     <span className="grid gap-8">
  //       <HeadingText className="uppercase">{t("title")}</HeadingText>
  //       <p>{t("description")}</p>
  //     </span>
  //     {categories.map((category) => (
  //       <section key={category.name} className="grid gap-4">
  //         <HeadingText className="uppercase" size="sm">
  //           {category.name}
  //         </HeadingText>
  //         <ul className="flex snap-x snap-mandatory gap-16 overflow-x-auto ">
  //           {category.brands.map((brand) => (
  //             <li
  //               key={brand.name}
  //               className="group relative flex flex-shrink-0 snap-start "
  //             >
  //               <Image
  //                 src={brand.imgSrc}
  //                 alt={brand.name}
  //                 width={250}
  //                 height={250}
  //                 className="object-contain"
  //                 quality={90}
  //               />
  //               <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/30 text-3xl font-medium text-white opacity-0 backdrop-blur-sm duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100">
  //                 {brand.name}
  //               </div>
  //             </li>
  //           ))}
  //         </ul>
  //       </section>
  //     ))}
  //   </section>
  // );
};

export default ProductsSection;

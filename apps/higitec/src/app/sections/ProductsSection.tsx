import React from "react";
import HeadingText from "../components/HeadingText";
import Image from "next/image";
import { linksObj } from "../links";

const categories = [
  {
    name: "Fraldas",
    brands: [
      { name: "Mimo", imgSrc: "/imgs/brand.png" },
      { name: "Naval", imgSrc: "/imgs/brand-1.png" },
      { name: "Noddy", imgSrc: "/imgs/brand-2.png" },
      { name: "Kido", imgSrc: "/imgs/brand-3.png" },
    ],
  },
  {
    name: "Sabonetes",
    brands: [
      { name: "Confiança", imgSrc: "/imgs/brand-4.png" },
      { name: "Sabom", imgSrc: "/imgs/brand-5.png" },
      { name: "Topic", imgSrc: "/imgs/brand-6.png" },
      { name: "Clara", imgSrc: "/imgs/brand-7.png" },
      { name: "Mosi & Mosi Active", imgSrc: "/imgs/brand-8.png" },
    ],
  },
];

type Props = {};

const ProductsSection = (_: Props) => {
  return (
    <section
      id={linksObj.ourBrands.href.replace("#", "")}
      className="my-container grid gap-32 bg-white py-32"
    >
      <span className="grid gap-8">
        <HeadingText className="uppercase">Os Nossos Produtos</HeadingText>
        <p>
          Oferecemos uma gama de produtos que afirmam qualidade a preços
          acessíveis. Explore o nosso catálogo e eleve as suas ofertas de
          retalho.
        </p>
      </span>
      {categories.map((category) => (
        <section key={category.name} className="grid gap-4">
          <HeadingText className="uppercase" size="sm">
            {category.name}
          </HeadingText>
          <ul className="flex overflow-x-auto gap-16 snap-x snap-mandatory ">
            {category.brands.map((brand) => (
              <li
                key={brand.name}
                className="snap-start relative group flex-shrink-0 "
              >
                <Image
                  src={brand.imgSrc}
                  alt={brand.name}
                  width={250}
                  height={250}
                  className="object-contain"
                />
                <div className="absolute inset-0 text-3xl font-medium text-white flex items-center pointer-events-none opacity-0 duration-300 ease-out justify-center bg-foreground/30 backdrop-blur-sm group-hover:opacity-100 group-hover:pointer-events-auto">
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

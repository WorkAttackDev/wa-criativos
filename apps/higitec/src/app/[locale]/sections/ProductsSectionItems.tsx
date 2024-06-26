"use client";
import { ArrowUp, MousePointerClick } from "lucide-react";
import Image from "next/image";
import HeadingText from "../components/HeadingText";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { linksObj } from "../links";
import SlideInUpZoomAnimation from "../components/animations";

type CategoryItem = {
  name: string;
  imgSrc: string;
  brands: {
    name: string;
    imgSrc: string;
  }[];
};

type Props = {
  categories: CategoryItem[];
};

const ProductsSectionItems = ({ categories }: Props) => {
  const [selectedItem, setSelectedItem] = useState<CategoryItem>(categories[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseProductsList = () => {
    setIsOpen(!isOpen);
    document
      .getElementById(linksObj.ourBrands.href.replace("/#", ""))
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="grid place-items-center">
      <article
        className={cn(
          "grid gap-16 transition-[grid-template-rows] duration-300 ease-out",
          !isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <ul
          className={cn(
            "grid gap-16 overflow-hidden duration-300 ease-out sm:grid-cols-3",
          )}
        >
          {categories.map((category, i) => (
            <li
              key={category.imgSrc}
              className="relative grid place-items-center gap-8"
            >
              <HeadingText size="sm" className="uppercase">
                {category.name}
              </HeadingText>
              <SlideInUpZoomAnimation duration={1} delay={i * 0.5}>
                <button
                  className={cn(
                    "group relative outline-primary duration-300 ease-out",
                    selectedItem?.name === category.name && "bg-primary/20",
                  )}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setSelectedItem(category);
                    setTimeout(() => {
                      document
                        .getElementById("category-products")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }, 400);
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/30 text-4xl font-medium text-white opacity-0 backdrop-blur-sm duration-300 ease-out group-hover:opacity-100 group-focus:opacity-100">
                    <MousePointerClick className="h-16 w-16" strokeWidth={1} />
                  </div>
                  <Image
                    src={category.imgSrc}
                    alt={category.name}
                    width={720}
                    height={720}
                    className="aspect-square h-auto w-[25rem] object-cover"
                    quality={90}
                  />
                </button>
              </SlideInUpZoomAnimation>
            </li>
          ))}
        </ul>
      </article>
      <section
        key={selectedItem.name}
        id="category-products"
        className={cn(
          "grid scroll-mt-56 transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <article className="grid place-items-center gap-16 overflow-hidden">
          <button
            className="relative flex w-fit items-center justify-center gap-4 text-foreground underline underline-offset-8 duration-300 ease-out hover:text-primary focus:text-primary"
            onClick={handleCloseProductsList}
          >
            <HeadingText
              className="flex items-center justify-center uppercase text-inherit"
              size="sm"
            >
              {selectedItem.name}
            </HeadingText>
            <ArrowUp className="h-8 w-8" strokeWidth={2} />
          </button>
          <ul className="flex snap-x snap-mandatory gap-16 overflow-x-auto max-sm:snap-center">
            {selectedItem.brands.map((brand) => (
              <li
                key={brand.name}
                className="group relative flex flex-shrink-0 snap-start"
              >
                <Image
                  src={brand.imgSrc}
                  alt={brand.name}
                  width={250}
                  height={250}
                  className="aspect-square object-contain"
                  quality={90}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/30 text-3xl font-medium text-white opacity-0 backdrop-blur-sm duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100">
                  {brand.name}
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
};

export default ProductsSectionItems;

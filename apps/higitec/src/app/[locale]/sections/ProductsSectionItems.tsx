"use client";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import HeadingText from "../components/HeadingText";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SlideInUpZoomAnimation from "../components/animations";
import ProductsCategoryItems from "./ProductsCategoryItems";

const ProductCategories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  isOpen,
  setIsOpen,
}: {
  categories: CategoryItem[];
  selectedCategory: CategoryItem;
  setSelectedCategory: (category: CategoryItem) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
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
                autoFocus={i === 0 && !isOpen}
                tabIndex={!isOpen ? 0 : -1}
                className={cn(
                  "group relative outline-primary duration-300 ease-out",
                  selectedCategory?.name === category.name && "bg-primary/20",
                )}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setSelectedCategory(category);
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
  );
};

export type CategoryItem = {
  name: string;
  imgSrc: string;
  brands: {
    name: string;
    imgSrc: string;
    description?: string;
  }[];
};

type Props = {
  categories: CategoryItem[];
};

const ProductsSectionItems = ({ categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem>(
    categories[0],
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="grid place-items-center">
      <ProductCategories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ProductsCategoryItems
        categories={categories}
        selectedCategory={selectedCategory}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </section>
  );
};

export default ProductsSectionItems;

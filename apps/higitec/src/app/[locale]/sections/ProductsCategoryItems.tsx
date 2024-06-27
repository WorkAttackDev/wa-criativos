"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ArrowUp, MousePointerClick } from "lucide-react";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import HeadingText from "../components/HeadingText";
import SlideInUpZoomAnimation from "../components/animations";
import { linksObj } from "../links";
import { CategoryItem } from "./ProductsSectionItems";

const ProductsCategoryItems = ({
  categories, selectedCategory, isOpen, setIsOpen,
}: {
  categories: CategoryItem[];
  selectedCategory: CategoryItem;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [selectedItem, setSelectedItem] = useState<
    CategoryItem["brands"][number]
  >(categories[0].brands[0]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();	
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPosition({ x, y });
  };

  const handleCloseProductsList = () => {
    setIsOpen(!isOpen);
    document
      .getElementById(linksObj.ourBrands.href.replace("/#", ""))
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      key={selectedCategory.name}
      id="category-products"
      className={cn(
        "grid scroll-mt-56 transition-[grid-template-rows] duration-300 ease-out",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <article className="grid place-items-center gap-16 overflow-hidden">
        <button
          className="relative flex w-fit items-center justify-center gap-4 text-foreground underline underline-offset-8 duration-300 ease-out hover:text-primary focus:text-primary"
          onClick={handleCloseProductsList}
          autoFocus={isOpen}
          tabIndex={isOpen ? 0 : -1}
        >
          <HeadingText
            className="flex items-center justify-center uppercase text-inherit"
            size="sm"
          >
            {selectedCategory.name}
          </HeadingText>
          <ArrowUp className="h-8 w-8" strokeWidth={2} />
        </button>

        <ul className="flex snap-x snap-mandatory gap-16 overflow-x-auto max-sm:snap-center">
          {selectedCategory.brands.map((item) => (
            <li key={item.name} className="flex-shrink-0 snap-start">
              <button
                tabIndex={isOpen ? 0 : -1}
                className="group relative flex flex-shrink-0"
                onClick={() => {
                  setSelectedItem(item);
                  setIsDialogOpen(true);
                }}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={250}
                  height={250}
                  className="aspect-square object-contain"
                  unoptimized />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-foreground/40 text-3xl font-medium text-white opacity-0 backdrop-blur-sm duration-300 ease-out group-hover:opacity-100 group-focus:opacity-100">
                  {item.name}
                  <MousePointerClick className="h-8 w-8" strokeWidth={1.25} />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </article>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl !rounded-none border-none p-0">
          <article className="flex max-h-screen flex-col overflow-auto bg-white">
            <SlideInUpZoomAnimation
              duration={1}
              className="relative shrink-0 border-t border-white"
              style={{
                overflow: "hidden",
                cursor: "zoom-in",
              }}
              onMouseMove={handleMouseMove}
            >
              <Image
                width={1024}
                height={1024}
                src={selectedItem.imgSrc}
                alt={selectedItem.name}
                loading="eager"
                className="aspect-[2/1.5] w-full object-contain duration-500 ease-out hover:!scale-150"
                unoptimized
                style={{
                  transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
                }} />
            </SlideInUpZoomAnimation>
            <span className="grid w-full gap-4 bg-muted p-8 sm:p-12">
              <HeadingText className="text-3xl">
                {selectedItem.name}
              </HeadingText>
              {!!selectedItem.description && (
                <p className="text-2xl/snug">{selectedItem.description}</p>
              )}
            </span>
          </article>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsCategoryItems;
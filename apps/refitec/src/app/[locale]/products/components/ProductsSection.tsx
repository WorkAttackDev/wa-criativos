import { getTranslations } from "next-intl/server";
import ProductBrands from "./ProductBrands";
import ProductCarousel from "./ProductCarousel";
import HeadingText from "../../components/HeadingText";
import ProductSectionWrapper from "./ProductSectionWrapper";
import { MotionArticle } from "@/lib/motion-index";
import { Suspense } from "react";

export default async function ProductsSection() {
  const t = await getTranslations("Products");

  return (
    <ProductSectionWrapper>
      <section className="max-mdx:flex-col mdx:gap-32 flex gap-10">
        <MotionArticle
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
          className="flex min-w-80 flex-1 flex-col gap-10"
        >
          <HeadingText variant="secondary">{t("title")}</HeadingText>
          <p className="text-foreground">{t("description")}</p>
        </MotionArticle>
        <Suspense fallback={null}>
          <ProductBrands />
        </Suspense>
      </section>
      <Suspense fallback={null}>
        <ProductCarousel />
      </Suspense>
    </ProductSectionWrapper>
  );
}

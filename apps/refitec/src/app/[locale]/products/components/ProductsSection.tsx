import { getTranslations } from "next-intl/server";
import ProductBrands from "./ProductBrands";
import ProductCarousel from "./ProductCarousel";
import HeadingText from "../../components/HeadingText";
import ProductSectionWrapper from "./ProductSectionWrapper";
import { MotionArticle } from "@/lib/motion-index";
import { Suspense } from "react";
import ProductDialog from "./ProductDialog";
import { Separator } from "@/components/ui/separator";

export default async function ProductsSection() {
  const t = await getTranslations("Products");
  const tAbout = await getTranslations("About");

  return (
    <ProductSectionWrapper>
      <section className="max-mdx:flex-col mdx:gap-32 flex gap-10">
        <MotionArticle
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
          className="flex min-w-80 flex-2 flex-col gap-10"
        >
          <HeadingText variant="secondary">{t("title")}</HeadingText>
          <div className="text-foreground line-clamp-6 text-justify">
            {t.rich("description", {
              strong: (chunks) => (
                <strong className="font-semibold">{chunks}</strong>
              ),
              br: () => <br />,
            })}
          </div>
          <ProductDialog
            title={t("title")}
            description={t.rich("description", {
              strong: (chunks) => (
                <strong className="font-semibold">{chunks}</strong>
              ),
              br: () => <br />,
            })}
            readMoreLabel={tAbout("readMore")}
          />
        </MotionArticle>
        <Suspense fallback={null}>
          <ProductBrands className="flex-1" />
        </Suspense>
      </section>
      <Separator />
      <Suspense fallback={null}>
        <ProductCarousel />
      </Suspense>
    </ProductSectionWrapper>
  );
}

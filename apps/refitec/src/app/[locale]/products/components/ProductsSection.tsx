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
      <section className="flex flex-col gap-20">
        <MotionArticle
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
          className="flex flex-col items-center gap-10 text-center"
        >
          <HeadingText variant="secondary">{t("title")}</HeadingText>
          <div className="text-foreground dark:text-primary line-clamp-6 max-w-5xl text-justify">
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
        <Separator />
        <Suspense fallback={null}>
          <ProductBrands />
        </Suspense>
        <Suspense fallback={null}>
          <ProductCarousel />
        </Suspense>
      </section>
    </ProductSectionWrapper>
  );
}

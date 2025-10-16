import Image from "next/image";
import HeadingText from "../../components/HeadingText";
import { AboutInfo } from "../data";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import {
  ArticleCardImage,
  ArticleCardItem,
  ArticleCardItemParagraph,
} from "./ArticleCard";
import ArticleCardDialog from "./ArticleCardDialog";
import { MotionAnim } from "../../animations";

type Props = {};

const AboutSection = async (_: Props) => {
  const t = await getTranslations("About");

  return (
    <section className="my-container grid gap-32 py-32">
      <section className="mdx:grid-cols-3 grid grid-cols-1 justify-center justify-items-center gap-20 overflow-hidden">
        {AboutInfo.map(({ img, textKey, titleKey, type, items }, i) =>
          type === "article" && !items ? (
            <article
              key={titleKey}
              className={cn(
                "max-mdx:flex-col mdx:gap-20 max-mdx:max-w-[50rem] col-span-full flex w-full gap-10",
              )}
            >
              <ArticleCardImage className="z-10" img={img} alt={t(titleKey)} />
              <ArticleCardItem
                title={t(titleKey)}
                description={t.rich(textKey, {
                  br: () => <br />,
                })}
                className=""
              >
                <ArticleCardDialog
                  title={t(titleKey)}
                  description={t.rich(textKey, {
                    br: () => <br />,
                  })}
                  image={img}
                  readMoreLabel={t("readMore")}
                />
              </ArticleCardItem>
            </article>
          ) : type === "article-items" && items?.length ? (
            <article
              key={type + i}
              className={cn(
                "max-mdx:flex-col-reverse mdx:gap-20 max-mdx:max-w-[50rem] col-span-full flex w-full gap-10",
              )}
            >
              <div className="flex flex-1 flex-col gap-10">
                {items.map(({ titleKey, textKey }) => (
                  <ArticleCardItem key={titleKey} title={t(titleKey)}>
                    <ArticleCardItemParagraph className="line-clamp-5">
                      {t.rich(textKey, {
                        br: () => <br />,
                      })}
                    </ArticleCardItemParagraph>
                    <ArticleCardDialog
                      title={t(titleKey)}
                      description={t.rich(textKey, {
                        br: () => <br />,
                      })}
                      image={img}
                      readMoreLabel={t("readMore")}
                    />
                  </ArticleCardItem>
                ))}
              </div>
              <ArticleCardImage
                className="z-10"
                img={img}
                alt={"Factory Refitec"}
              />
            </article>
          ) : !type && !items ? (
            <MotionAnim
              key={titleKey}
              keyframes={{
                opacity: [0, 1, 1],
                y: [-1000, -100, 0],
                scale: [0.5, 0.5, 1],
              }}
              delay={i * 0.5}
            >
              <article className="flex max-w-[50rem] flex-col gap-8 overflow-hidden text-justify">
                <figure className="group relative overflow-hidden">
                  <Image
                    width={400}
                    height={250}
                    src={img}
                    alt={t(titleKey)}
                    className="aspect-[2/1.25] w-full object-cover duration-500 ease-out group-hover:scale-110"
                  />
                  <figcaption className="from-foreground/60 absolute inset-0 flex items-end justify-start bg-gradient-to-t from-1% p-8 opacity-100 duration-300 ease-out group-hover:opacity-0">
                    <HeadingText variant="secondary">{t(titleKey)}</HeadingText>
                  </figcaption>
                </figure>
                <p>
                  {t.rich(textKey, {
                    br: () => <br />,
                  })}
                </p>
              </article>
            </MotionAnim>
          ) : null,
        )}
      </section>
    </section>
  );
};

export default AboutSection;

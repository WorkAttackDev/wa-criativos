"use client";

import * as React from "react";
import Image from "next/image";
import { useQueryStates } from "nuqs";
import { NewsItem, newsSearchParams } from "../data/newsData";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

const NewsCard = ({ news, className }: NewsCardProps) => {
  const t = useTranslations("News");
  const [queryParams, setQueryParams] = useQueryStates(newsSearchParams);

  const isOpen = queryParams.newsId === news.id;

  const handleCardClick = () => {
    setQueryParams({ newsId: news.id });
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setQueryParams({ newsId: null });
    }
  };

  return (
    <>
      <article
        className={cn(
          "group bg-card flex flex-1 cursor-pointer flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md",
          className,
        )}
        onClick={handleCardClick}
      >
        <figure className="relative overflow-hidden">
          <Image
            src={news.thumbnail}
            alt={news.title}
            width={640}
            height={360}
            className="aspect-[4/2.5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </figure>

        <article className="flex flex-1 flex-col p-6">
          <span className="text-muted-foreground mb-2 flex items-center justify-between text-lg">
            <span className="font-semibold tracking-wide uppercase">
              {news.category}
            </span>
            <time>{news.date}</time>
          </span>

          <h3 className="text-primary mb-3 line-clamp-2 text-3xl/tight font-bold tracking-wide">
            {news.title}
          </h3>

          <p className="line-clamp-4 leading-relaxed">{news.description}</p>
        </article>
      </article>

      <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="max-h-[90vh] max-w-4xl gap-8 overflow-y-auto">
          <DialogHeader className="gap-2">
            <DialogTitle className="text-primary max-w-[95%] text-4xl font-bold">
              {news.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xl">
              <span className="font-semibold uppercase">{news.category}</span> •{" "}
              {news.date}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6">
            <figure className="relative overflow-hidden">
              {news.media?.type === "video" ? (
                <video
                  controls
                  className="aspect-[4/2.5] w-full object-cover"
                  preload="metadata"
                >
                  <source src={news.media.src} type="video/webm" />
                  <source
                    src={news.media.src.replace(".webm", ".mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : news.media?.type === "image" ? (
                <Image
                  src={news.media.src}
                  alt={news.title}
                  width={800}
                  height={450}
                  placeholder="blur"
                  className="aspect-[4/2.5] w-full object-cover"
                />
              ) : (
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={800}
                  height={450}
                  placeholder="blur"
                  className="aspect-[4/2.5] w-full object-cover"
                />
              )}
            </figure>

            <div className="prose prose-2xl max-w-none">
              <p className="text-2xl/normal">{news.description}</p>
            </div>

            {news.link && (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "flex w-fit items-center",
                )}
              >
                {t("viewMore")}
                <ExternalLink />
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewsCard;

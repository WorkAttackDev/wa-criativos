import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { newsSearchParamsSerialize } from "../news/data/newsData";
import { linksObj } from "../links";

type Props = {};

const AnnouncementBanner = (props: Props) => {
  return (
    <article className="bg-secondary flex items-center justify-center gap-5 px-10 py-5">
      <p className="text-primary text-lg font-medium md:text-xl">
        Inauguração Oficial da Fábrica Refitec com a presença do Presidente da
        República.
      </p>
      <Link
        href={
          newsSearchParamsSerialize({ newsId: "news-3" }) + linksObj.news.href
        }
        className={cn(
          buttonVariants({ size: "sm", variant: "secondary" }),
          "hover:text-card hover:bg-primary",
        )}
      >
        Saiba mais
      </Link>
    </article>
  );
};

export default AnnouncementBanner;

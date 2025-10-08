import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import HeadingText from "../../components/HeadingText";
import { RefObject } from "react";
import { MotionDiv, MotionPicture } from "@/lib/motion-index";

export const ArticleCardItemParagraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("w-full text-justify", className)}>{children}</p>;
};

export const ArticleCardItem = ({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true }}
      key={title}
      className={cn("flex flex-1 flex-col gap-5", className)}
    >
      <HeadingText variant="secondary">{title}</HeadingText>
      {description && (
        <ArticleCardItemParagraph>{description}</ArticleCardItemParagraph>
      )}
      {children}
    </MotionDiv>
  );
};

export const ArticleCardImage = ({
  img,
  alt,
  className,
  ref,
}: {
  img: StaticImageData;
  alt: string;
  className?: string;
  ref?: RefObject<HTMLElement>;
}) => {
  return (
    <MotionPicture
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      ref={ref}
      className={cn(
        "group relative aspect-[4/2.5] flex-1 overflow-hidden",
        className,
      )}
    >
      <Image
        src={img}
        alt={alt}
        className={cn(
          "h-full w-full object-cover duration-500 ease-out will-change-transform group-hover:scale-110",
        )}
      />
      {/* <div className="from-foreground absolute inset-0 bg-gradient-to-t from-1%"></div> */}
    </MotionPicture>
  );
};

import React from "react";
import HeadingText from "../components/HeadingText";
import WorkWithUsForm from "../_work-with-us/WorkWithUsForm";
import { linksObj } from "../links";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {};

const WorkWithUs = (_: Props) => {
  const t = useTranslations("WorkWithUs");
  const tg = useTranslations("Global");

  return (
    <section
      id={linksObj.workWithUs.href.replace("/#", "")}
      className="relative bg-cover bg-bottom bg-no-repeat"
    >
      <Image
        quality={90}
        fill
        sizes="80vw"
        src="/imgs/work-group-photo.jpg"
        alt="Work group photo"
        className="object-cover object-bottom"
      />
      <Image
        quality={90}
        fill
        sizes="80vw"
        src="/imgs/work-group-photo-2.jpg"
        alt="Work group photo"
        className="fade-in-out object-cover object-bottom"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-foreground/70 to-foreground/70" />
      <article className="relative grid place-content-center gap-32 py-32 text-white my-container">
        <HeadingText className="text-inherit">{t("title")}</HeadingText>
        {/* <span className="relative grid content-start gap-8">
          <p>{t("description")}</p>
        </span> */}
        <WorkWithUsForm
          aboutYouLabel={tg("aboutYou")}
          clearLabel={tg("clear")}
          emailLabel={tg("email")}
          firstNameLabel={tg("firstName")}
          lastNameLabel={tg("lastName")}
          phoneLabel={tg("phone")}
          sendLabel={tg("send")}
          cvLabel={tg("cv")}
        />
      </article>
    </section>
  );
};

export default WorkWithUs;

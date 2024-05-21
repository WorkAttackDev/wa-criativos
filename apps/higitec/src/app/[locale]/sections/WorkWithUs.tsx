import { getImageProps } from "next/image";
import React from "react";
import HeadingText from "../components/HeadingText";
import WorkWithUsForm from "../_work-with-us/WorkWithUsForm";
import { linksObj } from "../links";
import { useTranslations } from "next-intl";

type Props = {};

const WorkWithUs = (_: Props) => {
  const t = useTranslations("WorkWithUs");
  const tg = useTranslations("Global");

  const {
    props: { src },
  } = getImageProps({
    alt: "Meeting room with people working",
    fill: true,
    sizes: "80vw",
    src: "/imgs/meeting.jpg",
    quality: 70,
  });
  return (
    <section
      id={linksObj.workWithUs.href.replace("/#", "")}
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-foreground/70 to-foreground/70" />
      <div className="grid gap-32 py-32 text-white my-container md:grid-cols-2">
        <span className="relative grid content-start gap-8">
          <HeadingText className="text-inherit">{t("title")}</HeadingText>
          <p>{t("description")}</p>
        </span>
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
      </div>
    </section>
  );
};

export default WorkWithUs;

import Image from "next/image";
import FeatherBgSection from "../components/FeatherBgSection";
import HeadingText from "../components/HeadingText";
import SlideInUpZoomAnimation from "../components/SlideInUpZoomAnimation";
import { linksObj } from "../links";
import ContactForm from "./ContactForm";
import { useLocale, useTranslations } from "next-intl";
import { GoogleMapsEmbed } from "@next/third-parties/google";

type Props = {};

const ContactSection = (_: Props) => {
  const t = useTranslations("Contacts");
  const th = useTranslations("Header");
  const tg = useTranslations("Global");
  const locale = useLocale();

  return (
    <FeatherBgSection
      id={linksObj.contacts.href.replace("#", "")}
      className="grid gap-16 md:grid-cols-[60%_1fr]"
    >
      <section className="flex flex-col gap-16">
        <header className="grid gap-4">
          <HeadingText>{th(linksObj.contacts.key)}</HeadingText>
          <p>{t("description")}</p>
        </header>
        {/* <SlideInUpZoomAnimation>
          <Image
            src="/imgs/map.jpg"
            alt="Mapa"
            width={1080}
            height={720}
            sizes="80vw"
            className="aspect-[2] h-auto w-full object-cover"
          />
        </SlideInUpZoomAnimation> */}
        <GoogleMapsEmbed
          apiKey={process.env.GOOGLE_MAPS_API_KEY || ""}
          height={300}
          width="100%"
          mode="place"
          q="483X+4RX Polo Industrial, Viana"
          language={locale}
        />
      </section>
      <ContactForm
        emailLabel={tg("email")}
        firstNameLabel={tg("firstName")}
        lastNameLabel={tg("lastName")}
        messageLabel={tg("message")}
        sendLabel={tg("send")}
      />
    </FeatherBgSection>
  );
};

export default ContactSection;

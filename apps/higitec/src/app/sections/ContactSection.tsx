import Image from "next/image";
import FeatherBgSection from "../components/FeatherBgSection";
import HeadingText from "../components/HeadingText";
import { linksObj } from "../links";
import ContactForm from "./ContactForm";
import SlideInUpAnimation from "../components/SlideInUpAnimation";
import SlideInUpZoomAnimation from "../components/SlideInUpZoomAnimation";

type Props = {};

const ContactSection = (_: Props) => {
  return (
    <FeatherBgSection
      id={linksObj.contacts.href.replace("#", "")}
      className="grid gap-16 md:grid-cols-[60%_1fr]"
    >
      <section className="flex flex-col gap-16">
        <header className="grid gap-4">
          <HeadingText>{linksObj.contacts.label}</HeadingText>
          <p>
            Na HIGITEC acreditamos que um ambiente alegre e motivado é a base
            para uma sociedade saudável e próspera. Junte-se a nós na nossa
            jornada rumo à excelência para juntos construirmos um futuro mais
            limpo e seguro.
          </p>
        </header>
        <SlideInUpZoomAnimation>
          <Image
            src="/imgs/map.jpg"
            alt="Mapa"
            width={1080}
            height={720}
            sizes="80vw"
            className="aspect-[2] h-auto w-full object-cover"
          />
        </SlideInUpZoomAnimation>
      </section>
      <ContactForm />
    </FeatherBgSection>
  );
};

export default ContactSection;

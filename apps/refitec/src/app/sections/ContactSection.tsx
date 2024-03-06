import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import { getImageProps } from "next/image";
import Link from "next/link";
import HeadingText from "../components/HeadingText";
import { linksObj } from "../links";

type Props = {};

const ContactInfoAndSocial = () => {
  const socialLinks = [
    {
      Icon: Instagram,
      alt: "Instagram Icon",
    },
    {
      Icon: Facebook,
      alt: "Facebook Icon",
    },
    {
      Icon: Linkedin,
      alt: "LinkedIn Icon",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-end sm:text-end">
      <a
        className={cn(buttonVariants({ variant: "link" }), "text-current")}
        href="tel:+244990009090"
      >
        +244 990 009 090
      </a>
      <a
        className={cn(buttonVariants({ variant: "link" }), "text-current")}
        href="mailto:info@refitec.com"
      >
        info@refitec.com
      </a>
      <span className="flex gap-4">
        {socialLinks.map((link) => (
          <Link
            href="#"
            key={link.alt}
            className="hover:text-secondary focus:text-secondary"
          >
            <link.Icon className="size-8" strokeWidth={1.5} />
          </Link>
        ))}
      </span>
    </div>
  );
};

const ContactSection = (_: Props) => {
  const {
    props: { src },
  } = getImageProps({
    alt: "Mapa background image",
    fill: true,
    sizes: "100vw",
    src: "/imgs/map.jpg",
    quality: 100,
  });
  return (
    <section
      className="relative grid"
      id={linksObj.contacts.href.replace("#", "")}
      style={{ backgroundImage: `url(${src})` }}
    >
      <header className="bg-foreground/40 py-32 my-container">
        <HeadingText variant="secondary" className="text-center">
          Contactos
        </HeadingText>
      </header>
      <article className="relative flex justify-between bg-foreground/80 py-16 text-white my-container">
        <p className="max-w-3xl leading-normal">
          O projecto será implementado na Província de
          Luanda-Angola,aproximadamente 700m do Porto de Luanda, num local
          utilizado para o desenvolvimento de actividades industriais durante o
          período colonial.
        </p>
        <ContactInfoAndSocial />
        <Button
          size="icon"
          className="absolute left-[50%] top-[-15%] size-24 translate-x-[-50%] rounded-full"
        >
          <MapPin className="size-12 flex-shrink-0" strokeWidth={1.5} />
        </Button>
      </article>
    </section>
  );
};

export default ContactSection;

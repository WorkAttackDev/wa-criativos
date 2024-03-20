"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, MapPin, X } from "lucide-react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { getImageProps } from "next/image";
import NextLink from "next/link";
import { Link, locales } from "@/lib/i18n";
import HeadingText from "../components/HeadingText";
import { linksObj } from "../links";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import BoxAnimation from "../components/BoxAnimation";

type Props = {
  title: string;
  description: string;
  locale: string;
  mapKey: string;
};

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
    <div className="flex flex-col gap-6 text-center sm:items-end sm:text-end">
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

const ContactSection = ({ description, locale, title, mapKey }: Props) => {
  const [scope, animate] = useAnimate();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (!scope.current) return;

    animate(
      scope.current,
      {
        y: showMap ? "105%" : "0%",
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );
    animate(
      '[aria-label="Show Map"]',
      {
        top: showMap ? "-40%" : window.innerWidth < 640 ? "-8%" : "-15%",
        scale: showMap ? 0.6 : 1,
        x: "-50%",
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );
  }, [showMap, animate]);

  return (
    <section
      className={cn("relative grid overflow-hidden")}
      id={linksObj.contacts.href.replace("#", "")}
      aria-label="Contact Section"
    >
      <GoogleMapsEmbed
        id="map"
        apiKey={mapKey}
        width="100%"
        height={200}
        mode="place"
        allowfullscreen
        style="position:absolute; inset:0; width:100%; height:100%;"
        q="56XV+429, Largo 4 de Fevereiro, Luanda"
        language={locale}
        aria-label="Google Maps Embed"
      />
      <article
        ref={scope}
        className={
          "relative flex flex-wrap justify-between gap-16 bg-foreground/80 py-16 text-white my-container"
        }
      >
        <span className="grid gap-4">
          <HeadingText variant="secondary">{title}</HeadingText>
          <p className="max-w-3xl leading-normal">{description}</p>
        </span>
        <ContactInfoAndSocial />
        <Button
          aria-label="Show Map"
          title="Show Map"
          size="icon"
          className={cn(
            "absolute left-[50%] top-[-15%] z-10 size-24 translate-x-[-50%] rounded-full max-sm:top-[-8%]",
          )}
          onClick={() => setShowMap((prev) => !prev)}
        >
          {showMap ? (
            <X className="size-12 flex-shrink-0" strokeWidth={1.5} />
          ) : (
            <MapPin className="size-12 flex-shrink-0" strokeWidth={1.5} />
          )}
        </Button>
      </article>
    </section>
  );
};

export default ContactSection;

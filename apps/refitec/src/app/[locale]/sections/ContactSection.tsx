"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { animate } from "motion";
import { Linkedin, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import HeadingText from "../components/HeadingText";
import { contactLinksObj, linksObj } from "../links";

type Props = {
  title: string;
  description: string;
  locale: string;
  mapKey: string;
};

const ContactInfoAndSocial = () => {
  const socialLinks = [
    // {
    //   Icon: Instagram,
    //   alt: "Instagram Icon",
    // },
    // {
    //   Icon: Facebook,
    //   alt: "Facebook Icon",
    // },
    {
      Icon: Linkedin,
      alt: "LinkedIn Icon",
      href: "https://www.linkedin.com/company/grupo-naval",
    },
  ];
  return (
    <div className="flex flex-col gap-6 text-center sm:items-end sm:text-end">
      <a
        className={cn(buttonVariants({ variant: "link" }), "text-current")}
        href={contactLinksObj.phone.href}
      >
        {contactLinksObj.phone.label}
      </a>
      <a
        className={cn(buttonVariants({ variant: "link" }), "text-current")}
        href={contactLinksObj.email.href}
      >
        {contactLinksObj.email.label}
      </a>
      <span className="flex gap-4">
        {socialLinks.map((link) => (
          <Link
            aria-label={link.alt}
            target="_blank"
            href={link.href}
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
  const ref = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    animate(
      ref.current,
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
      <div
        ref={ref}
        className={
          "from-primary/80 to-foreground/90 relative bg-gradient-to-tr"
        }
      >
        <article
          ref={ref}
          className={
            "my-container flex flex-wrap justify-between gap-16 py-16 text-white"
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
              "absolute top-[-15%] left-[50%] z-10 size-24 translate-x-[-50%] rounded-full max-sm:top-[-8%]",
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
      </div>
    </section>
  );
};

export default ContactSection;

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/lib/i18n";
import NextLink from "next/link";
import React from "react";
import { linksObj, navLinks } from "../links";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import BoxAnimation from "../components/BoxAnimation";
import { useTranslations } from "next-intl";

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
        className={cn(buttonVariants({ variant: "link" }), "text-foreground")}
        href="tel:+244990009090"
      >
        +244 990 009 090
      </a>
      <a
        className={cn(buttonVariants({ variant: "link" }), "text-foreground")}
        href="mailto:info@higitec.com"
      >
        info@higitec.com
      </a>
      <span className="flex gap-4">
        {socialLinks.map((link) => (
          <Link
            href="#"
            key={link.alt}
            className="hover:text-primary focus:text-primary"
          >
            <link.Icon className="size-8" strokeWidth={1.5} />
          </Link>
        ))}
      </span>
    </div>
  );
};

const FooterBottom = () => {
  const t = useTranslations("Footer");
  const links = [
    linksObj.termsOfService,
    linksObj.cookiesPolicy,
    linksObj.privacyPolicy,
  ];

  return (
    <footer className="flex w-full justify-between gap-8 text-lg text-secondary max-sm:flex-col max-sm:text-center">
      <p className="max-sm:order-2">{t("allRightsReserved")}</p>
      <nav className="flex flex-wrap gap-8 max-sm:justify-center">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-lg font-medium text-secondary",
            )}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

const Footer = () => {
  const t = useTranslations("Header");
  return (
    <footer className="flex flex-col gap-16 py-16 my-container">
      <section className="flex w-full flex-col  justify-between gap-32 max-sm:justify-center sm:flex-row">
        <BoxAnimation>
          <NextLink href="/" className="flex justify-center max-sm:min-w-full">
            <img
              src="/imgs/logo.svg"
              width={285}
              height={97}
              alt="Higitec Logo"
              className="h-auto w-80 object-contain lg:w-[28rem]"
            />
          </NextLink>
        </BoxAnimation>
        <nav className="flex flex-col items-start gap-6  max-sm:items-center sm:ml-auto">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "text-foreground",
              )}
            ></Link>
          ))}
        </nav>
        <ContactInfoAndSocial />
      </section>
      <FooterBottom />
    </footer>
  );
};

export default Footer;

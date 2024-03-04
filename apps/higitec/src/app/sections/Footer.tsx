import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { linksObj, navLinks } from "../links";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import BoxAnimation from "../components/BoxAnimation";

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
    <div className="flex gap-6 flex-col items-center text-center sm:items-end sm:text-end">
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
  const links = [
    linksObj.termsOfService,
    linksObj.cookiesPolicy,
    linksObj.privacyPolicy,
  ];

  return (
    <footer className="flex gap-8 justify-between max-sm:text-center w-full text-lg text-secondary max-sm:flex-col">
      <p className="max-sm:order-2">
        © 2024 Todos direitos reservados à HIGITEC LDA.
      </p>
      <nav className="flex gap-8 flex-wrap max-sm:justify-center">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-secondary font-medium text-lg",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col gap-16 my-container py-16">
      <section className="flex max-sm:justify-center  gap-32 justify-between w-full max-md:flex-wrap">
        <BoxAnimation>
          <Link href="/" className="flex justify-center max-sm:min-w-full">
            <img
              src="/imgs/logo.svg"
              width={285}
              height={97}
              alt="Higitec Logo"
              className="object-contain w-80 lg:w-[28rem] h-auto"
            />
          </Link>
        </BoxAnimation>
        <nav className="flex flex-col max-sm:items-center items-start  gap-6 sm:ml-auto">
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
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ContactInfoAndSocial />
      </section>
      <FooterBottom />
    </footer>
  );
};

export default Footer;

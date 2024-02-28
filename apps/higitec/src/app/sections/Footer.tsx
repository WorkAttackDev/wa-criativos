import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { linksObj, navLinks } from "../links";
import { cn } from "@/lib/utils";

const ContactInfoAndSocial = () => {
  const socialLinks = [
    {
      src: "/imgs/instagram.svg",
      alt: "Instagram Icon",
    },
    {
      src: "/imgs/facebook.svg",
      alt: "Facebook Icon",
    },
    {
      src: "/imgs/linkedin.svg",
      alt: "LinkedIn Icon",
    },
  ];
  return (
    <div className="flex gap-6 flex-col items-end text-end">
      <p>+244 990 009 090</p>
      <p>info@higitec.com</p>
      <span className="flex gap-4">
        {socialLinks.map((link) => (
          <img
            className="size-8"
            key={link.src}
            src={link.src}
            alt={link.alt}
          />
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
    <footer className="flex gap-8 justify-between w-full text-lg text-secondary">
      <p>© 2024 Todos direitos reservados à HIGITEC LDA.</p>
      <nav className="flex gap-8">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-secondary font-medium text-lg"
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
      <section className="flex gap-32 justify-between w-full max-md:flex-wrap">
        <img
          src="/imgs/logo.svg"
          width={285}
          height={97}
          alt="Higitec Logo"
          className="object-contain w-80 lg:w-[28rem] h-auto"
        />
        <nav className="flex flex-col items-start  gap-6 ml-auto">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "text-foreground"
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

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { linksObj, navLinks } from "../links";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import BoxAnimation from "../components/BoxAnimation";

// const ContactInfoAndSocial = () => {
//   const socialLinks = [
//     {
//       Icon: Instagram,
//       alt: "Instagram Icon",
//     },
//     {
//       Icon: Facebook,
//       alt: "Facebook Icon",
//     },
//     {
//       Icon: Linkedin,
//       alt: "LinkedIn Icon",
//     },
//   ];
//   return (
//     <div className="flex flex-col items-center gap-6 text-center sm:items-end sm:text-end">
//       <a
//         className={cn(buttonVariants({ variant: "link" }), "text-foreground")}
//         href="tel:+244990009090"
//       >
//         +244 990 009 090
//       </a>
//       <a
//         className={cn(buttonVariants({ variant: "link" }), "text-foreground")}
//         href="mailto:info@refitec.com"
//       >
//         info@refitec.com
//       </a>
//       <span className="flex gap-4">
//         {socialLinks.map((link) => (
//           <Link
//             href="#"
//             key={link.alt}
//             className="hover:text-primary focus:text-primary"
//           >
//             <link.Icon className="size-8" strokeWidth={1.5} />
//           </Link>
//         ))}
//       </span>
//     </div>
//   );
// };

const legalLinks = [
  linksObj.termsOfService,
  linksObj.cookiesPolicy,
  linksObj.privacyPolicy,
];

const Footer = () => {
  return (
    <footer className="flex flex-col gap-16 py-16 my-container">
      <section className="flex w-full  justify-between gap-16 max-md:flex-wrap md:gap-32 ">
        <article className="flex flex-col gap-8">
          <BoxAnimation>
            <Link href="/" className="flex max-md:min-w-full">
              <img
                src="/imgs/logo.png"
                width={185}
                height={87}
                alt="Refitec Logo"
                className="h-auto w-72 object-contain"
              />
            </Link>
          </BoxAnimation>
          <p className="text-xl text-secondary-foreground max-md:hidden">
            © 2024 Todos direitos reservados à Refitec LDA.
          </p>
        </article>
        <article className="flex flex-col gap-16 md:mt-auto">
          <nav className="flex flex-wrap gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: "link",
                  }),
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-8 md:justify-end">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-xl font-medium text-secondary-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </article>
        <p className="text-xl text-secondary-foreground md:hidden">
          © 2024 Todos direitos reservados à HIGITEC LDA.
        </p>
      </section>
    </footer>
  );
};

export default Footer;

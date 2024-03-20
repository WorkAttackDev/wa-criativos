import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { Link } from "@/lib/i18n";
import BoxAnimation from "../components/BoxAnimation";
import { linksObj, navLinks } from "../links";
import { useTranslations } from "next-intl";

const legalLinks = [
  linksObj.termsOfService,
  linksObj.cookiesPolicy,
  linksObj.privacyPolicy,
];

const Footer = () => {
  const t = useTranslations("Footer");
  const th = useTranslations("Header");
  return (
    <footer className="flex flex-col gap-16 py-16 my-container">
      <section className="flex w-full  justify-between gap-16 max-md:flex-wrap md:gap-32 ">
        <article className="flex flex-col gap-8">
          <BoxAnimation>
            <NextLink href="/" className="flex max-md:min-w-full">
              <img
                src="/imgs/logo.svg"
                width={185}
                height={87}
                alt="Refitec Logo"
                className="h-auto w-72 object-contain"
              />
            </NextLink>
          </BoxAnimation>
          <p className="text-xl text-secondary-foreground max-md:hidden">
            {t("allRightsReserved")}
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
                {th(item.key)}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-8 md:justify-end">
            {legalLinks.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-xl font-medium text-secondary-foreground",
                )}
              >
                {t(item.key)}
              </NextLink>
            ))}
          </nav>
        </article>
        <p className="text-xl text-secondary-foreground md:hidden">
          {t("allRightsReserved")}
        </p>
      </section>
    </footer>
  );
};

export default Footer;

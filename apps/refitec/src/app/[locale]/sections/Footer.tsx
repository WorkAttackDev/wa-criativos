import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { MotionAnim } from "../animations";
import { linksObj, navLinks } from "../links";

const legalLinks = [
  linksObj.termsOfService,
  linksObj.cookiesPolicy,
  linksObj.privacyPolicy,
];

const Footer = async () => {
  const t = await getTranslations("Footer");
  const th = await getTranslations("Header");
  return (
    <footer className="my-container flex flex-col gap-16 py-16">
      <section className="flex w-full justify-between gap-16 max-md:flex-wrap md:gap-32">
        <article className="flex flex-col gap-8">
          <MotionAnim keyframes={{ opacity: [0, 1], x: [-100, 0] }}>
            <Link href="/" className="flex max-md:min-w-full">
              <img
                src="/imgs/logo.svg"
                width={185}
                height={87}
                alt="Refitec Logo"
                className="h-auto w-72 object-contain"
              />
            </Link>
          </MotionAnim>
          <p className="text-secondary-foreground text-xl max-md:hidden">
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
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-xl font-medium",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </article>
        <p className="text-secondary-foreground text-xl md:hidden">
          {t("allRightsReserved")}
        </p>
      </section>
    </footer>
  );
};

export default Footer;

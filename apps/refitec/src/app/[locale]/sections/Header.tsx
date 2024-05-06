import NextLink from "next/link";
import { Link } from "@/lib/i18n";
import LangDropdown from "../components/LangDropdown";
import { navLinks } from "../links";
import BoxAnimation from "../components/BoxAnimation";
import SideBar from "../components/SideBar";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="sticky top-0 z-40  bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-16 bg-white py-8 shadow-sm my-container">
        <BoxAnimation className="mr-auto">
          <NextLink href="/">
            <Image
              src="/imgs/logo.svg"
              alt="Refitec Logo"
              unoptimized
              width={205}
              height={107}
              className="h-auto w-44 object-contain lg:w-48"
            />
          </NextLink>
        </BoxAnimation>
        <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={buttonVariants({ variant: "link" })}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <LangDropdown />
        <SideBar />
      </div>
    </header>
  );
};

export default Header;

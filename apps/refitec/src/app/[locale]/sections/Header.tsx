import LangDropdown from "../components/LangDropdown";
import NavDropdown from "../components/NavDropdown";
import { navLinks } from "../links";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MotionAnim } from "../animations";
import { getTranslations } from "next-intl/server";

const Header = async () => {
  const t = await getTranslations("Header");
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="my-container flex flex-wrap items-center justify-between gap-16 bg-white py-8">
        <MotionAnim keyframes={{ opacity: [0, 1], x: [-100, 0] }}>
          <Link href="/">
            <Image
              src="/imgs/logo.svg"
              alt="Refitec Logo"
              unoptimized
              width={205}
              height={107}
              className="h-auto w-44 object-contain lg:w-48"
            />
          </Link>
        </MotionAnim>
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
        <NavDropdown />
      </div>
    </header>
  );
};

export default Header;

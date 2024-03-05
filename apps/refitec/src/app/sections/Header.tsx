import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import LangDropdown from "../components/LangDropdown";
import { navLinks } from "../links";
import BoxAnimation from "../components/BoxAnimation";

const Header = () => {
  return (
    <header className="sticky top-0 z-40  bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-16 bg-white py-8 shadow-sm my-container">
        <BoxAnimation>
          <Link href="/">
            <img
              src="/imgs/logo.png"
              width={185}
              height={87}
              className="h-auto w-40 object-contain lg:w-56"
            />
          </Link>
        </BoxAnimation>
        <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={buttonVariants({ variant: "link" })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LangDropdown />
      </div>
    </header>
  );
};

export default Header;

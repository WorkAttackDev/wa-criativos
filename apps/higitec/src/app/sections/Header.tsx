import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import LangDropdown from "../components/LangDropdown";
import { navLinks } from "../links";
import BoxAnimation from "../components/BoxAnimation";

const Header = () => {
  return (
    <header className="sticky z-40 top-0  bg-white shadow-sm">
      <div className="my-container py-8 bg-white shadow-sm justify-between flex gap-16 items-center flex-wrap">
        <BoxAnimation>
          <Link href="/">
            <img
              src="/imgs/logo.svg"
              width={185}
              height={87}
              className="object-contain w-56 lg:w-80 h-auto"
            />
          </Link>
        </BoxAnimation>
        <nav className="hidden xl:flex flex-1 gap-8 justify-center items-center">
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

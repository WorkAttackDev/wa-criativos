import Link from "next/link";
import { buttonVariants } from "../components/ui/button";
import LangDropdown from "./LangDropdown";
import { navLinks } from "./links";

const Header = () => {
  return (
    <header className="sticky z-40 top-0 my-container py-8 bg-white justify-between flex gap-16 items-center flex-wrap">
      <img
        src="/imgs/logo.svg"
        width={185}
        height={87}
        className="object-contain w-24 lg:w-80 h-auto"
      />
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
    </header>
  );
};

export default Header;

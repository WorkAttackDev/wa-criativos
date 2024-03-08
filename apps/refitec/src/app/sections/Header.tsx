import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import LangDropdown from "../components/LangDropdown";
import { navLinks } from "../links";
import BoxAnimation from "../components/BoxAnimation";
import SideBar from "../components/SideBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-40  bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-16 bg-white py-8 shadow-sm my-container">
        <BoxAnimation className="mr-auto">
          <Link href="/">
            <img
              src="/imgs/logo.svg"
              width={205}
              height={107}
              className="h-auto w-48 object-contain lg:w-64"
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
        <SideBar />
      </div>
    </header>
  );
};

export default Header;

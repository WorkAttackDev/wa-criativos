import NextLink from "next/link";
import Image from "next/image";
import BoxAnimation from "../components/BoxAnimation";
import LangDropdown from "../components/LangDropdown";
import SideBar from "../components/SideBar";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="sticky top-0 z-40  bg-white shadow-sm">
      <div className="flex items-center justify-between gap-8 bg-white py-8 shadow-sm my-container sm:gap-16">
        <BoxAnimation className="mr-auto">
          <NextLink href="/">
            <Image
              src="/imgs/logo.svg"
              width={185}
              height={87}
              alt="Higitec"
              unoptimized
              className="h-auto w-56 object-contain lg:w-80"
            />
          </NextLink>
        </BoxAnimation>
        <NavLinks />
        <LangDropdown />
        <SideBar />
      </div>
    </header>
  );
};

export default Header;

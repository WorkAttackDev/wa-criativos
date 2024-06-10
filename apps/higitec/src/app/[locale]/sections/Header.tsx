import { NextIntlClientProvider, useMessages } from "next-intl";
import NextLink from "next/link";
import BoxAnimation from "../components/BoxAnimation";
import LangDropdown from "../components/LangDropdown";
import SideBar from "../components/SideBar";
import NavLinks from "./NavLinks";

const Header = () => {
  const messages = useMessages();
  return (
    <header className="sticky top-0 z-40  bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-8 bg-white py-8 shadow-sm my-container sm:gap-16">
        <BoxAnimation className="mr-auto">
          <NextLink href="/">
            <img
              src="/imgs/logo.svg"
              width={185}
              height={87}
              className="h-auto w-56 object-contain lg:w-80"
            />
          </NextLink>
        </BoxAnimation>
        <NextIntlClientProvider messages={messages}>
          <NavLinks />
        </NextIntlClientProvider>
        <LangDropdown />
        <SideBar />
      </div>
    </header>
  );
};

export default Header;

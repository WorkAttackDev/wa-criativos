"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import { useState, type MouseEvent } from "react";
import { Link } from "@/i18n/navigation";
import { navLinks } from "../links";
import BoxAnimation from "./BoxAnimation";
import { useTranslations } from "next-intl";

type Props = {};

const SideBar = (props: Props) => {
  const t = useTranslations("Header");
  const tf = useTranslations("Footer");
  const [open, setOpen] = useState(false);

  const handleNavClick = (event: MouseEvent, href: string) => {
    const target = document.getElementById(href.split("#")[1] ?? "");
    setOpen(false);
    if (!target) return; // not on this page: let the link navigate
    event.preventDefault();
    // wait for the 300ms close animation to release the body scroll lock
    setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 350);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "text-primary hover:text-secondary focus:text-secondary xl:hidden",
        )}
      >
        <AlignRight className="size-12" strokeWidth={1.25} />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10 bg-white">
        <SheetHeader className="flex flex-col items-start gap-8">
          <BoxAnimation>
            <Link href="/">
              <Image
                src="/imgs/logo.svg"
                width={185}
                height={87}
                alt="Higitec"
                unoptimized
                className="h-auto w-48 object-contain lg:w-64"
              />
            </Link>
          </BoxAnimation>
          <SheetDescription>{t("mainNavigation")}</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={cn(
                buttonVariants({ variant: "link" }),
                "w-fit justify-start",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <SheetFooter>
          <p className="text-xl text-secondary-foreground">
            {tf("allRightsReserved", { year: new Date().getFullYear() })}
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;

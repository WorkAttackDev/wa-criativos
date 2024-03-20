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
import NextLink from "next/link";
import { Link } from "@/lib/i18n";
import { navLinks } from "../links";
import BoxAnimation from "./BoxAnimation";
import { useTranslations } from "next-intl";

type Props = {};

const SideBar = (props: Props) => {
  const t = useTranslations("Header");
  const tf = useTranslations("Footer");

  return (
    <Sheet>
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
            <NextLink href="/">
              <img
                src="/imgs/logo.svg"
                width={185}
                height={87}
                className="h-auto w-48 object-contain lg:w-64"
              />
            </NextLink>
          </BoxAnimation>
          <SheetDescription>{t("mainNavigation")}</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
            {tf("allRightsReserved")}
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;

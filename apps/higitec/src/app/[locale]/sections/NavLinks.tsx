"use client";
import { normalizeHashUrl } from "@/lib/my-next-utils/links";
import { navLinks } from "../links";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Link } from "@/lib/i18n";
import { useTranslations } from "next-intl";

type Props = { className?: string };

const NavLinks = ({ className = "" }: Props) => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  return (
    <nav
      className={cn(
        "hidden flex-1 items-center justify-center gap-8 xl:flex",
        className,
      )}
    >
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={normalizeHashUrl({ href: item.href, pathname })}
          className={buttonVariants({ variant: "link" })}
        >
          {t(item.key)}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;

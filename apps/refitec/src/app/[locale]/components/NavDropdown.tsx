import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { navLinks } from "../links";
import { cn } from "@/lib/utils";

const NavDropdown = async () => {
  const t = await getTranslations("Header");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "size-12 xl:hidden",
        )}
        aria-label="Open navigation"
      >
        <Menu className="size-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {navLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            <DropdownMenuItem>{t(item.key)}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;

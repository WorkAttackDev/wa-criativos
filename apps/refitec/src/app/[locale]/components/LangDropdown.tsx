import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

const LangDropdown = async () => {
  const t = await getTranslations("Header");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "ml-auto uppercase",
        )}
      >
        {t("lang")}
        <ChevronsUpDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/" locale="pt">
          <DropdownMenuItem>Português</DropdownMenuItem>
        </Link>
        <Link href="/" locale="en">
          <DropdownMenuItem>English</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangDropdown;

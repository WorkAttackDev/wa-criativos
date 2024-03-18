import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {};

const LangDropdown = (_: Props) => {
  const t = useTranslations("Header");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "uppercase",
        )}
      >
        {t("lang")}
        <ChevronsUpDown className="ml-2 h-5 w-5" />
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

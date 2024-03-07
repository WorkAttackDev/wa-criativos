import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";

const LangDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        PT
        <ChevronsUpDown className="ml-2 h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Idiomas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Português</DropdownMenuItem>
        <DropdownMenuItem>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangDropdown;

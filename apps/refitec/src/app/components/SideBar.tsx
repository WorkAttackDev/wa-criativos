import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "../links";
import Link from "next/link";
import { AlignRight } from "lucide-react";
import { cn } from "@/lib/utils";
import BoxAnimation from "./BoxAnimation";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "text-primary hover:text-secondary focus:text-secondary xl:hidden",
        )}
      >
        <AlignRight className="size-12" strokeWidth={1.25} />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-16 bg-white">
        <SheetHeader>
          <BoxAnimation>
            <Link href="/">
              <img
                src="/imgs/logo.svg"
                width={185}
                height={87}
                className="h-auto w-40 object-contain lg:w-56"
              />
            </Link>
          </BoxAnimation>
          <SheetDescription>Navegação principal</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "link" }),
                "justify-start",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <SheetFooter>
          <p className="text-xl text-secondary-foreground max-md:hidden">
            © 2024 Todos direitos reservados à Refitec LDA.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;

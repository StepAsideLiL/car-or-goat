import { ChildrenClassname } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Dices, HelpCircle } from "lucide-react";
import { GiGoat, GiCityCar } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export const Logo = () => {
  return <Dices className="md:w-12 w-6 md:h-12 h-6" />;
};

export const LogoLink = () => {
  return (
    <Link href={"/"}>
      <Dices className="md:w-12 w-6 md:h-12 h-6" />
    </Link>
  );
};

export const Main = ({ children, className = "" }: ChildrenClassname) => {
  return (
    <main className={cn("min-h-screen space-y-4 container", className)}>
      {children}
    </main>
  );
};

export const Header = ({ children, className = "" }: ChildrenClassname) => {
  return (
    <header
      className={cn(
        "container flex gap-2 md:w-full py-3 items-center justify-between",
        className
      )}
    >
      {children}
    </header>
  );
};

export const PlayCard = ({ children, className = "" }: ChildrenClassname) => {
  return (
    <Card className={cn("max-w-md w-full md:h-96 h-52", className)}>
      <CardContent className="flex items-center justify-center h-full">
        {children}
      </CardContent>
    </Card>
  );
};

export const QuestionIcon = () => {
  return <HelpCircle className="md:w-20 md:h-20 w-10 h-10" />;
};

export const GoatIcon = () => {
  return <GiGoat className="md:w-28 md:h-28 w-14 h-14" />;
};

export const CarIcon = () => {
  return <GiCityCar className="md:w-28 md:h-28 w-14 h-14" />;
};

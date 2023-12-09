import { ChildrenClassname } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { GiGoat, GiCityCar } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Main = ({ children, className = "" }: ChildrenClassname) => {
  return (
    <main className={cn("min-h-screen space-y-4", className)}>{children}</main>
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

export const AvatarIcon = ({ username }: { username: string }) => {
  return (
    <Avatar>
      <AvatarFallback>
        {username === "" ? "U" : username[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

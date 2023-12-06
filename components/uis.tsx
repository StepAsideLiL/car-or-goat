import { ChildrenClassname } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export const Main = ({ children, className = "" }: ChildrenClassname) => {
  return (
    <main className={cn("min-h-screen space-y-4", className)}>{children}</main>
  );
};

export const PlayCard = ({ children, className = "" }: ChildrenClassname) => {
  return (
    <Card className={cn("max-w-md md:w-96 w-full md:h-96 h-52", className)}>
      <CardContent className="flex items-center justify-center h-full">
        <h1 className="md:text-4xl text-xl font-semibold">{children}</h1>
      </CardContent>
    </Card>
  );
};

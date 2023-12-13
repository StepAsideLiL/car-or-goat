import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import HowToPlay from "@/components/sections/how-to-play";

const HowToPlayHelp = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant={"ghost"}>
          <HelpCircle />
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="space-y-2 w-80">
        <HowToPlay />
      </HoverCardContent>
    </HoverCard>
  );
};

export default HowToPlayHelp;

"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useStore } from "@/lib/store/store";

const BottomStat = () => {
  const [stage, selectedCard, showCard1, showCard2, showCard3] = useStore(
    (state) => [
      state.stage,
      state.selectedCard,
      state.showCard1,
      state.showCard2,
      state.showCard3,
    ]
  );

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant={"ghost"}>
          <HelpCircle />
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="space-y-2 w-80">
        <p>Stage: {stage}</p>
        <p>
          Seclected Card:{" "}
          {selectedCard === null ? "No card selected" : selectedCard}
        </p>
        <p>Show Card 1: {showCard1 ? "Showing" : "Not Showing"}</p>
        <p>Show Card 2: {showCard2 ? "Showing" : "Not Showing"}</p>
        <p>Show Card 3: {showCard3 ? "Showing" : "Not Showing"}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default BottomStat;

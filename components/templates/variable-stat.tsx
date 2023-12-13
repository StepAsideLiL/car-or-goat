"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { BarChart } from "lucide-react";
import { useStore } from "@/lib/store/store";

const VariableStat = () => {
  const [
    stage,
    selectedCard,
    selectedCardS0,
    selectedCardS3,
    selectedItem,
    showCard1,
    showCard2,
    showCard3,
  ] = useStore((state) => [
    state.stage,
    state.selectedCard,
    state.selectedCardStage0,
    state.selectedCardStage3,
    state.selectedItem,
    state.showCard1,
    state.showCard2,
    state.showCard3,
  ]);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant={"ghost"}>
          <BarChart />
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="space-y-2 w-80">
        <p>Stage: {stage}</p>
        <p>
          Seclected Card:{" "}
          {selectedCard === null ? "No card selected" : selectedCard}
        </p>
        <p>
          Seclected Card at Stage 0:{" "}
          {selectedCardS0 === null ? "No card selected" : selectedCardS0}
        </p>
        <p>
          Seclected Card at Stage 3:{" "}
          {selectedCardS3 === null ? "No card selected" : selectedCardS3}
        </p>
        <p>
          Seclected Item:{" "}
          {selectedItem === null
            ? "No item selected"
            : selectedItem === 1
            ? "Car"
            : "Goat"}
        </p>
        <p>Show Card 1: {showCard1 ? "Showing" : "Not Showing"}</p>
        <p>Show Card 2: {showCard2 ? "Showing" : "Not Showing"}</p>
        <p>Show Card 3: {showCard3 ? "Showing" : "Not Showing"}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default VariableStat;

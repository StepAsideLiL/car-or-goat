"use client";

import { useStore } from "@/lib/store/store";
import { PlayCard } from "../uis";
import { cn } from "@/lib/utils";

export const CardContainer1 = ({ cardValue }: { cardValue: number }) => {
  const stage = useStore((state) => state.stage);
  const show = useStore((state) => state.showCard1);
  const [selected, setSelected] = useStore((state) => [
    state.selectedCard,
    state.setSeletedCard,
  ]);

  const handleClick = () => {
    if (stage === 0 || stage === 3) {
      if (!show) {
        setSelected(0);
      }
    }
  };

  return (
    <div onClick={handleClick}>
      <PlayCard className={cn(selected === 0 && "border-4 border-red-600")}>
        {show ? (cardValue === 1 ? "Car" : "Goat") : "Card 1"}
      </PlayCard>
    </div>
  );
};

export const CardContainer2 = ({ cardValue }: { cardValue: number }) => {
  const stage = useStore((state) => state.stage);
  const show = useStore((state) => state.showCard2);
  const [selected, setSelected] = useStore((state) => [
    state.selectedCard,
    state.setSeletedCard,
  ]);

  const handleClick = () => {
    if (stage === 0 || stage === 3) {
      if (!show) {
        setSelected(1);
      }
    }
  };

  return (
    <div onClick={handleClick}>
      <PlayCard className={cn(selected === 1 && "border-4 border-red-600")}>
        {show ? (cardValue === 1 ? "Car" : "Goat") : "Card 2"}
      </PlayCard>
    </div>
  );
};

export const CardContainer3 = ({ cardValue }: { cardValue: number }) => {
  const stage = useStore((state) => state.stage);
  const show = useStore((state) => state.showCard3);
  const [selected, setSelected] = useStore((state) => [
    state.selectedCard,
    state.setSeletedCard,
  ]);

  const handleClick = () => {
    if (stage === 0 || stage === 3) {
      if (!show) {
        setSelected(2);
      }
    }
  };

  return (
    <div onClick={handleClick}>
      <PlayCard className={cn(selected === 2 && "border-4 border-red-600")}>
        {show ? (cardValue === 1 ? "Car" : "Goat") : "Card 3"}
      </PlayCard>
    </div>
  );
};
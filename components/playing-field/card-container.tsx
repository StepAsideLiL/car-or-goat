"use client";

import { useStore } from "@/lib/store/store";
import { CarIcon, GoatIcon, PlayCard, QuestionIcon } from "@/components/uis";
import { cn } from "@/lib/utils";

export const CardContainer1 = ({ cardValue }: { cardValue: number }) => {
  const stage = useStore((state) => state.stage);
  const show = useStore((state) => state.showCard1);
  const [selected, setSelected] = useStore((state) => [
    state.selectedCard,
    state.setSelectedCard,
  ]);
  const setItem = useStore((state) => state.setSelectedItem);

  const handleClick = () => {
    if (stage === 0 || stage === 3) {
      if (!show) {
        setSelected(0);
        setItem(cardValue);
      }
    }
  };

  return (
    <div onClick={handleClick} className="w-full">
      <PlayCard className={cn(selected === 0 && "border-4 border-red-600")}>
        {show ? (
          cardValue === 1 ? (
            <span className="text-green-600">
              <CarIcon />
            </span>
          ) : (
            <span className="text-red-600">
              <GoatIcon />
            </span>
          )
        ) : (
          <QuestionIcon />
        )}
      </PlayCard>
    </div>
  );
};

export const CardContainer2 = ({ cardValue }: { cardValue: number }) => {
  const stage = useStore((state) => state.stage);
  const show = useStore((state) => state.showCard2);
  const [selected, setSelected] = useStore((state) => [
    state.selectedCard,
    state.setSelectedCard,
  ]);
  const setItem = useStore((state) => state.setSelectedItem);

  const handleClick = () => {
    if (stage === 0 || stage === 3) {
      if (!show) {
        setSelected(1);
        setItem(cardValue);
      }
    }
  };

  return (
    <div onClick={handleClick} className="w-full">
      <PlayCard className={cn(selected === 1 && "border-4 border-red-600")}>
        {show ? (
          cardValue === 1 ? (
            <span className="text-green-600">
              <CarIcon />
            </span>
          ) : (
            <span className="text-red-600">
              <GoatIcon />
            </span>
          )
        ) : (
          <QuestionIcon />
        )}
      </PlayCard>
    </div>
  );
};

export const CardContainer3 = ({ cardValue }: { cardValue: number }) => {
  const stage = useStore((state) => state.stage);
  const show = useStore((state) => state.showCard3);
  const [selected, setSelected] = useStore((state) => [
    state.selectedCard,
    state.setSelectedCard,
  ]);
  const setItem = useStore((state) => state.setSelectedItem);

  const handleClick = () => {
    if (stage === 0 || stage === 3) {
      if (!show) {
        setSelected(2);
        setItem(cardValue);
      }
    }
  };

  return (
    <div onClick={handleClick} className="w-full">
      <PlayCard className={cn(selected === 2 && "border-4 border-red-600")}>
        {show ? (
          cardValue === 1 ? (
            <span className="text-green-600">
              <CarIcon />
            </span>
          ) : (
            <span className="text-red-600">
              <GoatIcon />
            </span>
          )
        ) : (
          <QuestionIcon />
        )}
      </PlayCard>
    </div>
  );
};

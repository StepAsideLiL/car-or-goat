"use client";

import { useStore } from "@/lib/store/store";
import { CarIcon, GoatIcon, PlayCard, QuestionIcon } from "@/components/uis";
import { cn } from "@/lib/utils";

export const CardContainer1 = ({ cardValue }: { cardValue: number }) => {
  const stage = useStore((state) => state.stage);
  const show = useStore((state) => state.showCard1);
  const [selected, setSelected, setSelectedS0, setSelectedS3] = useStore(
    (state) => [
      state.selectedCard,
      state.setSelectedCard,
      state.setSelectedCardStage0,
      state.setSelectedCardStage3,
    ]
  );
  const setItem = useStore((state) => state.setSelectedItem);

  const handleClick = () => {
    if (!show) {
      if (stage === 0) {
        setSelectedS0(0);
        setSelectedS3(0);
        setSelected(0);
        setItem(cardValue);
      }
      if (stage === 3) {
        setSelectedS3(0);
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
  const [selected, setSelected, setSelectedS0, setSelectedS3] = useStore(
    (state) => [
      state.selectedCard,
      state.setSelectedCard,
      state.setSelectedCardStage0,
      state.setSelectedCardStage3,
    ]
  );
  const setItem = useStore((state) => state.setSelectedItem);

  const handleClick = () => {
    if (!show) {
      if (stage === 0) {
        setSelectedS0(1);
        setSelectedS3(1);
        setSelected(1);
        setItem(cardValue);
      }
      if (stage === 3) {
        setSelectedS3(1);
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
  const [selected, setSelected, setSelectedS0, setSelectedS3] = useStore(
    (state) => [
      state.selectedCard,
      state.setSelectedCard,
      state.setSelectedCardStage0,
      state.setSelectedCardStage3,
    ]
  );
  const setItem = useStore((state) => state.setSelectedItem);

  const handleClick = () => {
    if (!show) {
      if (stage === 0) {
        setSelectedS0(2);
        setSelectedS3(2);
        setSelected(2);
        setItem(cardValue);
      }
      if (stage === 3) {
        setSelectedS3(2);
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

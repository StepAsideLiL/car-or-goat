"use client";

import {
  CardContainer1,
  CardContainer2,
  CardContainer3,
} from "./card-container";
import { Button } from "@/components/ui/button";
import { ChevronRight, RefreshCcw } from "lucide-react";
import { useStore } from "@/lib/store/store";
import ConfettiRain from "./confetti-rain";
import { gameWinned } from "@/lib/localStorage";
import { useRouter } from "next/navigation";
import { resetStore } from "@/lib/store/store-utils";
import SetUsername from "@/components/playing-field/set-name";

const CardSection = ({ cards }: { cards: number[] }) => {
  const router = useRouter();
  const indexOfFirstZero = cards.indexOf(0);
  const indexOfOne = cards.indexOf(1);
  const [stage, increaseStage] = useStore((state) => [
    state.stage,
    state.increaseStage,
  ]);
  const [setShowCard1, setShowCard2, setShowCard3] = useStore((state) => [
    state.setShowCard1,
    state.setShowCard2,
    state.setShowCard3,
  ]);
  const seletectedCard = useStore((state) => state.selectedCard);
  const item = useStore((state) => state.selectedItem);
  const stageMessage = [
    "Pick a card, one of these card contains a Car, others contain one Goat each.",
    "Revel a card.",
    "Here is a Goat card.",
    "Would you like to change your initial card?",
    item === 1 ? "You win a Car" : "You got a Goat",
  ];

  const handleNextBtn = () => {
    if (stage < stageMessage.length - 1) {
      increaseStage();
    }
    if (stage === 1) {
      if (indexOfFirstZero === 0 && seletectedCard !== 0 && cards[0] !== 1) {
        setShowCard1();
      } else if (
        indexOfFirstZero === 1 &&
        seletectedCard !== 1 &&
        cards[0] !== 1
      ) {
        setShowCard2();
      } else {
        setShowCard3();
      }
    }
    if (stage === 3) {
      if (indexOfOne === 0) {
        setShowCard1();
      } else if (indexOfOne === 1) {
        setShowCard2();
      } else {
        setShowCard3();
      }
    }

    if (stage === 3) {
      if (item === 1) {
        gameWinned(true);
      } else {
        gameWinned();
      }
    }
    if (stage === 4) {
      router.refresh();
      resetStore();
    }
  };

  return (
    <section className="space-y-5 w-full">
      <div className="h-20 text-center">
        <h1 className="md:text-xl text-base">{stageMessage[stage]}</h1>
      </div>

      <section className="flex justify-center gap-1 w-full">
        <CardContainer1 cardValue={cards[0]} />
        <CardContainer2 cardValue={cards[1]} />
        <CardContainer3 cardValue={cards[2]} />
      </section>

      <Button
        variant={"outline"}
        onClick={handleNextBtn}
        className="w-24 h-16"
        disabled={seletectedCard === null ? true : false}
      >
        {stage !== 4 ? (
          <ChevronRight size={"60px"} />
        ) : (
          <RefreshCcw size={"40px"} />
        )}
      </Button>

      {stage >= 4 && item === 1 && (
        <div className="m-0 overflow-hidden">
          <ConfettiRain />
        </div>
      )}

      {stage === 4 && <SetUsername />}
    </section>
  );
};

export default CardSection;

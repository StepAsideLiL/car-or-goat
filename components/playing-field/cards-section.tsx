"use client";

import {
  CardContainer1,
  CardContainer2,
  CardContainer3,
} from "./card-container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useStore } from "@/lib/store/store";

const CardSection = ({ cards }: { cards: number[] }) => {
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
  const stageMessage = [
    "Pick a card, one of these card contains a Car, other contain one Goat each.",
    "Revel a card.",
    "Here is a Goat card.",
    "Would you like to change your initial card?",
    "Here is the Car card",
    "You win a Car",
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
      increaseStage();
    }
  };

  return (
    <section className="space-y-5">
      <div className="h-32 text-center">
        <h1 className="text-xl">{stageMessage[stage]}</h1>
      </div>

      <section className="flex justify-center gap-3">
        <CardContainer1 cardValue={cards[0]} />
        <CardContainer2 cardValue={cards[1]} />
        <CardContainer3 cardValue={cards[2]} />
      </section>

      <Button
        variant={"outline"}
        onClick={handleNextBtn}
        disabled={seletectedCard === null ? true : false}
      >
        <ChevronRight /> {stage}
      </Button>

      <div>
        {cards.map((card, index) => (
          <span key={index}>
            {card === 1 ? "Car" : "Goat"}
            {", "}
          </span>
        ))}

        <p>First Zero: {indexOfFirstZero}</p>
        <p>One: {indexOfOne}</p>
      </div>
    </section>
  );
};

export default CardSection;

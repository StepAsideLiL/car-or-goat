"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const randomlyPick = (arr: string[]): string => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const randomCard = (prv: number[] | null = null): any => {
  const cardCombination = ["100", "010", "001"];

  if (prv !== null) {
    const prvCombination = prv.join("").toString();
    const filter = cardCombination.filter((comb) => comb !== prvCombination);
    const newCombinationString = randomlyPick(filter);
    return newCombinationString.split("").map(Number);
  } else {
    const newCombinationString = randomlyPick(cardCombination);
    return newCombinationString.split("").map(Number);
  }
};

const RandomBtn = () => {
  const [arrComb, setArrComb] = useState(randomCard());
  const router = useRouter();

  const handleClick = () => {
    router.refresh();
    setArrComb(randomCard(arrComb));
  };
  console.log(arrComb);

  return <Button onClick={handleClick}>Random</Button>;
};

export default RandomBtn;

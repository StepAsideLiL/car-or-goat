"use client";

const randomlyPick = (arr: string[]): string => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const randomCard = (prv: number[] | null = null): any => {
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

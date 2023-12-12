import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomElement(arr: number[][]): number[] {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function carGoatArrayGenerator() {
  const array = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  // return getRandomElement(array);
  return [0, 0, 1];
}

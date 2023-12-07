"use client";

import { useScoreStore } from "./store/store";
import { customAlphabet } from "nanoid";

type UserScore = {
  username: string;
  userId: string;
  totalPlayed: number;
  totalWin: number;
  updatedAt: string;
};

const localStorageKey = "carGoatDB";
const scoreDB = {
  username: "",
  userId: "",
  totalPlayed: 0,
  totalWin: 0,
  updatedAt: "",
};
const nanoid = customAlphabet("1234567890abcdef", 10);

const stringifyJson = (obj: UserScore): string => {
  return JSON.stringify(obj);
};

const parseJson = (str: string): UserScore => {
  return JSON.parse(str);
};

export const createScoreLocalDB = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const carGoatDB = localStorage.getItem(localStorageKey);
    if (!carGoatDB) {
      localStorage.setItem(localStorageKey, stringifyJson(scoreDB));
    }
  }
};

export const getUserScore = (): UserScore => {
  let carGoatDB = "";
  if (typeof window !== "undefined" && window.localStorage) {
    carGoatDB = localStorage.getItem(localStorageKey) || "";
  }
  return parseJson(carGoatDB);
};

export const updateScore = (status: boolean = false) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const scoreDB = getUserScore();
    const currentDate = new Date();
    if (status) {
      const updatedScoreDB = {
        ...scoreDB,
        totalPlayed: scoreDB.totalPlayed + 1,
        totalWin: scoreDB.totalWin + 1,
        updatedAt: currentDate.toISOString(),
      };
      localStorage.setItem(localStorageKey, stringifyJson(updatedScoreDB));
      useScoreStore.getState().incTotalPlayed();
      useScoreStore.getState().incTotalWin();
    } else {
      const updatedScoreDB = {
        ...scoreDB,
        totalPlayed: scoreDB.totalPlayed + 1,
        updatedAt: currentDate.toISOString(),
      };
      localStorage.setItem(localStorageKey, stringifyJson(updatedScoreDB));
      useScoreStore.getState().incTotalPlayed();
    }
  }
};

export const setUsernameAndId = (username: string) => {
  const userId = nanoid();
  if (typeof window !== "undefined" && window.localStorage) {
    const scoreDB = getUserScore();
    const updatedScoreDB = {
      ...scoreDB,
      username: username,
      userId: userId,
    };
    localStorage.setItem(localStorageKey, stringifyJson(updatedScoreDB));
    useScoreStore.getState().setUsername(username);
    useScoreStore.getState().setUserId(userId);
  }
};

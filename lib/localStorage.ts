"use client";

import { useScoreStore } from "./store/store";

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
  if (status) {
    useScoreStore.getState().incTotalPlayed();
    useScoreStore.getState().incTotalWin();
    updateLocalScoreDB(true);
  } else {
    useScoreStore.getState().incTotalPlayed();
    updateLocalScoreDB();
  }
};

export const updateLocalScoreDB = (win: boolean = false) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const scoreDB = getUserScore();
    if (win) {
      const updatedScoreDB = {
        ...scoreDB,
        totalPlayed: scoreDB.totalPlayed + 1,
        totalWin: scoreDB.totalWin + 1,
      };
      localStorage.setItem(localStorageKey, stringifyJson(updatedScoreDB));
    } else {
      const updatedScoreDB = {
        ...scoreDB,
        totalPlayed: scoreDB.totalPlayed + 1,
      };
      localStorage.setItem(localStorageKey, stringifyJson(updatedScoreDB));
    }
  }
};

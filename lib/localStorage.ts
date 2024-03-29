"use client";

import { useScoreStore, useStore } from "@/lib/store/store";
import { UserScore } from "@/lib/types";
import { syncUserScoreAndInfo } from "./store/store-utils";

export const localStorageKey = "carGoatDB";
const scoreDB = {
  totalPlayed: 0,
  totalWin: 0,
  totalChange: 0,
  winWithChange: 0,
  winWithoutChange: 0,
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
    const scoreLocalDB = localStorage.getItem(localStorageKey);
    if (!scoreLocalDB) {
      localStorage.setItem(localStorageKey, stringifyJson(scoreDB));
    }
  }
};

export const getUserScore = (): UserScore => {
  let scoreLocalDB = "";
  if (typeof window !== "undefined" && window.localStorage) {
    scoreLocalDB = localStorage.getItem(localStorageKey) || "";
  }
  return parseJson(scoreLocalDB);
};

export const clearScore = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem(localStorageKey);
  }
};

export const syncWithLocalDB = (user: UserScore) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(localStorageKey, stringifyJson(user));

    syncUserScoreAndInfo(user);
  }
};

export const gameWinned = (win: boolean = false) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const scoreDB = getUserScore();
    const currentDate = new Date();
    const isChanged =
      useStore.getState().selectedCardStage0 !==
      useStore.getState().selectedCardStage3
        ? true
        : false;

    if (win) {
      const updatedScoreDB = {
        ...scoreDB,
        totalPlayed: scoreDB.totalPlayed + 1,
        totalWin: scoreDB.totalWin + 1,
        totalChange: isChanged ? scoreDB.totalChange + 1 : scoreDB.totalChange,
        winWithChange: isChanged
          ? scoreDB.winWithChange + 1
          : scoreDB.winWithChange,
        winWithoutChange: isChanged
          ? scoreDB.winWithoutChange
          : scoreDB.winWithoutChange + 1,
        updatedAt: currentDate.toISOString(),
      };

      localStorage.setItem(localStorageKey, stringifyJson(updatedScoreDB));

      useScoreStore.getState().incTotalPlayed();
      useScoreStore.getState().incTotalWin();

      if (isChanged) {
        useScoreStore.getState().incTotalChange();
        useScoreStore.getState().incWinWithChange();
      } else {
        useScoreStore.getState().incWinWithoutChange();
      }
    } else {
      const updatedScoreDB = {
        ...scoreDB,
        totalPlayed: scoreDB.totalPlayed + 1,
        totalChange: isChanged ? scoreDB.totalChange + 1 : scoreDB.totalChange,
        updatedAt: currentDate.toISOString(),
      };

      localStorage.setItem(localStorageKey, stringifyJson(updatedScoreDB));

      useScoreStore.getState().incTotalPlayed();

      if (isChanged) {
        useScoreStore.getState().incTotalChange();
      }
    }
  }
};

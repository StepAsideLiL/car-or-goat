"use client";

import { useScoreStore } from "@/lib/store/store";
import { customAlphabet } from "nanoid";

type UserScore = {
  username: string;
  userId: string;
  totalPlayed: number;
  totalWin: number;
  updatedAt: string;
};

export const localStorageKey = "carGoatDB";
const scoreDB = {
  username: "",
  userId: "",
  totalPlayed: 0,
  totalWin: 0,
  updatedAt: "",
};
const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 10);

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

const obj1 = {
  username: "",
  totalPlayed: 4,
  totalWin: 12,
  updatedAt: "",
};

const obj2 = {
  username: "",
  userId: "",
  totalPlayed: 0,
  totalWin: 0,
  updatedAt: "",
};

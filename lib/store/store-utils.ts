"use client";

import { UserScore } from "@/lib/types";
import { useScoreStore, useStore } from "./store";

export const resetStore = () => {
  useStore.getState().resetStage();
  useStore.getState().resetSelectedCard();
  useStore.getState().resetSelectedCardStage0();
  useStore.getState().resetSelectedCardStage3();
  useStore.getState().resetSelectedItem();
  useStore.getState().resetShowCard1();
  useStore.getState().resetShowCard2();
  useStore.getState().resetShowCard3();
};

export const resetUserScoreAndInfo = () => {
  useScoreStore.getState().setUsername("");
  useScoreStore.getState().setUserId("");
  useScoreStore.getState().setTotalPlayed(0);
  useScoreStore.getState().setTotalWin(0);
  useScoreStore.getState().setTotalChange(0);
  useScoreStore.getState().setWinWithChange(0);
  useScoreStore.getState().setWinWithoutChange(0);
  useScoreStore.getState().setUpdatedAt("");
};

export const syncUserScoreAndInfo = (user: UserScore) => {
  const {
    username,
    userId,
    totalPlayed,
    totalWin,
    totalChange,
    winWithChange,
    winWithoutChange,
    updatedAt,
  } = user;

  useScoreStore.getState().setUsername(username);
  useScoreStore.getState().setUserId(userId);
  useScoreStore.getState().setTotalPlayed(totalPlayed);
  useScoreStore.getState().setTotalWin(totalWin);
  useScoreStore.getState().setTotalChange(totalChange);
  useScoreStore.getState().setWinWithChange(winWithChange);
  useScoreStore.getState().setWinWithoutChange(winWithoutChange);
  useScoreStore.getState().setUpdatedAt(updatedAt);
};

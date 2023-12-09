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
  useScoreStore.getState().setUpdatedAt("");
};

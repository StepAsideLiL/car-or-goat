import { useStore } from "./store";

export const resetStore = () => {
  useStore.getState().resetStage();
  useStore.getState().resetSelectedCard();
  useStore.getState().resetSelectedItem();
  useStore.getState().resetShowCard1();
  useStore.getState().resetShowCard2();
  useStore.getState().resetShowCard3();
};
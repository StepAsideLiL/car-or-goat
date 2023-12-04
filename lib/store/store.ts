import { create } from "zustand";

type Store = {
  stage: number;
  increaseStage: () => void;
  selectedItem: number | null;
  setSelectedItem: (newItem: number) => void;
  selectedCard: number | null;
  setSeletedCard: (newCard: number) => void;
  showCard1: boolean;
  showCard2: boolean;
  showCard3: boolean;
  setShowCard1: () => void;
  setShowCard2: () => void;
  setShowCard3: () => void;
};

export const useStore = create<Store>((set) => ({
  stage: 0,
  increaseStage: () => set((state) => ({ stage: state.stage + 1 })),
  selectedItem: null,
  setSelectedItem: (newItem) => set(() => ({ selectedItem: newItem })),
  selectedCard: null,
  setSeletedCard: (newCard) => set(() => ({ selectedCard: newCard })),
  showCard1: false,
  showCard2: false,
  showCard3: false,
  setShowCard1: () => set((state) => ({ showCard1: !state.showCard1 })),
  setShowCard2: () => set((state) => ({ showCard2: !state.showCard2 })),
  setShowCard3: () => set((state) => ({ showCard3: !state.showCard3 })),
}));

import { create } from "zustand";

type Cards = {
  cards: number[];
  setCards: (cards: number[]) => void;
};

export const useCards = create<Cards>((set) => ({
  cards: [],
  setCards: (cards) => set(() => ({ cards: cards })),
}));

type Store = {
  stage: number;
  increaseStage: () => void;
  resetStage: () => void;
  selectedItem: number | null;
  setSelectedItem: (newItem: number) => void;
  resetSelectedItem: () => void;
  selectedCard: number | null;
  setSelectedCard: (newCard: number) => void;
  resetSelectedCard: () => void;
  selectedCardStage0: number | null;
  setSelectedCardStage0: (newCard: number) => void;
  resetSelectedCardStage0: () => void;
  selectedCardStage3: number | null;
  setSelectedCardStage3: (newCard: number) => void;
  resetSelectedCardStage3: () => void;
  showCard1: boolean;
  showCard2: boolean;
  showCard3: boolean;
  setShowCard1: () => void;
  setShowCard2: () => void;
  setShowCard3: () => void;
  resetShowCard1: () => void;
  resetShowCard2: () => void;
  resetShowCard3: () => void;
};

export const useStore = create<Store>((set) => ({
  stage: 0,
  increaseStage: () => set((state) => ({ stage: state.stage + 1 })),
  resetStage: () => set((state) => ({ stage: 0 })),
  selectedItem: null,
  setSelectedItem: (newItem) => set(() => ({ selectedItem: newItem })),
  resetSelectedItem: () => set(() => ({ selectedItem: null })),
  selectedCard: null,
  setSelectedCard: (newCard) => set(() => ({ selectedCard: newCard })),
  resetSelectedCard: () => set(() => ({ selectedCard: null })),
  selectedCardStage0: null,
  setSelectedCardStage0: (newCard) =>
    set(() => ({ selectedCardStage0: newCard })),
  resetSelectedCardStage0: () => set(() => ({ selectedCardStage0: null })),
  selectedCardStage3: null,
  setSelectedCardStage3: (newCard) =>
    set(() => ({ selectedCardStage3: newCard })),
  resetSelectedCardStage3: () => set(() => ({ selectedCardStage3: null })),
  showCard1: false,
  showCard2: false,
  showCard3: false,
  setShowCard1: () => set((state) => ({ showCard1: !state.showCard1 })),
  setShowCard2: () => set((state) => ({ showCard2: !state.showCard2 })),
  setShowCard3: () => set((state) => ({ showCard3: !state.showCard3 })),
  resetShowCard1: () => set(() => ({ showCard1: false })),
  resetShowCard2: () => set(() => ({ showCard2: false })),
  resetShowCard3: () => set(() => ({ showCard3: false })),
}));

type ScoreStore = {
  username: string;
  userId: string;
  totalPlayed: number;
  totalWin: number;
  totalChange: number;
  winWithChange: number;
  winWithoutChange: number;
  updatedAt: string;
  setUsername: (username: string) => void;
  setUserId: (userId: string) => void;
  setTotalPlayed: (totalPlayed: number) => void;
  setTotalWin: (totalWin: number) => void;
  setTotalChange: (totalChange: number) => void;
  setWinWithChange: (winWithChange: number) => void;
  setWinWithoutChange: (winWithoutChange: number) => void;
  setUpdatedAt: (date: string) => void;
  incTotalPlayed: () => void;
  incTotalWin: () => void;
  incTotalChange: () => void;
  incWinWithChange: () => void;
  incWinWithoutChange: () => void;
};

export const useScoreStore = create<ScoreStore>((set) => ({
  username: "",
  userId: "",
  totalPlayed: 0,
  totalWin: 0,
  totalChange: 0,
  winWithChange: 0,
  winWithoutChange: 0,
  updatedAt: "",
  setUsername: (username) => set(() => ({ username: username })),
  setUserId: (userId) => set(() => ({ userId: userId })),
  setTotalPlayed: (totalPlayed) => set(() => ({ totalPlayed: totalPlayed })),
  setTotalWin: (totalWin) => set(() => ({ totalWin: totalWin })),
  setTotalChange: (totalChange) => set(() => ({ totalChange: totalChange })),
  setWinWithChange: (winWithChange) =>
    set(() => ({ winWithChange: winWithChange })),
  setWinWithoutChange: (winWithoutChange) =>
    set(() => ({ winWithoutChange: winWithoutChange })),
  setUpdatedAt: (date) => set(() => ({ updatedAt: date })),
  incTotalPlayed: () => set((s) => ({ totalPlayed: s.totalPlayed + 1 })),
  incTotalWin: () => set((s) => ({ totalWin: s.totalWin + 1 })),
  incTotalChange: () => set((s) => ({ totalChange: s.totalChange + 1 })),
  incWinWithChange: () => set((s) => ({ winWithChange: s.winWithChange + 1 })),
  incWinWithoutChange: () =>
    set((s) => ({ winWithoutChange: s.winWithoutChange + 1 })),
}));

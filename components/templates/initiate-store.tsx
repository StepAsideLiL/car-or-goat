"use client";

import { createScoreLocalDB, getUserScore } from "@/lib/localStorage";
import { syncUserScoreAndInfo } from "@/lib/store/store-utils";
import { useEffect } from "react";
import { useCards } from "@/lib/store/store";
import { randomCard } from "@/lib/card-combination-generator";

const InitiateStore = () => {
  const setCards = useCards((s) => s.setCards);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      createScoreLocalDB();

      setCards(randomCard());

      const user = getUserScore();
      syncUserScoreAndInfo(user);
    }
  }, []);

  return null;
};

export default InitiateStore;

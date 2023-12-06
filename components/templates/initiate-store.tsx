"use client";

import { createScoreLocalDB, getUserScore } from "@/lib/localStorage";
import { useScoreStore } from "@/lib/store/store";
import { useEffect } from "react";

const InitiateStore = () => {
  const [setUsername, setTotalPlayed, setTotalWin, setUpdatedAt] =
    useScoreStore((s) => [
      s.setUsername,
      s.setTotalPlayed,
      s.setTotalWin,
      s.setUpdatedAt,
    ]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      createScoreLocalDB();
      const { username, totalPlayed, totalWin, updatedAt } = getUserScore();
      setUsername(username);
      setTotalPlayed(totalPlayed);
      setTotalWin(totalWin);
      setUpdatedAt(updatedAt);
    }
  }, [setTotalPlayed, setTotalWin, setUpdatedAt, setUsername]);

  return null;
};

export default InitiateStore;

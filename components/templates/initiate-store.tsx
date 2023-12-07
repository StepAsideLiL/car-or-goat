"use client";

import { createScoreLocalDB, getUserScore } from "@/lib/localStorage";
import { useScoreStore } from "@/lib/store/store";
import { useEffect } from "react";

const InitiateStore = () => {
  const [setUsername, setUserId, setTotalPlayed, setTotalWin, setUpdatedAt] =
    useScoreStore((s) => [
      s.setUsername,
      s.setUserId,
      s.setTotalPlayed,
      s.setTotalWin,
      s.setUpdatedAt,
    ]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      createScoreLocalDB();
      const { username, userId, totalPlayed, totalWin, updatedAt } =
        getUserScore();
      setUsername(username);
      setUserId(userId), setTotalPlayed(totalPlayed);
      setTotalWin(totalWin);
      setUpdatedAt(updatedAt);
    }
  }, [setTotalPlayed, setTotalWin, setUpdatedAt, setUserId, setUsername]);

  return null;
};

export default InitiateStore;

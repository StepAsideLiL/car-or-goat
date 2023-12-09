"use client";

import { createScoreLocalDB, getUserScore } from "@/lib/localStorage";
import { useScoreStore } from "@/lib/store/store";
import { useEffect } from "react";

const InitiateStore = () => {
  const [
    setUsername,
    setUserId,
    setTotalPlayed,
    setTotalWin,
    setTotalChange,
    setWinWithChange,
    setWinWithoutChange,
    setUpdatedAt,
  ] = useScoreStore((s) => [
    s.setUsername,
    s.setUserId,
    s.setTotalPlayed,
    s.setTotalWin,
    s.setTotalChange,
    s.setWinWithChange,
    s.setWinWithoutChange,
    s.setUpdatedAt,
  ]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      createScoreLocalDB();
      const {
        username,
        userId,
        totalPlayed,
        totalWin,
        totalChange,
        winWithChange,
        winWithoutChange,
        updatedAt,
      } = getUserScore();
      setUsername(username);
      setUserId(userId);
      setTotalPlayed(totalPlayed);
      setTotalWin(totalWin);
      setTotalChange(totalChange);
      setWinWithChange(winWithChange);
      setWinWithoutChange(winWithoutChange);
      setUpdatedAt(updatedAt);
    }
  }, [
    setTotalChange,
    setTotalPlayed,
    setTotalWin,
    setUpdatedAt,
    setUserId,
    setUsername,
    setWinWithChange,
    setWinWithoutChange,
  ]);

  return null;
};

export default InitiateStore;

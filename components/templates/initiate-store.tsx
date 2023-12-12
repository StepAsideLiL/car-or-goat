"use client";

import { createScoreLocalDB, getUserScore } from "@/lib/localStorage";
import { syncUserScoreAndInfo } from "@/lib/store/store-utils";
import { useEffect } from "react";

const InitiateStore = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      createScoreLocalDB();

      const user = getUserScore();
      syncUserScoreAndInfo(user);
    }
  }, []);

  return null;
};

export default InitiateStore;

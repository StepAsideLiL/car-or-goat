"use client";

import { useScoreStore } from "@/lib/store/store";

const Score = () => {
  const [username, totalPlayed, totalWin] = useScoreStore((s) => [
    s.username,
    s.totalPlayed,
    s.totalWin,
  ]);

  return (
    <div className="flex gap-2 items-center">
      <h1>{username}</h1>

      <h1 className="md:text-xl text-base font-medium">
        <span>Score:</span>{" "}
        <span className="inline-block">
          {totalWin} / {totalPlayed}
        </span>
      </h1>
    </div>
  );
};

export default Score;

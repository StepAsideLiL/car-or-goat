"use client";

import { useScoreStore } from "@/lib/store/store";

const Score = () => {
  const [totalPlayed, totalWin] = useScoreStore((s) => [
    s.totalPlayed,
    s.totalWin,
  ]);

  return (
    <div className="flex gap-2 items-center">
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

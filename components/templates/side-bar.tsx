"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useScoreStore } from "@/lib/store/store";
import { clearScore } from "@/lib/localStorage";
import { resetStore, resetUserScoreAndInfo } from "@/lib/store/store-utils";
import { useRouter } from "next/navigation";
import { AvatarIcon } from "@/components/uis";

const Sidebar = () => {
  const router = useRouter();
  const [
    username,
    userId,
    played,
    totalWin,
    changed,
    winningChange,
    winningWithoutChange,
  ] = useScoreStore((s) => [
    s.username,
    s.userId,
    s.totalPlayed,
    s.totalWin,
    s.totalChange,
    s.winWithChange,
    s.winWithoutChange,
  ]);

  const handleReset = () => {
    router.refresh();
    clearScore();
    resetUserScoreAndInfo();
    resetStore();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>
          <AvatarIcon username={username} />
        </Button>
      </SheetTrigger>

      <SheetContent className="space-y-6">
        <SheetHeader>
          <SheetTitle>{username === "" ? "(No name)" : username}</SheetTitle>
          <SheetDescription>
            {userId === "" ? "(No user id)" : userId}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Your Scores</h1>

          <div className="space-y-1">
            <p>Played: {played}</p>
            <p>Total Win: {totalWin}</p>
            <p>Option Changed: {changed}</p>
            <p>Win with Change: {winningChange}</p>
            <p>Win without Change: {winningWithoutChange}</p>
          </div>

          <Button onClick={handleReset}>Reset</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

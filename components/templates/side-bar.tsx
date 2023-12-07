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
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScoreStore } from "@/lib/store/store";
import { clearScore } from "@/lib/localStorage";
import { resetStore, resetUserScoreAndInfo } from "@/lib/store/store-utils";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [username, userId, played, win] = useScoreStore((s) => [
    s.username,
    s.userId,
    s.totalPlayed,
    s.totalWin,
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
          <Menu />
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
          <p>Played: {played}</p>
          <p>Win: {win}</p>
          <p>Change: {"12"}</p>

          <Button onClick={handleReset}>Reset</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

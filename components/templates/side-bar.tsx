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
import { AvatarIcon, SidebarSectionHeader } from "@/components/uis";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SyncWithUserId from "@/components/forms/sync-id";

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

  const sideMenu = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
    },
  ];

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

      <SheetContent className="space-y-6 w-full">
        <SheetHeader>
          <SheetTitle>{username === "" ? "(No name)" : username}</SheetTitle>
          <SheetDescription>
            User Id:{" "}
            <span className="font-semibold">
              {userId === "" ? "(No user id)" : userId}
            </span>
          </SheetDescription>
        </SheetHeader>

        <div>
          <section className="space-y-2 pb-2">
            <SidebarSectionHeader>Your Score</SidebarSectionHeader>

            <div className="space-y-1">
              <p>Played: {played}</p>
              <p>Total Win: {totalWin}</p>
              <p>Option Changed: {changed}</p>
              <p>Win with Change: {winningChange}</p>
              <p>Win without Change: {winningWithoutChange}</p>
            </div>

            <Button onClick={handleReset}>Reset</Button>
          </section>

          <Separator className="my-2" />

          <section className="space-y-2 pb-2">
            <SidebarSectionHeader>
              Sync with the Database with your user id
            </SidebarSectionHeader>

            <SyncWithUserId />
          </section>

          <Separator className="my-2" />

          <section>
            <SidebarSectionHeader>Menu</SidebarSectionHeader>

            <nav>
              <ul className="space-y-2">
                {sideMenu.map((menu) => (
                  <li key={menu.href}>
                    <Link
                      href={menu.href}
                      className="font-medium text-lg w-full pl-2 p-1 rounded hover:bg-slate-200 inline-block"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

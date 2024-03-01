"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useScoreStore } from "@/lib/store/store";
import { clearScore } from "@/lib/localStorage";
import { resetStore, resetUserScoreAndInfo } from "@/lib/store/store-utils";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Home, Info } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const [played, totalWin, changed, winningChange, winningWithoutChange] =
    useScoreStore((s) => [
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
      icon: <Home size={"20px"} />,
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
        <Button variant={"ghost"} size={"icon"}>
          <Info />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Your Score Details</SheetTitle>
        </SheetHeader>

        <section className="space-y-2">
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

        <section>
          <nav>
            <ul className="space-y-2">
              {sideMenu.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className="font-medium text-lg w-full pl-2 p-1 rounded hover:bg-slate-200 flex gap-1 items-center"
                  >
                    <span>{menu.icon}</span>
                    <span>{menu.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

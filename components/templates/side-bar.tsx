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

const Sidebar = () => {
  const [username, userId] = useScoreStore((s) => [s.username, s.userId]);

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
          <p>Played: {"12"}</p>
          <p>Win: {"12"}</p>
          <p>Change: {"12"}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

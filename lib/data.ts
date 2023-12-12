import prisma from "@/lib/prismadb";
import { cache } from "react";

export const leaderboard = cache(async () => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  const users = await prisma.user.findMany({
    orderBy: {
      totalWin: "desc",
    },
  });

  return users;
});

import prisma from "@/lib/prismadb";
import { unstable_noStore as noStore } from "next/cache";

export const leaderboard = async () => {
  noStore();

  const users = await prisma.user.findMany({
    orderBy: {
      totalWin: "desc",
    },
  });

  return users;
};

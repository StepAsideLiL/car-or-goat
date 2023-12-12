import prisma from "@/lib/prismadb";

export const leaderboard = async () => {
  const users = await prisma.user.findMany();

  return users;
};

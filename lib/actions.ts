"use server";

import { UserScore } from "@/lib/types";
import prisma from "@/lib/prismadb";

export const updateAndCreateUser = async (userscore: UserScore) => {
  try {
    const {
      userId,
      totalPlayed,
      totalWin,
      totalChange,
      winWithChange,
      winWithoutChange,
      updatedAt,
    } = userscore;

    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!user && userId !== "") {
      await prisma.user.create({ data: userscore });
    }

    if (user) {
      await prisma.user.update({
        where: { userId: userId },
        data: {
          totalPlayed: totalPlayed,
          totalWin: totalWin,
          totalChange: totalChange,
          winWithChange: winWithChange,
          winWithoutChange: winWithoutChange,
          updatedAt: updatedAt,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Database Error: Unable to Create User");
  }
};

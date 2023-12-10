-- CreateTable
CREATE TABLE "User" (
    "userId" STRING NOT NULL,
    "username" STRING NOT NULL,
    "totalPlayed" INT4 NOT NULL,
    "totalWin" INT4 NOT NULL,
    "totalChange" INT4 NOT NULL,
    "winWithChange" INT4 NOT NULL,
    "winWithoutChange" INT4 NOT NULL,
    "updatedAt" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

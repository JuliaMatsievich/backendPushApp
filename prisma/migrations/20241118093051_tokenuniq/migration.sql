/*
  Warnings:

  - A unique constraint covering the columns `[pushToken]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_pushToken_key" ON "user"("pushToken");
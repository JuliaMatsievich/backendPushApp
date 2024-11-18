-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "pushToken" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the `video` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "video";

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "video" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

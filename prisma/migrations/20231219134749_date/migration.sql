/*
  Warnings:

  - Added the required column `updatedAt` to the `Catagory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CatagoryBlogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CatagoryFaq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SubCatagory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catagory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CatagoryBlogs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CatagoryFaq" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SubCatagory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

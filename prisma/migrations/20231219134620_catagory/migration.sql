-- CreateTable
CREATE TABLE "Catagory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "picture" TEXT,

    CONSTRAINT "Catagory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCatagory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "picture" TEXT,
    "catagoryId" INTEGER NOT NULL,

    CONSTRAINT "SubCatagory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatagoryBlogs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "picture" TEXT,
    "catagoryId" INTEGER NOT NULL,

    CONSTRAINT "CatagoryBlogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatagoryFaq" (
    "id" SERIAL NOT NULL,
    "Question" TEXT NOT NULL,
    "Answer" TEXT NOT NULL,
    "catagoryId" INTEGER NOT NULL,

    CONSTRAINT "CatagoryFaq_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubCatagory" ADD CONSTRAINT "SubCatagory_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "Catagory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatagoryBlogs" ADD CONSTRAINT "CatagoryBlogs_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "Catagory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatagoryFaq" ADD CONSTRAINT "CatagoryFaq_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "Catagory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

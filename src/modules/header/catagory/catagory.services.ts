import { Catagory, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const CreateCatagory = async (data: any): Promise<Catagory> => {
  const result = await prisma.catagory.create({
    data,
  });
  return result;
};
const GetSingleCatagory = async (id: number) => {
  const result = await prisma.catagory.findUnique({
    where: {
      id,
    },
    include: {
      Header: true,
      SubCatagory: true,
      CatagoryBlogs: true,
      CatagoryFaq: true,
    },
  });
  return result;
};

const AllCategory = async () => {
  const result = await prisma.catagory.findMany();
  return result;
};
const updateCategory = async (
  id: number,
  payload: Partial<Catagory>
): Promise<Catagory | number> => {
  const result = await prisma.catagory.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteCategory = async (id: number): Promise<Catagory> => {
  const result = await prisma.catagory.delete({
    where: {
      id,
    },
  });
  return result;
};
export const CategoryServices = {
  CreateCatagory,
  GetSingleCatagory,
  AllCategory,
  updateCategory,
  deleteCategory,
};

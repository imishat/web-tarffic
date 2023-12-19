import { PrismaClient, SubCatagory } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<SubCatagory> => {
  const result = await prisma.subCatagory.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.subCatagory.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async () => {
  const result = await prisma.subCatagory.findMany();
  return result;
};
const update = async (
  id: number,
  payload: Partial<SubCatagory>
): Promise<SubCatagory | number> => {
  const result = await prisma.subCatagory.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<SubCatagory> => {
  const result = await prisma.subCatagory.delete({
    where: {
      id,
    },
  });
  return result;
};
export const SubCategoryServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

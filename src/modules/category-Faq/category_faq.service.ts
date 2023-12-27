import { CatagoryFaq, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<CatagoryFaq> => {
  const result = await prisma.catagoryFaq.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.catagoryFaq.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async (options: any) => {
  const { sortBy, sortOrder } = options;
  const result = await prisma.catagoryFaq.findMany({
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : { createdAt: "desc" },
  });
  return result;
};
const update = async (
  id: number,
  payload: Partial<CatagoryFaq>
): Promise<CatagoryFaq | number> => {
  const result = await prisma.catagoryFaq.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<CatagoryFaq> => {
  const result = await prisma.catagoryFaq.delete({
    where: {
      id,
    },
  });
  return result;
};
export const CatagoryFaqServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

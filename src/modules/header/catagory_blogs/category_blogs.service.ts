import { CatagoryBlogs, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<CatagoryBlogs> => {
  const result = await prisma.catagoryBlogs.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.catagoryBlogs.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async (options: any) => {
  const { sortBy, sortOrder } = options;
  const result = await prisma.catagoryBlogs.findMany({
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
  payload: Partial<CatagoryBlogs>
): Promise<CatagoryBlogs | number> => {
  const result = await prisma.catagoryBlogs.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<CatagoryBlogs> => {
  const result = await prisma.catagoryBlogs.delete({
    where: {
      id,
    },
  });
  return result;
};
export const CatagoryBlogsServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

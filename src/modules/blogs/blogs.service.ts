import { Blogs, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<Blogs> => {
  const result = await prisma.blogs.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.blogs.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async (options: any) => {
  const { sortBy, sortOrder } = options;
  const result = await prisma.blogs.findMany({
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
  payload: Partial<Blogs>
): Promise<Blogs | number> => {
  const result = await prisma.blogs.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<Blogs> => {
  const result = await prisma.blogs.delete({
    where: {
      id,
    },
  });
  return result;
};
export const BlogsServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

import { Header, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//push data in databse
const createHeader = async (data: any): Promise<Header> => {
  const result = await prisma.header.create({
    data,
  });
  return result;
};
// get all header data
const getAllHeader = async (options: any) => {
  const { sortBy, sortOrder, searchTerm } = options;
  const result = await prisma.header.findMany({
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : { createdAt: "desc" },
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  return result;
};
const updateHeader = async (
  id: number,
  payload: Partial<Header>
): Promise<Header | number> => {
  const result = await prisma.header.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteHeader = async (id: number): Promise<Header> => {
  const result = await prisma.header.delete({
    where: {
      id,
    },
  });
  return result;
};
export const headerService = {
  createHeader,
  getAllHeader,
  updateHeader,
  deleteHeader,
};

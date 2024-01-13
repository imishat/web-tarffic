import { Grow, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<Grow> => {
  const result = await prisma.grow.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.grow.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async () => {
  const result = await prisma.grow.findMany();

  return result;
};

const update = async (
  id: number,
  payload: Partial<Grow>
): Promise<Grow | number> => {
  const result = await prisma.grow.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<Grow> => {
  const result = await prisma.grow.delete({
    where: {
      id,
    },
  });
  return result;
};
export const GrowServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

import { Web, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<Web> => {
  const result = await prisma.web.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.web.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async () => {
  const result = await prisma.web.findMany();

  return result;
};

const update = async (
  id: number,
  payload: Partial<Web>
): Promise<Web | number> => {
  const result = await prisma.web.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<Web> => {
  const result = await prisma.web.delete({
    where: {
      id,
    },
  });
  return result;
};
export const WebServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

import { Video, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<Video> => {
  const result = await prisma.video.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.video.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async () => {
  const result = await prisma.video.findMany();

  return result;
};

const update = async (
  id: number,
  payload: Partial<Video>
): Promise<Video | number> => {
  const result = await prisma.video.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<Video> => {
  const result = await prisma.video.delete({
    where: {
      id,
    },
  });
  return result;
};
export const VideoServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

import { Contact, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const create = async (data: any): Promise<Contact> => {
  const result = await prisma.contact.create({
    data,
  });
  return result;
};
const GetSingle = async (id: number) => {
  const result = await prisma.contact.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const All = async () => {
  const result = await prisma.contact.findMany();

  return result;
};

const update = async (
  id: number,
  payload: Partial<Contact>
): Promise<Contact | number> => {
  const result = await prisma.contact.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deletedata = async (id: number): Promise<Contact> => {
  const result = await prisma.contact.delete({
    where: {
      id,
    },
  });
  return result;
};
export const ContactServices = {
  create,
  GetSingle,
  All,
  update,
  deletedata,
};

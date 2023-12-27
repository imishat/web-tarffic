"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateCatagory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.catagory.create({
        data,
    });
    return result;
});
const GetSingleCatagory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.catagory.findUnique({
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
});
const AllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.catagory.findMany();
    return result;
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.catagory.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.catagory.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.CategoryServices = {
    CreateCatagory,
    GetSingleCatagory,
    AllCategory,
    updateCategory,
    deleteCategory,
};

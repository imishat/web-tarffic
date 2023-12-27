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
exports.CategoryController = void 0;
const catagory_services_1 = require("./catagory.services");
const CategoryCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield catagory_services_1.CategoryServices.CreateCatagory(req.body);
        res.send({
            success: true,
            message: " Create Category Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const singleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield catagory_services_1.CategoryServices.GetSingleCatagory(id);
        res.send({
            success: true,
            message: " Get Category Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const AllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield catagory_services_1.CategoryServices.AllCategory();
        res.send({
            success: true,
            message: " All Category Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const updateCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const result = yield catagory_services_1.CategoryServices.updateCategory(id, data);
        res.send({
            success: true,
            message: " updated Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield catagory_services_1.CategoryServices.deleteCategory(id);
        res.send({
            success: true,
            message: " deleted Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.CategoryController = {
    CategoryCreateController,
    singleCategory,
    AllCategory,
    updateCategoryController,
    deleteCategoryController,
};

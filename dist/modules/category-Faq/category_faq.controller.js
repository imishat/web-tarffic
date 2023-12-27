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
exports.CatagoryFaqController = void 0;
const category_faq_service_1 = require("./category_faq.service");
const CreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_faq_service_1.CatagoryFaqServices.create(req.body);
        res.send({
            success: true,
            message: " Create  Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const SingleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield category_faq_service_1.CatagoryFaqServices.GetSingle(id);
        res.send({
            success: true,
            message: " Get Single Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const AllController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = req.query;
    try {
        const result = yield category_faq_service_1.CatagoryFaqServices.All(options);
        res.send({
            success: true,
            message: "Get All  Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const updateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const result = yield category_faq_service_1.CatagoryFaqServices.update(id, data);
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
const deleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield category_faq_service_1.CatagoryFaqServices.deletedata(id);
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
exports.CatagoryFaqController = {
    CreateController,
    SingleController,
    AllController,
    updateController,
    deleteController,
};

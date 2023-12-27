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
exports.headerController = void 0;
const header_service_1 = require("./header.service");
const headerCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield header_service_1.headerService.createHeader(req.body);
        res.send({
            success: true,
            message: " Create Header Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const getAllHeaderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = req.query;
    try {
        const result = yield header_service_1.headerService.getAllHeader(options);
        res.send({
            success: true,
            message: " Get Header Successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const updateHeaderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const result = yield header_service_1.headerService.updateHeader(id, data);
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
const deleteHeaderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield header_service_1.headerService.deleteHeader(id);
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
exports.headerController = {
    headerCreateController,
    getAllHeaderController,
    updateHeaderController,
    deleteHeaderController,
};

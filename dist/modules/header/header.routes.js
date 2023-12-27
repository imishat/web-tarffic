"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HerderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const header_controller_1 = require("./header.controller");
const router = express_1.default.Router();
router.post("/create-header", header_controller_1.headerController.headerCreateController);
router.get("/get-header", header_controller_1.headerController.getAllHeaderController);
router.put("/update-header/:id", header_controller_1.headerController.updateHeaderController);
router.delete("/deleted-header/:id", header_controller_1.headerController.updateHeaderController);
exports.HerderRoutes = router;

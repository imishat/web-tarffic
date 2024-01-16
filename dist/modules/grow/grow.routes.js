"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowRouters = void 0;
const express_1 = __importDefault(require("express"));
const grow_controller_1 = require("./grow.controller");
const router = express_1.default.Router();
router.post("/crete-grow", grow_controller_1.GrowController.CreateController);
router.get("/single-grow/:id", grow_controller_1.GrowController.SingleController);
router.get("/all-grow", grow_controller_1.GrowController.AllController);
router.put("/update-grow/:id", grow_controller_1.GrowController.updateController);
router.delete("/deleted-grow/:id", grow_controller_1.GrowController.deleteController);
exports.GrowRouters = router;

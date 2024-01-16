"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRouters = void 0;
const express_1 = __importDefault(require("express"));
const web_controller_1 = require("./web.controller");
const router = express_1.default.Router();
router.post("/crete-web", web_controller_1.WebController.CreateController);
router.get("/single-web/:id", web_controller_1.WebController.SingleController);
router.get("/all-web", web_controller_1.WebController.AllController);
router.put("/update-web/:id", web_controller_1.WebController.updateController);
router.delete("/deleted-web/:id", web_controller_1.WebController.deleteController);
exports.WebRouters = router;

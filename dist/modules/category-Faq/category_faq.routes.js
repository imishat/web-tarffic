"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFAQRouters = void 0;
const express_1 = __importDefault(require("express"));
const category_faq_controller_1 = require("./category_faq.controller");
const router = express_1.default.Router();
router.post("/crete-FAQ", category_faq_controller_1.CatagoryFaqController.CreateController);
router.get("/single-FAQ/:id", category_faq_controller_1.CatagoryFaqController.SingleController);
router.get("/all-FAQ", category_faq_controller_1.CatagoryFaqController.AllController);
router.put("/update-FAQ/:id", category_faq_controller_1.CatagoryFaqController.updateController);
router.delete("/deleted-FAQ/:id", category_faq_controller_1.CatagoryFaqController.deleteController);
exports.CategoryFAQRouters = router;

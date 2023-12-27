"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryRouters = void 0;
const express_1 = __importDefault(require("express"));
const subcategory_controller_1 = require("./subcategory.controller");
const router = express_1.default.Router();
router.post("/crete-subcategory", subcategory_controller_1.SubCategoryController.CreateController);
router.get("/single-subcategory/:id", subcategory_controller_1.SubCategoryController.SingleController);
router.get("/all-subcategory", subcategory_controller_1.SubCategoryController.AllController);
router.put("/update-subcategory/:id", subcategory_controller_1.SubCategoryController.updateController);
router.delete("/deleted-subcategory/:id", subcategory_controller_1.SubCategoryController.deleteController);
exports.SubCategoryRouters = router;

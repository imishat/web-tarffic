"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouters = void 0;
const express_1 = __importDefault(require("express"));
const catagory_controller_1 = require("./catagory.controller");
const router = express_1.default.Router();
router.post("/crete-category", catagory_controller_1.CategoryController.CategoryCreateController);
router.get("/single-category/:id", catagory_controller_1.CategoryController.singleCategory);
router.get("/all-category", catagory_controller_1.CategoryController.AllCategory);
router.put("/update-category/:id", catagory_controller_1.CategoryController.updateCategoryController);
router.delete("/deleted-category/:id", catagory_controller_1.CategoryController.deleteCategoryController);
exports.CategoryRouters = router;

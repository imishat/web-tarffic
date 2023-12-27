"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryBlogsRouters = void 0;
const express_1 = __importDefault(require("express"));
const category_blogs_controller_1 = require("./category_blogs.controller");
const router = express_1.default.Router();
router.post("/crete-blogs", category_blogs_controller_1.CatagoryBlogsController.CreateController);
router.get("/single-blogs/:id", category_blogs_controller_1.CatagoryBlogsController.SingleController);
router.get("/all-blogs", category_blogs_controller_1.CatagoryBlogsController.AllController);
router.put("/update-blogs/:id", category_blogs_controller_1.CatagoryBlogsController.updateController);
router.delete("/deleted-blogs/:id", category_blogs_controller_1.CatagoryBlogsController.deleteController);
exports.CategoryBlogsRouters = router;

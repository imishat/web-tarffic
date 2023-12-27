"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRouters = void 0;
const express_1 = __importDefault(require("express"));
const blogs_controller_1 = require("./blogs.controller");
const router = express_1.default.Router();
router.post("/crete-blog", blogs_controller_1.BlogsController.CreateController);
router.get("/single-blog/:id", blogs_controller_1.BlogsController.SingleController);
router.get("/all-blog", blogs_controller_1.BlogsController.AllController);
router.put("/update-blog/:id", blogs_controller_1.BlogsController.updateController);
router.delete("/deleted-blog/:id", blogs_controller_1.BlogsController.deleteController);
exports.BlogsRouters = router;

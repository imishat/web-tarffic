"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRouters = void 0;
const express_1 = __importDefault(require("express"));
const video_controller_1 = require("./video.controller");
const router = express_1.default.Router();
router.post("/crete-video", video_controller_1.VideoController.CreateController);
router.get("/single-video/:id", video_controller_1.VideoController.SingleController);
router.get("/all-video", video_controller_1.VideoController.AllController);
router.put("/update-video/:id", video_controller_1.VideoController.updateController);
router.delete("/deleted-video/:id", video_controller_1.VideoController.deleteController);
exports.VideoRouters = router;

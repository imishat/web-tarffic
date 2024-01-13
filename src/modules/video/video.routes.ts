import express from "express";

import { VideoController } from "./video.controller";

const router = express.Router();
router.post("/crete-video", VideoController.CreateController);
router.get("/single-video/:id", VideoController.SingleController);
router.get("/all-video", VideoController.AllController);
router.put("/update-video/:id", VideoController.updateController);
router.delete("/deleted-video/:id", VideoController.deleteController);
export const VideoRouters = router;

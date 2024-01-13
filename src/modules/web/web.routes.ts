import express from "express";

import { WebController } from "./web.controller";

const router = express.Router();
router.post("/crete-web", WebController.CreateController);
router.get("/single-web/:id", WebController.SingleController);
router.get("/all-web", WebController.AllController);
router.put("/update-web/:id", WebController.updateController);
router.delete("/deleted-web/:id", WebController.deleteController);
export const WebRouters = router;

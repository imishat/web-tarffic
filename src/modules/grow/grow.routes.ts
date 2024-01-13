import express from "express";
import { GrowController } from "./grow.controller";

const router = express.Router();
router.post("/crete-grow", GrowController.CreateController);
router.get("/single-grow/:id", GrowController.SingleController);
router.get("/all-grow", GrowController.AllController);
router.put("/update-grow/:id", GrowController.updateController);
router.delete("/deleted-grow/:id", GrowController.deleteController);
export const GrowRouters = router;

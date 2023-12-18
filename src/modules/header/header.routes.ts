import express from "express";
import { headerController } from "./header.controller";

const router = express.Router();
router.post("/create-header", headerController.headerCreateController);
router.get("/get-header", headerController.getAllHeaderController);
router.put("/update-header/:id", headerController.updateHeaderController);
router.delete("/deleted-header/:id", headerController.updateHeaderController);
export const HerderRoutes = router;

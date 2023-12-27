import express from "express";
import { CatagoryFaqController } from "./category_faq.controller";

const router = express.Router();
router.post("/crete-FAQ", CatagoryFaqController.CreateController);
router.get("/single-FAQ/:id", CatagoryFaqController.SingleController);
router.get("/all-FAQ", CatagoryFaqController.AllController);
router.put("/update-FAQ/:id", CatagoryFaqController.updateController);
router.delete("/deleted-FAQ/:id", CatagoryFaqController.deleteController);
export const CategoryFAQRouters = router;

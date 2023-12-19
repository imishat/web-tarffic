import express from "express";
import { SubCategoryController } from "./subcategory.controller";

const router = express.Router();
router.post("/crete-subcategory", SubCategoryController.CreateController);
router.get("/single-subcategory/:id", SubCategoryController.SingleController);
router.get("/all-subcategory", SubCategoryController.AllController);
router.put("/update-subcategory/:id", SubCategoryController.updateController);
router.delete(
  "/deleted-subcategory/:id",
  SubCategoryController.deleteController
);
export const SubCategoryRouters = router;

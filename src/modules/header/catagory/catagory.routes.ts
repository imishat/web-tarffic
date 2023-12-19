import express from "express";
import { CategoryController } from "./catagory.controller";

const router = express.Router();
router.post("/crete-category", CategoryController.CategoryCreateController);
router.get("/single-category/:id", CategoryController.singleCategory);
router.get("/all-category", CategoryController.AllCategory);
router.put("/update-category/:id", CategoryController.updateCategoryController);
router.delete(
  "/deleted-category/:id",
  CategoryController.deleteCategoryController
);
export const CategoryRouters = router;

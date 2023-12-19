import express from "express";
import { CatagoryBlogsController } from "./category_blogs.controller";

const router = express.Router();
router.post("/crete-blogs", CatagoryBlogsController.CreateController);
router.get("/single-blogs/:id", CatagoryBlogsController.SingleController);
router.get("/all-blogs", CatagoryBlogsController.AllController);
router.put("/update-blogs/:id", CatagoryBlogsController.updateController);
router.delete("/deleted-blogs/:id", CatagoryBlogsController.deleteController);
export const CategoryBlogsRouters = router;

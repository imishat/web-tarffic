import express from "express";
import { BlogsController } from "./blogs.controller";

const router = express.Router();
router.post("/crete-blog", BlogsController.CreateController);
router.get("/single-blog/:id", BlogsController.SingleController);
router.get("/all-blog", BlogsController.AllController);
router.put("/update-blog/:id", BlogsController.updateController);
router.delete("/deleted-blog/:id", BlogsController.deleteController);
export const BlogsRouters = router;

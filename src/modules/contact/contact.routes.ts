import express from "express";
import { ContactController } from "./contact.controller";

const router = express.Router();
router.post("/crete-contact", ContactController.CreateController);
router.get("/single-contact/:id", ContactController.SingleController);
router.get("/all-contact", ContactController.AllController);
router.put("/update-contact/:id", ContactController.updateController);
router.delete("/deleted-contact/:id", ContactController.deleteController);
export const ContactRouters = router;

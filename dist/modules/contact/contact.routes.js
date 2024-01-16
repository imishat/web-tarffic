"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRouters = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const router = express_1.default.Router();
router.post("/crete-contact", contact_controller_1.ContactController.CreateController);
router.get("/single-contact/:id", contact_controller_1.ContactController.SingleController);
router.get("/all-contact", contact_controller_1.ContactController.AllController);
router.put("/update-contact/:id", contact_controller_1.ContactController.updateController);
router.delete("/deleted-contact/:id", contact_controller_1.ContactController.deleteController);
exports.ContactRouters = router;

import express from "express";
import {
  createContact,
  getContacts,
  deleteContact
} from "../controllers/contactControllers.js";

const router = express.Router();

router.post("/create", createContact);
router.get("/fetch", getContacts);
router.delete("/delete/:id", deleteContact);

export default router;

import { Router } from "express";
import { addNotes } from "../controllers/notes.controllers.js";
import { uploadMiddleware } from "../middlewares/multer.middleware.js";

const router = Router();


router.post("/add-notes", uploadMiddleware, addNotes);

export default router;


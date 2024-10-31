import { Router } from "express";
import { addNotes, getNotes } from "../controllers/notes.controllers.js";
import { uploadMiddleware } from "../middlewares/multer.middleware.js";

const router = Router();


router.post("/add-notes", uploadMiddleware, addNotes);
router.get("/get-notes/:branch", getNotes);
export default router;


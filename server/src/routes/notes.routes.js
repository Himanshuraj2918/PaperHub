import { Router } from "express";
import { addNotes } from "../controllers/notes.controllers";
import { upload } from "../middlewares/multer";

const router = Router();


router.route("/add-notes").post(
    upload.single("file"),
    addNotes
)


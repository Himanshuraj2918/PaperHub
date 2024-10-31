import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin:"*",
    })
)

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))

import notesRouter from "./routes/notes.routes.js"

app.use('/api/v1/notes',notesRouter)

export default app;
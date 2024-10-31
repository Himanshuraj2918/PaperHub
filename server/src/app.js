import express from "express";
import cors from "cors";
import path, { dirname } from "path";
const app = express();

const _dirname = path.resolve();

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

app.use(express.static(path.join(_dirname,"/client/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
})

export default app;
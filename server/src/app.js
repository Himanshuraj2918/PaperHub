import express from "express";
import cors from "cors";
import path from "path";
const app = express();

const _dirname = path.resolve();

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from "public" folder with a "/public" prefix
app.use('/public', express.static(path.join(_dirname, "public")));

// Serve static files from "client/dist" folder at the root level
app.use(express.static(path.join(_dirname, "client/dist")));

// Import routes
import notesRouter from "./routes/notes.routes.js";
app.use('/api/v1/notes', notesRouter);

// Serve index.html for any other routes (client-side routing)
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
});

export default app;

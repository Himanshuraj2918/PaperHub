import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure the temp directory exists
const tempDir = path.resolve("public/temp");

if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir); // Use the resolved temp directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// File filter function
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("Only PDF files are allowed!"), false);
    }
};

const upload = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2MB limit
    },
    fileFilter
}).single("notesFile");

// Wrapper function for better error handling
const uploadMiddleware = (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({
                status: 400,
                message: "File Upload Error",
                error: {
                    code: "FILE_SIZE_EXCEEDED",
                    description: "File size should not exceed 2MB"
                }
            });
        } else if (err) {
            return res.status(400).json({
                status: 400,
                message: "File Upload Error",
                error: {
                    code: "INVALID_FILE_TYPE",
                    description: err.message
                }
            });
        }
        next();
    });
};

export { uploadMiddleware };

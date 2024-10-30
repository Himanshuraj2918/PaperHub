import { asyncHandler } from "../utils/asyncHandler.js";
import { Notes } from "../models/notes.models.js";
import {
    uploadOnCloudinary,
    deleteFromCloudinary,
  } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const addNotes = asyncHandler(async(req,res)=>{
    const {subjectName, subjectCode, year, department, semester, description} = req.body;

    // Validate required fields
    if ([subjectName, subjectCode, year, department, semester, description]
        .some((field) => field?.trim() === "")) {
        return res.status(400).json({
            status: 400,
            message: "Validation Error",
            error: {
                code: "MISSING_FIELDS",
                description: "All fields are required"
            }
        });
    }

    // File should exist because multer middleware already validated it
    const filePath = req.file?.path;
    const file = await uploadOnCloudinary(filePath);
    
    if(!file) {
        return res.status(400).json({
            status: 400,
            message: "File Upload Error",
            error: {
                code: "CLOUDINARY_UPLOAD_FAILED",
                description: "Failed to upload file to cloud storage"
            }
        });
    }

    const note = await Notes.create({
        subjectName,
        subjectCode,
        year,
        department,
        semester,
        description,
        file: file.url
    });

    return res
        .status(200)
        .json(new ApiResponse(200, note, "File uploaded successfully"));
});

export {addNotes}
import { asyncHandler } from "../utils/asyncHandler";
import { Notes } from "../models/notes.models";
import {
    uploadOnCloudinary,
    deleteFromCloudinary,
  } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const addNotes = asyncHandler(async(req,res)=>{
    
    const {subjectName,subjectCode,department,semester} = req.body;

    if (
        [subjectName,subjectCode,department,semester].some((field) => field?.trim() == "")
      ) {
        return res.status(400).json({
            status: 400,
            message: "Validation Error",
            error: {
                code: "MISSING_FIELDS",
                description: "Some field value is not passed."
            }
        })
      }

  const filePath = req.files?.file?.path;
  if (!filePath) 
    return res.status(400).json({
        status: 400,
        message: "File Upload Error",
        error: {
            code: "FILE_UPLOAD",
            description: "A proper file is required."
        }
    })

    const file = await uploadOnCloudinary(filePath);
    if(!file) return res.status(400).json({
        status: 400,
        message: "File Upload Error",
        error: {
            code: "FILE_UPLOAD",
            description: "A proper file is required."
        }
    })

    const note = await Notes.create({
        subjectName,
        subjectCode,
        department,
        semester,
        file:file.url
    })

    if(!note) 
        return res.status(500).json({
            status: 500,
            message: "Server Error",
            error: {
                code: "SERVER_ERROR",
                description: "Error on database."
            }
        })

    return res
    .status(200)
    .json(new ApiResponse(200,note,"File uploaded sucessfully."))
})

export {addNotes}
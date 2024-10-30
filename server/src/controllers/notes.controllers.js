import { asyncHandler } from "../utils/asyncHandler";
import { Notes } from "../models/notes.models";
import {
    uploadOnCloudinary,
    deleteFromCloudinary,
  } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const addNotes = asyncHandler(async(req,res)=>{

})

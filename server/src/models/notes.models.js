import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema({
    subjectName: {
        type: String,
        required: [true, 'Subject Name is required.']
    },
    subjectCode: {
        type: String,
        required: [true, 'Subject Code is required.']
    },
    year: {
        type: String,
        required: [true, 'Year is required.']
    },
    department: {
        type: String,
        enum: ["Computer", "Electrical", "Mechanical", "Civil", "Biomedical"],
        required: [true, 'Department is required.']
    },
    semester: {
        type: String,
        enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
        required: [true, 'Semester is required.']
    },
    description: {
        type: String,
        required: [true, 'Some small description for files']
    },
    file: {
        type: String,
        required: [true, 'File is required.']
    }
},
{
    timestamps: true
});

export const Notes = mongoose.model('Notes', notesSchema);

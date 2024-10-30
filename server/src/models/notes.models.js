import mongoose,{Schema} from "mongoose";

const notesSchema = new Schema({
    title:{
        type:String,
        required:[true,'Subject Name is required.']
    },
    code:{
       type:Number,
       required:[true,'Subject Code is required.']
    },
    year:{
        type:String,
        required:[true,'Year is required.']
    },
    department:{
        enum:["Computer","Electrical","Mechanical","Civil","Biomedical"],
        required:[true,'Department is required.']
    },
    semester:{
        enum:["1","2","3","4","5","6","7","8"],
        required:[true,'Semester is required.']
    },
    file:{
      type:String,
      required:[true,'File is required.']
    }

},
{    
    timestamps:true
})


export const Notes = mongoose.model('Notes',notesSchema);   
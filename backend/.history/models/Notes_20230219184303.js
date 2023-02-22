const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoteSchema = new Schema({

    user:{

    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        deafult:"General"
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.export = mongoose.model("notes",NoteSchema) 
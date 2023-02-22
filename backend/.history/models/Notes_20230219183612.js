const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoteSchema = new Schema({

    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true,
    },
    tag:{
        type:string,
        deafult:"General"
    },
    date:{
        type:date,
        default:Date.now
    }
})

module.export = mongoose.model("notes",NoteSchema) 
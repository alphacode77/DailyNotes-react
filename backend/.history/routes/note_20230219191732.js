const express = require("express")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");

//Route 1: Fetching notes of exisiting user by GET "api/note/fechallnotes" - login needed
try{
router.get("/fetchallnotes",fetchuser,async (req,res)=>{
    const notes = await Notes.find({user: req.user.id})
    res.json(notes)
})
}
catch(error){
    console.error(error.message)
    res.status(500).send("Internal Server Error")
}



//Route 2: Add a new notes using post "api/note/addnote". login needed
router.post("/addnote",fetchuser,[
    body('title', 'Minimum length of title is 8 Character').isLength({ min: 8 }),
    body('description','Minimum length of Desc is 15 Character').isLength({ min: 15 }),
], async (req,res)=>{
try{
    const{title,description,tag}=req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Notes({
        title,description,tag, user:req.user.id
    })
    const saveNote = await note.save()
    res.json(saveNote)
}
catch(error){
    console.error(error.message)
    res.status(500).send("Internal Server Error")
}
})
module.exports = router
const express = require("express")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");

router.get("/fetchallnotes",fetchuser,async (req,res)=>{
    const notes = await Notes.find({user: req.user.id})
    res.json(notes)
})


//Route 2: Add a new notes using GET "api/note/addnote". login needed
router.get("/addnote",fetchuser,[
    body('title', 'Minimum length of title is 8 Character').isLength({ min: 8 }),
    body('description','Minimum length of Desc is 15 Character').isLength({ min: 15 }),
], async (req,res)=>{
try{
    const{title,description,tag}=req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Note({
        title,description,tag, user:req.user.id
    })
    const saveNote = await note.save()
    res.json(saveNote)
}
catch(error){
    console.error({error: message})
    res.json("Internal Server Error")
}
})
module.exports = router
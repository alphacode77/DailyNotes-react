const express = require("express")
const router = express.Router();
const User = require("../models/User")
const { Schema } = mongoose;

router.get("/",(req,res)=>{
    console.log(req.body); 
    res.send(req.body)
    // res.send("hi sde1")
    const user = User(req.body)
    user.save()
})

module.exports = router
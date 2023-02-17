const express = require("express")
const router = express.Router();
const user = require("../models/User")

router.get("/",(req,res)=>{
    console.log(req.body); 
    // res.send("hi sde1")
    const user = user(req.body);
    user.save();
    res.send(req.body);
})

module.exports = router
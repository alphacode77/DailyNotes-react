const express = require("express")
const router = express.Router();
const UserSchema = require("../models/User")

router.post("/",(req,res)=>{
    console.log(req.body); 
    // res.send("hi sde1")
    const user = UserSchema(req.body);
    user.save();
    res.send(req.body);

})

module.exports = router
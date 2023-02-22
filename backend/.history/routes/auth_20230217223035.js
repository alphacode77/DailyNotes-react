const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {body,validationResult} = require("express-validator");

router.post("/",[body("name").isLength({min:3}),
body("email").isEmail(),
body("password").isLength({min:3})],
(req,res)=>{
    // console.log(req.body); 
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    res.send(req.body);

})

module.exports = router
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {body,validationResult} = require("express-validator");

router.post("/",[body("name","Enter a valid Name").isLength({min:3}),
body("email","Enter a valid Email").isEmail(),
body("password","Minimum 5 characters").isLength({min:5})],
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
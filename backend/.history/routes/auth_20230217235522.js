const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {body,validationResult} = require("express-validator");

// Create a User using: POST "/api/auth/createuser". No login required
router.post("/createuser",
[body("name","Enter a valid Name").isLength({min:3}),
body("email","Enter a valid Email").isEmail(),
body("password","Minimum five characters").isLength({min:5})], async
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
// Check whether the user with this email exists already
    try{
     let user= await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry Already User Exist"})
    }
     // Create a new user
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    res.json(user)
}
catch(error){
    console.error(error.message);
    res.status(500).send("some error occured");
}
})

module.exports = router
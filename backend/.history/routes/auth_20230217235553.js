const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {body,validationResult} = require("express-validator");

router.post("/createuser",
[body("name","Enter a valid Name").isLength({min:3}),
body("email","Enter a valid Email").isEmail(),
body("password","Minimum five characters").isLength({min:5})], async
(req, res) => {
    // console.log(req.body); 
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    try{
     let user= await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry Already User Exist"})
    }
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    // .then(user=>res.json(user))
    // .catch(error=>res.json({error:"please enter a valid Mail id"}));
    res.json(user)
}
catch(error){
    console.error(error.message);
    res.status(500).send("some error occured");
}
})

module.exports = router
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const JWT_secert = "Suraj$0099";
const fetchuser = require("../middleware/fetchuser")


//Route1:  Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Check whether the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    // Create a new user
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password,salt)
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    })
    const data = {
      user:{
        id:user.id
      }
    }
    const authToken = jwt.sign(data,JWT_secert) 
    res.json(authToken)
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
})


// Route2: Authunticating user using: POST "/api/auth/login".
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const {email,password} = req.body
try{
  let user = await User.findOne({email})
  if(!user){
    return res.status(400).json({ error: "Please login with correct credentials"})
  }
const passwordCompare = await bcrypt.compare(password,user.password)
if(!passwordCompare){
  return res.status(400).json({ error: "Please login with correct credentials"})
}

const data = {
  user:{
    id:user.id
  }
}
const authToken = jwt.sign(data,JWT_secert) 
res.json(authToken)

}
catch(error){
console.error(error.message);
res.status(500).send("Internal Server Error");
}
})

//Route3: Getting user login details using : Post "api/auth/getuser" login required
router.post('/getuser', fetchuser, async (req, res) => {
try {
  userId = "todo"
  const user = await user.findById(userId).select("-password")
  
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}

})


module.exports = router
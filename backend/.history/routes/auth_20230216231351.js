const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    console.log(req.body);
    res.json(obj)
})

module.exports = router
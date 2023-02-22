var jwt = require("jsonwebtoken")
const JWT_secert = "Suraj$0099";

const fetchuser =(req,res,next)=>{
const token = req.header("auth-token")
if(!token){
    res.status(401).send({error:"authenticate using valid user"})

}
try{
const data = jwt.verify(token,JWT_secert)
req.user=data.user;
next()
}
catch(error){
    res.status(401).send({error:"authenticate using valid user"})

}
}


module.exports = fetchuser;
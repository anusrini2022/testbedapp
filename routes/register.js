var express=require("express");
const session = require("express-session");
var router=express.Router();

router.post("/",function(req,res){
var  users=[] ;
var myusername="Varadha" ;
var mypassword="Varadha1234";
var username=req.body.uname;
var password=req.body.password;
console.log(username);
console.log(password);
var sess;
if(username==myusername&& password==mypassword)
{

 sess=req.session;
req.session.userid=username;
console.log(req.session.userid);
if(req.session.userid)
{
res.render("index") ;   
}

else
{
    
    res.redirect("/login");
}

}
else{
res.send("Invalid Username");
}
//res.send("indexpage");
})
module.exports=router;

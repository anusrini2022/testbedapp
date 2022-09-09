var express=require("express");
var router=express.Router();


router.get("/",function(req,res){
  if(req.session.userid)
  {
    res.redirect("/index");
  }
  else
res.render("login");

})


router.post("/login",function(req,res){
var  users=[] ;
var myusername="lava" ;
var mypassword="hhk9j8f48gkhlk4kjljj7dg66jhkhkkd";
var username=req.body.uname;
var password=req.body.password;
var sess;
if(username==myusername&& password==mypassword)
{

sess=req.session;
//storing the username inside the variable in session.userid
req.session.userid=username;
if(req.session.userid)
{
res.render("index");
}
//if user is not logged in redircet to login page
else
{
  res.redirect("/login");
}
}
else{
res.send("Invalid Username");
}

})
module.exports=router;

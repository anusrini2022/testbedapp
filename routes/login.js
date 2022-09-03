var express=require("express");
var router=express.Router();
// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  var d=new Date();
  console.log('Time:', d.toLocaleTimeString());
  console.log("sessionID:",req.session.id);
  if(req.sessionID)
  {
  next();
  }
  else
  {
    res.redirect("/");
  }
})


router.get("/",function(req,res){
  sess=req.session;
  res.render("login");

})
module.exports=router;

var express=require("express");
var router=express.Router();

var obj={dir:"",csp:"",msg:"",header:""};
router.get("/fontsrc",function(req,res){
res.render("csp/fontsrc",obj);
var dir=req.query["dir"];
var csp=req.query["csp"];
console.log(dir+src);
//res.send("cspfontsrcpage");
})

module.exports=router;
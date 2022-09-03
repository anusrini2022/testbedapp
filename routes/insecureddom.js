var express=require("express");
var router=express.Router();
var path=require("path");

router.get("/",function(req,res){
//res.render("insecur");
res.sendFile(path.join(__dirname,"../insecuredom/clientxss.html"));
//res.send("indexpage");
})
module.exports=router;
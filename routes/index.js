var express=require("express");
const index = require("../index");
var router=express.Router();

router.get("/",function(req,res){
res.render("index");
})


module.exports=router;
var express=require("express");
var router=express.Router();
var path=require("path");

router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../workers/index.html"))
})

router.get("/webworkers",function(req,res){
    res.sendFile(path.join(__dirname,"../workers/webworkers/webworkers.html"));
})

router.get("/sharedworkers",function(req,res){
    res.sendFile(path.join(__dirname,"../workers/webworkers/sharedworkers.html"));
})
router.get("/serviceworkers",function(req,res){
    res.sendFile(path.join(__dirname,"../serviceworker.html"));
})
router.get("/worklets",function(req,res){
    res.sendFile(path.join(__dirname,"../workers/worklets/audioworklet.html"));
})
module.exports=router;
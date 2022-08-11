var express=require("express");
var router=express.Router();
var path=require("path");

//http://localhost:3001/input
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../input/inputform.html"));
 //res.send("Input Page");
   })

   //http://localhost:3001/input/hiddeninput
router.get("/hiddeninput",function(req,res){
  res.sendFile(path.join(__dirname,"../input/hiddeninput.html"));
//res.send("Input Page");
 })

//http://localhost:3001/input/deleteinput
router.get("/deleteinput",function(req,res){
  res.sendFile(path.join(__dirname,"../input/deleteinputs.html"));
//res.send("Input Page");
 })
   module.exports=router;
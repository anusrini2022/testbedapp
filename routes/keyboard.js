var express=require("express");
var router=express.Router();
var path=require("path");

//http://localhost:3001/keyboard
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../keyboard/keyboardevnt.html"));

 //res.send("Input Page");
   })
   //http://localhost:3001/keyboard/keyboardglobal
router.get("/keyboardglobal",function(req,res){
    res.sendFile(path.join(__dirname,"../keyboard/keyboardglobal.html"));

 //res.send("Input Page");
   })

   //http://localhost:3001/keyboard/gettextvalue
router.get("/gettextvalue",function(req,res){
    res.sendFile(path.join(__dirname,"../keyboard/gettextvalue.html"));

 //res.send("Input Page");
   })
   
   module.exports=router;